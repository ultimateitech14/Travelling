const fs = require('fs');
const html = fs.readFileSync('scratch/bir_live.html', 'utf8');

const styleMatches = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
console.log('Total style blocks:', styleMatches.length);
styleMatches.forEach((m, i) => {
  fs.writeFileSync(`scratch/style_${i}.css`, m[1]);
  console.log(`Wrote scratch/style_${i}.css, length:`, m[1].length);
});
