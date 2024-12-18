import Logo from "@/assets/logo";
import hero from "./style.module.scss";

const Hero = () => {
  return (
    <section className={hero.section}>
      <div className={hero.gradient} />
      <div className={hero.wrapper}>
        <Logo className={hero.logo} />
        <h1 className={hero.brand_name}>Hero Programmers</h1>
      </div>
    </section>
  );
};

export default Hero;
