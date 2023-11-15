import React from 'react'
import Container from '../components/Container'
import BlogOne from "../assets/blog1.png"
import BlogTwo from "../assets/blog2.png"
import BlogThree from "../assets/blog3.png"
import Image from '../components/Image'
import Flex from '../components/Flex'
import {PiStorefront} from "react-icons/pi"
import {GoFileDirectory } from "react-icons/go"
import {BsCalendar2Date  } from "react-icons/bs"

function Blog() {
  return (
    <section className='my-[80px] px-4 xl:px-0'>
        <Container>
          <h1 className='font-roboto font-bold  md:w-auto text-[28px] md:text-3xl mb-8   text-secondary'>Our Blog</h1>
            <Flex className="flex-wrap gap-10 ">
               
                <div className='md:w-[600px] '>
                    <div className='md:w-full md:h-96 overflow-hidden cursor-pointer rounded-t-[20px]'>
                    <Image className="md:w-full hover:scale-110 duration-700 rounded-t-[20px]" src={BlogOne}/>
                    </div>   
                    <h1 className='font-roboto font-semibold my-4 md:my-5 text-sm    md:text-2xl text-secondary duration-500 cursor-pointer   hover:text-primary'>But I must explain to you how all this mistaken idea</h1>
                    <Flex className="md:gap-x-5 gap-x-2 mb-4">
                        <p className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><BsCalendar2Date size={20} /> April 23, 2020</p>
                        <div className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><GoFileDirectory  size={20}/>StandartShop,</div>
                        <div className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><PiStorefront  size={20}/>Store, Woocommerce</div>
                    </Flex>
                    <p className='font-pop font-normal text-sm text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien. In sit amet vulputate metus. Nullam eget rutrum nisl. Sed tincidunt lorem sed maximus interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean scelerisque efficitur mauris nec tincidunt. Ut cursus leo</p>
                    <button className='font-pop text-sm font-medium mt-5 md:text-base px-4 py-2 text-white  md:px-12 hover:bg-secondary duration-500 hover:text-secondary md:py-4 rounded-[5px] border-solid border border-primary bg-primary hover:bg-transparent '>Read More</button>
                </div>

                <div className='md:w-[600px] '>
                    <div className='md:w-full md:h-96 overflow-hidden cursor-pointer rounded-t-[20px]'>
                    <Image className="md:w-full hover:scale-110 duration-700 rounded-t-[20px]" src={BlogTwo}/>
                    </div>   
                    <h1 className='font-roboto font-semibold my-4 md:my-5 text-sm    md:text-2xl text-secondary duration-500 cursor-pointer   hover:text-primary'>On the other hand we provide denounce with righteous</h1>
                    <Flex className="md:gap-x-5 gap-x-2 mb-4">
                        <p className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><BsCalendar2Date size={20} /> April 23, 2020</p>
                        <div className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><GoFileDirectory  size={20}/>StandartShop,</div>
                        <div className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><PiStorefront  size={20}/>Store, Woocommerce</div>
                    </Flex>
                    <p className='font-pop font-normal text-sm text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien. In sit amet vulputate metus. Nullam eget rutrum nisl. Sed tincidunt lorem sed maximus interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean scelerisque efficitur mauris nec tincidunt. Ut cursus leo</p>
                    <button className='font-pop text-sm font-medium mt-5 md:text-base px-4 py-2 text-white  md:px-12 hover:bg-secondary duration-500 hover:text-secondary md:py-4 rounded-[5px] border-solid border border-primary bg-primary hover:bg-transparent '>Read More</button>
                </div>

                <div className='md:w-[600px] '>
                    <div className='md:w-full md:h-96 overflow-hidden cursor-pointer rounded-t-[20px]'>
                    <Image className="md:w-full hover:scale-110 duration-700 rounded-t-[20px]" src={BlogThree}/>
                    </div>   
                    <h1 className='font-roboto font-semibold my-4 md:my-5 text-sm    md:text-2xl text-secondary duration-500 cursor-pointer   hover:text-primary'>Why is a ticket to Lagos so expensive?</h1>
                    <Flex className="md:gap-x-5 gap-x-2 mb-4">
                        <p className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><BsCalendar2Date size={20} /> April 23, 2020</p>
                        <div className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><GoFileDirectory  size={20}/>StandartShop,</div>
                        <div className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><PiStorefront  size={20}/>Store, Woocommerce</div>
                    </Flex>
                    <p className='font-pop font-normal text-sm text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien. In sit amet vulputate metus. Nullam eget rutrum nisl. Sed tincidunt lorem sed maximus interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean scelerisque efficitur mauris nec tincidunt. Ut cursus leo</p>
                    <button className='font-pop text-sm font-medium mt-5 md:text-base px-4 py-2 text-white  md:px-12 hover:bg-secondary duration-500 hover:text-secondary md:py-4 rounded-[5px] border-solid border border-primary bg-primary hover:bg-transparent '>Read More</button>
                </div>

     
                
                <div className='md:w-[600px] '>
                    <div className='md:w-full md:h-96 overflow-hidden cursor-pointer rounded-t-[20px]'>
                    <iframe width="560" className=' rounded-t-[20px] ' height="315" src="https://www.youtube.com/embed/7PIji8OubXU?si=v-_iw9iIuuN8Tmbp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
                    </div>   
                    <h1 className='font-roboto font-semibold my-4 md:my-5 text-sm    md:text-2xl text-secondary duration-500 cursor-pointer   hover:text-primary'>The Problem With Typefaces on the Web</h1>
                    <Flex className="md:gap-x-5 gap-x-2 mb-4">
                        <p className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><BsCalendar2Date size={20} /> April 23, 2020</p>
                        <div className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><GoFileDirectory  size={20}/>StandartShop,</div>
                        <div className='font-pop font-normal text-xs md:text-sm text-secondary hover:text-primary duration-300 cursor-pointer flex items-center gap-x-2'><PiStorefront  size={20}/>Store, Woocommerce</div>
                    </Flex>
                    <p className='font-pop font-normal text-sm text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien. In sit amet vulputate metus. Nullam eget rutrum nisl. Sed tincidunt lorem sed maximus interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean scelerisque efficitur mauris nec tincidunt. Ut cursus leo</p>
                    <button className='font-pop text-sm font-medium mt-5 md:text-base px-4 py-2 text-white  md:px-12 hover:bg-secondary duration-500 hover:text-secondary md:py-4 rounded-[5px] border-solid border border-primary bg-primary hover:bg-transparent '>Read More</button>
                </div>




          
        
                

          

            </Flex>
        </Container>
    </section>
  )
}

export default Blog