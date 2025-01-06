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
        "mx-auto mt-8 grid max-w-screen-2xl overflow-hidden px-4 py-1 md:grid-cols-5 md:px-6 md:py-2",
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
    <div className="order-1 col-span-5 flex items-center justify-center p-4 md:order-2 md:col-span-1">
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
    <div className="order-2 col-span-5 md:order-1 md:col-span-4">
      <p
        className={cn(
          "text-wrap border-t px-2 py-4 text-lg font-light !leading-relaxed md:border-e md:border-t-0 md:p-4 md:text-xl lg:text-2xl",
          className,
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default AboutSection;
