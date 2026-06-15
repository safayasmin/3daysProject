import React from 'react'
import {FiHeart,FiShoppingCart,FiUser} from "react-icons/fi"

const Navbar = () => {
  return (
    <div>
        <div className='fixed top-0 left-0  w-full bg-black border-b border-white/10 backdrop-blur-xl  text-[#f5e6d3] py-4 px-8 flex items-center justify-between'>
        <h1 className='text-5xl '
         style={{ fontFamily: "Playfair Display, serif" }}
        > 
         bloomcraft
        </h1>

        <div className='text-3xl text-[#f5e6d3] tracking-[6px]'
        style={{ fontFamily: "Playfair Display, serif" }}
        >
        chocolate
         </div>
            <input  className='bg-[#f5e6d3] text-black rounded-full py-2.5 px-8'
            type="text" 
            placeholder='Search Chocolate...'
            />


<div className='flex items-center gap-5'>
     <FiHeart className='text-xl' />
     <button className='text-black  bg-[#f5e6d3] flex items-center py-2 px-4 rounded-full'>
        Add to Cart
        <FiShoppingCart />
     </button>
     <FiUser className='text-xl'/>
</div>
        </div> 
    </div>
  )
}

export default Navbar
