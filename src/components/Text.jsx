import { motion } from "framer-motion"
import {textContainer, textVariant2} from '../motion.js'


const Text = ({title}) => {
  return (
    <motion.span
        variants={textContainer}
        className='font-bold text-lg sm:text-3xl'
        >
          {Array.from(title).map((letter, index ) => (
            <motion.span
            variants={textVariant2}
            key={index}
            >
              {letter ===' ' ? '\u00A0' : letter}
            
            </motion.span>
          ))}
        </motion.span> 
  )

}

export default Text