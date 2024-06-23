import MultiSlider from './MultiSlider';

const LandingPageBody = () => {
  return (
    <div className='grid grid-cols-1 bg-gray-200'>
      <div className='flex col-span-1 justify-center items-center pt-8'>
        <h3 className='text-3xl font-bold'>Recent Projects</h3>
      </div>

      <div className='flex col-span-1 justify-center items-center py-8'>
        <MultiSlider />
      </div>
    </div>
  );
};

export default LandingPageBody;
