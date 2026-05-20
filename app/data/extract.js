const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, '../products');
const dataFile = path.join(__dirname, 'products.json');

const directories = fs.readdirSync(productsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
data.details = data.details || {};

// We will just do a simple regex match to extract the array contents.
// This is somewhat brittle but works for standard formatted files.

function extractArray(content, arrayName) {
  const startRegex = new RegExp(`const ${arrayName}\\s*=\\s*\\[`);
  const match = content.match(startRegex);
  if (!match) return null;

  let startIndex = match.index + match[0].length - 1;
  let bracketCount = 0;
  let endIndex = -1;

  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === '[') bracketCount++;
    if (content[i] === ']') bracketCount--;
    
    if (bracketCount === 0) {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) return null;

  let arrayContent = content.substring(startIndex, endIndex + 1);

  // We need to convert JSX elements like <Zap className="..." /> to string representations
  // e.g. icon: <Zap className="..." /> -> icon: "Zap"
  // e.g. icon: <Network className="w-6 h-6" /> -> icon: "Network"
  arrayContent = arrayContent.replace(/icon:\s*<([A-Z][a-zA-Z0-9]*).*?\/>/g, 'icon: "$1"');
  // Handle case where React.cloneElement is used, e.g. `icon: <Network ... />` might not be the case in array but who knows.
  
  // Actually, some icons are JSX: `icon: <Users className="w-6 h-6" />`
  // We need to convert this to JSON. 
  // It's safer to use eval or Function constructor if we mock React.
  
  return arrayContent;
}

for (const dir of directories) {
  const pagePath = path.join(productsDir, dir, 'page.jsx');
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf8');
    
    let whyChooseStr = extractArray(content, 'whyChooseReasons');
    let coreModulesStr = extractArray(content, 'coreModules');
    
    if (whyChooseStr || coreModulesStr) {
       data.details[dir] = {};
       
       if (whyChooseStr) {
           // To parse it as JS, we wrap it in a function
           // First remove trailing commas before parsing if needed, but JS handles it.
           try {
              const parseJS = new Function('return ' + whyChooseStr);
              data.details[dir].whyChooseReasons = parseJS();
           } catch(e) {
              console.error(`Failed to parse whyChooseReasons in ${dir}`, e);
           }
       }
       if (coreModulesStr) {
           try {
              const parseJS = new Function('return ' + coreModulesStr);
              data.details[dir].coreModules = parseJS();
           } catch(e) {
              console.error(`Failed to parse coreModules in ${dir}`, e);
           }
       }
    }
  }
}

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');
console.log('Extraction complete.');
