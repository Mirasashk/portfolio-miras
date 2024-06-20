import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

const NavBar = () => {
  return (
    <div className='absolute w-full h-screen top-0 left-0'>
      <div className='grid grid-cols-12 px-8 md:px-24 lg:px-32'>
        <div className='flex col-span-10 lg:col-span-6 items-center w-full p-4 z-20'>
          <div className='text-white font-bold text-xl hover:text-teal-200 cursor-pointer'>
            Miras Ashktorab
          </div>
        </div>
        <div className='hidden lg:flex col-span-6 justify-end items-center z-20'>
          <ul className='flex items-center col-span-6 '>
            <li className='text-white hover:text-teal-200 font-semibold cursor-pointer mx-4'>
              About
            </li>
            <li className='text-white hover:text-teal-200 font-semibold cursor-pointer mx-4'>
              Projects
            </li>
            <li className='text-white hover:text-teal-200 font-semibold cursor-pointer mx-4'>
              Contact
            </li>
            <button className='hover:bg-teal-600'>Resume / CV</button>
          </ul>
        </div>
        <div className='flex lg:hidden col-span-2 justify-end items-center z-20'>
          <HiOutlineMenu size={25}  className='text-white' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
