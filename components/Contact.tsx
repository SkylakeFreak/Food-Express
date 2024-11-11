"use client";
import Link from 'next/link';
import React from 'react'

function Contact() {
  return (
    <div className='h-screen items-center justify-center bg-gray-100 text-white'>
      <div className='h-40 bg-gray-100'></div>
      <div className=" bg-gray-100 flex items-center justify-center ">
      <div className="bg-spblack p-8 rounded shadow-md mt-10 md:mt-0 ml-10 mr-10 xl:ml-80 xl:mr-80 ">
        <h2 className="text-2xl font-semibold mb-4">Donate Food With Us!</h2>
        <p className=" mb-4 text-lg">
          We Provide Services to Donate Large Amount of Foods and Left over Eatables Free of Cost to The Impovershied and to the needy!
        </p>
        <div className=''>
          <Link href="Donation"><button className='h-10 hover:animate-pulse bg-white text-black font-bold w-40 rounded-lg '>Donate</button></Link>
          
          <p className='mt-4 ml-1 text-lg'>Hassle Free Steps!</p>
        </div>
       
        
        
       
      </div>
    </div>
      
      <div className=" bg-gray-100 flex items-center mt-20 ">
      <div className="bg-spblack text-white p-8 rounded shadow-md mt-10 md:mt-0 ml-10 mr-10 xl:ml-80 xl:mr-80 w-full mb-20">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className=" mb-4">
          Visit Again. If you have any questions or feedback,
          please use the information below to get in touch.
        </p>
        <div className="mb-4">
          <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-5 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
</svg>
<label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>

          </div>
         
          <p className='text-lg'>Test@gmail.com</p>
        </div>
        <div className="mb-4">
          <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
          <label htmlFor="phone" className="block text-sm font-medium ">
            Phone
          </label>
          

          </div>
          
          <p className='text-lg'>+91-455255454</p>
        </div>
        
       
      </div>
    </div>
    
    
      </div>
  )
}

export default Contact