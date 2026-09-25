const fs = require('fs');
const html = fs.readFileSync('scratch/bir_live.html', 'utf8');

const regex = /<section\s+id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/section>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('Section:', match[1], 'Length:', match[2].length);
}
