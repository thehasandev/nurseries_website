import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import One from "../assets/two.png"

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

    <section className='my-[80px] px-5 xl:px-0'>
        <Container>
            <h2 className='font-roboto font-normal text-3xl mb-2 text-secondary'>Terms & Conditions</h2>
            <p className='font-pop font-normal text-sm mb-4 text-secondary'>These trading terms and conditions apply to purchases of any products or goods from All Teak Nurseries Limited.</p>
             <h3 className='font-roboto font-normal text-3xl mb-2 text-secondary'>Business Policies</h3>
             <p className='font-pop font-normal text-sm text-secondary'>Please read the terms and conditions carefully as they contain important information Nothing in these conditions affects your statutory rights as a consumer</p>
            
          <ul className='relative after:absolute mt-4 mb-3  after:h-1.5 after:w-1.5 after:top-[7px] after:left-[-15px] after:bg-secondary after:rounded-full'>
            <li className='font-dm text-secondary font-normal text-sm'> Payment of the full Price shall be due at the date of the order. Time for payment shall be of the essence. If the Buyer does not pay the full Price on notification of shipment the Seller may bring an action for the Price even though property in the Products has not been passed to the Buyer. If the Buyer fails to make payment as required the Seller may suspend delivery of the Products or any further Products ordered until payment is made in full.</li>
          </ul>

          <ul className='relative after:absolute mb-3  after:h-1.5 after:w-1.5 after:top-[7px] after:left-[-15px] after:bg-secondary after:rounded-full'>
            <li className='font-dm text-secondary font-normal text-sm'>A defect under these terms means any imperfection in the material or workmanship that will impair the use of this furniture product. Any warranty in place does not apply to normal wear and tear or normal deterioration as a result of domestic residential use. Any offered warranty does not cover defects caused by the application of teak oil, varnish or wood stain. The warranty does not apply to furniture which has been placed on an uneven surface which as a result has caused the table to warp or caused opening/closing mechanical problems. For maximum longevity of your furniture your teak furniture should be placed on an even surface. <span className='font-bold'>All demo and ex-display are non-refundable and sold as seen.</span></li>
          </ul>

          <ul className='relative after:absolute mb-3  after:h-1.5 after:w-1.5 after:top-[7px] after:left-[-15px] after:bg-secondary after:rounded-full'>
            <li className='font-dm text-secondary font-normal text-sm'>If for any reason you cancel your order (excluding damage or a fault with the item(s))within 14 working days from the date the goods have been recieved. If the customer wishes to cancel then it is the customers responsibility to look after the goods in their possession. We will process a refund and less a collection fee as stated in your payment invoice for the goods. Please contact us via telephone or e-mail to arrange a refund. Once authorised refunds will be issued to the same payment card used to place the order.</li>
          </ul>

          <ul className='relative after:absolute mb-3  after:h-1.5 after:w-1.5 after:top-[7px] after:left-[-15px] after:bg-secondary after:rounded-full'>
            <li className='font-dm text-secondary font-normal text-sm'>Delivery of in stock items are usually made within 30 days. If an item is out of stock we will inform the customer as soon as possible. The majority of items are delivered within a 14 day timeframe. For deliveries to Scotland or the Islands the price and time of delivery will be stated after your order has been received. Some circumstances are beyond our control and we may delay or cancel your delivery, in this instance we will not be held liable for any consequential loss you experience but will arrange a free re-delivery.</li>
          </ul>

          <ul className='relative after:absolute mb-3  after:h-1.5 after:w-1.5 after:top-[7px] after:left-[-15px] after:bg-secondary after:rounded-full'>
            <li className='font-dm text-secondary font-normal text-sm'>On the delivery day, please ensure that the trades people and delivery team can gain easy access to the area the furniture is being delivered and/or assembled. Please ensure that the area you want the furniture placed is cleared. Please inspect the furniture carefully before signing the delivery note or invoice. If the delivery team try to deliver at a pre arranged time and you are out they will return the furniture back to base and a re-delivery charge may apply.</li>
          </ul>

          <ul className='relative after:absolute mb-3  after:h-1.5 after:w-1.5 after:top-[7px] after:left-[-15px] after:bg-secondary after:rounded-full'>
            <li className='font-dm text-secondary font-normal text-sm'>Prior to delivery the customer must inform All Teak Nurseries Limited of any access or parking issues at the delivery address. The customer where necessary must provide vouchers or tokens to the delivery team to allow them to park and unload the furniture legally. If there is no adequate parking within a reasonable distance of the delivery address and the delivery team cannot safetly unload, the delivery team may not be able to deliver the furniture. In this case the furniture will be returned to base and a re-delivery charge may apply.</li>
          </ul>

          <ul className='relative after:absolute mb-3  after:h-1.5 after:w-1.5 after:top-[7px] after:left-[-15px] after:bg-secondary after:rounded-full'>
            <li className='font-dm text-secondary font-normal text-sm'>After acceptance the Buyer shall not be entitled to reject Products which are not in accordance with the contract.</li>
          </ul>

          <ul className='relative after:absolute mb-3  after:h-1.5 after:w-1.5 after:top-[7px] after:left-[-15px] after:bg-secondary after:rounded-full'>
            <li className='font-dm text-secondary font-normal text-sm'>Risk of damage to or loss of the Products shall pass to the Buyer upon delivery.</li>
          </ul>
        </Container>
    </section>

    </>
  )
}

export default TrmasAndCondition