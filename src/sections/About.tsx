import Logo from "@/assets/logo";
import LogoMotion from "@/assets/logo-motion";
import { FadeIn, SlideUp } from "@/components/animation";
import { TextSlideUp } from "@/components/animation/text-popup";
import { AboutSection } from "@/components/ui";
import {
  AboutSectionDescription,
  AboutSectionTitle,
} from "@/components/ui/AboutSection";
import { FaDiscord } from "react-icons/fa";

const About = () => {
  return (
    <section className="md:mt-16" id="about">
      <FadeIn>
        <AboutSection>
          <AboutSectionDescription>
            At Hero Programmers, we&apos;re on a mission to bring together
            like-minded individuals who share a passion for coding and
            technology.
          </AboutSectionDescription>
          <AboutSectionTitle>
            <TextSlideUp>Mission</TextSlideUp>
          </AboutSectionTitle>
        </AboutSection>
      </FadeIn>

      <FadeIn>
        <AboutSection>
          <AboutSectionDescription>
            Whether you&apos;re a seasoned programmer or just starting your
            coding journey, our vibrant Discord server is the place to be! 🌐
          </AboutSectionDescription>
          <AboutSectionTitle>
            <SlideUp>
              <FaDiscord className="size-12 md:size-24" />
            </SlideUp>
          </AboutSectionTitle>
        </AboutSection>
      </FadeIn>

      <FadeIn>
        <AboutSection>
          <AboutSectionDescription>
            Grandma&apos;s here to guide you on a magical coding journey! 🧙‍♀️{" "}
          </AboutSectionDescription>
          <AboutSectionTitle>
            <SlideUp>🧙‍♀️</SlideUp>
          </AboutSectionTitle>
        </AboutSection>
      </FadeIn>

      <FadeIn>
        <AboutSection>
          <AboutSectionDescription>
            We believe every grandkid, aka Hero Programmer{" "}
            <Logo className="inline size-6 md:size-8" />, needs to be more
            connected and always strive to do something awesome for this world
            by using their coding magic. 🪄 💻
          </AboutSectionDescription>
          <AboutSectionTitle>
            <SlideUp>
              <LogoMotion className="size-12 md:size-24" />
            </SlideUp>
          </AboutSectionTitle>
        </AboutSection>
      </FadeIn>
    </section>
  );
};

export default About;
