import React, { useEffect,useState } from 'react';
import Main from '../components/Main'
import "@/app/globals.css";
const PhoneEmailSignIn = () => {
  useEffect(() => {
    // Function to handle the response from the phone.email sign-in button
    window.phoneEmailListener = (userObj) => {
      const { user_json_url, user_country_code, user_phone_number } = userObj;
      setKey(false);
      // Here you can handle the user data as needed, for example:
      // Send user_json_url to your backend to retrieve user info (i.e. country code and phone number)
    };

    // Dynamically create the script element to load the external script
    const script = document.createElement('script');
    script.src = 'https://www.phone.email/sign_in_button_v1.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [key, setKey] = useState(true);

  return (
    
    <div>
      {key&&<div className='flex h-screen justify-center items-center bg-[#333333]'>
      <div className='bg-white h-[80%] flex items-center justify-center w-[60%]'>
        <div className=''>
          <h1 className='text-center mb-20 text-3xl p-10'>Welcome To Food Express</h1>
        <div className="pe_signin_button flex justify-center " data-client-id="11718105390747106191"></div> 
        </div>
      
      
      </div>
        
    </div>}
    {!key&&<Main/>}
    </div>
    
    
  );
};

export default PhoneEmailSignIn;
