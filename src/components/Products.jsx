import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'


function Products() {
    var products = [
        {
            title: "Arqitel",
            description: "Arqu transit el product de la clase de la clase de la clase de la clase de la clase",
            live: true,
            case: true
        },
        {
            title: "TTR",
            description: "lorem ipsum dolor sit amet, consectet null a ante et justo e curs lorem ipsum dolor sit amet, consectet null a",
            live: true,
            case: false
        },
        {
            title: "YIR 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat corporis excepturi esse tempora animi ipsam suscipit vitae maxime!",
            live: true,
            case: true
        },
        {
            title: "Yahoo !",
            description: "Yahoo transit el product de la clase de la clase de la clase de la clase de la clase",
            live: true,
            case: false
        },

    ]

    const [pos, setpos] = useState(0);
    const mover = (val) => {
        setpos(val * 23)
    }
    return (
        <div className='mt-32 relative'>
            {products.map((val, index) => <Product value={val} mover={mover} count={index} />)}
            <div className=" absolute top-0 w-full h-full pointer-events-none">
                <motion.div 
                   initial={{ y: pos, x: "-50%" }}
                    animate={{ y: pos + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}
                    className=' absolute w-[32rem] h-[23rem] left-[44%] overflow-hidden'>


                    <motion.div 

                         animate={{ y: -pos + `rem` }}
                         transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                         className='w-full h-full bg-green-600'>
                         <video className="max-w-full" autoPlay muted loop
                            src="/src/assets/showcase_4_3.mp4" type="video/mp4" />
                         

                    </motion.div>


                    <motion.div

                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='w-full h-full bg-sky-500'>
                         <video className="max-w-full" autoPlay muted loop src="/src/assets/yearinreview.webm" type="video/webm" />
                         
                    </motion.div>


                    <motion.div 
                    
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='w-full h-full bg-sky-300'>
                        <video className="max-w-full" autoPlay muted loop src="/src/assets/YIR website 2022 4_3_VP9.webm" type="video/webm" />
                           

                    </motion.div>


                    <motion.div 
                    
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='w-full h-full bg-sky-800'>
                         <video className="max-w-full " loop muted autoPlay src="/src/assets/yahoo.webm" type="video/webm" />
                        
                    </motion.div>
                

                </motion.div>
            </div>
        </div>
    )
}

export default Products