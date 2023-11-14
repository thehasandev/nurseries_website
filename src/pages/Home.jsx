import React from 'react'

import Data from "../data/productData"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import One from "../assets/two.png"
import P1 from "../assets/furniture_img1.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import {FaAmbulance,FaMoneyBillWave,FaPhoneSquareAlt     } from "react-icons/fa"
import {MdOutlinePayment ,MdStar,MdStarBorder     } from "react-icons/md"
import {ImHeadphones   } from "react-icons/im"
import Product from '../components/Product'
import { Link, useNavigate } from 'react-router-dom'



function Home() {
  let navigate =useNavigate("/")
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    appendDots: dots => (
        <div>
          <ul className='flex gap-x-4 absolute bottom-6 left-1/2 -translate-x-1/2'> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div className={`text-[110px] cursor-pointer`}>
          .
        </div>
      )
  };
  return (
    <>
    <section>

        <Slider {...settings}>
          <div className=' bg-[#D6F7F2] h-[580px] w-full py-[100px]'>
            <Container>
              <Flex className="justify-between pt-5">
                <div className='w-4/12'>
                  <p className='font-roboto font-normal text-lg text-secondary'>Get up to 50% off Today Only!</p>
                  <h1 className='font-roboto font-bold my-5 text-[70px] leading-[75px] text-secondary'>Wooden Chair Collection</h1>
                  <button className='font-pop font-normal text-base  text-secondary px-12 hover:bg-secondary duration-500 hover:text-white py-4 rounded-full border-solid border border-secondary'>Shop Now</button>
                </div>
                <div className='w-6/12'>
                  <Image className="w-[500px]" src={One}/>
                </div>
              </Flex>
            </Container>
          </div>

          <div className=' bg-[#D6F7F2] h-[580px] w-full py-[100px]'>
            <Container>
              <Flex className="justify-between pt-5">
                <div className='w-4/12'>
                  <p className='font-roboto font-normal text-lg text-secondary'>Get up to 50% off Today Only!</p>
                  <h1 className='font-roboto font-bold my-5 text-[70px] leading-[75px] text-secondary'>Wooden Chair Collection</h1>
                  <button className='font-pop font-normal text-base  text-secondary px-12 hover:bg-secondary duration-500 hover:text-white py-4 rounded-full border-solid border border-secondary'>Shop Now</button>
                </div>
                <div className='w-6/12'>
                  <Image className="w-[500px]" src={One}/>
                </div>
              </Flex>
            </Container>
          </div>

          <div className=' bg-[#D6F7F2] h-[580px] w-full py-[100px]'>
            <Container>
              <Flex className="justify-between pt-5">
                <div className='w-4/12'>
                  <p className='font-roboto font-normal text-lg text-secondary'>Get up to 50% off Today Only!</p>
                  <h1 className='font-roboto font-bold my-5 text-[70px] leading-[75px] text-secondary'>Living Room Collection</h1>
                  <button className='font-pop font-normal text-base  text-secondary px-12 hover:bg-secondary duration-500 hover:text-white py-4 rounded-full border-solid border border-secondary'>Shop Now</button>
                </div>
                <div className='w-6/12'>
                  <Image className="w-[500px]" src={One}/>
                </div>
              </Flex>
            </Container>
          </div>

          <div className=' bg-[#D6F7F2] h-[580px] w-full py-[100px]'>
            <Container>
              <Flex className="justify-between pt-5">
                <div className='w-4/12'>
                  <p className='font-roboto font-normal text-lg text-secondary'>Get up to 50% off Today Only!</p>
                  <h1 className='font-roboto font-bold my-5 text-[70px] leading-[75px] text-secondary'>Wooden Chair Collection</h1>
                  <button className='font-pop font-normal text-base  text-secondary px-12 hover:bg-secondary duration-500 hover:text-white py-4 rounded-full border-solid border border-secondary'>Shop Now</button>
                </div>
                <div className='w-6/12'>
                  <Image className="w-[500px]" src={One}/>
                </div>
              </Flex>
            </Container>
          </div>
          
         
        </Slider>
   
    </section>

    <section className='my-[120px]'>
      <Container>
         <Flex>
           <Flex className='w-3/12 pl-8 py-4 border border-secondary/40 gap-x-8  items-center'>
             <div>
             <FaAmbulance size={25} className='text-primary'/>
             </div>
             <div>
               <h4 className='font-roboto font-medium text-base mb-1 text-secondary'>Free Delivery</h4>
               <p className='font-pop font-normal text-sm text-secondary'>Worldwide</p>
             </div>
           </Flex>

           <Flex className='w-3/12 pl-8 py-4 border border-secondary/40 gap-x-8  items-center'>
             <div>
             <FaMoneyBillWave  size={25} className='text-primary'/>
             </div>
             <div>
               <h4 className='font-roboto font-medium text-base mb-1 text-secondary'>Money Returns</h4>
               <p className='font-pop font-normal text-sm text-secondary'>30 Days money return</p>
             </div>
           </Flex>
        
           <Flex className='w-3/12 pl-8 py-4 border border-secondary/40 gap-x-8  items-center'>
             <div>
             <ImHeadphones  size={25} className='text-primary'/>
             </div>
             <div>
               <h4 className='font-roboto font-medium text-base mb-1 text-secondary'>27/4 Online Support</h4>
               <p className='font-pop font-normal text-sm text-secondary'>3 Customer Support</p>
             </div>
           </Flex>

           <Flex className='w-3/12 pl-8 py-4 border border-secondary/40 gap-x-8  items-center'>
             <div>
             <MdOutlinePayment   size={25} className='text-primary'/>
             </div>
             <div>
               <h4 className='font-roboto font-medium text-base mb-1 text-secondary'>Payment Security</h4>
               <p className='font-pop font-normal text-sm text-secondary'>Safe Payment</p>
             </div>
           </Flex>
        
         </Flex>
      </Container>
    </section>

    <section className='mb-[120px]'>
      <Container>
         <div className=' text-center'>
           <h2 className='font-roboto font-bold text-[32px] mb-[60px] text-secondary relative after:absolute after:bottom-[-10px] after:left-1/2 after:translate-x-[-50%] after:w-16 after:h-[1px] after:bg-primary inline-block '>Exclusive Products</h2>
         </div>
         <Flex className=" flex-wrap justify-between gap-y-8">
          {
            Data.map((item,index)=>{
              
              const {ProductUrl,productName,productPrice,productDiscunt,phoneNumber,productReation} = item
              if(index<8){
                return <Product url={ProductUrl} name={productName} price={productPrice} discount={productDiscunt} phoneNumber={phoneNumber} reating={productReation }/>
              }
              
                 
            })
          }
         </Flex>
      
       
      </Container>
    </section>
    </>
  )
}

export default Home