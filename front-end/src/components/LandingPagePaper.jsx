/* eslint-disable react/prop-types */

const LandingPagePaper = ({ title, description, image, link }) => {
  return (
    <div className='grid justify-center items-center pb-16'>
      <div className='w-96 h-[28rem] bg-white rounded-2xl shadow-xl hover:shadow-2xl'>
        <div className='w-full h-1/2'>
          <img
            src={image}
            alt='project1'
            className='w-full h-full 
                rounded-t-2xl object-cover'
          />
        </div>
        <div className='w-full h-1/2 p-4'>
          <h1 className='text-xl font-bold'>{title}</h1>
          <p className='text-sm text-gray-500'>{description}</p>
          <button className='bg-teal-700 hover:bg-teal-500 text-white rounded-lg px-4 py-1 mt-2'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPagePaper;
