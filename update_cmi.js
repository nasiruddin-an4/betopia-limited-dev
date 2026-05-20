const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/data/industries.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

data['cmi'] = {
  title: "Communications, Media and Information Services",
  hero: {
    breadcrumb: "INDUSTRIES > COMMUNICATIONS, MEDIA & INFORMATION SERVICES",
    title1: "Defining the Future of",
    titleHighlight: "Connected",
    title2: "Experiences",
    description: "At Betopia Limited, we help Communication, Media and Information Services organizations deliver hyper-personalized experiences, optimize operations across content, network and customer touchpoints, and unlock new revenue streams with AI-powered innovation.",
    features: [
      { icon: "Users", text: "Personalized Experiences" },
      { icon: "LineChart", text: "Real-time Analytics" },
      { icon: "Brain", text: "Content Intelligence" },
      { icon: "Network", text: "Network Optimization" },
      { icon: "ShieldCheck", text: "Fraud & Security" },
      { icon: "TrendingUp", text: "Ad Revenue Growth" }
    ],
    image: "/bankCoverImg/Communications,-Media,-and-Information-Services.png"
  },
  intro: {
    title1: "How Betopia is transforming",
    titleHighlight: "Communications, Media and Information Services",
    title2: "through AI-driven solutions.",
    description: "From content creation to customer engagement and network operations, we help organizations modernize their value chain with intelligent automation, advanced analytics and data-driven decision-making.",
    tags: ["AI & Automation", "Predictive Analytics", "Network Intelligence", "Content Intelligence", "Cyber Security"]
  },
  approach: {
    title: "Designed for",
    titleHighlight: "Communications, Media and Information Services",
    cards: [
      {
        title: "Immersive User Experiences",
        description: "Deliver personalized, cross-channel experiences that drive engagement, loyalty and lifetime value.",
        bullets: ["360° customer view", "Personalized content & recommendations", "Real-time engagement orchestration", "Experience journey analytics"],
        image: ""
      },
      {
        title: "Intelligent Operations",
        description: "Automate and optimize complex operations across networks, content supply chain and customer service.",
        bullets: ["AIOps for network & IT operations", "Workflow automation & NLP", "Predictive capacity planning", "Automated content moderation"],
        image: ""
      },
      {
        title: "New Revenue Opportunities",
        description: "Monetize data, optimize ad performance and launch innovative digital services with confidence.",
        bullets: ["Ad tech & programmatic optimization", "Dynamic pricing & bundling", "Churn prediction & retention", "Data monetization & partnerships"],
        image: ""
      }
    ]
  },
  valueChain: {
    title: "OUR IMPACT ACROSS THE VALUE CHAIN",
    steps: ["Content Creation", "Content Delivery", "Customer Engagement", "Monetization", "Service & Support", "Network & IT Ops"],
    cards: [
      { icon: "Video", title: "Content Creation", description: "AI-assisted creation, tagging & localization" },
      { icon: "UploadCloud", title: "Content Delivery", description: "Adaptive streaming & CDN optimization" },
      { icon: "Users", title: "Customer Engagement", description: "Personalization across touchpoints" },
      { icon: "DollarSign", title: "Monetization", description: "Smarter ads, offers & subscriptions" },
      { icon: "Headphones", title: "Service & Support", description: "AI chatbots, self-service & case automation" },
      { icon: "Server", title: "Network & IT Ops", description: "Predictive monitoring & incident resolution" }
    ]
  },
  challenges: {
    title1: "Challenges are evolving.",
    title2: "We help you",
    titleHighlight: "stay ahead.",
    items: [
      { icon: "Files", title: "Content Overload", description: "High volumes, more formats and shorter attention spans." },
      { icon: "Network", title: "Network Complexity", description: "5G, edge & multi-cloud increase operational complexity." },
      { icon: "TrendingUp", title: "Rising Customer Expectations", description: "Demand for seamless, personalized and instant experiences." },
      { icon: "ShieldAlert", title: "Cyber Threats & Fraud", description: "Evolving attacks, account takeover and ad fraud risks." },
      { icon: "DollarSign", title: "Monetization Pressure", description: "Ad blockers, price sensitivity and intense competition." },
      { icon: "Database", title: "Data Growth", description: "Increasing data volumes require real-time insights and governance." }
    ],
    advantageTitle: "The Betopia Advantage",
    advantageItems: [
      "AI-first solutions, tailored to your ecosystem",
      "Real-time insights for faster decisions",
      "Scalable, secure and future-ready platforms",
      "End-to-end automation for efficiency",
      "Proven impact across media & telecom"
    ]
  },
  metrics: {
    title: "REAL IMPACT. MEASURABLE RESULTS.",
    items: [
      { icon: "TrendingUp", value: "25-35%", label: "Increase in Content Engagement" },
      { icon: "TrendingDown", value: "20-30%", label: "Reduction in Network Downtime" },
      { icon: "Activity", value: "15-25%", label: "Increase in ARPU & Subscription Growth" },
      { icon: "ArrowDownToLine", value: "30-40%", label: "Reduction in Customer Churn" },
      { icon: "BarChart", value: "25-35%", label: "Improvement in Ad Revenue Performance" },
      { icon: "Zap", value: "40%+", label: "Faster Decision-making with Real-time Analytics" }
    ]
  },
  cta: {
    subtitle: "LET'S BUILD THE FUTURE TOGETHER",
    title1: "Ready to transform your",
    titleHighlight: "Communications, Media and Information Services",
    title2: "operations?",
    description: "Partner with Betopia Limited to unlock the power of AI, enhance customer experiences and build sustainable growth.",
    benefitsTitle: "What you'll gain working with us",
    benefits: [
      "AI-powered automation tailored to your workflows",
      "Real-time insights across content, customers & networks",
      "Enterprise-grade security and compliance",
      "Global delivery with 24/7 expert support"
    ]
  },
  trustedBy: [
    "/trusted/viacom18.png",
    "/trusted/airtel.png",
    "/trusted/vodafone.png",
    "/trusted/disney-hotstar.png",
    "/trusted/comcast.png",
    "/trusted/bbc.png",
    "/trusted/amazon.png",
    "/trusted/ericsson.png"
  ]
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('CMI data updated successfully!');
