import React from 'react'
import Flex from "../components/Flex"
import Container from '../components/Container'
function SingUp() {
  return (
    <section className='my-[60px] md:my-[120px] px-4 xl:px-0'>
        <Container>

        <h2 className='font-bold text-secondary text-2xl md:text-3xl mb-11'>Sing up</h2>
        <p className='font-pop font-normal text-sm mb-8 text-secondary w-8/12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <h2 className='font-bold text-secondary text-2xl md:text-2xl mb-11'>Your Personal Details</h2>
        <Flex className="gap-x-4 flex-wrap gap-y-6">
                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-secondary text-base pb-3'>First Name *</h4>
                    <input type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder="First Name" />
                </div>
                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-secondary text-base pb-3'>Last Name *</h4>
                    <input type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder="Last Name" />
                </div>
                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-base text-secondary pb-3'>Email address</h4>
                    <input type='email' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder='thehasandev@gmail.cp,' />
                </div>
                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-base text-secondary pb-3'>Telephone</h4>
                    <input type='email' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder='Your phone Number' />
                </div>
        </Flex>   

        <h2 className='font-bold text-secondary text-2xl md:text-2xl mt-8 mb-11'>New Customer</h2> 
         
        <Flex className="gap-x-4 flex-wrap gap-y-6">
                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-secondary text-base pb-3'> Address 1</h4>
                    <input type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder=" Address 1" />
                </div>

                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-secondary text-base pb-3'> Address 2</h4>
                    <input type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder=" Address 2" />
                </div>

                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-secondary text-base pb-3'>City</h4>
                    <input type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder=" City" />
                </div>
                
                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-secondary text-base pb-3'>Post code</h4>
                    <input type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder="Post Code" />
                </div>

                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-secondary text-base pb-3'>Diviton</h4>
                    <input type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder="Diviton" />
                </div>
                <div className='w-[45%]'>
                    <h4 className='font-pop font-medium text-secondary text-base pb-3'>District</h4>
                    <input type='text' className='w-full border rounded-[5px] border-solid border-black/40 lg:py-5 py-2 px-5 mb-2  placeholder:text-sm placeholder:font-pop' placeholder="District" />
                </div>
                
        </Flex> 
        <button className='font-pop text-sm font-medium mt-5 md:text-base px-4 py-2 text-white  md:px-12 hover:bg-secondary duration-500 hover:text-secondary md:py-4 rounded-[5px] border-solid border border-primary bg-primary hover:bg-transparent '>Sing Up</button>
        </Container>
   </section>
  )
}

export default SingUp