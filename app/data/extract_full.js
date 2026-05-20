const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, '../products');
const dataFile = path.join(__dirname, 'products.json');

const directories = fs.readdirSync(productsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
data.details = data.details || {};

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

  // Convert JSX elements like <Zap className="..." /> to string representations
  arrayContent = arrayContent.replace(/icon:\s*<([A-Z][a-zA-Z0-9]*).*?\/>/g, 'icon: "$1"');
  arrayContent = arrayContent.replace(/icon:\s*React\.cloneElement\(.*?\)/g, 'icon: "Zap"'); // simple fallback if needed

  return arrayContent;
}

const arrayMappings = {
  whyChooseReasons: 'whyChooseReasons',
  coreModules: 'coreModules',
  advantages: 'advantages',
  pricingPlans: 'pricingPlans',
  featuresList: 'featuresList',
  servicePackages: 'servicePackages',
  clients: 'clients',
  countTrustCaseStudies: 'caseStudies',
  erpCaseStudies: 'caseStudies',
  hrmCaseStudies: 'caseStudies',
  expertisePathways: 'expertisePathways',
  countTrustFaqs: 'faqs',
  erpFaqs: 'faqs',
  hrmFaqs: 'faqs'
};

for (const dir of directories) {
  if (dir === 'products') continue; // skip the catalog folder itself
  
  const pagePath = path.join(productsDir, dir, 'page.jsx');
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf8');
    data.details[dir] = data.details[dir] || {};
    
    for (const [sourceKey, targetKey] of Object.entries(arrayMappings)) {
      const arrayStr = extractArray(content, sourceKey);
      if (arrayStr) {
        try {
          const parseJS = new Function('return ' + arrayStr);
          data.details[dir][targetKey] = parseJS();
          console.log(`Successfully extracted ${sourceKey} -> ${targetKey} for ${dir}`);
        } catch(e) {
          console.error(`Failed to parse ${sourceKey} in ${dir}`, e);
        }
      }
    }
  }
}

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');
console.log('Full extraction and migration complete!');
