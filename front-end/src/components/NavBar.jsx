import { HiOutlineMenu } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const [navBarBg, setNavBarBg] = useState('');

  useEffect(() => {
    if (currentLocation.pathname !== '/') {
      setNavBarBg('bg-teal-800');
    } else {
      setNavBarBg('');
    }
  }, [currentLocation]);

  return (
    <div className='absolute w-full h-screen top-0 left-0'>
      <div className={`grid grid-cols-12 ${navBarBg}  px-8 md:px-24 lg:px-32`}>
        <div className='flex col-span-10 lg:col-span-6 items-center w-full p-4 z-20'>
          <div
            onClick={() => navigate('/')}
            className='text-white font-bold text-xl hover:text-teal-200 cursor-pointer'>
            Miras Ashktorab
          </div>
        </div>
        <div className='hidden lg:flex col-span-6 justify-end items-center z-20'>
          <ul className='flex items-center col-span-6 '>
            <li
              onClick={() => navigate('/about')}
              className='text-white hover:text-teal-200 font-semibold cursor-pointer mx-4'>
              About
            </li>
            <li
              onClick={() => navigate('/projects')}
              className='text-white hover:text-teal-200 font-semibold cursor-pointer mx-4'>
              Projects
            </li>
            <li
              onClick={() => navigate('/contact')}
              className='text-white hover:text-teal-200 font-semibold cursor-pointer mx-4'>
              Contact
            </li>
            <button
              onClick={() => navigate('/resume')}
              className='hover:bg-teal-600'>
              Resume / CV
            </button>
          </ul>
        </div>
        <div className='flex lg:hidden col-span-2 justify-end items-center z-20'>
          <HiOutlineMenu size={25} className='text-white' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
