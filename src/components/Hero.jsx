import React from 'react'
import me from './../assets/me.png'

const Hero = () => {
  return (
    <div className=' mt-28 flex items-center flex-col  '>
      <div className='flex w-[55%]  relative '> 
      <img src={me} alt="myPhoto " className='  h-72 w-64'  />
      <p className='absolute top-4 left-56  text-center text-sm'> Hello! I am  <span className='text-[#7127BA] font-bold'>Oussama Cherguelaine</span></p>
      <p className='absolute top-28 left-56 text-xs font-[Preahvihear]'>A Software Engineer who <br /> <span className=' text-2xl '>Assesses a program</span > <br /> <span className=' text-2xl '>by its <span className='text-[#7127BA] tracking-widest'>efficiency...</span></span> <br /><span className='last'>Because if it doesn't run smoothly, what's the point?"</span></p>
      </div>
      <div className=' my-5  w-[60%] flex-col justify-'>
        <p className=' font-[Preahvihear] text-4xl  '>I am a student in software engineering   <br /><span className='text-sm'>At the Higher National School of Computer Science, ESI Algiers</span></p>
      </div>
      <div className=' mt-5 mb-16  w-[60%]  flex-col '> 
      <p className='font-[Preahvihear] text-lg '> I'm an experienced web and mobile developer, skilled in crafting applications for both web and mobile platforms. I'm proficient in programming languages and tools necessary for designing responsive websites and native or hybrid mobile applications, and I'm passionate about technological innovation.</p>
      </div>
    </div>
    
  )
} 

export default Hero