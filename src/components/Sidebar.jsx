import line from '../assets/line.png'
import { FaFacebook , FaGithub , FaLinkedin } from 'react-icons/fa';


const Sidebar = ()=>{
     
    return(
        <div className="hidden md:block h-[100vh] w-[44px]  fixed top-0 flex-col  items-center ">
                <div className='w-[100%] flex items-center justify-center'>
                <img src={line} alt="" />
                </div>
                <div className='ml-2 '> {/* les icons des contacts*/ }
                <div className='my-3'> <a  href="https://www.facebook.com/profile.php?id=100013043322287&locale=fr_FR" target="_blank" rel="noopener noreferrer" className='pb-4   '><FaFacebook className=' text-3xl text-[gray]  hover:scale-110 hover:text-[white]  ' /></a></div>
                <div className='my-3'><a  href="https://github.com/ousscher" target="_blank" rel="noopener noreferrer" className='pt-4'><FaGithub className=' text-3xl text-[gray]  hover:scale-110 hover:text-[white]  '   /></a></div>
                <div className='my-3'><a  href="https://www.linkedin.com/in/oussama-cherguelaine-300125291/" target="_blank" rel="noopener noreferrer"><FaLinkedin className=' text-3xl text-[gray]  hover:scale-110 hover:text-[white] '  /></a></div>
                </div>
        </div>
    );
}

export default Sidebar;