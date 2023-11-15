import React from 'react'

import Data from "../data/productData"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import One from "../assets/two.png"
import Banner1 from "../assets/banner88.png"
import Banner2 from "../assets/banner89.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import {FaAmbulance,FaMoneyBillWave,FaPhoneSquareAlt} from "react-icons/fa"
import {MdOutlinePayment ,MdStar,MdStarBorder} from "react-icons/md"
import {ImHeadphones} from "react-icons/im"
import GallaryOne from "../assets/g1.jpg"
import GallaryTwo from "../assets/g2.jpg"
import GallaryThree from "../assets/g3.jpg"
import GallaryFour from "../assets/g4.jpg"
import GallaryFive from "../assets/g5.jpg"
import GallarySix from "../assets/g6.jpg"






function Home() {
  
  const settings = {
    // autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
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

  const gellarySlide = {
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,
    cssEase: "linear"
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

    <section className='my-[120px]'>
      <Container>
         <Flex className="flex-wrap justify-center gap-y-5">
           <Flex className='md:w-3/12 pl-8 pr-8 md:pr-0 py-4 border border-secondary/40 gap-x-8  items-center'>
             <div>
             <FaAmbulance size={25} className='text-primary'/>
             </div>
             <div>
               <h4 className='font-roboto font-medium text-base mb-1 text-secondary'>Free Delivery</h4>
               <p className='font-pop font-normal text-sm text-secondary'>Worldwide</p>
             </div>
           </Flex>

           <Flex className='md:w-3/12 pl-8 pr-8 md:pr-0 py-4 border border-secondary/40 gap-x-8  items-center'>
             <div>
             <FaMoneyBillWave  size={25} className='text-primary'/>
             </div>
             <div>
               <h4 className='font-roboto font-medium text-base mb-1 text-secondary'>Money Returns</h4>
               <p className='font-pop font-normal text-sm text-secondary'>30 Days money return</p>
             </div>
           </Flex>
        
           <Flex className='md:w-3/12 pl-8 pr-8 md:pr-0 py-4 border border-secondary/40 gap-x-8  items-center'>
             <div>
             <ImHeadphones  size={25} className='text-primary'/>
             </div>
             <div>
               <h4 className='font-roboto font-medium text-base mb-1 text-secondary'>27/4 Online Support</h4>
               <p className='font-pop font-normal text-sm text-secondary'>3 Customer Support</p>
             </div>
           </Flex>

           <Flex className='md:w-3/12 pl-8 pr-8 md:pr-0 py-4 border border-secondary/40 gap-x-8  items-center'>
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
         <Flex className=" flex-wrap justify-center gap-x-2 md:gap-x-0 md:justify-between gap-y-8">
            
    {
      Data.map((item,index)=>{
        let {ProductUrl,productName,productPrice,productDiscunt,phoneNumber,productReation} = item
        if(index<8){
return <div key={index} className={`w-[310px] border border-solid border-secondary/40 rounded-[10px] relative overflow-hidden group`}>
              <div className='relative overflow-hidden group '>
              <Image className="w-full rounded-t-[10px] " src={ProductUrl}/>
              <div className='absolute flex items-center justify-center w-full h-full rounded-t-[10px] group-hover:top-0 duration-200 bg-black/20 top-[100%] left-0'>
                  <p className='font-pop text-center font-medium text-xl text-black flex items-center gap-x-2'><FaPhoneSquareAlt  />{phoneNumber}</p>
              </div>
              </div>
              <button className='font-pop absolute hover:bg-white border border-solid border-primary hover:text-secondary  duration-300 -bottom-16 group-hover:bottom-4 left-1/2 -translate-x-1/2 font-normal bg-primary text-base  text-white px-10  py-4 rounded-full'>Call Now</button>

              <div>
                  <h3 className='font-roboto text-center font-medium mt-4 mb-2 text-base text-secondary'>{productName}</h3>
                  <p className='font-pop text-center font-medium text-sm text-primary'><span className='text-secondary line-through mr-2'>{productDiscunt}</span>{productPrice}</p>
                  
                  <Flex className='text-orange-500 justify-center mt-2 items-center pb-6'>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                  <p className='font-pop font-normal text-sm text-secondary pl-2'>{productReation}</p>
                  </Flex>
              
              </div>
                      
       </div>

        }

      })
    }          
         </Flex>
      
       
      </Container>
    </section>

    <section className='mb-[120px]'>
       <Container>
         <Flex>
           <div className='w-5/12 bg-[#E3FEF9] p-8 relative h-[350px]'>
             <h2 className='font-roboto font-medium text-secondary text-lg '>Super Sale</h2>
             <h1 className='font-roboto font-bold text-secondary my-1 text-[32px]'>New Collection</h1>
             <button className='font-roboto font-medium text-sm text-secondary hover:text-primary'>Shop Now</button>
             <img src={Banner1} className='absolute  bottom-6 left-10 hover:scale-125 scale-100 duration-500'/>
           </div>
           <div className='w-7/12  p-8 relative h-[350px]'>
             <h2 className='font-roboto font-medium text-secondary text-lg pt-32'>New Season</h2>
             <h1 className='font-roboto font-bold text-secondary my-1 text-[32px]'>Sale 40% Off</h1>
             <button className='font-roboto font-medium text-sm text-secondary hover:text-primary'>Shop Now</button>
             <img src={Banner2} className='absolute  bottom-6 left-16 hover:scale-110 scale-100 duration-500'/>
           </div>
         </Flex>
       </Container>
    </section>

    <section className='mb-[120px]'>
    <Slider {...gellarySlide}>
      <div className='relative w-[220px]'>
       <Image className="w-full h-[250px]"  src={GallaryOne}/>
       <div className='bg-black/20 h-full w-full top-0 left-0 absolute'></div>
      </div>

      <div className='relative w-[220px]'>
       <Image  className="w-full h-[250px]" src={GallaryTwo}/>
       <div className='bg-black/20 h-full w-full top-0 left-0 absolute'></div>
      </div>

      <div className='relative w-[220px]'>
       <Image className="w-full h-[250px]"  src={GallaryThree}/>
       <div className='bg-black/20 h-full w-full top-0 left-0 absolute'></div>
      </div>

      <div className='relative w-[220px]'>
       <Image  className="w-full h-[250px]" src={GallaryFour}/>
       <div className='bg-black/20 h-full w-full top-0 left-0 absolute'></div>
      </div>

      <div className='relative w-[220px]'>
       <Image className="w-full h-[250px]"  src={GallaryFive}/>
       <div className='bg-black/20 h-full w-full top-0 left-0 absolute'></div>
      </div>

      <div className='relative w-[220px]'>
       <Image className="w-full h-[250px]"  src={GallarySix}/>
       <div className='bg-black/20 h-full w-full top-0 left-0 absolute'></div>
      </div>

      <div className='relative w-[220px]'>
       <Image  className="w-full h-[250px]" src={GallaryOne}/>
       <div className='bg-black/20 h-full w-full top-0 left-0 absolute'></div>
      </div>

    </Slider>
    </section>
    </>
  )
}

export default Home