import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import One from "../assets/two.png"
import Furniture1 from "../assets/furniture1.jpg"
import Furniture2 from "../assets/furniture3.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function GallaryForFurniture() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        cssEase: "linear",
        appendDots: dots => (
            <div>
              <ul className='flex gap-x-4 absolute bottom-[0] md:bottom-6 left-1/2 -translate-x-1/2'> {dots} </ul>
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
     <section className=''>
        <Slider {...settings}>
          <div className=' bg-[#D6F7F2] h-[300px] md:h-[580px] w-full py-[40px] md:py-[100px] px-2 xl:px-0'>
            <Container>
              <Flex className="justify-between pt-5">
                <div className='w-4/12'>
                  <p className='font-roboto font-normal text-sm md:text-lg text-secondary'>Get up to 50% off Today Only!</p>
                  <h1 className='font-roboto font-bold my-4 md:my-5 w-[200px] md:w-auto text-[28px] md:text-[70px] leading-9 md:leading-[75px] text-secondary'>Wooden Chair Collection</h1>
                  <button className='font-pop text-sm font-normal md:text-base px-4 py-2 text-secondary md:px-12 hover:bg-secondary duration-500 hover:text-white md:py-4 rounded-full border-solid border border-secondary'>Shop Now</button>
                </div>
                <div className='w-6/12'>
                  <Image className="w-[500px]" src={One}/>
                </div>
              </Flex>
            </Container>
          </div>

          <div className=' bg-[#D6F7F2] h-[300px] md:h-[580px] w-full py-[40px] md:py-[100px] px-2 xl:px-0'>
            <Container>
              <Flex className="justify-between pt-5">
                <div className='w-4/12'>
                  <p className='font-roboto font-normal text-sm md:text-lg text-secondary'>Get up to 50% off Today Only!</p>
                  <h1 className='font-roboto font-bold my-4 md:my-5 w-[200px] md:w-auto text-[28px] md:text-[70px] leading-9 md:leading-[75px] text-secondary'>Wooden Chair Collection</h1>
                  <button className='font-pop text-sm font-normal md:text-base px-4 py-2 text-secondary md:px-12 hover:bg-secondary duration-500 hover:text-white md:py-4 rounded-full border-solid border border-secondary'>Shop Now</button>
                </div>
                <div className='w-6/12'>
                  <Image className="w-[500px]" src={One}/>
                </div>
              </Flex>
            </Container>
          </div>

          <div className=' bg-[#D6F7F2] h-[300px] md:h-[580px] w-full py-[40px] md:py-[100px] px-2 xl:px-0'>
            <Container>
              <Flex className="justify-between pt-5">
                <div className='w-4/12'>
                  <p className='font-roboto font-normal text-sm md:text-lg text-secondary'>Get up to 60% off Today Only!</p>
                  <h1 className='font-roboto font-bold my-4 md:my-5 w-[200px] md:w-auto text-[28px] md:text-[70px] leading-9 md:leading-[75px] text-secondary'>Living Room Collection</h1>
                  <button className='font-pop text-sm font-normal md:text-base px-4 py-2 text-secondary md:px-12 hover:bg-secondary duration-500 hover:text-white md:py-4 rounded-full border-solid border border-secondary'>Shop Now</button>
                </div>
                <div className='w-6/12'>
                  <Image className="w-[500px]" src={One}/>
                </div>
              </Flex>
            </Container>
          </div>

          <div className=' bg-[#D6F7F2] h-[300px] md:h-[580px] w-full py-[40px] md:py-[100px] px-2 xl:px-0'>
            <Container>
              <Flex className="justify-between pt-5">
                <div className='w-4/12'>
                  <p className='font-roboto font-normal text-sm md:text-lg text-secondary'>Get up to 60% off Today Only!</p>
                  <h1 className='font-roboto font-bold my-4 md:my-5 w-[200px] md:w-auto text-[28px] md:text-[70px] leading-9 md:leading-[75px] text-secondary'>Living Room Collection</h1>
                  <button className='font-pop text-sm font-normal md:text-base px-4 py-2 text-secondary md:px-12 hover:bg-secondary duration-500 hover:text-white md:py-4 rounded-full border-solid border border-secondary'>Shop Now</button>
                </div>
                <div className='w-6/12'>
                  <Image className="w-[500px]" src={One}/>
                </div>
              </Flex>
            </Container>
          </div>
        </Slider>
   
     </section>
     <section className='my-[80px] px-4 xl:px-0'>
      <Container>
       <h2 className='font-roboto font-normal text-3xl mb-4 text-secondary'>Gallary of Take Furniture</h2>
      <Flex className=" flex-wrap gap-4 justify-center mt-8">
        <div className='md:w-[24%]'>
          <Image src={Furniture1} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture2} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture1} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture2} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture1} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture2} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture1} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture2} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture1} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture2} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture1} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture2} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture1} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture2} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture1} className="rounded-[5px]"/>
        </div>
        <div className='md:w-[24%]'>
          <Image src={Furniture2} className="rounded-[5px]"/>
        </div>
      </Flex>
      </Container>
     </section>



    </>
  )
}

export default GallaryForFurniture