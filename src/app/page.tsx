import { BlurOut } from "@/components/animation";
import { Hero, About, CallToAction, Footer, Headline } from "@/sections";
export default function Home() {
  return (
    <>
      <BlurOut>
        <main>
          <Hero />
          <About />
          <CallToAction />
          <Headline />
          <Footer />
        </main>
      </BlurOut>
    </>
  );
}
