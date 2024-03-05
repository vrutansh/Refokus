import React from 'react'
import Button from './Button'

function Product({value, mover, count}) {
  return (
    <div className='w-full py-16 h-[23rem] text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-medium'>{value.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10'>{value.description}</p>
                <div className='flex items-center gap-5'>
                {value.live && <Button/> }
                {value.case && <Button title='Case Study'/> }
                </div>
                
            </div> 
        </div>
    </div>
  )
}

export default Product