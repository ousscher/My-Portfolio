import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Evergreen from "../assets/evergreen.png";
import "swiper/css";
import { useEffect } from "react";
import MyDesktopPlanner from "../assets/desktopPlanner.png";
import foorweb from "../assets/foorweb_cover.png";
import Optimum from "../assets/optimum_cover.png";
import optimumWebSite from "../assets/Cover.png";
import chateauDesEnfants from "../assets/cover_chateau_des_enfants.png";
import CseForums from "../assets/cseForums.png";
import ibtikar from "../assets/ibtikar.png";
import OrganiserApp from "../assets/organiserApp.png";
import MyPortfolio from "../assets/portfolio.png";
import Dari from "../assets/Cover-Dari.png";
import Doclib from "../assets/doclib.png";
import lock from "../assets/lock.svg";
import ghack from "../assets/ghack_algiers.png";
import { motion } from "framer-motion";
import { textVariant } from "../motion";
import { staggerContainer, slideIn, buttonVariants } from "../motion.js";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// puis dans vos modules
const projects = [
  {
    title: "OPTIMUM",
    img: Optimum,
    technologies: "Flutter Firebase Hive",
    details:
      "Optimum is a mobile appointment management application designed for doctors, streamlining appointment scheduling, organization, and management to improve efficiency in healthcare.",
    isCodeAvailable: false,
    codeLink: "https://github.com/ousscher/optimum",
    isLiveAvailable: true,
    liveLink: "https://optimum-app.vercel.app/",
  },
  {
    title: "OPTIMUM-WEBSITE",
    img: optimumWebSite,
    technologies: "React TailwindCss Vite.js",
    details:
      "Optimum-Website is your ultimate resource for everything related to Optimum, the innovative mobile application designed for doctors. Here, you'll find detailed information about the app's features, benefits, organisaton and management.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/optimum-website",
    isLiveAvailable: true,
    liveLink: "https://optimum-app.vercel.app/",
  },
  {
    title: "CHATEAU DES ENFANTS",
    img: chateauDesEnfants,
    technologies: "React Tailwind Flask MySql Docker",
    details:
      "Le Château des Enfants is an open-source, locally deployed platform that streamlines daycare center management. Our mission is to simplify payment management and track children's progress, providing a seamless experience for administrators and parents.",
    isCodeAvailable: true,
    codeLink: "https://github.com/F1OOw/Gestion-Paiments-Creche",
    isLiveAvailable: false,
    liveLink: "https://optimum-app.vercel.app/",
  },
  {
    title: "FOORWEB",
    img: foorweb,
    technologies: "Flutter Firebase flutter_BLoC Hive",
    details:
      "Foorweb is an admin application for an online sales platform, designed to manage e-commerce stores efficiently. It streamlines store administration, inventory management, order processing, and customer interactions.",
    isCodeAvailable: false,
    codeLink: "https://github.com/ousscher/EVERGREEN",
    isLiveAvailable: true,
    liveLink:
      "https://play.google.com/store/apps/details?id=com.foorweb.foorwebapp&hl=fr",
  },
  {
    title: "DOCLIB",
    img: Doclib,
    technologies: "Flask MySql Elasticsearch Docker React.js Redux",
    details:
      "Doclib is a search engine that allows users to find scientific articles using keywords (not yet deployed online).",
    isCodeAvailable: true,
    codeLink: "https://github.com/GLMasters/TP-IGL",
    isLiveAvailable: false,
    codeLive: "",
  },
  {
    title: "EVERGREEN",
    img: Evergreen,
    technologies: "Flutter Firebase Hive",
    details:
      "Evergreen is an educational mobile game designed for children, focusing on environmental protection. It was initiated as part of the PRJP module in the second year of the preparatory cycle at ESI.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/EVERGREEN",
    isLiveAvailable: true,
    liveLink:
      "https://drive.google.com/file/d/1AYx4b9-tTXaFnLjNHsYfS-PuMxA5f85z/view?usp=sharing",
  },

  {
    title: "GHACK Website",
    img: ghack,
    technologies: "Next.js",
    details:
      "The official Ghack Hackathon website, designed to streamline the hackathon experience, the site provides essential event information, including schedules, team registration, judging criteria, and live updates.",
    isCodeAvailable: false,
    codeLink: "https://github.com/ousscher/EVERGREEN",
    isLiveAvailable: true,
    liveLink: "https://ghack24.gdgalgiers.com/",
  },
  {
    title: "DARIAPP",
    img: Dari,
    technologies: "Flutter Express.js MongoDb",
    details:
      "DARIAPP is an automated solution aimed at simplifying the monitoring of homes under construction, developed during the DevFest Constantine hackathon.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/Devfest-23",
    isLiveAvailable: false,
  },
  {
    title: "My Desktop Planner",
    img: MyDesktopPlanner,
    technologies: "Java JavaFX",
    details:
      "My Desktop Planner is a task scheduling application dedicated to the efficient management of daily activities on desktop computers.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/My-Dsktop-Planner",
    isLiveAvailable: false,
    liveLink: "",
  },
  {
    title: "CSEFORUMS",
    img: CseForums,
    technologies: "TailwindCss React.js Express.js",
    details:
      "CSEFORUMS is a knowledge-sharing platform created by the CSE club, allowing our members to ask questions, find answers, and explore a range of exciting fields (currently under development).",
    isCodeAvailable: false,
    isLiveAvailable: false,
  },
  {
    title: "IBTIKAR WEBSITE",
    img: ibtikar,
    technologies: "TailwindCss React.js Vite.js",
    details:
      "Ibtikar is a fictional company specializing in innovative IT solutions, dedicated to delivering cutting-edge software and technology to meet diverse client needs.",
    isCodeAvailable: false,
    isLiveAvailable: true,
    liveLink: "https://i-btikar-website.vercel.app/",
  },
  {
    title: "CSE ORGANISER'S APP",
    img: OrganiserApp,
    technologies: "Flutter Firebase",
    details:
      "The CSE Organizers application simplifies logistics and member management during our CSE events. Coordination, tasks, resources, and efficient communication are all integrated into a single application (currently under development).",
    isCodeAvailable: false,
    codeLink: "",
    isLiveAvailable: false,
  },
  {
    title: "MY PORTFOLIO",
    img: MyPortfolio,
    technologies: "Tailwindcss React.js ",
    details: "My personnel web site",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/My-Portfolio",
    isLiveAvailable: true,
    liveLink: "https://my-portfolio-8745q4qce-ousschers-projects.vercel.app",
  },
];

