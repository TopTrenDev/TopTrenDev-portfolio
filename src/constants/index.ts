/*
   Copyright (C), 2023-2025, Marek Dvojak
   Author: Marek Dvojak
   FileName: constants.js
   Version: 2.3.0
   Creation: 02/06/2023
   Last modification: 27/04/2025
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  plProject,
  solanashuffleProject,
  avatar,
  wlfProject,
  raffleProject,
  realEstateProject,
  feedHiveProject,
  swaplaceProject,
  blastariansProject,
  rafflorProject,
  goIcon,
  solidityIcon,
  mongodbIcon,
  rustIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

export const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

export const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
  faTelegram,
};

export const introduction = {
  text: [
    "Hi there, thank you for visiting my portfolio 👋",

    "My name is Marek Dvojak. I am a blockchain developer specializing in Solana and Rust smart contracts, with a strong passion for working with cutting-edge technologies in full-stack and AI development.",
    "With over 6 years of full-stack development experience and 4 years of hands-on Solana expertise, I enjoy building robust blockchain and full-stack applications.",
    "I truly value collaborating with individuals and teams who share my enthusiasm for creating impactful, innovative experiences. Your visit to my portfolio means a lot to me!",
    "Feel free to view or download my resume here.",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const projects = [
  {
    name: "Pioneer Legends",
    description:
      "Pioneer Legends represents the next frontier in the Web3 space, offering an immersive experience that harnesses the potential of crypto mining, diverse DeFi investments, and the transformative power of NFTs to bestow rewards upon its esteemed holders.",
    image: plProject,
    source_code_link: "",
    demo_link: "https://www.pioneerlegends.com/",
  },
  {
    name: "Solana shuffle",
    description:
      "Solana Shuffle is a casino-type gambling site that features tower games, jackpots, and coinflip played with SOL. Supports both single and multiplayer modes.",
    image: solanashuffleProject,
    source_code_link: "",
    demo_link: "https://www.solanashuffle.com/",
  },
  // {
  //   name: "Women Life Freedom",
  //   description:
  //     "A humanitarian effort to celebrate and support women across the globe through art and web3.",
  //   image: wlfProject,
  //   source_code_link: "https://github.com/sourlodine/Women-Life-Freedom-App",
  //   demo_link: "https://0xwlf.io/",
  // },
  {
    name: "Client-Server Chat",
    description:
      "This is a chat application that facilitates communication between multiple clients through a centralized server. The application is designed using socket programming and handles multiple client connections concurrently using threads.",
    image:
      "https://i.pinimg.com/originals/0e/4a/c3/0e4ac37acbff81cd087aa19692a07a9d.gif",
    source_code_link: "",
    demo_link: "https://youtu.be/Mk1BNqPz1n4",
  },
  {
    name: "Rafflor",
    description:
      "Rafflor is a decentralized raffle platform built on the Aptos blockchain, designed to facilitate transparent and secure NFT giveaways and raffles within the Aptos ecosystem.",
    image: rafflorProject,
    source_code_link: "",
    demo_link: "https://rafflor.aptosmonkeys.club/",
  },
  {
    name: "Aptos Raffle War",
    description:
      " NFT Game on Aptos, where users on the blockchain compete for a tempting prize of APT, with their NFTs.",
    image: raffleProject,
    source_code_link: "",
    demo_link: "https://raffle-war-demo.netlify.app/",
  },
  // {
  //   name: "Disney Plus Replica",
  //   description:
  //     "A replica of the Disney+ principal page built using React and Vite. The Vitest and Storybook technologies were also implemented for testing.",
  //   image:
  //     "https://camo.githubusercontent.com/5d85ae990f2b7b9a0f4d6246168b7995fc930d59d127a15c3c4ea18eb2a5001b/68747470733a2f2f6c756d696572652d612e616b616d616968642e6e65742f76312f696d616765732f65735f686f7573652d6f662d6469736e65792d706c75735f6d6f625f6d5f35376437663836652e6a7065673f726567696f6e3d302c302c3830302c3630302677696474683d373638",
  //   source_code_link: "",
  //   demo_link: "https://disneyplusreplica.netlify.app",
  // },
  {
    name: "Lotus Revenu",
    description:
      "Lotus is your partner to grow your revenue and brand. From campaigns and projects to monthly support, staff development, or temporary department staffing, watch your revenue and brand.",
    image: realEstateProject,
    source_code_link: "",
    demo_link: "https://www.grow-with-lotus.com/",
  },
  {
    name: "FeedHive",
    description:
      "FeedHive is an AI-driven platform that delivers a fantastic user experience.",
    image: feedHiveProject,
    source_code_link: "",
    demo_link: "https://www.feedhive.com/",
  },
  {
    name: "Swaplace",
    description:
      "Swaplace is a P2P DEX, Ownerless, Open-source, Cross-chain and Feeless environment designed for swaps.",
    image: swaplaceProject,
    source_code_link: "",
    demo_link: "https://swaplace.xyz/",
  },
  // {
  //   name: "Blastarians",
  //   description:
  //     "All Blastarians NFT holders will be eligible for our free $ALPHA tokens airdrop claim.",
  //   image: blastariansProject,
  //   source_code_link: "",
  //   demo_link: "https://blastarians.xyz/",
  // },
];

export const memoji = {
  image: [avatar],
};

export const skills = [
  {
    id: "solidity",
    title: "Solidity",
    icon: solidityIcon,
    description:
      "I'm proficient in Solidity, including its syntax, inheritance, structuring, and best practices for EVM-based smart contract development.",
  },
  {
    id: "rust",
    title: "Rust",
    icon: rustIcon,
    description:
      "I'm experienced with Rust's ecosystem, including Cargo, crates, concurrency, and error handling using its native features.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "vite",
    title: "Vite",
    icon: viteIcon,
    description:
      "I've used Vite for about six months to build React sites and deploy them smoothly on platforms like Netlify.",
  },
  {
    id: "aws",
    title: "Amazon Web Services",
    icon: awsIcon,
    description:
      "I'm certified in AWS with hands-on experience managing EC2 and RDS for scalable, reliable cloud infrastructure.",
  },
  {
    id: "mongo",
    title: "MongoDB",
    icon: mongodbIcon,
    description:
      "I have experience with MongoDB replication, sharding, and aggregation pipelines, using both official drivers and third-party tools for integration and queries.",
  },
  {
    id: "psql",
    title: "Postgresql",
    icon: psqlIcon,
    description:
      "I have strong PostgreSQL skills, including normalization, triggers, front-end integration, and data analysis with tools like Power BI.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "I prefer Node.js as my runtime for building scalable web applications and have expertise in using it to develop robust backend systems.",
  },
  {
    id: "go",
    title: "Go",
    icon: goIcon,
    description:
      "I'm familiar with Go's syntax, concurrency, and standard library, with experience in networking, web development, and distributed systems.",
  },
];

export const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

