import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let Links =[
        {name:"Inicio",link:"/"},
        {name:"Arcade",link:"#album"},
        {name:"Biografía",link:"#bio"},
        {name:"Videos",link:"#videos"},
        {name:"Conciertos",link:"#events"},
        {name:"Contacto",link:"#contact"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-40 bg-black h-[70px] lg:z-auto lg:bg-auto lg:h-auto'>

           <div className='md:flex items-center justify-between bg-dark py-4 md:px-10 px-7 '>

            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon className='text-white'/> : <Bars3BottomRightIcon className='text-white' />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-dark md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all mx-auto duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-12 md:my-0 my-7 font-semibold text-green articulat'>
                        <a href={link.link} className='navbar-link text-gray-800 hover:text-white-400 duration-500'>{link.name}</a>
                    </li>))
                }
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;