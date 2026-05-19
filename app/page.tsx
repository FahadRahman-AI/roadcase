import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { ProductReveal } from "@/components/ProductReveal";
import { Portability } from "@/components/Portability";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <ProductReveal />
        <Portability />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
