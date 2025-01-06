import { PreLoader } from "@/components";
import { Hero, About } from "@/sections";
export default function Home() {
  return (
    <>
      <PreLoader />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
