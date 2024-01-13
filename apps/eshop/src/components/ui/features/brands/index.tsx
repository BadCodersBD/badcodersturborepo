"use client"
import {motion} from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '../../../../../variant';

 const BrandsSection = () => {
  return (
    <section id='brand' className=' py-5 xl:h-auto bg-white flex justify-center items-center w-full '>
      <motion.div 
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
      className='container mx-auto'>
        <div className='grid grid-cols-3 gap-2 place-content-center xl:flex  xl:justify-between justify-center items-center'>
          <div className='flex justify-center items-center'><Image alt='image' src={'/icons/brands/ford.svg'} width={60} height={60}/></div>
          <div className='flex justify-center items-center'><Image alt='image' src={'/icons/brands/audi.svg'} width={60} height={60}/></div>
          <div className='flex justify-center items-center'><Image alt='image' src={'/icons/brands/bmw.svg'} width={60} height={60}/></div>
          <div className='flex justify-center items-center'><Image alt='image' src={'/icons/brands/skoda.svg'} width={60} height={60}/></div>
          <div className='flex justify-center items-center'><Image alt='image' src={'/icons/brands/mercedes.svg'} width={60} height={60}/></div>
          <div className='flex justify-center items-center'><Image alt='image'  src={'/icons/brands/mazda.svg'} width={60} height={60}/></div>
          <div className='flex justify-center items-center'><Image alt='image' src={'/icons/brands/vw.svg'} width={60} height={60}/></div>
        </div>
      </motion.div>
    </section >
  )
}

export default BrandsSection;
