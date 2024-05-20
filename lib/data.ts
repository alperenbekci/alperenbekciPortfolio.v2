import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

import ranval from "@/public/ranval.png";
import mrairdropapp from "@/public/mrairdropapp.png";
import trilemma from "@/public/trilemma.png";
import borusan from "@/public/borusan.png";
import anadolu from "@/public/anadolu.png";
import tvote from "@/public/tvote.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sales and Marketing Manager | Masev",
    location: "Istanbul",
    description:
      "Managing and executing e-commerce operations, conducting sales and marketing activities, market analysis and calculating profitability",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer | Karadag",
    location: "Istanbul",
    description:
      "Designing e-commerce and corporate applications from start to finish, setting them up with brand identity, implementing and publishing.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Trading Associate | KoinBasket",
    location: "Singapore | Remote",
    description:
      "Trading partner collaboration and marketing, application analysis, market analysis, product development.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Team Lead - Full-Stack Developer | Trio Labs Hackhathon Team ",
    location: "İstanbul",
    description:
      "Developing open-source projects for Global Hackathons, managing team members, developing and implementing project ideas.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Lead - Full-Stack Developer | Trilemma Team",
    location: "İstanbul",
    description:
      "Developing open-source projects for National Hackathons (especially Teknofest), developing and implementing project ideas.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Mr Airdrop",
    description:
      "Airdrop app enabling token withdrawals to Solana's testnet and devnet.",
    tags: [
      "React",
      "Next.js",
      "Chackra UI ",
      "Tailwind",
      "TypeScript",
      "Solana.js",
    ],
    imageUrl: mrairdropapp,
    href: "https://github.com/alperenbekci/mr-airdrop",
  },

  {
    title: "RanVal-ETH",
    description:
      "Decentralized AI application allowing users to generate NFT's via AI model.",
    tags: [
      "Express.js",
      "Solidity",
      "React",
      "Stable-Diffusion",
      "NFT-Storage",
    ],
    imageUrl: ranval,
    href: "https://github.com/alperenbekci/ranval-eth",
  },
  {
    title: "Borusan AI Assistant",
    description:
      " AI assistant that provides information about Borusan Otomotiv's products and services with rate limits.",
    tags: ["Next.js", "OpenAI", "Tailwind", "TypeScript", "Redis"],
    imageUrl: borusan,
    href: "https://github.com/alperenbekci/borusan-otomotiv-aibot",
  },
  {
    title: "Anadolu Sigorta Loyalty App",
    description:
      " Loyalty app that allows users to earn native-tokens by purchasing insurance and use them in various campaigns.",
    tags: ["React", "Solidity", "Ethers.js"],
    imageUrl: anadolu,
    href: "https://github.com/alperenbekci/anadolu-sigorta",
  },
  {
    title: "T-Vote DAO",
    description:
      " Decentralized voting application that allows users to vote on proposals",
    tags: ["Hardhat", "Solidity", "Ethers.js", "React"],
    imageUrl: tvote,
    href: "https://github.com/alperenbekci/tvote-app",
  },
  {
    title: "Trilemma Website",
    description:
      " Trilemma team's official website that provides information about the team and the projects we have developed.",
    tags: [" Next.js", "Tailwind", "TypeScript", "Framer Motion", "GSAP"],
    imageUrl: trilemma,
    href: "https://github.com/alperenbekci/trilemma-website.git",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",

  "React",
  "Next.js",

  "React Native",
  "Expo",

  "Redux",
  "React-Router",

  "Node.js",
  "Express.js",

  "Git",

  "Tailwind",
  "Framer Motion",
  "GSAP",

  "MongoDB",
  "PostgreSQL",
  "MySQL",

  "Solidity",
  "Hardhat",
  "Ethers.js",

  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
] as const;
