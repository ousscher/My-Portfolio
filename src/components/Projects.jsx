import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Me from '../assets/evergreen.png'
import 'swiper/css';
import { useEffect } from "react";

const projects = [
{
    title:"Optimum",
    img:Me,
    technologies:"Fletter Firebase Haive",
    details:"applicatoin mobile de reservation de rendez vous chez un medecin"
},
{
    title:"EverGreen",
    img:Me,
    technologies:"Fletter Firebase Haive",
    details:"Jeu mobile distinée aux enfants concernatn la protection de l'environnement "
},
{
    title:"CseForums",
    img:Me,
    technologies:"Fletter Firebase Haive",
    details:"Une platform de gestion de questions"
},
{
    title:"Esindigo",
    img:Me,
    technologies:"Fletter Firebase Haive",
    details:"Site d'un evenement"
},
{
    title:"Esindigo",
    img:Me,
    technologies:"Fletter Firebase Haive",
    details:"Site d'un evenement"
},
{
    title:"Esindigo",
    img:Me,
    technologies:"Fletter Firebase Haive",
    details:"Site d'un evenement"
},
{
    title:"Esindigo",
    img:Me,
    technologies:"Fletter Firebase Haive",
    details:"Site d'un evenement"
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
        <div className="  flex flex-col items-center  pt-14" id="projects">
            <div className="">
                <p className="text-md text-center">Get to know about<br /><span className= " font-semibold text-[#7127BA] text-3xl">My Projects</span></p>
            </div>
            <div className="w-[90%]  p-10 ">
            {/* <SmallPRojectCard project={projects[(currentIndex + 1) % projects.length]} />
            <BigProjectCard project={projects[currentIndex]} />
            <SmallPRoject Card project={projects[(currentIndex - 1 + projects.length) % projects.length]} /> */}
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={60}
            slidesPerView={slidesPerView}
            navigation = {true? true : false}
            loop = {true}
            pagination={{ clickable: true } }
            onSlideChange={(swiper) =>{ handleSlideChange(swiper); 
               
            }}
            >
            {
                projects.map((project, index)=>(
                    
                    <SwiperSlide key={index} >
                        {console.log(index)}
                        {console.log(`     ${activeSlide}`)}
                    {/* card project */}
                    {/* ${((index === activeSlide || (index ===6 && activeSlide===7))&&slidesPerView===3) ? 'mt-0' : ''} */}
                    <div  className={`text-center mb-10  border-2  w-[100%] h-[63vh]   ${((index === activeSlide || (index ===0 && activeSlide===7))&&slidesPerView===3) ? '' : 'mt-10'} `}>
                        <div className="h-[40%] overflow-hidden border-b-[1px]">
                            <img src={project.img} alt={project.title} className=" w-full h-full object-cover" />
                        </div>
                        <div className="h-[10%] border-b-[1px] flex items-center pl-2 ">
                            <p>{project.technologies}</p>
                        </div>
                        <div  className="h-[50%] flex flex-col justify-evenly ">
                            <p className="text-center">{project.title}</p>
                            <p className="text-center">{project.details}</p>
                            <div className="flex flex-row ">
                            <button className="bg-mainColor px-4 h-10 rounded hover:scale-105 w-[30%] ml-2">Live</button>
                            <button className=" border-[1px] border-[gray] px-4 h-10 rounded hover:scale-105 w-[30%] ml-2">Code</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
            </div>
            
        </div>
    );
}

export default Projects;