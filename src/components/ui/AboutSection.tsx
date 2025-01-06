import { cn } from "@/lib/utils";

type AboutSectionProps = {
  className?: string;
  children: React.ReactNode;
};

type AboutSectionTitleProps = AboutSectionProps;
type AboutSectionDescriptionProps = AboutSectionProps;

const AboutSection: React.FC<AboutSectionProps> = ({ className, children }) => {
  return (
    <section
      className={cn(
        "mx-auto mt-8 grid max-w-screen-2xl grid-cols-5 overflow-hidden px-6 py-2",
        className,
      )}
    >
      {children}
    </section>
  );
};

export const AboutSectionTitle: React.FC<AboutSectionTitleProps> = ({
  className,
  children,
}) => {
  return (
    <div className="col-span-1 flex items-center justify-center p-4">
      <h2
        className={cn(
          "text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl",
          className,
        )}
      >
        {children}
      </h2>
    </div>
  );
};

export const AboutSectionDescription: React.FC<
  AboutSectionDescriptionProps
> = ({ children, className }) => {
  return (
    <div className="col-span-4">
      <p
        className={cn(
          "text-wrap border-e p-4 text-4xl font-light !leading-relaxed",
          className,
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default AboutSection;
