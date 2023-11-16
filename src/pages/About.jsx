import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import One from "../assets/two.png"
import Car1 from "../assets/car1.jpg"
import Car2 from "../assets/car2.jpg"

import AboutOne from "../assets/about.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function TrmasAndCondition() {
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

    <section className='mt-[80px] px-5 xl:px-0'>
      <Container>
        <h2 className='font-roboto font-medium md:font-normal text-xl md:text-3xl mb-4 text-secondary'>All Teak Nurseries Limited – Supplier of Quality Teak Garden Furniture</h2>
      <Flex className="items-center justify-center gap-y-5 flex-wrap md:justify-between">
        <div className='md:w-7/12'>
        <p className='font-pop font-normal text-sm mb-8 text-secondary'>All Teak Nurseries Limited supply high quality teak furniture for garden and outdoor use. We aim to bring customers the highest standard of furniture at genuinely competitive prices.</p>
        <h2 className='font-roboto font-normal text-2xl mb-2 text-secondary'>About the company</h2>
        <p className='font-pop  font-normal text-sm mb-4 text-secondary'>All Teak Nurseries Limited is run by James Jefford. James brings extensive experience in the furniture trade and is dedicated to providing great customer service. As a company, we invest time in our customers, helping them choose the furniture best suited to their individual property. All Teak Nurseries Limited do attend trade shows — contact us for details. If you’d like to know more about us, or our products, again get in touch either through our website, on 0800 0075345 (landline), or 07717 384384 (mobile).</p>
        </div>
        <div className='md:w-4/12 flex justify-start  items-start'>
            <Image className="w-full rounded-[5px] mb-5 md:mb-0" src={AboutOne}/>
        </div>

      </Flex>
     
      </Container>
    </section>

    <section className='px-5 xl:px-0'>
        <Container>
        <h2 className='font-roboto font-normal text-2xl mb-4 text-secondary'>Delivery Vans</h2>
        <Flex className="gap-5 mb-8 flex-wrap">
            <Image src={Car1}/>
            <Image src={Car2}/>
            <Image src={Car1}/>
            <Image src={Car2}/>

        </Flex>
        <div>
        <h2 className='font-roboto font-normal text-2xl mb-4 text-secondary'>About our furniture</h2>
        <p className='font-pop  font-normal md:w-10/12  text-sm mb-16 text-secondary'>Our furniture is made from the best available teak. It’s both durable and beautiful. To minimise environmental impact, it’s important that teak is responsibly sourced. Our teak is sourced from government-controlled plantations in Asia. The teak is harvested legally from maintained forests. Our supplier also has its own plantation that will help provide teak trees in the future. All Teak Nurseries Limited furniture carries a plaque guaranteeing that it is constructed from responsibly sourced, genuine teak.</p>

        </div>
        </Container>
    </section>

    </>
  )
}

export default TrmasAndCondition