const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const GITHUB_USERNAME = 'dilipagheda';
const OUT_PATH = path.join(__dirname, '../src/data/github-projects.json');
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;

async function fetchProjects() {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'dilipagheda-portfolio-refresh-script'
  };
  if (process.env.GITHUB_TOKEN) {
    // Try Bearer first (for fine-grained tokens)
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  let response = await fetch(API_URL, { headers });
  if (response.status === 401 || response.status === 403) {
    // Try 'token' prefix if 'Bearer' fails
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
      response = await fetch(API_URL, { headers });
    }
  }
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  // Only keep relevant fields
  const projects = data.map(repo => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    watchers_count: repo.watchers_count,
    updated_at: repo.updated_at,
    html_url: repo.html_url,
    homepage: repo.homepage,
    fork: repo.fork,
    owner: { login: repo.owner.login }
  }));
  fs.writeFileSync(OUT_PATH, JSON.stringify(projects, null, 2));
  console.log(`Wrote ${projects.length} projects to ${OUT_PATH}`);
}

fetchProjects().catch(err => {
  console.error('Failed to refresh GitHub projects:', err);
  process.exit(1);
}); 