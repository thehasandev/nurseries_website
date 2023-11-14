import React from 'react'
import Image from "../components/Image"
import Logo from "../assets/logo.png"
import Container from '../components/Container'
import {RiArrowDropDownLine} from "react-icons/ri"
function Navbar() {
  return (
    <Container>
        <nav className='flex items-center py-2'>
          <div className='w-2/12'>
            <h1 className='font-roboto font-semibold text-xl text-secondary'> All Teak Nurseries</h1>
          </div>
          <div className='w-10/12 '>
            <ul className='flex items-center justify-end gap-x-5'>
              <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Home</li>
              <li className='font-pop font-normal text-sm text-secondary group hover:text-primary duration-500 cursor-pointer flex items-center'>Our Products<RiArrowDropDownLine size={25}/>
               <div className='bg-white shadow-xl w-44 pl-5 py-4  absolute top-8 z-10 hover:text-secondary rotate-x-90 group-hover:rotate-x-0 group-hover:text-secondary duration-300 origin-top   left-[550px]'>
                <ul>
                  <li className='font-pop font-normal mb-2 text-sm text-secondary group hover:text-primary duration-300'>Teak Sets</li>
                  <li className='font-pop font-normal mb-2 text-sm text-secondary group hover:text-primary duration-300'>Teak Tables</li>
                  <li className='font-pop font-normal mb-2 text-sm text-secondary group hover:text-primary duration-300'>Teak Chairs</li>
                  <li className='font-pop font-normal mb-2 text-sm text-secondary group hover:text-primary duration-300'>Teak Benches</li>
                  <li className='font-pop font-normal mb-2 text-sm text-secondary group hover:text-primary duration-300'>Teak Loungers</li>
                  <li className='font-pop font-normal  text-sm text-secondary group hover:text-primary duration-300'>Teak Accessories</li>
                </ul>

               </div>
              </li>
             
              <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Furniture Gallery</li>
              <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Tree Gallery</li>
              <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Care & Maintenance</li>
              <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>About Us</li>
              <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Terms & Conditions</li>
              <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Contact Us</li>
            </ul>
          </div>
       </nav>
      </Container>

  )
}

export default Navbar