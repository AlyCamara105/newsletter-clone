import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Twitter",
    url: "https://twitter.com/",
    handle: "@AlyCamara",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/",
    handle: "AlyCamara",
  },
];

const title = "Aly Camara";
const description = "Frontend developer 🧑🏻‍💻 working with cutting-edge stuff.";
const image = "favicon.ico";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://newsletter-clone-alycamara105.vercel.app/",
    siteName: "Aly Camara",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [image],
    creator: "@AlyCamara",
  },
};
