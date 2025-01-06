import { PreLoader } from "@/components";
import { Hero, About, CallToAction } from "@/sections";
export default function Home() {
  return (
    <>
      <PreLoader />
      <main>
        <Hero />
        <About />
        <CallToAction />
      </main>
    </>
  );
}
