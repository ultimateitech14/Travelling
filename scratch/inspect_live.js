const https = require('https');
const fs = require('fs');

https.get('https://unlistd.life/bir-rajgundha-barot/', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    fs.writeFileSync('scratch/bir_live.html', d);
    console.log('Saved scratch/bir_live.html, size:', d.length);
    const m = d.match(/<h3 class="day-title">[\s\S]*?<\/h3>/g);
    console.log('Day titles found:', m);
  });
});
