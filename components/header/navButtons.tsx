import React from 'react'
import './header.css'

const navButtons = () => {
  return (
    <span className='navButtons'>
        <span>Search</span>
        <span>Canvas</span>
        <span>Student Portal</span>
        <button className='applyNow'>Apply to MTECH</button>
    </span>
  )
}

export default navButtons