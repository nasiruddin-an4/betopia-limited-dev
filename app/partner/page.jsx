import PartnerHero from "../components/PartnerHero";
import ConsultingParadox from "../components/ConsultingParadox";
import PartnerBenefits from "../components/PartnerBenefits";
import BetopiaComparison from "../components/BetopiaComparison";
import CompetencyMap from "../components/CompetencyMap";
import PartnerImpact from "../components/PartnerImpact";
import GrowthJourney from "../components/GrowthJourney";
import PartnershipDynamics from "../components/PartnershipDynamics";
import PartnerAdvantage from "../components/PartnerAdvantage";
import VisionForward from "../components/VisionForward";
import PartnerSteps from "../components/PartnerSteps";
import PartnerOptions from "../components/PartnerOptions";
import WhyPartner from "../components/WhyPartner";
import PartnerTestimonials from "../components/PartnerTestimonials";
import PartnerFaq from "../components/PartnerFaq";
import PartnerCta from "../components/PartnerCta";
import PartnerPortal from "../components/PartnerPortal";

export const metadata = {
  title: "Strategic Offshore Delivery Partner for AI, ERP & Cloud Solutions",
  description:
    "Partner with a trusted offshore IT delivery partner. White-label AI, ERP & Cloud engineering teams for US agencies. Scale faster, protect margins and deliver enterprise-grade solutions with zero execution risk.",
  alternates: {
    canonical: "https://www.betopialimited.com/partner",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "offshore IT delivery partner",
    "white-label software development partner",
    "offshore partner for US IT agency",
    "AI development outsourcing partner",
    "ERP implementation offshore partner",
    "cloud infrastructure partner for agencies",
    "IT staff augmentation partner",
    "software engineering partner for consulting firms",
    "managed offshore teams for US companies",
    "Betopia Limited partner program",
  ],
  openGraph: {
    title: "Strategic Offshore Delivery Partner for AI, ERP & Cloud Solutions",
    description:
      "White-label AI, ERP & Cloud engineering teams for US IT agencies. Scale delivery, protect margins and execute enterprise projects with confidence.",
    url: "https://www.betopialimited.com/partner",
    siteName: "Betopia Limited",
    images: [
      {
        url: "https://www.betopialimited.com/images/offshore-delivery-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Betopia Limited - Strategic Offshore Delivery Partner",
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
};

export default function PartnerPage() {
  return (
    <main>
      <PartnerHero />
      {/* <PartnerImpact /> */}

      <GrowthJourney />

      <PartnerAdvantage />
      <PartnershipDynamics />
      <CompetencyMap />
      <PartnerPortal />
      <VisionForward />
      <PartnerSteps />
      {/* <PartnerOptions /> */}
      {/* <ConsultingParadox /> */}
      {/* <PartnerBenefits /> */}
      {/* <BetopiaComparison /> */}
      {/* <WhyPartner /> */}
      <PartnerTestimonials />
      <PartnerFaq />
      <PartnerCta />
    </main>
  );
}
