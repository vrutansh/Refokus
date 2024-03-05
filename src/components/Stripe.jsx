import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.7%] px-10 py-5 border-t-[1.3px] border-b-[1.3px] border-r-[1.3px] border-zince-600 flex justify-between'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe