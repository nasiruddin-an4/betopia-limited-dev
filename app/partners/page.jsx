import FindPartner from "../components/FindPartner";

export const metadata = {
  title: "Find a Partner | Betopia Limited",
  description:
    "Browse and find certified Betopia implementation partners based on your industry, location and requirements.",
  alternates: {
    canonical: "https://www.betopialimited.com/partners",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PartnersPage() {
  return (
    <main>
      <FindPartner />
    </main>
  );
}
