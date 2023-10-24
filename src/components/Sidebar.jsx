import line from '../assets/line.png'
import { FaFacebook , FaGithub , FaLinkedin } from 'react-icons/fa';


const Sidebar = ()=>{
     
    return(
        <div className="h-[100vh] w-[44px]  fixed top-0 flex-col  items-center ">
                <div className='w-[100%] flex items-center justify-center'>
                <img src={line} alt="" />
                </div>
                <div className='ml-2 '> {/* les icons des contacts*/ }
                <div className='my-3'> <a href="/" className='pb-4   '><FaFacebook className=' text-3xl text-[gray]  hover:scale-110 hover:text-[white]  ' /></a></div>
                <div className='my-3'><a href="/" className='pt-4'><FaGithub className=' text-3xl text-[gray]  hover:scale-110 hover:text-[white]  '   /></a></div>
                <div className='my-3'><a href="/"><FaLinkedin className=' text-3xl text-[gray]  hover:scale-110 hover:text-[white] '  /></a></div>
                </div>
        </div>
    );
}

export default Sidebar;