export const metadata = {
  title: "Layanify - AI-Powered Customer Service",
  description: "Agent Customer Support Berbasis AI yang selalu tersedia 24/7, Menjawab chat dengan cepat & akurat dengan biaya yang sangat terjangkau",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import PricingSection from "@/components/pricing-section";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import WhyUsSection from "@/components/why-us-section";
import FAQSection from "@/components/faq-section";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <WhyUsSection />
      <PricingSection />
      {/* <Testimonials /> */}
      <Cta />
      <FAQSection />
    </>
  );
}
