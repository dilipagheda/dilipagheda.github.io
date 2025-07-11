const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const pdfPath = path.join(__dirname, '../src/data/Dilip Agheda Resume 2024.pdf');
const outputPath = path.join(__dirname, '../src/data/comprehensive-resume.json');

async function extractPdfToJson() {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);

  // Split by form feed (\f) for pages
  const pages = data.text.split('\f').map((content, idx) => ({
    number: idx + 1,
    content: content.trim()
  })).filter(page => page.content.length > 0);

  fs.writeFileSync(outputPath, JSON.stringify({ pages }, null, 2), 'utf-8');
  console.log(`Extracted ${pages.length} pages to ${outputPath}`);
}

extractPdfToJson().catch(err => {
  console.error('Failed to extract PDF:', err);
  process.exit(1);
}); 