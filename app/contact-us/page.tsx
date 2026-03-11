import ContactUs from "@/components/view/contact-us";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ContextLabs. Schedule a 15-minute call to see if we're a good fit for your AI project. Email: naymur@ui-layouts.com",
};

function page() {
  return <ContactUs />;
}

export default page;
