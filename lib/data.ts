import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

import ranval from "@/public/ranval.png";
import mrairdropapp from "@/public/mrairdropapp.png";
import trilema from "@/public/trilema.png";
import borusan from "@/public/borusan.png";
import anadolu from "@/public/anadolu.png";
import tvote from "@/public/tvote.png";
import forevermessages from "@/public/forevermessages.png";
import marunfiapp from "@/public/marunfiapp.png";
import eduflow from "@/public/eduflow.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Team Lead - Full-Stack Developer | Trilema ",
    location: "İstanbul",
    description:
      "Led the design and development of the Trilemma Smart Wallet mobile application, including SDK service creation and its integration. Developed a web application and dashboard for the SDK, alongside crafting cohesive brand designs.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Full-Stack Developer | Trio Blockchain Labs",
    location: "İstanbul",
    description:
      "Contributed to various global and local projects by developing web applications with blockchain integration and designing innovative solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Trading Associate | KoinBasket",
    location: "Singapore | Remote",
    description:
      "Collaborated with trading partners on Web3 marketing strategies, conducted in-depth market analysis, and contributed to product development initiatives.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer | Karadag",
    location: "Istanbul",
    description:
      "Designed and deployed e-commerce and corporate applications with cohesive brand identity integration. Delivered high-quality solutions from concept to production.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Sales and Marketing Manager | Masev",
    location: "Istanbul",
    description:
      "Oversaw e-commerce operations, implemented data-driven sales strategies, conducted market analysis, and optimized profitability through effective planning.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Trilema Smart Wallet ",
    description:
      "Trilema's official website for Trilema Smart Wallet and Trilema SDK products.",
    tags: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Tailwind",
      "TypeScript",
      "Solidity",
      "Ethers.js",
    ],
    imageUrl: trilema,
    href: "https://trilema.io",
  },
  {
    title: "Forever Messages",
    description:
      "Forever Messages is a blockchain-based platform for creating and sharing messages with the community.",
    tags: ["React", "Solidity", "Ethers.js", "Next.js", "Tailwind"],
    imageUrl: forevermessages,
    href: "https://forever-messages.vercel.app/",
  },
  {
    title: "EduFlow",
    description:
      "A decentralized, blockchain-based platform offering a StackOverflow-like experience for users.",
    tags: ["React", "Next.js", "Solidity", "Ethers.js", "Tailwind"],
    imageUrl: eduflow,
    href: "https://eduflow-tan.vercel.app/",
  },
  {
    title: "Borusan AI Assistant",
    description:
      "AI assistant that provides information about Borusan Otomotiv's products and services with rate limits.",
    tags: ["Next.js", "OpenAI", "Tailwind", "TypeScript", "Redis"],
    imageUrl: borusan,
    href: "https://github.com/alperenbekci/borusan-otomotiv-aibot",
  },

  {
    title: "T-Vote DAO",
    description:
      "Decentralized voting application developed for Google Hackathon, allowing users to vote on proposals.",
    tags: ["Hardhat", "Solidity", "Ethers.js", "React"],
    imageUrl: tvote,
    href: "https://github.com/alperenbekci/tvote-app",
  },
  {
    title: "Anadolu Sigorta Loyalty App",
    description:
      "Loyalty app that allows users to earn native-tokens by purchasing insurance and use them in various campaigns.",
    tags: ["React", "Next.js", "Solidity", "Ethers.js"],
    imageUrl: anadolu,
    href: "https://github.com/alperenbekci/anadolu-sigorta",
  },

  {
    title: "Marunfi App",
    description:
      "A wallet-supported token airdrop and Swap platform developed for Marmara University.",
    tags: [
      "React",
      "Next.js",
      "Solidity",
      "Ethers.js",
      "Chakra UI",
      "Framer Motion",
      "Hardhat",
      "ThidrWeb",
    ],
    imageUrl: marunfiapp,
    href: "https://github.com/alperenbekci/marunfi-app",
  },
  {
    title: "RanVal-ETH",
    description:
      "Decentralized AI application allowing users to generate NFTs via AI model.",
    tags: [
      "Solidity",
      "React",
      "Stable-Diffusion",
      "NFT-Storage",
      "Ethers.js",
      "Hardhat",
    ],
    imageUrl: ranval,
    href: "https://github.com/alperenbekci/ranval-eth",
  },
  {
    title: "Mr Airdrop",
    description:
      "Airdrop app enabling token withdrawals to Solana's testnet and devnet.",
    tags: [
      "React",
      "Next.js",
      "Chakra UI",
      "Tailwind",
      "TypeScript",
      "Solana.js",
    ],
    imageUrl: mrairdropapp,
    href: "https://github.com/alperenbekci/mr-airdrop",
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
