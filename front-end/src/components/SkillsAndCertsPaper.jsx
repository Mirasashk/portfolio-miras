/* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
// import { storage } from '../utils/Firebase';
// import { ref, getDownloadURL } from 'firebase/storage';

const SkillsAndCertsPaper = ({ image, title, description }) => {
  return (
    <div className='grid justify-center items-center pb-16'>
      <div className='grid justify-center w-60 h-72'>
        <div className='z-20 flex justify-center items-center w-full'>
          <div className='flex justify-center items-center h-24 w-24  mb-[-50px] bg-white rounded-full shadow-xl'>
            <div className='w-14'>
              <img src={image} alt={title} className='h-full' />
            </div>
          </div>
        </div>
        <div
          className={`grid justify-center pt-16 w-60 h-60 bg-teal-800 text-white rounded-3xl shadow-xl hover:shadow-2xl`}>
          <div className='grid'>
            <div className='flex justify-center font-bold text-2xl'>
              {title}
            </div>
            <div className='flex text-center font-medium px-4'>
              {description}
            </div>
            {/* <div className='flex justify-center items-end pb-4'>
              <button
                onClick={() => navigate(link)}
                className='bg-white hover:bg-teal-800 text-teal-800 font-bold py-2 px-4 rounded-full'>
                See Projects
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndCertsPaper;
