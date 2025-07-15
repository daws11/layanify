export const metadata = {
  title: "Layanify - AI-Powered Customer Service",
  description: "Agent Customer Support Berbasis AI yang selalu tersedia 24/7, Menjawab chat dengan cepat & akurat dengan biaya yang sangat terjangkau",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
