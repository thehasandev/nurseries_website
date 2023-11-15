import React, { useEffect } from 'react'

import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from "../components/Image"
import Delivary from "../assets/delts1.png"
import Voucher from "../assets/delts2.png"
import Stock from "../assets/delts3.png"
import { Link, useLocation } from 'react-router-dom'
import Slider from 'react-slick'
import NextArrow from '../components/NextArrow'
import PrevArrow from '../components/PrevArrow'
import {AiFillStar,AiFillHeart} from "react-icons/ai"


function ProductDeteails() {
  let location  = useLocation()
   let {ProductUrl,productName,productPrice,productDiscunt,phoneNumber} = location.state
  

     const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow class="absolute top-1/2 -translate-y-1/2 -right-8"/>,
      prevArrow: <PrevArrow class="absolute top-1/2 -translate-y-1/2 -left-8 z-10 "/>
    }; 
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }, []);

  return (
    <>
      <section className="py-[120px] px-2 xl:px-0">
        <Container>
            <Flex className="justify-center md:justify-between flex-wrap">
               <div className='md:w-5/12 '>
                  <Image  className="w-96 mx-auto" src={ProductUrl}/> 
               
                  <div className='w-[230px] mx-auto mt-8'>
                    <Slider {...settings}>
                        <Image src={ProductUrl} className="w-16"/>
                        <Image src={ProductUrl} className="w-16"/>
                        <Image src={ProductUrl} className="w-16"/>
                        <Image src={ProductUrl} className="w-16"/>
                        <Image src={ProductUrl} className="w-16"/>
                      
            
                    </Slider>

                  </div>
                  
               
               </div>

               <div className='md:w-6/12 '>
        
                   <Flex className="flex-wrap">
                     <Flex className='md:w-8/12 w-full items-center gap-x-2 md:gap-x-4'>
                      <p className='font-pop font-normal text-secondary text-small'>5.5</p>
                      <Flex className="text-[#FFD687] gap-x-1 items-center">
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                        <AiFillStar size={25}/>
                      </Flex>
                      <p className='font-pop font-normal text-gray text-sm md:text-small'>Review (12)   |   Sold 99</p>
                     </Flex>

                     <Flex className='md:w-4/12 w-full items-center gap-x-4'>
                       <AiFillHeart size={30} className='text-primary hidden md:block'/>
                       <p className='font-pop font-normal text-secondary text-small hidden md:block'>Add to Wishlist</p>
                     </Flex>
                   </Flex>

                   <h3 className='font-pop font-normal text-secondary text-xl md:text-4xl mt-5 md:mt-2 mb-4'>{productName}</h3>
                   
                   <Flex className="items-center gap-x-4 md:gap-x-8">
                    <h3 className='font-pop font-bold text-secondary text-base md:text-4xl'>{productPrice}</h3>
                    <p className='font-pop font-normal text-gray text-small line-through'>{productDiscunt}</p>
                    <button className='font-pop font-normal hover:bg-primary hover:text-white duration-300 text-primary border border-solid border-primary px-4 py-2 rounded-lg'>Save 50%</button>
                   </Flex>
                   
                   <div className='hidden xl:block'>
                      <Flex className="mt-12 flex-wrap mb-8 gap-x-8 border-gray border-b pb-10">
                          <Flex className="gap-x-4 items-center ">
                            <Image src={Delivary}/>
                            <p className='font-pop font-normal text-secondary text-small'>Free Delivery</p>
                          </Flex>
                          <Flex className="gap-x-4 items-center ">
                            <Image src={Voucher}/>
                            <p className='font-pop font-normal text-secondary text-small'>Available Voucher</p>
                          </Flex>
                          <Flex className="gap-x-4 items-center ">
                            <Image src={Stock}/>
                            <p className='font-pop font-normal text-secondary text-small'>In Stock</p>
                          </Flex>
                      </Flex>
                   </div>

                  <h5 className='font-pop font-normal text-small text-secondary mt-8 mb-4 hidden md:block'>Description</h5> 
                  <p className='font-pop font-normal text-small text-gray md:w-[680px] hidden md:block'>Wireless Microphone with the new style, shockproof, clear voice reception that suitable for recording, online meeting, vlogging, and calling. Free casing with high-quality zipper.</p> 
                  <button className='font-roboto px-4 py-2 mt-8 rounded-[5px] font-medium text-lg bg-primary border border-primary  text-white hover:bg-transparent hover:text-secondary duration-300'>Contact Now</button>
              
                       
                      
                 
               </div>
            </Flex>
        </Container>
      </section>

   
       
    </>
  )
}

export default ProductDeteails