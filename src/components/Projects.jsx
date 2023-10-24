import { useState } from "react";
import BigProjectCard from "../components/cardProject"
import SmallPRojectCard from "../components/SamllProjectCard"
import Me from '../assets/me.png'

const projects = [
{
    title:"Optimum",
    img:Me,
    details:"applicatoin mobile de reservation de rendez vous chez un medecin"
},
{
    title:"EverGreen",
    img:Me,
    details:"Jeu mobile distinée aux enfants concernatn la protection de l'environnement "
},
{
    title:"CseForums",
    img:Me,
    details:"Une platform de gestion de questions"
},
{
    title:"Esindigo",
    img:Me,
    details:"Site d'un evenement"
},
];

const Projects = ()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextProject = ()=>{
        setCurrentIndex((currentIndex + 1) % projects.length);
    }
    const prevProject = ()=>{
        setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
    }
    return (
        <div className=" mb-28 flex flex-col items-center ">
            <div className="mb-20">
                <p className="text-md text-center">Get to know about<br /><span className= " font-semibold text-[#7127BA] text-3xl">My Projects</span></p>
            </div>
            <button onClick={prevProject}>Précédent</button>
            <div className="w-[90%] bg-[] p-10 flex flex-row justify-between">
            <SmallPRojectCard project={projects[(currentIndex + 1) % projects.length]} />
            <BigProjectCard project={projects[currentIndex]} />
            <SmallPRojectCard project={projects[(currentIndex - 1 + projects.length) % projects.length]} />
            </div>
            
            <button onClick={nextProject}>Suivant</button>
        </div>
    );
}

export default Projects;