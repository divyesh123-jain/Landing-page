import React from 'react';
import Image from 'next/image';
import {dr} from '../Images/dr1.jpg'

const Images = () => {
  return (
    <div className=' '>
    <Image className='lg:flex flex-col top-[35%] right-0 ' src={dr} alt="" />
      
    </div>
  );
}

export default Images;
