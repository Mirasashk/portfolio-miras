/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';

const ProjectsPaper = ({ title, description, image, link }) => {
  const navigate = useNavigate();

  const maxLengthDescription = (description) => {
    if (description.length > 400) {
      return description.slice(0, 400) + '...';
    }
    return description;
  };

  return (
    <div className='grid justify-center items-center pb-16'>
      <div
        className={`grid grid-rows-12 w-96 bg-white pb-6 rounded-2xl shadow-xl hover:shadow-2xl`}>
        <div className='grid row-span-6 w-full'>
          <img
            src={image}
            alt={title}
            className='
                rounded-t-2xl object-cover h-full w-full'
          />
        </div>
        <div className='grid row-span-5 w-full  p-4'>
          <h1 className='text-xl font-bold'>{title}</h1>
          <p className='text-sm text-gray-700 pb-2'>
            {maxLengthDescription(description)}
          </p>
        </div>
        <div className='grid row-span-1 items-center justify-start pl-4 '>
          <button
            onClick={() => navigate(`/projects/${link}`)}
            className='bg-teal-700 hover:bg-teal-500 text-white shadow-2xl rounded-lg px-4 py-2 '>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPaper;
