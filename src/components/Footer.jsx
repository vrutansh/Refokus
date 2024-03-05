import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11.5rem] font-semibold leading-none tracker-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-300'>Socials</h4>
                    {["Instagram", "Twitter (X ?)", "LinkdIn"].map((items, index)=> <a className='block mt-3 text-zinc-400' >{items}</a>)}
                </div>

                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-400'>Sitemap</h4>
                    {["Home", "Work", "Careers", "Contact"].map((items, index)=> <a className='block mt-3 text-zinc-300' >{items}</a>)}
                </div>

                <div className='basis-1/2'>
                    <p className='text-right items-end'>Refokus is the poineer in digital agency driver by desgin and empowered by technology.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer