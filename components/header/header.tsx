import React from 'react'
import Image from 'next/image'
import NavButtons from './navButtons'
import './header.css'

const header = () => {
  return (
    <header className='header'>
        <Image
            src="/MTECH_full-logo.svg"
            width={180}
            height={50}
            alt="Picture of the author"
        />
        <NavButtons />
    </header>
  )
}

export default header