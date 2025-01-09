import { BlurOut } from "@/components/animation";
import { Hero, About, CallToAction, Footer, Headline } from "@/sections";
export default function Home() {
  return (
    <>
      <main>
        <BlurOut>
          <Hero />
          <About />
          <CallToAction />
          <Headline />
          <Footer />
        </BlurOut>
      </main>
    </>
  );
}
