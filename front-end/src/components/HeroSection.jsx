import heroImg from '../assets/hero.jpg';
import heroVector from '../assets/heroSectionVector.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src={heroImg}
        alt='hero'
      />

      <div className='absolute lg:top-1/4 top-16 left-0 right-0'>
        <div className='flex justify-center items-center'>
          <div className='grid lg:grid-cols-2 gap-4 w-4/6'>
            <div className='flex pt-4 justify-center items-center w-full'>
              <div className='grid lg:justify-items-start lg:text-left text-center justify-items-center'>
                <p className='text-3xl text-white font-bold '>
                  Your Vision, My Code!
                </p>
                <h1 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-600 from-10% to-purple-950 to-60% font-bold '>
                  Hi there, I&#39;m Miras
                </h1>
                <p className='text-2xl max-w-96 lg:text-left text-center text-white font-semibold '>
                  designing and delivering robust web applications using the
                  MERN stack.
                </p>
                <button
                  onClick={() => navigate('/projects')}
                  className='mt-2 w-48 hover:bg-teal-600'>
                  See projects
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className='mt-2 w-48 bg-purple-900 hover:bg-teal-600'>
                  More About me
                </button>
              </div>
            </div>
            <div className='grid lg:mt-0 mt-10 justify-items-center'>
              <img className=' w-96' src={heroVector} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
