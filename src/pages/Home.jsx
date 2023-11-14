import React from 'react'

import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import One from "../assets/two.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 


function Home() {
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
    <section>

        <Slider {...settings}>
          <div className=' bg-[#D6F7F2] h-[550px] w-full py-[100px]'>
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
          <div className=' bg-[#D6F7F2] h-[550px] w-full py-[100px]'>
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
          <div className=' bg-[#D6F7F2] h-[550px] w-full py-[100px]'>
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
          <div className=' bg-[#D6F7F2] h-[550px] w-full py-[100px]'>
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
  )
}

export default Home