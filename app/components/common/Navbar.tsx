import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between px-30 py-6 items-center'>
        <div className='font-bold text-2xl'>
            Benny
        </div>

        <ul className='flex space-x-20'>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Lets Connect</li>
        </ul>
    </nav>

  )
}
