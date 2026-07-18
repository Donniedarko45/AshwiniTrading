import fs from 'fs';

const filePath = 'c:/Users/karti/computer_science/AshwiniTrading/ATA_WEBSITE_-_FINAL_DRAFT_-_sourabh.md';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

lines.forEach((line, index) => {
  if (line.toLowerCase().includes('admin') || line.toLowerCase().includes('enquir')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
