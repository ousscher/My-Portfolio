import React from 'react'
import me from './../assets/me.png'
import CV from '../assets/cv.pdf'
import { motion } from "framer-motion"
import {staggerContainer, slideIn, buttonVariants} from '../motion.js'
import {textContainer, textVariant2} from '../motion.js'



const Hero = () => {
  return (
      <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount: 0.25}}
      className='pt-32  md:pt-20 flex items-center flex-col mb-20 ' id='hero' >
      <motion.div variants={slideIn('left','tween',0.2,1)}  className='flex w-[55%] relative  '> 
      <img src={me} alt="myPhoto " className=' w-64 md:w-72'  />
      {/* faire le motion de text */}
      < motion.p
        variants={textContainer}
        className=' hidden md:block absolute top-4  left-44 md:left-60  text-center text-sm'
        >
          {Array.from("Hello! I am ").map((letter, index ) => (
            <motion.span
            variants={textVariant2}
            key={index}
            >
              {letter ===' ' ? '\u00A0' : letter}
            
            </motion.span>
          ))}
          {Array.from("Oussama Cherguelaine").map((letter, index ) => (
            <motion.span
            variants={textVariant2}
            key={index}
            className='text-[#7127BA] font-bold'
            >
              {letter ===' ' ? '\u00A0' : letter}
            
            </motion.span>
          ))}
          
        </motion.p>
        <motion.div
          variants={textContainer}
          className='absolute top-4 left-44 md:left-60 text-center text-sm block sm:hidden'
          style={{ whiteSpace: 'pre-line' }}
        >
          {["Hello! I am", "Oussama" , "Cherguelaine"].map((word, wordIndex) => (
            <div key={wordIndex}>
              {Array.from(word).map((letter, letterIndex) => (
                <motion.span
                  variants={textVariant2}
                  key={letterIndex}
                  className={wordIndex === 1 ||wordIndex ===2 ? 'text-[#7127BA] font-bold' : ''}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      <motion.p className=' hidden md:block absolute top-20 lg:top-28 left-60 text-sm lg:text-base  font-[Preahvihear]'>A Software Engineer who <br /><span className=' text-2xl lg:text-3xl  '>Assesses a program</span > <br /> <span className=' text-3xl '>by its  <span className='text-[#7127BA] tracking-widest text-2xl lg:text-3xl'>efficiency...</span></span> <br /><span className='text-sm tracking-wide'>Because if it doesn't run smoothly, what's the point?</span></motion.p>
      </motion.div>
      <motion.div
      variants={buttonVariants}
      initial="hidden"
      whileInView="show"
      className='w-[100%] flex flex-col items-center'
      >
      <div className=' my-12 md:my-8  w-[60%]  flex-col '>
        <p className=' font-[Preahvihear] text-xl sm:text-2xl lg:text-4xl text-center '>I am a student in software engineering  </p>
        <p className='mt-4 md:mt-0 text-center text-sm'>At the Higher National School of Computer Science, ESI Algiers</p>
      </div>
      <div className=' mt-8 w-[60%] flex flex-col gap-4 sm:flex-row items-center justify-evenly '>
      <a href={CV} download>
              <button className='bg-mainColor border-[1px] border-mainColor w-[15rem] px-4 py-2 text-lg rounded-[8px]   hover:bg-[transparent] hover:text-mainColor hover:border-[mainColor] font-medium hover:font-semibold hover:scale-105'  >Download Cv</button>
            </a>
      <a>
        <button className='px-4 py-2  rounded-[8px]  border-[1px] w-[15rem] hover:bg-mainColor text-mainColor hover:text-[white] text-lg hover:border-mainColor hover:scale-105 hover:text-white hover:font-medium font-semibold  '
        onClick={
          ()=>{
            const section = document.getElementById("contact");
              section.scrollIntoView({ behavior: 'smooth' });
            }
        }
         >Let's Talk</button>
      </a>
      </div>
      </motion.div>
    </motion.div>
  )
} 

export default Hero