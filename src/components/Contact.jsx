import React, { useRef  , useState} from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"
import {staggerContainer, textVariant , slideIn} from '../motion.js'

const Contact = () => {
  const [message, setMessage] = useState(null);
  const [succes , setSucess] = useState(null);
  const iform = useRef();
  const sendEmail = (e) => {
    setMessage("Envoie en cours");
    e.preventDefault();
    emailjs.sendForm('service_jor27eu', 'template_dcwk33g', iform.current ,"cWP2vEDQP2EeQWxur"  )
    .then((response) => {
      setMessage("E-mail envoyé avec succès");
      setSucess(true);
      setTimeout(() => {
        setMessage(null); // Efface le message après 2 secondes
      }, 2000);
    })
    .catch((error) => {
      setMessage("Erreur lors de l'envoi de l'e-mail");
      setSucess(false);
      setTimeout(() => {
        setMessage(null); // Efface le message après 2 secondes
      }, 2000);
    });

  e.target.reset();
};
  return (
    <motion.section 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className='paddingSec overflow-x-hidden pb-[8rem] pt-16' id='contact'  >
      <div className="mb-20" id='contact' >
      <motion.h1
      variants={textVariant(0.5)}
      className=" text-md  text-center" >Get In Touch</motion.h1>
      <motion.h1
      variants={textVariant(0.5)}
      className=' text-md  text-center text-3xl text-[#7127BA] font-bold' >Contact Me</motion.h1>
            </div>
      <motion.div
       variants={slideIn('right','tween',0.2,1)}
      className='w-[90%] 	 lg:w-[80%] m-auto flex flex-col md:flex-row gap-10 md:gap-[4rem] lg:gap-[8rem] xl:gap-[10rem]' >
        <div className='flex flex-col  gap-10 '>
        <a href="mailto:basset.rezazi26@gmail.com" target="_blank" rel="noopener noreferrer" >
          <div className='  flex flex-col hover:cursor-pointer hover:bg-[transparent] hover:border-mainColor hover:border-[1px] items-center py-4 px-8 rounded-[15px] gap-4 bg-mainColor  '>
            <MdEmail className='text-3xl' />
            <p className='text-center' >lo_cherguelaine@esi.dz</p>
            <p>Send a message</p>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/oussama-cherguelaine-300125291/" target="_blank" rel="noopener noreferrer">
          <div className='flex flex-col hover:cursor-pointer hover:bg-[transparent] hover:border-mainColor hover:border-[1px] items-center py-4 px-8 rounded-[15px] gap-4 bg-mainColor  ' >
            <FaLinkedin className='text-3xl' />
            <p className='text-center' > Cherguelaine Oussama</p>
           <p>Send a message</p>
          </div>
          </a>
        </div>

        <div className='md:hidden flex items-center justify-center gap-4'>
          <div className='w-[3rem] h-[2px] bg-colorPrimary' ></div>
          <p className='text-colorPrimary text-xl' >OR</p>
          <div className='w-[3rem] h-[2px] bg-colorPrimary' ></div>

        </div>

        <form ref={iform}
        onSubmit={sendEmail}
        className='flex flex-col items-center gap-4 w-full'
        >
          <input type="text" name='name' placeholder='Your Full Name' className='py-2 px-4 bg-[transparent] outline-none text-colorWhite h-[50px] rounded-[12px] border-[1px] border-colorPrimary w-full' />
          <input type="email" name='email' placeholder='Your Email' className='py-2 px-4 bg-[transparent] outline-none text-colorWhite h-[50px] rounded-[12px] border-[1px] border-colorPrimary w-full'/>
          <textarea name="message" id="" cols="20" rows="6" placeholder='Your Message' className='py-2 px-4 bg-[transparent] outline-none text-colorWhite rounded-[12px] border-[1px] border-colorPrimary w-full'></textarea>
          <button className='bg-mainColor px-4 py-2  rounded hover:scale-105   hover:border-mainColor hover:border-2  ' >Send Message</button>
        </form>
      </motion.div>
      <div className='flex justify-center items-center h-32 '>
      {message && <p className={` text-xl font-semibold ${succes ===null ? "" : succes===false ? " text-[#ff0000e7]" : "text-[green]"}`} >{message}</p>}
      </div>
    </motion.section>
  )
}

export default Contact