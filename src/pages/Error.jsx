import React from 'react'

import Image from '../components/Image'
import ErrorImg from "../assets/error.png"
function Error() {
  return (
    <section className='py-[120px]'>
     <Image src={ErrorImg} className="w-96 mx-auto rounded-[5px]"/>
    </section>
  )
}

export default Error