import React from 'react'
import Flex from "../components/Flex"
import Container from '../components/Container'
function Loging() {
  return (
    <section className='my-[60px] md:my-[120px] px-4 xl:px-0'>
        <Container>

         <h2 className='font-bold text-secondary text-2xl md:text-3xl mb-11'>Login</h2>
           <Flex className="gap-x-4 flex-wrap gap-y-6">
                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-secondary text-base pb-3'>Email address</h4>
                    <input type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder="company@domain.com" />
                </div>
                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-base text-secondary pb-3'>Password</h4>
                    <input type='password' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder="*******" />
                </div>
           </Flex>   
               
           <button className='font-pop text-sm font-medium mt-5 md:text-base px-4 py-2 text-white  md:px-12 hover:bg-secondary duration-500 hover:text-secondary md:py-4 rounded-[5px] border-solid border border-primary bg-primary hover:bg-transparent '>Log in</button>

        </Container>
    </section>
  )
}

export default Loging