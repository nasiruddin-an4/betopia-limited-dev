const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'industries');
const dirs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());

const allData = {};

for (const d of dirs) {
  const file = path.join(dir, d, 'page.jsx');
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf-8');
    const match = content.match(/const\s+\w+Data\s*=\s*({[\s\S]*?});\n/);
    if (match) {
      // Need to parse the javascript object, which might not be valid JSON (unquoted keys)
      // Instead of writing a full parser, let's just evaluate it
      try {
        const obj = new Function('return ' + match[1])();
        allData[d] = obj;
      } catch (e) {
        console.error('Error parsing', d);
      }
    } else {
        console.error('No match for', d);
    }
  }
}

fs.writeFileSync(path.join(__dirname, 'app', 'data', 'industries.json'), JSON.stringify(allData, null, 2));
console.log('Done!');
