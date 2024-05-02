import React from 'react'

const Navbar = () => {
  return (
    <nav className = "flex justify-between px-1 bg-black py-2">
        <h2 className='text-xl font-medium'>GetMeAChai</h2>
        <ul className='flex gap-3'>
            <li>Home</li>
            <li>Abour</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Log In</li>
        </ul>
    </nav>
  )
}

export default Navbar
