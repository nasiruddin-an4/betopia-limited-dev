const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/components/IndustryPageLayout.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix valueChain.steps to be optional in the map
content = content.replace(
  /\{valueChain\.steps\.map/g,
  '{valueChain.steps && valueChain.steps.map'
);

// Add successStories extraction
content = content.replace(
  /const trustedBy = data\.trustedBy;/g,
  'const trustedBy = data.trustedBy;\n  const successStories = data.successStories;'
);

// Add successStories section before trustedBy
const successStoriesJSX = `
      {/* SUCCESS STORIES (White) - Only render if exists */}
      {successStories && (
        <section className="bg-gray-50 py-20 md:py-24 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <ScrollReveal>
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand-bright-orange mb-4 block">
                  {successStories.subtitle || "SUCCESS STORIES"}
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                  {successStories.title || "Impact That Drives Real Results"}
                </h2>
              </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successStories.items.map((item, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      {item.logo && (
                        <div className="relative w-12 h-12 shrink-0">
                          <Image src={item.logo} alt={item.brand} fill className="object-contain" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-gray-800">{item.brand}</h4>
                        <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="mt-auto border-t border-gray-50 pt-6">
                      <div className="text-4xl font-bold text-brand-bright-orange mb-2">{item.metric}</div>
                      <div className="text-sm text-gray-600">{item.metricLabel}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
`;

content = content.replace(
  /\{\/\* 8\. TRUSTED BY SECTION/g,
  successStoriesJSX + '\n      {/* 8. TRUSTED BY SECTION'
);

fs.writeFileSync(filePath, content);
console.log('Layout updated for CPG layout tweaks!');
