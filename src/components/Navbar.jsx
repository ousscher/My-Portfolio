import React, { useState , useRef , useEffect} from 'react';
import { FaFacebook , FaGithub , FaLinkedin  } from 'react-icons/fa';

const NavBar = ()=>{
const [activeItem, setActiveItem] = useState('hero'); //pour la section actuelle
const navRef = useRef(null);
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
      setActiveItem(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
    
        for (const section of sections) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
    
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            setActiveItem(section.id);
          }
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      const [isNavbarVisible, setIsNavbarVisible] = useState(false); //la variable pour afficher le navbar en petits devices
      const toggleNavbar = () => { //inverser la valeur du isNavbarVisible
        setIsNavbarVisible(!isNavbarVisible);
      };
    return(
    <div className='overflow-hidden flex flex-col justify-center ' ref={navRef}>
        <div className="  fixed top-0 w-[100%]  md:w-[96%] md:right-0  flex flex-row justify-between md:justify-evenly navbar  text-sm items-center ">
        <div className=" lg:w-[30%] ">
            {/* pour le logo apres */}
            <div className='w-[100%] md:hidden flex flex-row  justify-around'>
                <div className='mx-3'> <a href="https://www.facebook.com/profile.php?id=100013043322287" target="_blank" rel="noopener noreferrer"><FaFacebook className=' text-3xl text-[white]  hover:scale-110' /></a></div>
                <div className='mx-3'><a href="https://github.com/ousscher" target="_blank" rel="noopener noreferrer"><FaGithub className=' text-3xl text-[white]  hover:scale-110   '   /></a></div>
                <div className='mx-3'><a href="https://www.linkedin.com/in/oussama-cherguelaine-300125291/" target="_blank" rel="noopener noreferrer"><FaLinkedin className=' text-3xl text-[white]  hover:scale-110  '  /></a></div>
            </div>
        </div> 
        <button className='m-3 md:hidden' onClick={toggleNavbar}>
            <span class="material-symbols-outlined" style={{fontSize: '44px',} }>
            menu
         </span>
        </button>
        <button
            className={`hidden md:block text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeItem  === 'hero' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('hero')}
            >
            &lt;Home/&gt;
        </button>
        <button
            className={`hidden md:block text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeItem  === 'about' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('about')}
            >
            &lt;About/&gt;
        </button>
        <button
            className={`hidden md:block text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeItem  === 'skills' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('skills')}
            >
            &lt;Skills/&gt;
        </button>
        <button
            className={` hidden md:block text-[gray] p-4 hover:text-[white] hover:scale-110 ${activeItem  === 'projects' ? 'text-[white]' : ''}`}
            onClick={() => scrollToSection('projects')}
            >
            &lt;Projects/&gt;
        </button>
        <button
            className={`hidden md:block bg-mainColor px-4 h-10 rounded hover:scale-105 ${activeItem  === 'contact' ? '' : ''}`}
            onClick={() => scrollToSection('contact')}
            >
            Contact Me
        </button>
        </div>
        {/* le navbar de petits screens ---- rester à developper  */}  
        <div className={` ${isNavbarVisible?'block':'hidden'} md:hidden fixed z-[1000] top-5 w-[100%] bg-bgColor flex flex-col mt-16 justify-center items-center`}>
        <button
            className={` text-[gray] p-2 hover:text-[white] hover:scale-110 ${activeItem  === 'hero' ? 'text-[white]' : ''}`}
            onClick={() =>{
              scrollToSection('hero'); 
              toggleNavbar();
            } }
            >
            &lt;Home/&gt;
        </button>
        <button
            className={` text-[gray] p-2 hover:text-[white] hover:scale-110 ${activeItem  === 'about' ? 'text-[white]' : ''}`}
            onClick={() => {
              scrollToSection('about');
              toggleNavbar();
            }}
            >
            &lt;About/&gt;
        </button>
        <button
            className={` text-[gray] p-2 hover:text-[white] hover:scale-110 ${activeItem  === 'skills' ? 'text-[white]' : ''}`}
            onClick={() =>{
            scrollToSection('skills');
            toggleNavbar();
          }}
            >
            &lt;Skills/&gt;
        </button>
        <button
            className={`  text-[gray] p-2 pb-4 hover:text-[white] hover:scale-110 ${activeItem  === 'projects' ? 'text-[white]' : ''}`}
            onClick={() => { scrollToSection('projects');
            toggleNavbar();
          }}
            >
            &lt;Projects/&gt;
        </button>
        <button className={` bg-mainColor px-2 w-36 h-10 rounded hover:scale-105 ${activeItem  === 'contact' ? '' : ''}`}
            onClick={() =>{ scrollToSection('contact');
            toggleNavbar();
          }}
            >
            Contact Me
        </button>
        </div>
    </div>
    );
}

export default NavBar;