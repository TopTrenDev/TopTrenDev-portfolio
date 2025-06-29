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
  avatar,
  raffleProject,
  lotusProject,
  feedHiveProject,
  swaplaceProject,
  rafflorProject,
  rivetAIProject,
  wooshiworldProject,
  petenottageProject,
  copytradebotProject,
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
    name: "Rafflor",
    description:
      "Rafflor is a Web3 raffle platform on Aptos, offering fair, on-chain giveaways for the Aptos Monkeys community.",
    image: rafflorProject,
    source_code_link: "",
    demo_link: "https://rafflor.aptosmonkeys.club/",
    category: "Aptos Chain",
  },
  {
    name: "Aptos Raffle War",
    description:
      "NFT Game on Aptos, where users on the blockchain compete for a tempting prize of APT, with their NFTs.",
    image: raffleProject,
    source_code_link: "",
    demo_link: "https://raffle-war-demo.netlify.app/",
    category: "Aptos Chain",
  },
  {
    name: "Lotus Revenu",
    description:
      "Grow With Lotus offers personalized coaching and courses to help individuals achieve emotional wellness, self-growth, and life balance.",
    image: lotusProject,
    source_code_link: "",
    demo_link: "https://www.grow-with-lotus.com/",
    category: "Web",
  },
  {
    name: "FeedHive",
    description:
      "Feedhive is a powerful social media management platform that helps creators and businesses schedule, publish, and analyze content with AI-driven tools.",
    image: feedHiveProject,
    source_code_link: "",
    demo_link: "https://www.feedhive.com/",
    category: "AI",
  },
  {
    name: "Swaplace",
    description:
      "Swaplace is an open-source, feeless, cross-chain P2P DEX built on EVM chains, offering direct multi-token swaps without intermediaries—designed for developers to build on top.",
    image: swaplaceProject,
    source_code_link: "",
    demo_link: "https://swaplace.xyz/",
    category: "Ethereum",
  },
  {
    name: "Client-Server Chat",
    description:
      "This is a chat application that facilitates communication between multiple clients through a centralized server. The application is designed using socket programming and handles multiple client connections concurrently using threads.",
    image:
      "https://i.pinimg.com/originals/0e/4a/c3/0e4ac37acbff81cd087aa19692a07a9d.gif",
    source_code_link: "",
    demo_link: "https://youtu.be/Mk1BNqPz1n4",
    category: "AI",
  },
  {
    name: "Pioneer Legends",
    description:
      "Pioneer Legends represents the next frontier in the Web3 space, offering an immersive experience that harnesses the potential of crypto mining, diverse DeFi investments, and the transformative power of NFTs to bestow rewards upon its esteemed holders.",
    image: plProject,
    source_code_link: "",
    demo_link: "https://www.pioneerlegends.io/",
    category: "Solana",
  },
  {
    name: "RivetAI",
    description:
      "Rivet AI is reshaping creative production with cutting-edge AI-driven tools, empowering storytellers and production teams to streamline workflows, enhance content quality, and unlock unprecedented efficiency in the film and media industry.",
    image: rivetAIProject,
    source_code_link: "",
    demo_link: "https://rivetai.com/",
    category: "AI",
  },
  {
    name: "WOOSHI WORLD",
    description:
      "Wooshi World delivers a vibrant fusion of gaming, NFTs, and culture, inviting players into an animated metaverse where digital ownership meets storytelling, and community participation defines the evolution of its playful, immersive universe.",
    image: wooshiworldProject,
    source_code_link: "",
    demo_link: "https://www.wooshi.world/",
    category: "Ethereum",
  },
  {
    name: "PETE NOTTAGE",
    description:
      "Pete Nottage's portfolio site showcases the dynamic range of a seasoned voice-over artist and presenter, combining crisp audio craftsmanship with a modern design aesthetic to connect clients with compelling and professional vocal talent.",
    image: petenottageProject,
    source_code_link: "",
    demo_link: "https://petenottage.co.uk/",
    category: "Web",
  },
  {
    name: "Solana Copy Trading Bot",
    description:
      "A Solana copy trading bot mirrors top wallet strategies across major DEXs—like Raydium, Jupiter, and Pump.fun—in real time, empowering users to automate trades on autopilot.",
    image: copytradebotProject,
    source_code_link: "",
    // demo_link: "https://petenottage.co.uk/",
    category: "Solana",
  },
  {
    name: "Pumpfun Volume Bot",
    description:
      "PumpFun Volume Bot is an automated Solana-based trading tool that boosts your meme token's activity by simulating realistic buy/sell volume across multiple wallets—making it trend faster on platforms like Pump.fun.",
    image: copytradebotProject,
    source_code_link: "",
    // demo_link: "https://petenottage.co.uk/",
    category: "Solana",
  },
  {
    name: "Raydium Volume Bot (latest)",
    description:
      "Raydium Volume Bot is an automated Solana trading tool designed to boost SPL token activity on Raydium. It spins up multiple wallets to perform buy and sell swaps, creating high on-chain volume and increased visibility for your token.",
    image: copytradebotProject,
    source_code_link: "",
    // demo_link: "https://petenottage.co.uk/",
    category: "Solana",
  },
  {
    name: "Pumpfun Sniper Bot",
    description:
      "Solana sniper bot that automatically targets and buys newly minted Pump.Fun tokens the moment they launch—designed for real-time detection and instant execution so you never miss the pump.",
    image: copytradebotProject,
    source_code_link: "",
    // demo_link: "https://petenottage.co.uk/",
    category: "Solana",
  },
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

