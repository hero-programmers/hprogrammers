import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    {
      path: "./Montserrat/Montserrat-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "./Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-montserrat",
});

export const spaceGrotesk = localFont({
  src: [
    {
      path: "./Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
    },
  ],
  variable: "--font-space-grotesk",
});
