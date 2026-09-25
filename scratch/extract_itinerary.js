const fs = require('fs');
const html = fs.readFileSync('scratch/bir_live.html', 'utf8');

// Find all section ids
const sections = [...html.matchAll(/<section[^>]*id=["']([^"']+)["'][^>]*>/g)].map(m => m[1]);
console.log('Sections found:', sections);

// Extract #itinerary
const itinStart = html.indexOf('id="itinerary"');
if (itinStart !== -1) {
  const itinChunk = html.substring(itinStart, itinStart + 4000);
  console.log('Itinerary start preview:\n', itinChunk);
}
