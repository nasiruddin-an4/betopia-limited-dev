import glob
import re

files = glob.glob("app/solutions/**/page.jsx", recursive=True)

new_section = """      {/* HIGHLY EFFECTIVE SOLUTIONS SECTION */}
      <section className="py-10 md:py-16 bg-white relative border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="text-center mb-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-5">
                <ShieldCheck size={14} className="text-amber-600" />
                <span className="text-[11px] font-bold uppercase tracking-[4px] text-amber-600">
                  Solutions Library
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-semibold text-gray-700 mb-4 tracking-tight">
                Highly Effective Solutions
              </h2>
            </ScrollReveal>
          </div>
          
          <div className="flex flex-col gap-10">
            {solutionsList.map((sol, idx) => {
              const iconMap = {
                Shield, Activity, Globe, Lock, Network, Server, Monitor,
                Code, Cloud, Box, Database, Layers, ActivitySquare
              };
              const Icon = iconMap[sol.icon] || Shield;
              
              // Select an image based on index
              const imageOptions = [
                "/img/10001.jpeg", "/img/10002.jpeg", "/img/10003.jpeg", 
                "/img/10004.jpeg", "/img/10005.jpeg", "/img/10006.jpeg",
                "/img/10007.jpeg", "/img/10008.jpeg", "/img/10009.jpeg"
              ];
              const img_src = imageOptions[idx % imageOptions.length];

              return (
                <div key={idx} className="sticky top-32">
                  <ScrollReveal>
                    <div className="rounded-2xl p-8 lg:p-0 border border-gray-200 bg-white overflow-hidden transition-all duration-500 shadow-sm hover:shadow-lg">
                      <div className="grid lg:grid-cols-12 gap-0 items-center">
                        {/* Text Side */}
                        <div className={`lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                          <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-brand-bright-orange mb-8 shadow-sm">
                            <Icon size={28} className="text-brand-bright-orange" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-tight">
                            {sol.title}
                          </h3>
                          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                            {sol.desc}
                          </p>
                          <ul className="space-y-3">
                            {sol.bullets.map((bullet, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-brand-bright-orange mt-0.5 shrink-0" />
                                <span className="text-gray-700 text-[14px] leading-relaxed">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Image Side */}
                        <div className="lg:col-span-5 h-[450px] relative bg-gray-100">
                          <Image
                            src={img_src}
                            alt={sol.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>"""

for f in files:
    with open(f, "r") as file:
        content = file.read()
    
    # Regex to match the old section and replace it
    pattern = r'<section className="py-24 bg-gray-50 border-t border-gray-100">.*?<\/section>'
    
    new_content = re.sub(pattern, new_section, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(f, "w") as file:
            file.write(new_content)
        print(f"Updated {f}")

