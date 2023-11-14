import React from 'react'

import Image from './Image'
import Flex from './Flex'
import {FaPhoneSquareAlt     } from "react-icons/fa"
import {MdStar,MdStarBorder     } from "react-icons/md"


function Product({url,alt,name,price,discount,reating,phoneNumber,className}) {
  return (
   
    <div className={`w-[310px] border border-solid border-secondary/40 rounded-[10px] relative overflow-hidden group ${className}`}>
            <div className='relative overflow-hidden group '>
            <Image className="w-full rounded-t-[10px] " src={url} alt={alt}/>
            <div className='absolute flex items-center justify-center w-full h-full rounded-t-[10px] group-hover:top-0 duration-200 bg-black/20 top-[100%] left-0'>
                <p className='font-pop text-center font-medium text-xl text-black flex items-center gap-x-2'><FaPhoneSquareAlt  />{phoneNumber}</p>
            </div>
            </div>
            <button className='font-pop absolute hover:bg-white border border-solid border-primary hover:text-secondary  duration-300 -bottom-16 group-hover:bottom-4 left-1/2 -translate-x-1/2 font-normal bg-primary text-base  text-white px-10  py-4 rounded-full'>Call Now</button>

            <div>
                <h3 className='font-roboto text-center font-medium mt-4 mb-2 text-base text-secondary'>{name}</h3>
                <p className='font-pop text-center font-medium text-sm text-primary'><span className='text-secondary line-through mr-2'>{discount}</span>{price}</p>
                
                <Flex className='text-orange-500 justify-center mt-2 items-center pb-6'>
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStarBorder />
                <p className='font-pop font-normal text-sm text-secondary pl-2'>{reating}</p>
                </Flex>
            
            </div>
            
    </div>
   
  )
}

export default Product