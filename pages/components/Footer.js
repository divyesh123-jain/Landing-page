import React from 'react';

const Footer = () => {
  return (
     <div className='pt-48'>
     <h1 className='flex justify-center font-mono text-2xl'>Our Services</h1>
     <p className='flex justify-center pt-4 text-3xl font-bold'>What is <span className='text-red-900 mx-2'>CORONA</span> services</p>
     <p className='flex justify-center pt-4'>Corona is online medical services for prevent and get fast medical treatment from corona virus,we will help you</p> <p className='flex justify-center'>at any time with our 24 hours services,this is corona services you can get</p>



    <div className='pt-12 grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8'>
    <a href="#" className='grid2-item h-40 "border-4  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-[#98A8F8]  '>
      <h2 className='flex justify-center font-serif pt-5 text-2xl text-red-900'>Online Consultaions</h2>
      <p className='flex justify-center font-semibold'>We wil give you online Consultaion</p><p className='flex justify-center font-semibold'> from our best Doctor with suitable</p> <p className='flex justify-center font-semibold'>symptoms</p>
    </a>

    <a href="#" className='grid2-item h-40  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-[#98A8F8]  '>
      <h2 className='flex justify-center font-serif pt-5 text-2xl text-red-900'>Get ACTUAL INFORMATION</h2>
      <p className='flex justify-center font-semibold'>We will provide you all information</p><p className='flex justify-center font-semibold'> you need about how to</p> <p className='flex justify-center font-semibold' >stay healthy in this pandemic situation</p>
      
    </a>
    

    <a
      href="https://github.com/vercel/next.js/tree/canary/examples"
      className='grid2-item h-40  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-[#98A8F8] '
    >
      <h2 className='flex justify-center font-serif pt-5 text-2xl text-red-900  '>Self Swab Test</h2>
      <p className='flex justify-center font-semibold'>You can get PCR test kit for</p><p className='flex justify-center font-semibold'> Covid-19 to do Self swab test at</p><p className='flex justify-center font-semibold'> Home</p>
    </a>

    <div className='border-b-full'></div>
  </div>
  </div>
  );
}

export default Footer;
