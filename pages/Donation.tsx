"use client"
import Second from "../pages/Second"
import '@/app/globals.css'
import React, { useState } from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import img1 from "@/rec/logo.jpg";
import Link from 'next/link';
import img2 from "../rec/bgg.jpg"
import img3 from "../rec/andbg.jpg"
import img5 from "../rec/bg34.jpg"
import im19 from "../rec/sbg.jpg"
import img11 from "../rec/phone1.jpg"
import Request from "../pages/Request"
import {Aclonica, Averia_Sans_Libre, Jockey_One, Luckiest_Guy, Pacifico, Prompt, Rock_Salt, Rubik_Broken_Fax, Rubik_Maps, Ubuntu, Unica_One} from "@next/font/google"; 
import { Denk_One } from 'next/font/google';
import { text } from 'stream/consumers';
import vid from "../rec/vidvid.mp4"

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
function Donation() {
  const [size,issize]=useState(false);


  return (
    <><div className='h-2xl h-screen bg-newgrey flex flex-col relative '>
      <Image className="absolute opacity-30 h-screen" src={im19} alt="sr"></Image>




      <div className='h-20 bg-white top-0 shadow-2xl flex fixed left-0 right-0'>


        <Image src={img1} className='h-20 w-20 ml-5 p-2 md:p-0 shadow-2xl ' alt="logo" />
        <div className='flex justify-center items-center'>
          <h1 style={anta.style} className='ml-auto md:text-3xl text-xl'>FOOD EXPRESS</h1>
          

        </div>
        <div style={anta.style} className='flex  p-10 md:flex gap-5 2xl:gap-20 items-center lg:text-2xl font text-md ml-auto'>
      <Link href="/#navbar"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="md:w-10 md:h-10 h-7 w-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</Link>
      </div>
        


      </div>
      
      <div className='flex justify-center mt-40 md:mt-30'>
        <h1 style={anta.style} className='text-white font-bold md:text-3xl lg:text-2xl xl:text-4xl text-lg ml-10 relative'>A Plate for a Purpose: Join Us in Donating Food to Those in Need</h1>
      </div>
      <div className="hidden md:flex items-center justify-center mb-20">       <video 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="relative object-cover object-center mx-40 p-20 hidden lg:flex opacity-85" 
  src={vid}>
</video>

      <Image className=" shadown-md h-[60vh] object-cover object-center mt-10 ml-10 mr-10 md:ml-40 md:mr-40 md:p-20 lg:hidden " alt="iamge1" src={img11}></Image>
      </div>
      <div className="lg:hidden flex items-center justify-center">
      <Image className="shadown-md h-[60vh] object-cover object-center mt-10 ml-10 mr-10 md:ml-40 md:mr-40 md:p-20 lg:hidden " alt="iamge1" src={img11}></Image>
      </div>






    </div><Second />
    <Request/>
    </>

  )
}

export default Donation