import texture from '../assets/texture.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion } from "framer-motion"
import { textVariant } from '../motion';
import {staggerContainer, slideIn, buttonVariants} from '../motion.js'

const Skills = ()=>{
    return(
        <motion.section
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount: 0.25}}
        className="flex justify-center items-center flex-col pb-4  pt-8 "  id="skills" >
            <div className="mb-5" >
                <motion.h1
                variants={textVariant(0.5)}
                className="mt-10 text-md  text-center" >What skills I have</motion.h1>
                <motion.h1
                variants={textVariant(0.5)}
                className='mb-10 text-md  text-center text-3xl text-[#7127BA] font-bold' >My Skills</motion.h1>
            </div>
            <div className="w-[90%] flex justify-evenly  pt-12 ">
                <motion.div
                variants={slideIn('right','tween',0.2,1)}
                className='w-[35%] mt-14 hidden lg:block'>
                    <img src={texture} alt="texture" />
                </motion.div>
                <motion.div  
                variants={slideIn('left','tween',0.2,1)}
                className=' w-[90%] lg:w-[60%] hidden  md:flex flex-row justify-around ' >
                    <div className = "w-[30%] ">
                    <div className="  border-2 w-[100%]">
                    <div className="border-b-2 ">
                        {/* header */}
                        <p className="p-2">Languages</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-2 " >Java</p>
                        <p className="m-2 " >C</p>
                        <p className="m-2 " >Java Script</p>
                        <p className="m-2 " >Dart</p>
                    </div>
                    </div>
                    </div>
                    <div className='w-[30%]' >
                    <div className="  border-2 w-[100%] mb-4 ">
                    <div className="border-b-2 ">
                        <p className="p-2 ">Tools</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-2 " >Git/Github</p>
                        <p className="m-2 " >Figma</p>
                        <p className="m-2 " >Photoshop/ Illustrator</p>
                    </div>
                    </div> 
                    <div className="  border-2 w-[100%] ">
                    <div className="border-b-2 ">
                        {/* header */}
                        <p className="p-2">Databases</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-2 " >SQLite</p>
                        <p className="m-2 " >MYSQL</p>
                        <p className="m-2 " >Mongo</p>
                    </div>
                    </div>
                    </div>
                    <div className='w-[30%]'>
                    <div className="  border-2 w-[100%] mb-4 ">
                    <div className="border-b-2 ">
                        {/* header */}
                        <p className="p-2">Frameworks</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-2 " >React.js/ Vue.js</p>
                        <p className="m-2 " >Express.js</p>
                        <p className="m-2 " >Flutter</p>
                        <p className="m-2 " >React Native</p>
                    </div>
                    </div>
                    <div className="  border-2 w-[100%] mb-4 ">
                    <div className="border-b-2 ">
                        {/* header */}
                        <p className="p-2">Others</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-2 " >HTML5</p>
                        <p className="m-2 " >CSS3</p>
                        <p className="m-2 " >TailwindCss</p>
                        <p className="m-2 " >Firebase</p>
                    </div>
                    </div>
                    </div>
                </motion.div >
            </div>
            <div className='w-[90%]  p-10 flex items-center justify-center md:hidden  '>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={60}
            slidesPerView={1}
            navigation = {true}
            loop = {true}
            pagination={{ clickable: true } }
            onSlideChange={(swiper) =>{  
            }}
            >
                <SwiperSlide>
                    <div className="  border-2 w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left  ">
                    <div className="border-b-2 h-[20%]">
                        {/* header */}
                        <p className="p-2">Languages</p>
                    </div>
                    <div className="flex flex-col h-[80%] justify-evenly">
                        <p className="m-2 " >Java</p>
                        <p className="m-2 " >C/C++</p>
                        <p className="m-2 " >JavaScript</p>
                        <p className="m-2 " >Dart</p>
                        <p className="m-2 " >Python</p>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="  border-2 w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left ">
                    <div className="border-b-2 h-[20%]">
                        {/* header */}
                        <p className="p-2">Tools</p>
                    </div>
                    <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2 " >Git/Github</p>
                        <p className="m-2 " >Figma</p>
                        <p className="m-2 " >Photoshop/ Illustrator</p>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="  border-2 w-[60%] ml-[20%] mb-10 h-[30vh]  text-center md:text-left">
                    <div className="border-b-2 h-[20%]">
                        {/* header */}
                        <p className="p-2">Databases</p>
                    </div>
                    <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2 " >SQLite</p>
                        <p className="m-2 " >MYSQL</p>
                        <p className="m-2 " >Mongo</p>
                        <p className="m-2 " >ElasticSearch</p>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="  border-2 w-[60%] ml-[20%] mb-10 h-[30vh]  text-center md:text-left">
                    <div className="border-b-2 h-[20%]">
                        {/* header */}
                        <p className="p-2">Frameworks</p>
                    </div>
                    <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2 " >React.js/Next.js</p>
                        <p className="m-2 " >Express.js</p>
                        <p className="m-2 " >Flutter</p>
                        <p className="m-2 " >React Native</p>
                        <p className="m-2 " >Django</p>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="  border-2 w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left ">
                    <div className="border-b-2 h-[20%]">
                        {/* header */}
                        <p className="p-2">Others</p>
                    </div>
                    <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2 " >HTML5</p>
                        <p className="m-2 " >CSS3</p>
                        <p className="m-2 " >TailwindCss</p>
                        <p className="m-2 " >Firebase</p>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </motion.section>  
    );
}

export default Skills;
