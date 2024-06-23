import heroImg from '../assets/hero.jpg';

const LandingPagePaper = () => {
  return (
    <div className='grid justify-center items-center pb-16'>
      <div className='w-96 h-[28rem] bg-white rounded-2xl shadow-xl hover:shadow-2xl'>
        <div className='w-full h-1/2'>
          <img
            src={heroImg}
            alt='project1'
            className='w-full h-full 
                rounded-t-2xl object-cover'
          />
        </div>
        <div className='w-full h-1/2 p-4'>
          <h1 className='text-xl font-bold'>{projects[0].title}</h1>
          <p className='text-sm text-gray-500'>{projects[0].description}</p>
          <button className='bg-teal-700 hover:bg-teal-500 text-white rounded-lg px-4 py-1 mt-2'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPagePaper;

const projects = [
  {
    title: 'Project 1',
    image: 'project1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Nulla vitae elit libero, a pharetra augue.' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Nulla vitae elit libero, a pharetra augue.',
    link: 'project1',
  },
  {
    title: 'Project 2',
    image: 'project2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Nulla vitae elit libero, a pharetra augue.',
    link: 'project2',
  },
  {
    title: 'Project 3',
    image: 'project3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Nulla vitae elit libero, a pharetra augue.',
    link: 'project3',
  },
];
