import Head from 'next/head'
import Image from "next/image";
import Footer from './components/Footer';
import Images from './components/Images';
import Links from './components/Links';
import Navbar from './components/Navbar'
import OurServices from './components/OurServices';




export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className=''>
      
        <h1 className='mx-6 pt-6 font-bold text-2xl'>CORONA</h1>
       
        <Navbar />
        <Images />
        <Links />
        <OurServices />
        <Footer />
       
      </div>
  
     

    </div>
  )
}
