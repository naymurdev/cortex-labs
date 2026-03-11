import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "ContextLabs",
  url: "https://contextlabs.ui-layouts.com",
  ogImage: "https://contextlabs.ui-layouts.com/og.jpg",
  description:
    "ContextLabs - Building intelligent AI interfaces and solutions for tomorrow's digital experiences. From workflow automation to advanced analytics.",
  links: {
    twitter: "https://twitter.com/naymur_dev",
    linkedin: "https://www.linkedin.com/in/naymur-rahman",
    github: "https://github.com/naymurdev",
  },
};
