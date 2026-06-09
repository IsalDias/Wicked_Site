import Home1 from "@/components/Wicked_Components/Home1";
import Home2Client from "@/components/Home2Client";
import Figures from "@/components/Wicked_Components/figures";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Wicked Revelations | Premium Event Planning Australia & Sri Lankan Events",
  description:
    "Australia's leading event planning company specializing in Sri Lankan-themed events. Expert event planning, coordination & management for corporate gatherings, weddings, and cultural celebrations.",
};

export default function Home() {
  return (
    <>
      <Home1 />
      <Home2Client />
      <Figures />
      <Footer />
    </>
  );
}
