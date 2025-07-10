const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const PROJECTS_PATH = path.join(__dirname, '../src/data/github-projects.json');
const OUT_PATH = path.join(__dirname, '../src/data/github-readmes.json');
const IMAGES_BASE = path.join(__dirname, '../public/github-readme-images');

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getImageUrls(markdown, repo) {
  // Match Markdown images ![alt](url) and HTML <img src="url">
  const mdImgRegex = /!\[[^\]]*\]\(([^)]+)\)/g;
  const htmlImgRegex = /<img[^>]+src=["']([^"'>]+)["'][^>]*>/g;
  let urls = [];
  let match;
  while ((match = mdImgRegex.exec(markdown))) {
    urls.push(match[1]);
  }
  while ((match = htmlImgRegex.exec(markdown))) {
    urls.push(match[1]);
  }
  // Remove duplicates
  return [...new Set(urls)];
}

async function downloadImage(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch image: ${url}`);
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.startsWith('image/')) {
      console.warn(`Skipped non-image content: ${url} (content-type: ${contentType})`);
      return false;
    }
    const buffer = await res.buffer();
    fs.writeFileSync(dest, buffer);
    return true;
  } catch (e) {
    console.warn(`Could not download image: ${url} -> ${dest}`);
    return false;
  }
}

function resolveImageUrl(url, owner, repo) {
  // If relative, resolve to raw.githubusercontent.com
  if (/^(https?:)?\/\//.test(url)) {
    // Convert GitHub blob URLs to raw URLs
    const blobMatch = url.match(
      /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)$/
    );
    if (blobMatch) {
      const [, blobOwner, blobRepo, branch, blobPath] = blobMatch;
      return `https://raw.githubusercontent.com/${blobOwner}/${blobRepo}/${branch}/${blobPath}`;
    }
    return url;
  }
  // Remove leading './' or '/'
  url = url.replace(/^\.?\//, '');
  return `https://raw.githubusercontent.com/${owner}/${repo}/master/${url}`;
}

async function fetchReadme(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'dilipagheda-portfolio-readme-script'
  };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  let response = await fetch(url, { headers });
  if (response.status === 401 || response.status === 403) {
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
      response = await fetch(url, { headers });
    }
  }
  if (!response.ok) {
    console.warn(`No README for ${repo} (status ${response.status})`);
    return null;
  }
  const data = await response.json();
  if (!data.content) return null;
  // Decode base64
  return Buffer.from(data.content, 'base64').toString('utf-8');
}

async function processReadmeImages(readme, owner, repo, projectName) {
  if (!readme) return readme;
  const imageUrls = getImageUrls(readme, repo);
  if (imageUrls.length === 0) return readme;
  const localDir = path.join(IMAGES_BASE, projectName);
  ensureDirSync(localDir);
  let updatedReadme = readme;
  for (const imgUrl of imageUrls) {
    let resolvedUrl = resolveImageUrl(imgUrl, owner, repo);
    const ext = path.extname(resolvedUrl).split('?')[0] || '.img';
    const fileName = path.basename(imgUrl).split('?')[0] || `img${Math.random().toString(36).slice(2)}`;
    const localPath = `/github-readme-images/${projectName}/${fileName}`;
    const absLocalPath = path.join(IMAGES_BASE, projectName, fileName);
    const downloaded = await downloadImage(resolvedUrl, absLocalPath);
    if (downloaded) {
      // Replace all instances of the original URL with the local path
      const regex = new RegExp(imgUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      updatedReadme = updatedReadme.replace(regex, localPath.replace(/\\/g, '/'));
    }
  }
  return updatedReadme;
}

// --- CLI argument parsing ---
const argv = process.argv.slice(2);
let onlyProject = null;
for (let i = 0; i < argv.length; ++i) {
  if (argv[i] === '--project' && argv[i + 1]) {
    onlyProject = argv[i + 1];
  }
}

async function main() {
  const projects = JSON.parse(fs.readFileSync(PROJECTS_PATH, 'utf-8'));
  const readmes = {};
  let filteredProjects = projects;
  if (onlyProject) {
    filteredProjects = projects.filter(p =>
      p.name.toLowerCase() === onlyProject.toLowerCase()
    );
    if (filteredProjects.length === 0) {
      console.error(`No project found with name: ${onlyProject}`);
      process.exit(1);
    }
  }
  for (const project of filteredProjects) {
    const name = project.name;
    const owner = project.owner.login;
    process.stdout.write(`Fetching README for ${name}... `);
    const readme = await fetchReadme(owner, name);
    if (readme) {
      const processedReadme = await processReadmeImages(readme, owner, name, name);
      readmes[name] = processedReadme;
      console.log('OK');
    } else {
      console.log('Not found');
    }
  }
  fs.writeFileSync(OUT_PATH, JSON.stringify(readmes, null, 2));
  console.log(`Wrote ${Object.keys(readmes).length} READMEs to ${OUT_PATH}`);
}

main().catch(err => {
  console.error('Failed to refresh GitHub READMEs:', err);
  process.exit(1);
}); 