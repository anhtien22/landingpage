import React from 'react';
const Footer = () => {
  return (
    <section>
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
  );
};

export default Footer;