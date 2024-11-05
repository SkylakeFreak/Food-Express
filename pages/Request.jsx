import React, { useRef } from 'react'
import Image from 'next/image'
import img1 from "../rec/del1.jpg"
import emailjs from "@emailjs/browser";

function Request() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_spgromp', 'template_gsc2798', form.current, {
                publicKey: '0ER445FFbm8q4MLuh',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='h-screen bg-white flex flex-col justify-center'>
            <div className='flex justify-center'>
                <h1 className='text-black text-xl lg:text-3xl xl:text-4xl mt-20'>CONNECT WITH US!</h1>
            </div>
            <div className='p-10 flex justify-center'>
                <div className='w-1/2 bg-pwhite shadow-2xl flex flex-col justify-center'>
                    <div className='p-1'>
                        <p className='mt-10 text-3xl flex justify-center'>Email</p>
                        <p className='hidden md:flex font-bold text-4xl text-black justify-center'>_________</p>
                        <div className='flex justify-center items-center'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='flex flex-col gap-3 mt-8 w-80 items-center'>
                                    <input name="Name" className=' p-1 w-20 md:w-auto md:p-2 text-center hover:animate-pulse' type="text" placeholder='FullName' />
                                    <input name="Email" className='p-1 w-20 md:w-auto md:p-2 text-center hover:animate-pulse' type="text" placeholder='Email Address' />
                                    <input name="Phone" className='p-1 w-20 md:w-auto md:p-2 text-center hover:animate-pulse' type="text" placeholder='Phone No' />
                                    <input name="Address" className='p-1 w-20 md:w-auto md:p-2 
                                    text-center hover:animate-pulse' type="text" placeholder='Address' />
                                    <button className='p-1 w-20 md:w-automd:p-2 md:w-40 rounded-sm text-white font-bold hover:animate-pulse bg-pgrey mb-10' type="submit" value="send">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
                <div className='bg-pwhite shadow-2xl items-center justify-center flex'>
                    <Image className='w-80' alt="use" src={img1}></Image>
                </div>
            </div>
    
            <p className='md:ml-40 md:mr-40 ml-4 mr-4  bg-pwhite shadow-2xl rounded-xl text-lg text-black p-5 text-center'>Food is not just sustenance; it's a gift of love, a symbol of care. In sharing our meals, we share our humanity. <br />Let's spread kindness, one plate at a time. Donate food, nourish hearts, and sow seeds of hope in our communities.</p>
        </div>
    )
}

export default Request;
