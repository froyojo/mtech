import React from 'react'
import './header.css'

const navButtons = () => {
  return (
    <span className='navButtons'>
        <span className='headerLinks'>Search</span>
        <span className='headerLinks'>Canvas</span>
        <span className='headerLinks'>Student Portal</span>
        <button className='applyNow'>Apply to MTECH</button>
    </span>
  )
}

export default navButtons