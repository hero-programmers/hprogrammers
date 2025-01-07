import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Socials = () => {
  return (
    <div>
      <h4 className="border-b py-2 text-lg font-medium">Socials</h4>
      <ul className="mx-4 my-4 list-inside space-y-1 text-discord-white-600 *:w-fit *:transition *:duration-300">
        <li className="list-item underline-offset-2 *:flex *:items-center *:gap-2 *:font-medium hover:text-white hover:underline">
          <a href="" target="_blank ">
            <FaYoutube /> Youtube
          </a>
        </li>
        <li className="list-item underline-offset-2 *:flex *:w-fit *:items-center *:gap-2 *:font-medium hover:text-white hover:underline">
          <a href="" target="_blank">
            <FaFacebook /> Facebook
          </a>
        </li>
        <li className="list-item underline-offset-2 *:flex *:w-fit *:items-center *:gap-2 *:font-medium hover:text-white hover:underline">
          <a href="" target="_blank">
            <FaInstagram /> Instagram{" "}
          </a>
        </li>
        <li className="list-item underline-offset-2 *:flex *:w-fit *:items-center *:gap-2 *:font-medium hover:text-white hover:underline">
          <a href="" target="_blank">
            <FaDiscord /> Discord
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
