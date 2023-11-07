import React from 'react'
import './header.scss'

const navButtons = () => {
  return (
    <span className='navButtons'>
        <span>Search</span>
        <span>Canvas</span>
        <span>Student Portal</span>
        <button>Apply to MTECH</button>
    </span>
  )
}

export default navButtons