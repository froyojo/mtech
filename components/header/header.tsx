import React from 'react'
import Image from 'next/image'
import NavButtons from './navButtons'
import './header.scss'

const header = () => {
  return (
    <header className='header'>
        <Image
            src="/MTECH_full-logo.svg"
            width={200}
            height={50}
            alt="Picture of the author"
        />
        <NavButtons />
    </header>
  )
}

export default header