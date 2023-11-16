import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import One from "../assets/two.png"
import Tree1 from "../assets/tree1.jpg"
import Tree2 from "../assets/tree2.jpg"
import Tree3 from "../assets/tree3.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function GallaryForTree() {
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

     <section className='my-[80px]'>
      <Container>
       <h2 className='font-roboto font-normal text-3xl mb-2 text-secondary'>Gallery of Trees</h2>
      <p className='font-pop font-normal text-sm mb-4 text-secondary'>We offer a range of ornamental trees to compliment our fine teak furniture. Please contact us for more information on current stock available.</p>
      <Flex className=" flex-wrap gap-4 justify-center mt-8">
        <div className='w-[24%]'>
          <Image src={Tree1} className="rounded-[5px]"/>
        </div>

        <div className='w-[24%]'>
          <Image src={Tree2} className="rounded-[5px]"/>
        </div>

        <div className='w-[24%]'>
          <Image src={Tree3} className="rounded-[5px]"/>
        </div>
        
        <div className='w-[24%]'>
          <Image src={Tree2} className="rounded-[5px]"/>
        </div>
        <div className='w-[24%]'>
          <Image src={Tree1} className="rounded-[5px]"/>
        </div>

        <div className='w-[24%]'>
          <Image src={Tree2} className="rounded-[5px]"/>
        </div>

        <div className='w-[24%]'>
          <Image src={Tree3} className="rounded-[5px]"/>
        </div>
        
        <div className='w-[24%]'>
          <Image src={Tree2} className="rounded-[5px]"/>
        </div>
        <div className='w-[24%]'>
          <Image src={Tree1} className="rounded-[5px]"/>
        </div>

        <div className='w-[24%]'>
          <Image src={Tree2} className="rounded-[5px]"/>
        </div>

        <div className='w-[24%]'>
          <Image src={Tree3} className="rounded-[5px]"/>
        </div>
        
        <div className='w-[24%]'>
          <Image src={Tree2} className="rounded-[5px]"/>
        </div>
        <div className='w-[24%]'>
          <Image src={Tree1} className="rounded-[5px]"/>
        </div>

        <div className='w-[24%]'>
          <Image src={Tree2} className="rounded-[5px]"/>
        </div>

        <div className='w-[24%]'>
          <Image src={Tree3} className="rounded-[5px]"/>
        </div>
        
        <div className='w-[24%]'>
          <Image src={Tree2} className="rounded-[5px]"/>
        </div>
        <div className='w-[24%]'>
          <Image src={Tree1} className="rounded-[5px]"/>
        </div>

        <div className='w-[24%]'>
          <Image src={Tree2} className="rounded-[5px]"/>
        </div>

        <div className='w-[24%]'>
          <Image src={Tree3} className="rounded-[5px]"/>
        </div>
        
        <div className='w-[24%]'>
          <Image src={Tree2} className="rounded-[5px]"/>
        </div>
      </Flex>
      </Container>
     </section>



    </>
  )
}

export default GallaryForTree