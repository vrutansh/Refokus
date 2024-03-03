import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    
    <div className='w-full h-full bg-zinc-900 font-["gilroy"] text-white'>
    <Navbar/>
    <Work/>
    <Stripes/>
    <Products/>
    <Marquees/>
    <Cards/>
    <Footer/>
    </div>
    
  )
}

export default App