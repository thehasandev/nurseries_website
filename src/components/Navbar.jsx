import React, { useEffect, useRef, useState } from 'react'
import Flex from "../components/Flex" 
import Container from '../components/Container'
import {RiArrowDropDownLine,RiMenu3Line } from "react-icons/ri"
import { Link } from 'react-router-dom'
function Navbar() {

  let [menu,setMenu] = useState(false)
  let [drop,setDrop] = useState(false)
  let menutRef = useRef(null)


  useEffect(()=>{
    let handler =(e)=>{
      if(!menutRef.current.contains(e.target)){
        setDrop(false)
       }
     }
    document.addEventListener("mousedown",handler)
    return ()=>{
      document.removeEventListener("mousedown",handler)
    }
   })
   

   

  return (
    <Container>
      <section>
        <div className='hidden md:block'>
          <Flex className=' items-center py-2'>
              <div className='w-2/12'>
                <h1 className='font-roboto font-semibold text-xl text-secondary'>Southside Nurseries</h1>
              </div>
              <div className='w-10/12 '>
                <ul  className='flex items-center justify-end gap-x-5'>
                  <Link to="/">
                    <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Home</li>
                  </Link>
                  <li className='font-pop font-normal text-sm text-secondary group hover:text-primary duration-500 cursor-pointer flex items-center relative '>Our Products<RiArrowDropDownLine size={25}/>
                  {/* Hover Drop Menu  */}
                  <div className='bg-white shadow-xl w-44 pl-5 py-4  absolute top-9 -left-14 z-10 hover:text-secondary rotate-x-90 group-hover:rotate-x-0 group-hover:text-secondary duration-300 origin-top'>
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
                <Link to="/furniture-gallary">
                  <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Furniture Gallery</li>
                </Link>
                
                  <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Tree Gallery</li>
                  <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Care & Maintenance</li>
                  
                  <Link to="/about">
                    <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>About Us</li>
                  </Link>

                  <Link to="/trams-condition">
                    <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Terms & Conditions</li>
                  </Link>

                  <Link to="/contact">
                    <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Contact Us</li>
                  </Link>

                  <Link to="/blog">
                    <li className='font-pop font-normal text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Blog</li>
                  </Link>
                </ul>
              </div>
          </Flex>
        </div>

        <nav  className='block md:hidden px-4 xl:px-0'>
          <div ref={menutRef}>
          <Flex className="justify-between items-center py-4">
          <h1 className='font-roboto font-semibold text-xl text-secondary'>Southside Nurseries</h1>
          <RiMenu3Line onClick={()=>{setMenu(!menu)}} size={25}  className='cursor-pointer'/>
          </Flex>
          {
            menu &&
          <ul className='pl-4'>
             <Link to="/">
                <li className='font-pop font-normal mb-2 text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Home</li>
             </Link>
            <li onClick={()=>{setDrop(!drop)}}  className='font-pop font-normal mb-2 text-sm text-secondary group hover:text-primary duration-500 cursor-pointer flex items-center relative '>Our Products<RiArrowDropDownLine  size={25}/></li>
           {/* Drop Dorn Menu  */}
              {
                drop &&
                <ul >
                  <li className='font-pop font-normal mb-2 text-sm text-secondary/60 cursor-pointer group hover:text-primary duration-300'>Teak Sets</li>
                  <li className='font-pop font-normal mb-2 text-sm text-secondary/60 cursor-pointer group hover:text-primary duration-300'>Teak Tables</li>
                  <li className='font-pop font-normal mb-2 text-sm text-secondary/60 cursor-pointer group hover:text-primary duration-300'>Teak Chairs</li>
                  <li className='font-pop font-normal mb-2 text-sm text-secondary/60 cursor-pointer group hover:text-primary duration-300'>Teak Benches</li>
                  <li className='font-pop font-normal mb-2 text-sm text-secondary/60 cursor-pointer group hover:text-primary duration-300'>Teak Loungers</li>
                  <li className='font-pop font-normal  text-sm text-secondary group hover:text-primary duration-300'>Teak Accessories</li>
                </ul>
              }
           <Link to="/furniture-gallary">
            <li className='font-pop font-normal mb-2 text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Furniture Gallery</li>
           </Link>   
            <li className='font-pop font-normal mb-2 text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Tree Gallery</li>
            <li className='font-pop font-normal mb-2 text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Care & Maintenance</li>
            
            <Link to="/about">
              <li className='font-pop font-normal mb-2 text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>About Us</li>
            </Link>

            <Link to="/trams-condition">
              <li className='font-pop font-normal mb-2 text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Terms & Conditions</li>
            </Link>

            <Link to="/contact">
              <li className='font-pop font-normal mb-2 text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Contact Us</li>
            </Link>
           
            <Link to="/blog">
              <li className='font-pop font-normal mb-2 text-sm text-secondary hover:text-primary duration-300 cursor-pointer'>Blog</li>
            </Link>
          </ul>
          }
          </div>
        </nav>

      </section>
    </Container>

  )
}

export default Navbar