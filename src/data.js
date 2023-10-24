import { SlBadge } from "react-icons/sl";
import { AiOutlineFolderOpen } from "react-icons/ai";

import restaurant from "./assets/restaurant.png";
import bank from "./assets/bank.png";
import gpt3 from "./assets/gpt.png";
import gym from "./assets/gym.png";
import shoot from "./assets/shoot.png";
import devfest from "./assets/devfest.png";
import aisummit from "./assets/aisummit.png";

export const aboutData = [
  {
    id: 1,
    title: "Experiences",
    state: "1+ Year Working",
    icon: AiOutlineFolderOpen,
  },
  {
    id: 2,
    title: "Projects",
    state: "10+ projects",
    icon: SlBadge,
  },
];

export const FrontSkills = [
  {
    id: 1,
    topic: "HTML5",
    lvl: "Advanced",
  },
  {
    id: 2,
    topic: "CSS3",
    lvl: "Advanced",
  },
  {
    id: 3,
    topic: "TailwindCss",
    lvl: "Advanced",
  },
  {
    id: 4,
    topic: "JavaScript",
    lvl: "Intermediate",
  },
  {
    id: 5,
    topic: "React",
    lvl: "Advanced",
  },
  {
    id: 6,
    topic: "NextJs",
    lvl: "Intermediate",
  },
  {
    id: 7,
    topic: "Redux",
    lvl: "Advanced",
  },
  {
    id: 8,
    topic: "Socketio",
    lvl: "Begginer",
  },
];

export const BackSkills = [
  {
    id: 1,
    topic: "NodeJs",
    lvl: "Advanced",
  },
  {
    id: 2,
    topic: "Express",
    lvl: "Advanced",
  },
  {
    id: 3,
    topic: "MongoDB",
    lvl: "Advanced",
  },
];

export const projectsData = [
  {
    id: 1,
    projImg: restaurant,
    dec: "Fully responsive rstaurant website with a cool design that present restaurant with quality work",
    type: "personal",
    githubUrl: "https://github.com/Abdelbasset10/Front-end-restaurant-website",
    siteUrl: "https://abdelbasset-restaurant.netlify.app/",
  },
  {
    id: 2,
    projImg: devfest,
    dec: "Devfest-22 website with a wonderful design that present Devfest-22 organized buy GDG Algiers",
    type: "group",
    githubUrl: "",
    siteUrl: "https://devfest22.gdgalgiers.com/",
  },
  {
    id: 3,
    projImg: bank,
    dec: "fully responsive bank website that i built it from Figma and it's similair 100% to figma design",
    type: "personal",
    githubUrl: "https://github.com/Abdelbasset10/front-end-bank-app",
    siteUrl: "https://abdelbasset-banksite.netlify.app/",
  },
  {
    id: 4,
    projImg: gym,
    dec: "fully responsive GYM website that i built it from Figma and it's similair 100% to figma design",
    type: "personal",
    githubUrl: "https://github.com/Abdelbasset10/Front-end-fitnes-Website",
    siteUrl: "https://abdelbasset-fitness.netlify.app/",
  },
  {
    id: 5,
    projImg: aisummit,
    dec: "AiSummit website that present an event of contains Ai talkers organized buy School Of AI Algiers club",
    type: "group",
    githubUrl: "",
    siteUrl: "https://aisummit-soai.netlify.app/",
  },
  {
    id: 6,
    projImg: gpt3,
    dec: "fully responsive GPT3 website that i built it from Figma and it's similair 100% to figma design",
    type: "personal",
    githubUrl: "https://github.com/Abdelbasset10/Front-end-gpt3-website",
    siteUrl: "https://abdelbasset-gpt3.netlify.app/",
  },
  {
    id: 7,
    projImg: shoot,
    dec: "Fully responsiev Site which is a website that i built to join the Club Scientific at Esi Algiers",
    type: "personal",
    githubUrl: "https://github.com/Abdelbasset10/Shoot-IT",
    siteUrl: "https://shoot-it.netlify.app/",
  },
];

