/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
const ProjectsPaper = ({ title, description, image, link }) => {
  const navigate = useNavigate();
  return (
    <div className='grid justify-center items-center pb-16'>
      <div
        className={`w-96 h-[28rem] bg-white rounded-2xl shadow-xl hover:shadow-2xl`}>
        <div className='w-full h-1/2'>
          <img
            src={image}
            alt={title}
            className='w-full h-full 
                rounded-t-2xl object-cover'
          />
        </div>
        <div className='w-full h-1/2 p-4'>
          <h1 className='text-xl font-bold'>{title}</h1>
          <p className='text-sm text-gray-700'>{description}</p>
          <button
            onClick={() => navigate(`/projects/${link}`)}
            className='bg-teal-700 hover:bg-teal-500 text-white rounded-lg px-4 py-1 mt-2'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPaper;
