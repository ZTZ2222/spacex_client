import Business from "@/components/Business";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import OurPartners from "@/components/OurPartners";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Business />
      <Testimonials />
      <OurPartners />
      <CTA />
    </main>
  );
}
