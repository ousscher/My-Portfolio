import React,{useState} from 'react'
import { projectsData } from '../data'
import TitleSec from './TitleSec'
import { motion } from "framer-motion"
import {portfolioVariant, staggerContainer} from '../motion.js'

const Portfolio = () => {
  const[projectType,setProjectType] = useState(projectsData)
  
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className='paddingSec' id='portfolio' >
      <TitleSec text="My Recent Work" title="Portfolio" />
      <div className='flex items-center justify-center mb-[1rem] gap-4 text-colorLight'>
        <div className='flex flex-col gap-2'>
          <p className='text-sm sm:text-2xl cursor-pointer hover:text-colorWhite' onClick={()=>setProjectType(projectsData)}  >All Projects</p>
          <div className='h-[4px] bg-colorPrimary w-full' ></div>
        </div>
          <div className='flex flex-col gap-2'>
          <p className='text-sm sm:text-2xl cursor-pointer hover:text-colorWhite' onClick={()=>setProjectType(projectsData.filter((p)=>p.type!=="group"))} >Personal Works</p>
          <div className='h-[4px] bg-colorPrimary w-full' ></div>
          </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm sm:text-2xl cursor-pointer hover:text-colorWhite' onClick={()=>setProjectType(projectsData.filter((p)=>p.type!=="personal"))}>Group Works</p>
          <div className='h-[4px] bg-colorPrimary w-full' ></div>
        </div>
      </div>
      <p className='w-[90%] w-[80%] m-auto mb-[1rem]' ><span className='font-bold' >Note : </span>There are full stack projects that i made but i can't deploy it because deploy backend now is not free. You can find the full stack projects in my Guthub. <a href="https://github.com/Abdelbasset10" className='text-colorPrimary' >Github</a> </p>
      <motion.div
      variants={portfolioVariant}
      initial="hidden"
      whileInView="show"
      className='flex flex-col md:flex-row flex-wrap gap-4 w-[90%] md:w-[80%] m-auto'>
        {projectType.map((project)=>{
          return (
            <div className=' w-[80%] sm:w-[50%] m-auto md:ml-0 md:w-[46%] md:mr-0 lg:w-[31%] bg-bgVariant p-4 rounded-[12px]' key={project.id} >
              <img src={project.projImg} alt="projectImg" className=' w-full sm:w-[18rem] h-[10rem]  rounded-[12px]' />
              <p className='my-[1rem]' >{project.dec}</p>
              <a href={project.siteUrl}>
                <button className='border-[1px] hover:bg-colorPrimary hover:text-colorWhite  btn text-colorPrimary'>Live Demo</button>
              </a>
            </div>
          )
        })}

      </motion.div>

    </motion.div>
  )
}

export default Portfolio