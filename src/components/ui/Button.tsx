import { cn } from "@/lib/utils";
import { FaDiscord } from "react-icons/fa6";

const Button = ({ className }: { className?: string }) => {
  return (
    <button
      className={cn(
        "rounded-lg border border-background bg-blue-flame px-4 py-2 font-semibold shadow transition duration-300 hover:-translate-y-2 hover:scale-[1.05] hover:border-blue-flame hover:bg-blue-flame/70",
        className,
      )}
    >
      <p>
        Join us on <FaDiscord className="inline" />
      </p>
    </button>
  );
};

export default Button;
