import { Hero, Headline, CallToAction, Footer, Header } from "@/sections";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Headline />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
