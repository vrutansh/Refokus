import { motion } from 'framer-motion'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width, start, para, hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor: hover ==="true" && "#7443ff", padding: "25px"}} className={`bg-zinc-800 p-5 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between`}>
       <div className='w-full'>
           <div className='w-full flex items-center justify-between'>
            <h1>One Heading</h1>
            <IoIosArrowRoundForward/>
           </div>
          <h1 className='text-3xl text-medium mt-5'>Whatever Heading</h1>
       </div>

       <div className='down w-full '>
            {
                start && (
                    <>
                    <h1 className='text-6xl font-semibold tracking-normal'>Start a Project</h1>
                   <button className='rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5 '>Contact Us</button>
                   </>
                )
            }

         {para && (
             <p className='text-sm text-zinc-400 font-medium '>Lorem ipsum dolor sit amet consectetur.</p>
         )}
        
       </div>
    </motion.div>
  )
}

export default Card