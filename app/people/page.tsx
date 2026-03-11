import People from "@/components/view/people";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the ContextLabs team - Alexander Chen, Marcus Williams, David Kumar, Robert Thompson. Our engineers and analysts building practical AI solutions.",
};
function page() {
  return <People />;
}

export default page;
