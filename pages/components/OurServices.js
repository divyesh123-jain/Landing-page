import React from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import  dr1   from '../Images/dr1.jpg'



const OurServices = () => {
    const router = useRouter();
  return (<>
    
    <div>

    <p className='mx-60 pt-28 p-0 font-semibold text-red-900 '>CORONA Virus Prevention</p>
    

    <h1 className='mx-80 pt-1  text-4xl font-serif '>We provide</h1>
   
    <p className='mx-80 pt-2 text-4xl font-senrif'> <span className='font-semibold text-red-900'>Covid-19</span> swab test</p>
    
    <p className='mx-60 pt-2'>We will provide you all information you need about how to stay healthy </p><p className='mx-60'>in this pandemic situation. We also will give you best service and best doctor to</p> <p className='mx-60'>prevent you from Covid-19</p> 
    
    <button onClick={() => router.push("./components/Footer")} className='mx-80 pt-3  bg-[hsl(194,90%,32%)] w-[200px] rounded-md font-medium my-6  py-3 '>Our Services</button>
    </div>
    </>
  )
}

export default OurServices;
