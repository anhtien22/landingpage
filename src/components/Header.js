import React, { useState } from 'react';
import { useEffect } from 'react';
const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeScroll, setActiveScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setActiveScroll(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className={ `fixed top-0 z-50 w-full
       transition-all duration-500 ${activeScroll ? 'bg-gray-700 bg-opacity-90' : 'bg-white'} ` } >
      <div className='container mx-auto px-4'>
        <nav className='flex justify-between items-center py-1  '>
          <div className='w-32 md:w-full z-20'>
            <img src="/images/logo.png" alt="" />
          </div>
          <ul className={ `c-menu z-20 ${open ? 'top-0 opacity-100' : 'top-[-800px] md:opacity-100 opacity-0'} ` } id="menu">
            <li className='m-10 md:m-0 sm:m-4'>
              <a href="#" className={ `c-link ${activeScroll ? 'text-white' : ''} ` } >Home</a>
            </li>
            <li className='m-10 md:m-0 sm:m-4'>
              <a href="#" className={ `c-link ${activeScroll ? 'text-white' : ''}` }>Product</a>
            </li>
            <li className='m-10 md:m-0 sm:m-4'>
              <a href="#" className={ `c-link ${activeScroll ? 'text-white' : ''}` }>FAQ</a>
            </li>
            <li className='m-10 md:m-0 sm:m-4'>
              <a href="#" className={ `c-link ${activeScroll ? 'text-white' : ''}` }>Contact</a>
            </li>
          </ul>

          <div onClick={ () => setOpen(!open) } id="menu-button" className={ `text-3xl cursor-pointer md:hidden sm:z-20 ${activeScroll ? 'text-white' : ''} ` }>
            { !open ? <i class='bx bx-menu'></i> : <i class='bx bx-x-circle '></i> }
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;