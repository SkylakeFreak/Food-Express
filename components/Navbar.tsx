"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import img1 from "@/rec/logo.jpg";
import Link from 'next/link';
import img2 from "../rec/bgg.jpg"
import img3 from "../rec/andbg.jpg"
import {Aclonica, Averia_Sans_Libre, Jockey_One, Luckiest_Guy, Pacifico, Prompt, Rock_Salt, Rubik_Broken_Fax, Rubik_Maps, Ubuntu, Unica_One} from "@next/font/google"; 
import { Denk_One } from 'next/font/google';
import { text } from 'stream/consumers';

const roboto=Ubuntu({
  subsets:["latin"],
  weight:'400'
})
const roboto4=Jockey_One({
  subsets:["latin"],
  weight:'400'
})
const roboto3=Aclonica({
  subsets:["latin"],
  weight:'400'
})
const roboto1=Pacifico({
  subsets:["latin"],
  weight:'400'
})
const anta=Averia_Sans_Libre({
  subsets:["latin"],
  weight:'400'
})

function Navbar() {
  const handleclick=()=>{
    window.location.reload();
  }
  const [size,issize]=useState(false);
  const check=()=>{
    issize(!size);
    
  }
  const [text, count] = useTypewriter({
    words: ["Cook like a chef!", "Explore infinite Cusines", "<LoveToCookMore/>"],
    
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen bg-pwhite flex flex-col relative'>
      <Image src={img2} className='hidden  md:flex object-cover h-screen' alt="iamge"></Image>
      <Image src={img3} className='flex md:hidden object-cover h-screen' alt="iamge"></Image>
      
      
      
    <div className='h-20 bg-white top-0 shadow-2xl flex fixed left-0 right-0 opacity-90'>
    
      
      <Image src={img1} className='h-20 w-20 ml-5 p-2 md:p-0' alt="logo"/>
      <div className='flex justify-center items-center'>
        <h1 style={anta.style} className='md:ml-2 text-3xl'>FOOD EXPRESS</h1>
        
      </div>
      
      <div style={anta.style} className='hidden md:flex gap-5 2xl:gap-20 md:mr-20 items-center ml-auto lg:text-2xl font text-md'>
      <Link href="#navbar"><h1>Home</h1></Link>
      <Link href="#about"><h1>About us</h1></Link>
      <Link href="#recipe"><h1>Recipe</h1></Link>
      <Link href="#contact"><h1>Contact us</h1></Link>
      <Link href="/Donation"><h1>DONATE</h1></Link>
      <p onClick={handleclick} ><h1 className='font-bold text-3xl hover:text-red-500 cursor-pointer animate-pulse'>LOGOUT</h1></p>
        


</div>


<div className='flex items-center ml-auto mr-5 md:hidden'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={check}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

</div>

    </div>
    {size&&(<div className="w-30 fixed inset-0 md:hidden mt-16 ">
      
      <div className='flex'>
        
      <ul onMouseLeave={check} className="bg-pgrey text-white outline hover:outline-black text-center ml-auto mr-5 z-0">
  <li className="">
    <Link href="#navbar"><ol className='hover:bg-pwhite hover:text-black py-1 p-1 '>Home</ol></Link>
    <Link href="#about"><ol className='hover:bg-pwhite hover:text-black   py-1'>About us</ol></Link>
    <Link href="#recipe"><ol className='hover:bg-pwhite hover:text-black py-1'>Receipe</ol></Link>
    <Link href="#contact"><ol className='hover:bg-pwhite hover:text-black py-1 w-30 px-1'>Contact us</ol></Link>
    <Link href="/Donation"><ol className='hover:bg-pwhite hover:text-black py-1 w-30 px-1'>Donate</ol></Link>
    <p onClick={handleclick} ><h1 className='font-bold hover:text-red-500 cursor-pointer animate-pulse hover:bg-pwhite  py-1 w-30 px-1'>LOGOUT</h1></p>
    
  </li>
  </ul>
      </div>
  
  
</div>)}
<div className='md:inline md:text-8xl text-pwhite absolute md:mt-80 mt-60 mr-3 md:mr-0'>

<span style={anta.style} className='text-2xl md:text-6xl lg:text-8xl ml-10'>{text}<Cursor cursorColor="#F7AB0A" /></span>
                    
<h1 style={anta.style} className='mt-3 text-lg md:text-2xl lg:text-4xl md:mt-10 ml-10'>Get million of delecious recipes across the world </h1>

</div>





    </div>

  )
}

export default Navbar