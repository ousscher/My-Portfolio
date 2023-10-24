import React from 'react'

import {motion} from 'framer-motion'
import {textVariant} from '../motion.js'


const TitleSec = ({text,title}) => {
  return (
    <div className='text-center mb-[3rem]' >
        <motion.p
        variants={textVariant(0.5)}
        className="text-colorLight" >{text}</motion.p>
        <motion.p 
        variants={textVariant(0.5)}
        className='font-bold text-3xl text-colorPrimary' >{title}</motion.p>
    </div>
  )
}

export default TitleSec