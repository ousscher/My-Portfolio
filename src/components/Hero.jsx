import React from 'react'
import me from './../assets/me.png'
import CV from '../assets/cv.pdf'

const Hero = () => {
  return (
      <div className=' pt-20 flex items-center flex-col ' id='hero' >
      <div className='flex w-[55%]  relative '> 
      <img src={me} alt="myPhoto " className='  h-72 w-64'  />
      <p className='absolute top-4 left-56  text-center text-sm'> Hello! I am  <span className='text-[#7127BA] font-bold'>Oussama Cherguelaine</span></p>
      <p className='absolute top-28 left-56 text-xs font-[Preahvihear]'>A Software Engineer who <br /> <span className=' text-2xl '>Assesses a program</span > <br /> <span className=' text-2xl '>by its <span className='text-[#7127BA] tracking-widest'>efficiency...</span></span> <br /><span className='last'>Because if it doesn't run smoothly, what's the point?"</span></p>
      </div>
      <div className=' my-5  w-[60%] flex-col justify-'>
        <p className=' font-[Preahvihear] text-4xl text-center '>I am a student in software engineering   <br /><span className='text-sm'>At the Higher National School of Computer Science, ESI Algiers</span></p>
      </div>
      <div className=' mt-8 mb-16  w-[60%] flex flex-row items-center justify-evenly '>
      <a href={CV} download>
              <button className='bg-mainColor border-[1px] border-mainColor w-[15rem] px-4 py-2 text-lg rounded-[8px]   hover:bg-[transparent] hover:text-mainColor hover:border-[mainColor] font-medium hover:font-semibold hover:scale-105'  >Download Cv</button>
            </a>
      <a href="#contact">
        <button className='px-4 py-2  rounded-[8px]  border-[1px] w-[15rem] hover:bg-mainColor text-mainColor hover:text-[white] text-lg hover:border-mainColor hover:scale-105 hover:text-white hover:font-medium font-semibold  ' >Let's Talk</button>
      </a>
      </div>
    </div>
  )
} 

export default Hero