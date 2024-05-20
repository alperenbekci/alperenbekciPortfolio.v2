"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I started my career in sales and marketing. Leveraging my e-commerce
        experience, I switched to software development. My journey started with
        front-end development and then I branched out into back-end development
        and eventually became a full-stack developer.
      </p>

      <p>
        By adopting the developing technologies in the Web3 world, I turned to
        this field and started creating projects for hackathons under the
        mentorship of <span className="font-bold ">Trio Labs</span>. As my
        knowledge of Web3 continued to grow, I began to use it for investments
        and advisory services, portfolio management and partnerships.
      </p>
      <p>
        I am currently expanding my expertise in the web3 field while also I
        work on the development of SaaS applications with my team{" "}
        <span className="font-bold ">Trilemma. </span>
      </p>
    </motion.section>
  );
}
