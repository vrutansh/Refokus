import { motion } from 'framer-motion'
import React from 'react'
function Marquee({ imagesurl, direction }) {

  return (
    <div className='flex w-full overflow-hidden'>

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x:  direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className='flex flex-shrink-0 gap-40 py-10 pr-40'>
        {imagesurl.map(url => <img src={url} className='' />)}
      </motion.div>


      <motion.div
        initial={{ x: direction === 'left' ? "0" : "-100%" }}
        animate={{ x: direction === 'left' ? "-100%" : "0" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className='flex flex-shrink-0 gap-40 py-10 pr-40'>
        {imagesurl.map(url => <img src={url} className='' />)}
      </motion.div>
      



    </div>

  )
}

export default Marquee