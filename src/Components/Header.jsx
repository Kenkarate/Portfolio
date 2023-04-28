import React from 'react'
import {Link} from 'react-scroll'


function Header() {
  return (
    <>
     <div className='lg:w-[100vw] h-[10vh] px-10 grid lg:grid-cols-3 text-center content-center sticky top-0 bg-[#FFF3F1] z-10 text-[#DD5D5D]'>
        <div>
            <h1 className='text-[20px] font-bold items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-help'>Ajesh.dev</h1>
        </div>
        <div className='col-span-'>

        </div>
        <div className='cursor-pointer mt-2 lg:mt-0 '>
            <Link to='#home' spy={true} smooth={true} offset={-100} duration={500} className='px-2 lg:font-bold lg:text-[18px] hover:text-black hover:border-b-2 '>Home</Link>
            <Link to='#about' spy={true} smooth={true} offset={-100} duration={500} className='px-2 lg:font-bold lg:text-[18px] hover:text-black hover:border-b-2 '>About</Link>
            <Link to='#projects' spy={true} smooth={true} offset={-80} duration={500} className='px-2 lg:font-bold lg:text-[18px] hover:text-black hover:border-b-2 '>Projects</Link>
            <Link to='#contacts' spy={true} smooth={true} offset={-100} duration={900} className='px-2 lg:font-bold lg:text-[18px] hover:text-black hover:border-b-2 '>Contacts</Link>
        </div>
        </div> 
    </>
  )
}

export default Header
