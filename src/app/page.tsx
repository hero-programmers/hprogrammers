import { PreLoader } from "@/components";
import { Hero, About, CallToAction, Footer, Headline } from "@/sections";
export default function Home() {
  return (
    <>
      <PreLoader />
      <main>
        <Hero />
        <About />
        <CallToAction />
        <Headline />
        <Footer />
      </main>
    </>
  );
}
