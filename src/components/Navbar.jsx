import React, { useState } from 'react';
import { FaFacebook , FaGithub , FaLinkedin  } from 'react-icons/fa';

const NavBar = ()=>{
    const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
    return(
        <div className='flex flex-col'>
            <div className="  fixed top-0 w-[100%] md:w-[96%] right-0   flex justify-between md:justify-evenly navbar text-sm items-center ">
        <div className=" lg:w-[30%] ">
            {/* pour le logo apres */}
            <div className='w-[100%] md:hidden flex flex-row  justify-around'>
                <div className='mx-3'> <a href="/"><FaFacebook className=' text-3xl text-[white]  hover:scale-110' /></a></div>
                <div className='mx-3'><a href="/"><FaGithub className=' text-3xl text-[white]  hover:scale-110   '   /></a></div>
                <div className='mx-3'><a href="/"><FaLinkedin className=' text-3xl text-[white]  hover:scale-110  '  /></a></div>
            </div>
        </div> 
        <button className='m-3 md:hidden'>
        <span class="material-symbols-outlined" style={{fontSize: '44px',} }>
            menu
         </span>
        </button>
        <button
            className={`hidden md:block text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeSection === 'hero' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('hero')}
            >
            &lt;Home/&gt;
        </button>
        <button
            className={`hidden md:block text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeSection === 'about' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('about')}
            >
            &lt;About/&gt;
        </button>
        <button
            className={`hidden md:block text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeSection === 'skills' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('skills')}
            >
            &lt;Skills/&gt;
        </button>
        <button
            className={` hidden md:block text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeSection === 'projects' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('projects')}
            >
            &lt;Projects/&gt;
        </button>
        {/* <button
            className={`text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeSection === 'certificate' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('certificate')}
            >
            &lt;Certificate/&gt;
        </button> */}
        <button
            className={`hidden md:block bg-mainColor px-4 h-10 rounded hover:scale-105 ${activeSection === 'contact' ? '' : ''}`}
            onClick={() => scrollToSection('contact')}
            >
            Contact Me
        </button>
        </div>
        {/* le navbar dans le petits screens */}
        {/* <div className=' block lg:hidden'>
        <button
            className={`hidden md:block text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeSection === 'hero' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('hero')}
            >
            &lt;Home/&gt;
        </button>
        <button
            className={`hidden md:block text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeSection === 'hero' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('hero')}
            >
            &lt;Home/&gt;
        </button>
        </div> */}
        </div>
    );
}

export default NavBar;