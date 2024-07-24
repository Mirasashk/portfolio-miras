/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { storage } from '../utils/Firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const SkillsAndCertsPaper = ({ image, title, description }) => {
  const [imageURL, setImageURL] = useState('');
  // const storageRef = getStorage();
  useEffect(() => {
    getDownloadURL(ref(storage, image))
      .then((url) => {
        setImageURL(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='grid justify-center items-center pb-16'>
      <div className='grid justify-center w-60 h-72'>
        <div className='z-20 flex justify-center items-center w-full'>
          <div className='flex justify-center items-center h-24 w-24  mb-[-50px] bg-white rounded-full shadow-xl'>
            <div className='w-14'>
              <img src={imageURL} alt={title} className='h-full' />
            </div>
          </div>
        </div>
        <div
          className={`grid justify-center pt-16 w-60 h-60 bg-teal-800 text-white rounded-3xl shadow-xl hover:shadow-2xl`}>
          <div className='block'>
            <div className='flex justify-center font-bold h-12 text-2xl'>
              {title}
            </div>
            <div className='flex text-center font-medium px-4'>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndCertsPaper;
