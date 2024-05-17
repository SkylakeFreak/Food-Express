import React from 'react'
import Image from 'next/image'
import img1 from "../rec/low.jpg"

function Second() {
  return (
    <div className='h-screen lg:h-screen
     bg-spspgrey flex flex-col justify-center'>
        <div className='flex justify-center'><h1 className='text-white text-xl lg:text-3xl xl:text-4xl mt-10'>What we Are?</h1>
        
        </div>
        <div className='p-10 md:p-20 lg:flex w-auto justify-center flex'>
    <Image src={img1} alt="image" className='w-1/2 shadow-2xl object-cover md:object-full'></Image>
    <div className='w-1/2 bg-pwhite shadow-2xl'>
        <div className='p-10'><p>KINDNESS TOWARDS HUMANITY</p>
        <p className='lg:text-3xl text-xl'>WHO WE CARE</p>
        <p className='hidden lg:flex font-bold text-2xl lg:text-4xl text-yellow-600'>_________</p>
        <p className='mt-4 hidden  lg:flex'>Welcome to our Leftover Food Donation Program! At Food Express, we're committed to reducing food waste and ensuring that surplus food reaches those in need. Your participation in our program can make a significant impact in the fight against hunger and food insecurity.<br/>

How You Can Make a Difference:
By donating your leftover food, you're not only helping to reduce food waste but also providing nourishment to individuals and families who are struggling to access adequate meals. 
<br />
<br />
Here's how you can get involved:<br/>
<br />

Donate Surplus Food: If you have excess food from events, parties, restaurants, or other occasions, consider donating it to our program. We accept a wide range of perishable and non-perishable food items, including prepared meals, baked goods, fruits, vegetables, and more.<br/>
<br />


Community Engagement: Spread the word about our program to friends, family, colleagues, and community members. Encourage them to donate their leftover food and join us in our mission to combat food waste and hunger.</p>
        </div>
        
    </div>
</div>

        
    </div>
  )
}

export default Second