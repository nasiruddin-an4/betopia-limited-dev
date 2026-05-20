const fs = require('fs');

let content = fs.readFileSync('app/case-studies/data.js', 'utf8');

// We can parse it by finding each case study block, extracting its top-level image, and then updating the first section's image.
// But it's easier: since the top-level `image:` is unique per case study, we can match each case study one by one.

const caseStudiesStr = content;

// A regex to match a whole case study block from `{ id: ...` to `],`
let modifiedContent = content;

const regex = /{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"[\s\S]*?sections:\s*\[[\s]*{[\s]*title:\s*"([^"]*Overview[^"]*)"[^}]*image:\s*"([^"]+)"/g;

let match;
while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const topImage = match[2];
    const sectionTitle = match[3];
    const sectionImage = match[4];
    
    console.log(`Matched ${id}: top image = ${topImage}, overview image = ${sectionImage}`);
    
    // Replace the sectionImage with topImage
    // But we need to be careful to only replace that specific occurrence
    // Using string replacement on the whole matched block
    const fullMatch = match[0];
    const replacedMatch = fullMatch.substring(0, fullMatch.lastIndexOf(sectionImage)) + topImage + fullMatch.substring(fullMatch.lastIndexOf(sectionImage) + sectionImage.length);
    
    modifiedContent = modifiedContent.replace(fullMatch, replacedMatch);
}

fs.writeFileSync('app/case-studies/data.js', modifiedContent);
console.log('Done!');
