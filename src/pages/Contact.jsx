import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'

function Contact() {
  return (
    <section className='my-[80px] px-4 xl:px-0'>
      <Container>
      <h2 className='font-roboto font-normal text-2xl mb-4 text-secondary '>Contact Us</h2>
      <p className='font-pop  font-normal md:w-10/12  text-sm mb-8 text-secondary'>If you’d like to talk to us about the products we stock or if you would like to arrange a free home visit please contact us via the contact form of via the details below.</p>
     
      <Flex className="flex-wrap gap-y-5 justify-between">
        <div className='w-[48%]'>
            <h4 className='font-pop font-medium text-secondary text-base pb-3'>Name</h4>
            <input type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder="Enter Your Name" />
        </div>

        <div className='w-[48%]'>
            <h4 className='font-pop font-medium text-secondary text-base pb-3'>Email</h4>
            <input type='email' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder="Enter Your Email" />
        </div>

        <div className='w-[100%]'>
            <h4 className='font-pop font-medium text-secondary text-base pb-3'>Message</h4>
            <textarea type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder="Message" />
        </div>

      </Flex>
      <button className='font-pop text-sm font-medium mt-5 md:text-base px-4 py-2 text-white  md:px-12 hover:bg-secondary duration-500 hover:text-secondary md:py-4 rounded-[5px] border-solid border border-primary bg-primary hover:bg-transparent '>Submit</button>

      </Container>
    </section>
  )
}

export default Contact