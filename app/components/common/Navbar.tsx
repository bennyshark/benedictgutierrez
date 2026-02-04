'use client'

import React from 'react'
import { Home, Code, FolderGit2, Mail } from 'lucide-react'

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm'>
      <div className='max-w-7xl mx-auto flex justify-between px-8 py-4 items-center'>
        
        {/* Logo */}
        <div className='font-bold text-2xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent'>
          BENNY
        </div>

        {/* Navigation Links */}
        <ul className='flex items-center gap-8'>
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className='flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors font-medium group'
            >
              <Home className='size-4 group-hover:scale-110 transition-transform' />
              <span>Home</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('skills')}
              className='flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors font-medium group'
            >
              <Code className='size-4 group-hover:scale-110 transition-transform' />
              <span>Skills</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className='flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors font-medium group'
            >
              <FolderGit2 className='size-4 group-hover:scale-110 transition-transform' />
              <span>Projects</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className='flex items-center gap-2 px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all hover:scale-105 shadow-md hover:shadow-lg font-medium'
            >
              <Mail className='size-4' />
              <span>Let's Connect</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}