import Link from 'next/link';
import React from 'react';



const Navbar = () => {
  return (
    <div className='mx-9 justify-center'>
      <ul className='flex justify-center'>
        <Link href=''><li className='p-4 font-semibold text-xl'>Home</li></Link>
        <Link href=''><li className='p-4 font-semibold text-xl'>Services</li></Link>
        <Link href=''><li className='p-4 font-semibold text-xl'>Question&Answers</li></Link>
        <Link href=''><li className='p-4 font-semibold text-xl'>Consultaions</li></Link>
        
      </ul>
   
      
    </div>
  );
}

export default Navbar;
