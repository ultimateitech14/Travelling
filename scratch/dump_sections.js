const fs = require('fs');
const html = fs.readFileSync('scratch/bir_live.html', 'utf8');

const regex = /<section\s+id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/section>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  fs.writeFileSync(`scratch/sec_${match[1]}.html`, match[2]);
  console.log(`Wrote scratch/sec_${match[1]}.html`);
}
