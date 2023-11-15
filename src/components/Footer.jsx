import React from 'react'
import Container from './Container'
import Flex from "../components/Flex"
import {FaInstagram,FaGooglePlusG ,FaTwitter ,FaYoutube,FaFacebookF  } from "react-icons/fa"
import {MdMail ,MdOutlinePhoneIphone ,MdLocationOn } from "react-icons/md"

function Footer() {
  return (
    <>
    <footer className='bg-secondary py-[100px] text-white'>
      <Container>
        <Flex className=" md:gap-x-16 justify-between flex-wrap px-2 xl:px-0 gap-y-10">
            <div className='md:w-[280px]'>
              <h3 className='font-roboto font-bold text-3xl '>Southside Nurseries</h3>
              <p className='font-pop font-normal text-base my-5'>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
              <Flex className="gap-x-4">
                <FaFacebookF size={20} className='hover:text-primary  cursor-pointer duration-300'/>
                <FaYoutube size={20} className='hover:text-primary  cursor-pointer duration-300'/>
                <FaTwitter size={20} className='hover:text-primary  cursor-pointer duration-300' />
                <FaGooglePlusG size={20} className='hover:text-primary  cursor-pointer duration-300'  />
                <FaInstagram   size={20} className='hover:text-primary  cursor-pointer duration-300' />
              </Flex>
            </div>

            <div className='md:w-[200px]'>
             <h3 className='font-roboto font-semibold text-[18px] mb-5 mt-1'>Useful Links</h3>
              <ul>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>About Us</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Faq</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Location</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Affiliates</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Contact</li>
              </ul>
            </div>
            
            <div className='md:w-[200px]'>
             <h3 className='font-roboto font-semibold text-[18px] mb-5 mt-1'>Category</h3>
              <ul>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Bedroom</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Living Room</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Kid’s</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Chair</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Dining Table</li>
              </ul>
            </div>

            <div className='md:w-[200px]'>
             <h3 className='font-roboto font-semibold text-[18px] mb-5 mt-1'>My Account</h3>
              <ul>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>My Account</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Discount</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Returns</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Orders History</li>
                <li className='font-pop font-normal mb-2 text-sm hover:text-primary duration-300 cursor-pointer'>Order Tracking</li>
              </ul>
            </div>

            <div className='md:w-[200px]'>
             <h3 className='font-roboto font-semibold text-[18px] mb-5 mt-1'>Contact Info</h3>
              <ul>
                <li className='font-pop font-normal mb-3 text-sm  flex items-center gap-x-4'><MdLocationOn   size={20}/> 123 Street, Old Trafford, New South London , UK</li>
                <li className='font-pop font-normal mb-3 text-sm flex items-center gap-x-4 '><MdMail  size={20}/> info@shopwise.com</li>
                <li className='font-pop font-normal mb-3 text-sm  flex items-center gap-x-4'><MdOutlinePhoneIphone  size={20}/> + 457 789 789 65</li>
              </ul>
            </div>
        
        </Flex>
      </Container>
    </footer>
    <section className='pb-8 bg-secondary text-white border-t pt-5 border-solid border-white/20 px-2 xl:px-0'>
      <Container>
        <div >
          <p className='font-pop font-normal text-sm'>Copyright 2022.KlbTheme . All rights reserved</p>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Footer