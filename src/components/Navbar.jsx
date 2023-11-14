import React from 'react'
import Image from "../components/Image"
import Logo from "../assets/logo.png"
import Container from '../components/Container'
import {RiArrowDropDownLine} from "react-icons/ri"
function Navbar() {
  return (
    <Container>
        <nav className='flex items-center'>
          <div className='w-2/12'>
            <Image src={Logo}/>
          </div>
          <div className='w-10/12 '>
            <ul className='flex items-center justify-end gap-x-5'>
              <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Home</li>
              <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center'>Our Products<RiArrowDropDownLine size={25}/></li>
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