const Projects = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex);
    };

    return (
        <motion.section
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col items-center pt-12" id="projects">
            <motion.h1
                variants={textVariant(0.5)}
                className="text-md text-center">Get to know about</motion.h1>
            <motion.h1
                variants={textVariant(0.5)}
                className='text-md text-center text-3xl text-[#7127BA] font-bold'>My Projects</motion.h1>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="swiper-container mt-4 md:mt-2 relative w-[100%] flex flex-row justify-center items-center overflow-visible">
                <Swiper
                    className="w-[90%]"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={60}
                    slidesPerView={1.5}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    loop={true}
                    centeredSlides={true}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className={`${index === activeSlide ? 'active-slide' : ''}`}>
                            <div className={`flex flex-col justify-evenly h-[70vh] border-2 mb-10 mt-10 mx-auto max-w-[100%] md:max-w-none ${index === activeSlide ? 'slide-active-design' : ''}`}>
                                <p className="text-center text-xl">{project.title}</p>
                                <div className={`text-center md:text-left flex flex-col md:flex-row justify-evenly items-center h-[75%] md:h-[60%]`}>
                                    <div className={`h-[100%] md:w-[40%] w-[100%] flex-col justify-evenly text-center hidden md:flex`}>
                                        <p className="">{project.details}</p>
                                        <p>Technologies : {project.technologies}</p>
                                    </div>
                                    <div className="md:w-[45%] w-full h-[50%] md:h-auto flex items-center justify-center">
                                        <img src={project.img} alt={project.title} className="z-1 overflow-hidden object-contain w-full h-full" />
                                    </div>
                                    <div className={`md:w-[40%] w-full px-2 flex-col justify-evenly text-center flex md:hidden`}>
                                        <p className="text-sm">{project.details}</p>
                                        <p>Technologies : {project.technologies}</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-around h-[5%] md:h-auto">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`w-[30%] h-10 ${project.isLiveAvailable ? "block" : "hidden"} ml-3`}>
                                        <button className="bg-mainColor px-4 h-[100%] w-[100%] rounded hover:scale-105">Live</button>
                                    </a>
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={`w-[30%] h-10 ${project.isCodeAvailable ? "block" : "hidden"} ml-3`}>
                                        <button className="border-[1px] border-[gray] h-[100%] w-[100%] rounded hover:scale-105">Code</button>
                                    </a>
                                    <img src={lock} alt="lock" className={`h-10 w-10 ml-8 block ${project.isCodeAvailable ? "hidden" : ""} ${project.isLiveAvailable ? "hidden" : ""} cursor-pointer`} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute top-1/2 left-[10px] transform -translate-y-1/2 cursor-pointer">
                    <button className="custom-prev">
                        <FaArrowLeft alt="Next" className="w-10 h-10" />
                    </button>
                </div>
                <div className="absolute top-1/2 right-[10px] transform -translate-y-1/2">
                    <button className="custom-next">
                        <FaArrowRight alt="Previous" className="w-10 h-10" />
                    </button>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default Projects;