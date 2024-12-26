import { Hero, Headline, CallToAction, Footer, Header } from "@/sections";
import About from "@/sections/About";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Headline />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
