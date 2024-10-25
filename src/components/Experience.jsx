import { motion } from 'framer-motion'
import React from 'react'


function Experience() {
  return (
    <div className='pb-4'>
        <motion.h2 whileInView={{opacity:1 , y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Experience</motion.h2>
        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-stone-400'>02/2024 - 08/2024</p>
                </motion.div>
                <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h3 className='mb-2 font-semibold'>Full Stack Web Developer Intern - <span className='text-sm text-stone-500'>Luminar Technolab</span></h3>
                    <p className='mb-4 text-stone-400'>Developed and maintained web applications using Mearn stack.Designed and implemented RESTful APIs for 
                    data communication.Collaborated with cross-functional teams to deliver high quality software products on schedule.</p>
                    <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Javascript</span>
                    <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Angular</span>
                    <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Postman</span>
                </motion.div>
            </div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-stone-400'>04/2020 - 01/2022</p>
                </motion.div>
                <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h3 className='mb-2 font-semibold'>Data Entry Clerk (Part-time) - <span className='text-sm text-stone-500'>Live Associates</span></h3>
                    <p className='mb-4 text-stone-400'>Live Associates involved collaborating with a dynamic team, where you honed your skills in client interaction and project management. This experience enriched your professional development and deepened your understanding of the industry, preparing you for future challenges.</p>
                    <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>MS WORD</span>
                    <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>EXCEL</span>
                    <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Adobe Photoshop</span>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Experience