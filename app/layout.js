import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AskAiSummary from "./components/AskAiSummary";

export const metadata = {
  title:
    "Betopia Limited — Enterprise AI, Cloud & Digital Transformation Partner",
  description:
    "Betopia Limited is a global enterprise technology company delivering AI, cloud, ERP and cybersecurity solutions to 300+ organizations across healthcare, BFSI, manufacturing and technology sectors.",
  alternates: {
    canonical: "https://www.betopialimited.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "enterprise AI, cloud & digital transformation partner",
    "white-label software development partner",
    "offshore partner for US IT agency",
    "AI development outsourcing partner",
    "ERP implementation offshore team",
    "cloud migration offshore partner",
    "strategic outsourcing partner for agencies",
    "offshore engineering team for IT companies",
  ],
  openGraph: {
    type: "website",
    title: "Strategic Offshore Delivery Partner for AI, ERP & Cloud Solutions",
    description:
      "White-label AI, ERP & Cloud engineering teams for US IT agencies. Scale delivery, protect margins and execute enterprise projects with confidence.",
    url: "https://www.betopialimited.com",
    siteName: "Betopia Limited",
    images: [
      {
        url: "https://www.betopialimited.com/images/offshore-delivery-banner.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Offshore Delivery Partner for AI, ERP & Cloud Solutions",
    description:
      "Trusted offshore IT delivery partner for AI, ERP & Cloud solutions. Built for US agencies scaling enterprise projects.",
    images: [
      "https://www.betopialimited.com/images/offshore-delivery-banner.jpg",
    ],
  },
  authors: [{ name: "Betopia Limited" }],
  creator: "Betopia Limited",
  publisher: "Betopia Limited",
  formatDetection: {
    email: "[EMAIL_ADDRESS]",
    address:
      "Lotus Kamal Tower-2, Level 6, 59 & 61 Gulshan South Avenue, Gulshan-1, Dhaka-1212",
    telephone: "+8801321231828",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* <AskAiSummary /> */}
        <BackToTop />
      </body>
    </html>
  );
}
