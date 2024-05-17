import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Evergreen from '../assets/evergreen.png'
import 'swiper/css';
import { useEffect } from "react";
import MyDesktopPlanner from '../assets/desktopPlanner.png'
import Optimum from '../assets/optimum.png'
import CseForums from '../assets/cseForums.png'
import ibtikar from '../assets/ibtikar.png'
import OrganiserApp from '../assets/organiserApp.png'
import MyPortfolio from '../assets/portfolio.png'
import Dari from '../assets/Cover-Dari.png'
import Doclib from '../assets/doclib.png'
import lock from '../assets/lock.svg'
import { motion } from "framer-motion"
import { textVariant } from '../motion';
import {staggerContainer, slideIn, buttonVariants} from '../motion.js'

const projects = [
{
    title:"OPTIMUM",
    img:Optimum,
    technologies:"Flutter Firebase ",
    details: "Optimum is a mobile appointment management application designed for doctors, streamlining appointment scheduling, organization, and management to improve efficiency in healthcare."
    isCodeAvailable : true,
    codeLink : "https://github.com/ousscher/optimum",
    isLiveAvailable : false,
    codeLive : "",
},
{
    title:"DOCLIB",
    img:Doclib,
    technologies:"Flask MySql Elasticsearch Docker React.js Redux",
    details:"Doclib is a search engine that allows users to find scientific articles using keywords (not yet deployed online).",
    isCodeAvailable : true,
    codeLink : "https://github.com/GLMasters/TP-IGL",
    isLiveAvailable : false,
    codeLive : "",
},
{
    title:"EVERGREEN",
    img:Evergreen,
    technologies:"Flutter Firebase Hive",
    details: "Evergreen is an educational mobile game designed for children, focusing on environmental protection. It was initiated as part of the PRJP module in the second year of the preparatory cycle at ESI.",
    isCodeAvailable : true,
    codeLink : "https://github.com/ousscher/EVERGREEN",
    isLiveAvailable : false,
},
{
    title:"DARIAPP",
    img:Dari,
    technologies:"Flutter Express.js MongoDb",
    details:"DARIAPP is an automated solution aimed at simplifying the monitoring of homes under construction, developed during the DevFest Constantine hackathon.",
    isCodeAvailable : true,
    codeLink : "https://github.com/ousscher/Devfest-23",
    isLiveAvailable : false,
},
{
    title:"My Desktop Planner",
    img:MyDesktopPlanner,
    technologies:"Java JavaFX",
    details:"My Desktop Planner is a task scheduling application dedicated to the efficient management of daily activities on desktop computers.",
    isCodeAvailable : true,
    codeLink : "https://github.com/ousscher/My-Dsktop-Planner",
    isLiveAvailable : false,
    liveLink : "",
},
{
    title:"CSEFORUMS",
    img:CseForums,
    technologies:"TailwindCss React.js Express.js",
    details:"CSEFORUMS is a knowledge-sharing platform created by the CSE club, allowing our members to ask questions, find answers, and explore a range of exciting fields (currently under development).",
    isCodeAvailable : false,
    isLiveAvailable : false,
},
    {
    title:"IBTIKAR WEBSITE",
    img:ibtikar,
    technologies:"TailwindCss React.js Vite.js",
    details:"Ibtikar is a fictional company specializing in innovative IT solutions, dedicated to delivering cutting-edge software and technology to meet diverse client needs.",
    isCodeAvailable : false,
    isLiveAvailable : true,
    liveLink : "https://i-btikar-website.vercel.app/",
},
{
    title:"CSE ORGANISER'S APP",
    img:OrganiserApp,
    technologies:"Fletter Firebase",
    details:"The CSE Organizers application simplifies logistics and member management during our CSE events. Coordination, tasks, resources, and efficient communication are all integrated into a single application (currently under development).",
    isCodeAvailable : false,
    codeLink : "",
    isLiveAvailable : false,

},
{
    title:"MY PORTFOLIO",
    img:MyPortfolio,
    technologies:"Tailwindcss React.js ",
    details:"My personnel web site",
    isCodeAvailable : true,
    codeLink : "https://github.com/ousscher/My-Portfolio",  
    isLiveAvailable : true,
    liveLink : "https://my-portfolio-8745q4qce-ousschers-projects.vercel.app",

},

];

const Projects = ()=>{
    const [activeSlide, setActiveSlide] = useState(1);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex+1);
    };
    const [slidesPerView, setSlidesPerView] = useState(1);
    useEffect(() => {
        const updateSlidesPerView = () => {
          if (window.innerWidth < 768) { // Vous pouvez ajuster la largeur de déclenchement ici
            setSlidesPerView(1);
          } else{ if(window.innerWidth >= 768 && window.innerWidth < 992 ){
            setSlidesPerView(2);
          }else
          {
            setSlidesPerView(3);
          }}
        };
    
        window.addEventListener('resize', updateSlidesPerView);
        updateSlidesPerView();
    
        return () => {
          window.removeEventListener('resize', updateSlidesPerView);
        };
      }, []);
    return (
        <motion.section 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount: 0.25}}
        className="  flex flex-col items-center  pt-12" id="projects">
            <motion.h1
                variants={textVariant(0.5)}
                className=" text-md  text-center" >Get to know about</motion.h1>
                <motion.h1
                variants={textVariant(0.5)}
                className=' text-md  text-center text-3xl text-[#7127BA] font-bold' >My Projects</motion.h1>
            <motion.div 
            variants={slideIn('left','tween',0.2,1)}
            className="w-[90%]  p-10 ">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={60}
            slidesPerView={slidesPerView}
            navigation = {true}
            loop = {true}
            pagination={{ clickable: true } }
            onSlideChange={(swiper) =>{ handleSlideChange(swiper); 
            }}
            >
            {
                projects.map((project, index)=>(
                    <SwiperSlide key={index} >
                    {/* card project */}
                    <div  className={`text-center md:text-left mb-10  border-2  w-[100%] h-[70vh]   ${((index === activeSlide || (index ===0 && activeSlide===projects.length))&&slidesPerView===3) ? '' : 'mt-10'} `}>   
                        <div className="h-[40%] overflow-hidden border-b-[1px]">
                            <img src={project.img} alt={project.title} className=" z-1 w-full h-full o" />
                        </div>
                        <div className="h-[10%] border-b-[1px] flex items-center pl-2 ">
                            <p className="w-full text-center md:text-left">{project.technologies}</p>
                        </div>
                        <div  className="h-[50%] flex flex-col justify-evenly ">
                            <p className="text-center text-xl">{project.title}</p>
                            <p className="pl-2 text-sm ">{project.details}</p>
                            <div className="flex flex-row ">
                            
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`w-[30%] h-10 ${project.isLiveAvailable?" block":" hidden"} ml-3`}><button className={`bg-mainColor  px-4 h-[100%] w-[100%] rounded hover:scale-105  `}>Live</button></a>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={`w-[30%] h-10 ${project.isCodeAvailable?" block":" hidden"} ml-3`}><button className=" border-[1px] border-[gray]  h-[100%] w-[100%] rounded hover:scale-105   ">
                                code
                            </button></a>
                            <img src={lock} alt="lock" className={` h-10 w-10 ml-8 block ${project.isCodeAvailable?"hidden":""} ${project.isLiveAvailable?"hidden" : ""} cursor-pointer`} />
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
            </motion.div>
            
        </motion.section>
    );
}

export default Projects;
