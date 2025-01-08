import { socialLinks } from "@/constant";

const Socials = () => {
  return (
    <div>
      <h4 className="border-b py-2 text-lg font-medium">Socials</h4>
      <ul className="mx-4 my-4 list-inside space-y-1 text-discord-white-600 *:w-fit *:transition *:duration-300">
        {socialLinks.map((link) => (
          <li
            key={link.name}
            className="list-item underline-offset-2 *:flex *:items-center *:gap-2 *:font-medium hover:text-white hover:underline"
          >
            <a href={link.href} target="_blank ">
              <link.icon /> {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
