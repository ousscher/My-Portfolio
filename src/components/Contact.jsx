import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
   
  };
  return (
    <div className='paddingSec overflow-x-hidden pb-[8rem]' id='contact' >
      <div className="mb-20">
                <p className="text-md text-center">Get In Touch<br /><span className= " font-semibold text-[#7127BA] text-3xl">Contact Me</span></p>
            </div>
      <div className='w-[90%] 	 lg:w-[80%] m-auto flex flex-col md:flex-row gap-10 md:gap-[4rem] lg:gap-[8rem] xl:gap-[12rem]' >
        <div className='flex flex-col  gap-10'>
          <div className='flex hover:bg-[transparent] hover:border-colorPrimary hover:border-[1px] flex-col items-center py-4 rounded-[15px] px-8 gap-4 bg-bgVariant'>
            <MdEmail className='text-3xl' />
            <p className='text-center' >basset.rezazi26@gmail.com</p>
            <a href="mailto:basset.rezazi26@gmail.com" className='text-colorPrimary' >Send a message</a>
          </div>
          <div className='flex flex-col hover:bg-[transparent] hover:border-colorPrimary hover:border-[1px] items-center py-4 px-8 rounded-[15px] gap-4 bg-bgVariant' >
            <FaLinkedin className='text-3xl' />
            <p className='text-center' >Rezazi Mohamd Abdelbasset</p>
            <a href="https://www.linkedin.com/in/rezazi-mohamed-abdelbasset-2199a824b/" className='text-colorPrimary'>Send a message</a>
          </div>
        </div>

        <div className='md:hidden flex items-center justify-center gap-4'>
          <div className='w-[3rem] h-[2px] bg-colorPrimary' ></div>
          <p className='text-colorPrimary text-xl' >OR</p>
          <div className='w-[3rem] h-[2px] bg-colorPrimary' ></div>

        </div>

        <form ref={form}
        onSubmit={sendEmail}
        className='flex flex-col items-start gap-4 w-full'
        >
          <input type="text" name='name' placeholder='Your Full Name' className='py-2 px-4 bg-[transparent] outline-none text-colorWhite h-[50px] rounded-[12px] border-[1px] border-colorPrimary w-full' />
          <input type="email" name='email' placeholder='Your Email' className='py-2 px-4 bg-[transparent] outline-none text-colorWhite h-[50px] rounded-[12px] border-[1px] border-colorPrimary w-full'/>
          <textarea name="message" id="" cols="20" rows="6" placeholder='Your Message' className='py-2 px-4 bg-[transparent] outline-none text-colorWhite rounded-[12px] border-[1px] border-colorPrimary w-full'></textarea>
          <button className='btn bg-colorPrimary text-bgVariant hover:bg-[transparent] hover:border-colorPrimary hover:border-[1px] hover:text-colorWhite' >Send Message</button>
        </form>

      </div>
    </div>
  )
}

export default Contact