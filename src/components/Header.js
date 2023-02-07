import React, { useState } from 'react';
const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header>
        <div className='container mx-auto px-4'>
          <nav className='flex justify-between items-center py-1'>
            <div className='w-32 md:w-full z-20'>
              <img src="/images/logo.png" alt="" />
            </div>
            <ul className={ `c-menu z-20 ${open ? 'top-0 opacity-100' : 'top-[-800px] md:opacity-100 opacity-0'} ` } id="menu">
              <li className='m-10 md:m-0 sm:m-4'>
                <a href="/" className="c-link" >Home</a>
              </li>
              <li className='m-10 md:m-0 sm:m-4'>
                <a href="/" className="c-link">Product</a>
              </li>
              <li className='m-10 md:m-0 sm:m-4'>
                <a href="/" className="c-link">FAQ</a>
              </li>
              <li className='m-10 md:m-0 sm:m-4'>
                <a href="/" className="c-link">Contact</a>
              </li>
            </ul>

            <div onClick={ () => setOpen(!open) } id="menu-button" className={ `text-3xl cursor-pointer md:hidden sm:z-20` }>
              { !open ? <i class='bx bx-menu'></i> : <i class='bx bx-x-circle '></i> }
            </div>
          </nav>

        </div>
      </header>
      {/* banner */ }
      <section>
        <div className="w-full bg-no-repeat bg-cover relative h-[620px]" style={ { backgroundImage: "url('./images/banner.png')" } }>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
            <p className="text-2xl mb-5">Food app</p>
            <h1 className="text-4xl mb-5 font-bold max-w-2xl lg:leading-relaxed md:text-5xl">Why stay hungry when you can order form Bella Onojie
            </h1>
            <p className="text-xl mb-5 font-bold">Download the bella onoje’s food app now on</p>
            <div className='flex justify-center'>
              <button className='mx-4 border border-transparent bg-red-500 px-10 py-3 rounded-full hover:bg-transparent hover:border-white transition-all'>Playstore</button>
              <button className='mx-4 border border-white bg-transparent px-10 py-3 rounded-full hover:bg-red-500 hover:border-transparent transition-all'>Appstore</button>
            </div>
          </div>
        </div>
      </section>
      {/* app image */ }
      <section className="relative">
        <div
          class="
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-2/3 -translate-y-1/4
        "
        >
          <img
            src="./images/appimage.png"
            alt="phone app screens"
            class="max-w-none w-screen pl-20 md:w-auto"
          />
        </div>
        {/* <div className="">
          <img className=' absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/4 z-10 
         max-w-none w-screen pl-20 md:w-auto' src="./images/appimage-1.png" alt="" />
        </div> */}
        {/* <img className='max-w-none w-screen pl-20 md:w-auto' src="./images/appimage-2.png" alt="" /> */ }

        {/* <div className="">
          <img className=" absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/4 -z-11
          max-w-none w-screen pl-20 md:w-auto
           " src="./images/appimage-2.png" alt="" />"
        </div> */}
        {/* w-[285px] h-[531px]  pl-20 ml-14 mt-16 md:max-w-none md:ml-[470px] md:mt-28 */ }

      </section>
      {/*  */ }
      <section className='pt-96 mt-28 sm:pt-[250px] md:pt-[640px] md:mt-0 lg:mt-0 '>
        <div className="container mx-auto px-4">
          <hr className="w-4/5 mx-auto h-0.5 bg-gray-300 md:w-2/5" />
          <h2 className="text-center text-4xl font-semibold py-10">How the app works</h2>
          <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
            <div className="text-center mb-10">
              <img src="./images/app-1.png" alt="" />
            </div>
            <div className="text-center md:text-left">
              <span className="text-red-500 font-semibold text-2xl">Create account</span>
              <h2 className="text-4xl text-black-900 font-bold max-w-md leading-relaxed py-5">Create/login to an existing account to get started</h2>
              <p className="text-xl text-gray-500 font-light max-w-sm max-auto md:mx-0">An account is created with your email
                and a desired password</p>
            </div>
          </div>

          <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
            <div className="text-center mb-10 order-1 md:order-2">
              <img src="./images/app-2.png" alt="" />
            </div>
            <div className="text-center md:text-left order-2 md:order-1">
              <span className="text-red-500 font-semibold text-2xl">Explore varieties</span>
              <h2 className="text-4xl text-black-900 font-bold max-w-md leading-relaxed py-5">Shop for your favorites meal as e dey hot.</h2>
              <p className="text-xl text-gray-500 font-light max-w-sm max-auto md:mx-0">Shop for your favorite meals or drinks and enjoy while doing it.</p>
            </div>
          </div>

          <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
            <div className="text-center mb-10">
              <img src="./images/app-3.png" alt="" />
            </div>
            <div className="text-center md:text-left">
              <span className="text-red-500 font-semibold text-2xl">Checkout</span>
              <h2 className="text-4xl text-black-900 font-bold max-w-md leading-relaxed py-5">When you done check out
                and get it delivered.</h2>
              <p className="text-xl text-gray-500 font-light max-w-sm max-auto md:mx-0">When you done check out and get it
                delivered with ease.</p>
            </div>
          </div>

        </div>
      </section>
      {/* download */ }
      <section className=''>
        <div className='relative w-full h-[620px] bg-no-repeat bg-cover' style={ { backgroundImage: "url('./images/download.png')" } }>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10'>
            <h1 className="text-4xl mb-5 font-bold max-w-2xl md:leading-relaxed md:text-5xl">
              Download the app now.
            </h1>
            <p className="text-xl mb-5 font-light">Available on your favorite store. Start your premium experience now</p>
            <div className='flex justify-center'>
              <button className='mx-4 border border-transparent bg-red-500 px-10 py-3 rounded-full hover:bg-transparent hover:border-white transition-all'>Playstore</button>
              <button className='mx-4 border border-white bg-transparent px-10 py-3 rounded-full hover:bg-red-500 hover:border-transparent transition-all'>Appstore</button>
            </div>
          </div>
        </div>
      </section>
      {/* footer */ }
      <section >
        <div className='container mx-auto px-4'>
          <div className='flex flex-col justify-between items-center py-5 md:flex-row'>
            <div className='w-32 md:w-full'>
              <img src="./images/logo.png" alt="" />
            </div>
            <div className='flex items-center mt-5 text-gray-500 w-full justify-center md:justify-end'>
              <a href="tel:0389927803" className="flex mx-2">
                <i className='bx bxs-phone text-base text-red-500 mr-2'></i>
                <p>038.9927.803</p>
              </a>
              <a href="mailto:anhtien27722@gmail.com" className="flex mx-2">
                <i className='bx bxs-envelope text-base text-red-500 mr-2'></i>
                <p>anhtien27722@gmail.com</p>
              </a>
            </div>
          </div>
          <div className='text-center my-4'>
            <p className='text-gray-500'>Copy &copy; 2022 </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;