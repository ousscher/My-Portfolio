import React from 'react'
import TitleSec from './TitleSec'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import sebba9 from '../assets/sebba9.png'
import cert from '../assets/cert.png'

import { motion } from "framer-motion"
import {staggerContainer, textVariant} from '../motion.js'
const Certificate = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className='paddingSec' id='certeficates' >
      <TitleSec text="What I Got Certeficate" title="Certeficates" />
      <motion.div
      variants={textVariant(0.2)}
      >
      <Swiper navigation={true} modules={[Navigation]} className="sm:w-[80%] m-auto">
        <SwiperSlide >
          <div className='p-4 bg-bgVariant w-[80%] md:w-[50%] m-auto flex flex-col items-start gap-4' >
            <img src={sebba9} alt="sebba9Photo" className='w-full h-fit m-auto'/>
            <p>It's National Hackathon orginized in summer 2022 by Algerian Tech Makers. I was a member in team with 5 persons and we classed the 2nd place. <br />Our project is open source and it's an app mobile to help the poor to find the associations close to him  and contact them </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-4 bg-bgVariant w-[80%] md:w-[50%] m-auto flex flex-col items-start gap-4' >
            <img src={cert} alt="sebba9Photo" className='w-full h-fit m-auto'/>
            <p>It's National Hackathon orginized in December 2022  by GDG and WTM Algiers. I was a member in team with 5 persons  <br />Our project is open source and it's a platform and IOT to help emergencies cars to acces into hospital or client quickly</p>
          </div>
        </SwiperSlide>
        
      </Swiper>
      </motion.div>

    </motion.div>
  )
}

export default Certificate