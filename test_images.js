const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./app/data/industries.json', 'utf8'));

for (const key of Object.keys(data)) {
  const item = data[key];
  const title = item.title || "";
  const hero = item.hero || {
    image: item.image || "/bankCoverImg/banking v2.png",
  };
  console.log(`${key}: ${hero.image}`);
}
