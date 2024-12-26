const About = () => {
  return (
    <div className="container mx-auto max-w-screen-xl text-wrap">
      <div>
        <p className="text-8xl leading-relaxed">
          We, a friendly community for beginner programmers who wants to become
          a <strong>PROGRAMMING HERO!</strong>
        </p>
      </div>
      <div className="mt-14 leading-relaxed">
        <p className="whitespace-pre-line text-4xl leading-relaxed">
          At Hero Programmers, we&apos;re on a mission to bring together
          like-minded individuals who share a passion for coding and technology.
        </p>
        <p className="text-4xl leading-relaxed">
          Whether you&apos;re a seasoned programmer or just starting your coding
          journey, our vibrant Discord server is the place to be! 🌐
        </p>
        <p className="text-4xl leading-relaxed">
          Grandma&apos;s here to guide you on a magical coding journey! 🧙‍♀️{" "}
        </p>
        <p className="text-4xl leading-relaxed">
          We believe every grandkid, aka Hero Programmer :HeroProgrammers:,
          needs to be more connected and always strive to do something awesome
          for this world by using their coding magic. 🪄 💻
        </p>
      </div>
    </div>
  );
};

const TextOpacity = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div>TextOpacity</div>;
};

export default About;
