import React from 'react'
import {ShoppingCart, User, Search} from "lucide-react";

export default function Navbar() {
  return (
    <div>
        <nav className='py-8  w-full top-0 left-0 fixed items-center z-10 px-8 flex justify-between bg-transparent '>

            <div className='text-[30px] text-white'>
               LOGO
            </div>

            <div className='text-[black] flex gap-12 font-[inter] items-center text-[18px]'>
            <a href="#" className='hover:underline text-white '>HOME</a>
            <a href="#" className='hover:underline text-white '>SPECIAL PRICE</a>
            <a href="#" className='hover:underline text-white '>NEW</a>
            <a href="#" className='hover:underline text-white '>CONTACT</a>
            </div>
               
            <div className='flex gap-5 text-white items-center'>
            <Search strokeWidth={1}/>
            <User strokeWidth={1}/>
            <ShoppingCart strokeWidth={1}/>
            </div>
        </nav>
    </div>
  )
}
