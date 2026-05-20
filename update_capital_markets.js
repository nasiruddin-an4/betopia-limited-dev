const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/data/industries.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

data['capital-markets'] = {
  title: "Capital Markets",
  hero: {
    breadcrumb: "INDUSTRIES > CAPITAL MARKETS",
    title1: "Reimagining Financial Ecosystems for the",
    titleHighlight: "Digital Age",
    description: "At Betopia Limited, we empower capital markets firms with intelligent, data-driven solutions. From real-time market intelligence and algorithmic trading to risk management and regulatory compliance - our AI technologies help you make smarter investment decisions, mitigate risk, and unlock new growth opportunities in a rapidly evolving financial landscape.",
    features: [
      { icon: "Brain", text: "Market Intelligence" },
      { icon: "Cpu", text: "Algorithmic Trading" },
      { icon: "ShieldCheck", text: "Risk Management" },
      { icon: "FileText", text: "Regulatory Compliance" },
      { icon: "TrendingUp", text: "Portfolio Optimization" },
      { icon: "Search", text: "Fraud Detection" }
    ],
    image: "/bankCoverImg/Capital-Markets.png"
  },
  intro: {
    title1: "How Betopia is transforming",
    titleHighlight: "Capital Markets",
    title2: "through AI-driven solutions.",
    description: "We partner with investment banks, brokerages, asset managers, and exchanges to deliver cutting-edge AI solutions that drive efficiency, enhance decision-making, and create superior outcomes across the capital markets value chain.",
    tags: ["# AI & Automation", "Predictive Analytics", "Risk Management", "RegTech", "Market Intelligence", "Data Security"]
  },
  approach: {
    title: "Designed for",
    titleHighlight: "Capital Markets",
    cards: [
      {
        title: "Intelligence for Smarter Decisions",
        description: "Harness AI and advanced analytics to turn vast amounts of market and alternative data into actionable insights.",
        bullets: ["Real-time market data analytics", "Sentiment & news analytics", "Economic indicator forecasting", "Event-driven strategy insights"],
        image: "/bankCoverImg/cm-card-1.png"
      },
      {
        title: "Risk-Aware. Future-Ready.",
        description: "AI models help identify, assess, and mitigate risk exposures in real time across portfolios and markets.",
        bullets: ["Credit & counterparty risk", "Market & liquidity risk", "Stress testing & scenario analysis", "Anomaly & fraud detection"],
        image: "/bankCoverImg/cm-card-2.png"
      },
      {
        title: "Automated. Compliant. Scalable.",
        description: "Automate complex workflows and ensure regulatory compliance with AI-powered automation and intelligent document processing.",
        bullets: ["Regulatory reporting automation", "KYC/AML & transaction monitoring", "Trade surveillance", "Policy & compliance monitoring"],
        image: "/bankCoverImg/cm-card-3.png"
      }
    ]
  },
  valueChain: {
    title: "Powering the Entire Capital Markets Value Chain",
    steps: ["Market Data Ingestion", "AI-Powered Analytics", "Strategy Development", "Trade Execution", "Risk Management", "Compliance & Reporting", "Performance Optimization"],
    cards: [
      { icon: "LineChart", title: "Predictive Analytics", description: "Forecast market trends, price movements & volatility with AI." },
      { icon: "Activity", title: "Algorithmic Trading", description: "Deploy adaptive algorithms that learn and optimize." },
      { icon: "PieChart", title: "Portfolio Optimization", description: "Maximize returns and minimize risk with ML-driven models." },
      { icon: "Database", title: "Alternative Data", description: "Incorporate news, social, satellite & ESG data for deeper insights." },
      { icon: "Monitor", title: "Real-time Risk Monitoring", description: "Continuously monitor exposures and market conditions." },
      { icon: "Shield", title: "Secure & Compliant", description: "Enterprise-grade security and regulatory compliance built-in." }
    ]
  },
  challenges: {
    title1: "Markets move fast.",
    title2: "We help you",
    titleHighlight: "stay ahead.",
    items: [
      { icon: "TrendingDown", title: "Market Volatility", description: "Rapid shifts and uncertainty impact performance." },
      { icon: "Database", title: "Data Overload", description: "Siloed and unstructured data makes insights hard to extract." },
      { icon: "FileText", title: "Rising Compliance Pressure", description: "Evolving regulations increase operational complexity." },
      { icon: "Clock", title: "Operational Inefficiency", description: "Manual processes and legacy systems slow you down." },
      { icon: "AlertTriangle", title: "Risk Exposure", description: "Hidden risks can lead to significant losses." },
      { icon: "Users", title: "Customer Expectations", description: "Investors expect real-time insights and personalization." }
    ],
    advantageTitle: "The Betopia Advantage",
    advantageItems: [
      "AI-driven insights for smarter strategies",
      "Real-time analytics & predictive signals",
      "End-to-end automation & efficiency",
      "Robust risk & compliance framework",
      "Scalable solutions built for growth",
      "Partner with experts in capital markets"
    ]
  },
  metrics: {
    title: "REAL IMPACT. MEASURABLE RESULTS.",
    items: [
      { icon: "Target", value: "20-30%", label: "Improvement in Trading Performance" },
      { icon: "TrendingDown", value: "15-25%", label: "Reduction in Operational Costs" },
      { icon: "Crosshair", value: "30-40%", label: "Better Risk Detection Accuracy" },
      { icon: "TrendingUp", value: "25%+", label: "Increase in Portfolio Returns" },
      { icon: "Zap", value: "50%+", label: "Faster Regulatory Reporting" },
      { icon: "ShieldCheck", value: "100%", label: "Real-time Compliance Monitoring" }
    ]
  },
  cta: {
    subtitle: "LET'S BUILD THE FUTURE OF FINANCE",
    title1: "Ready to transform your",
    titleHighlight: "Capital Markets",
    title2: "operations?",
    description: "Partner with Betopia Limited to unlock the power of AI, enhance decision-making, and drive sustainable growth.",
    benefitsTitle: "What you'll gain working with us",
    benefits: [
      "AI-driven solutions tailored to your business goals",
      "Real-time market insights & predictive intelligence",
      "Enterprise-grade security and compliance",
      "Global delivery with 24/7 expert support"
    ]
  },
  trustedBy: [
    "/trusted/goldman-sachs.png",
    "/trusted/jpmorgan.png",
    "/trusted/citi.png",
    "/trusted/morgan-stanley.png",
    "/trusted/nse.png",
    "/trusted/bse.png",
    "/trusted/hsbc.png",
    "/trusted/barclays.png"
  ]
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('Capital markets data updated successfully!');
