import MultiSlider from './MultiSlider';
import LandingPagePaper from './LandingPagePaper';
import heroImg from '../assets/hero.jpg';

const LandingPageBody = () => {
  const renderedProjects = projects.map((project) => {
    return (
      <div key={project.title}>
        <LandingPagePaper
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      </div>
    );
  });

  return (
    <div className='grid grid-cols-1 bg-gray-200'>
      <div className='flex col-span-1 justify-center items-center pt-8'>
        <h3 className='text-3xl font-bold'>Recent Projects</h3>
      </div>

      <div className='flex col-span-1 justify-center items-center py-8'>
        <MultiSlider projects={renderedProjects} />
      </div>
    </div>
  );
};

export default LandingPageBody;

const projects = [
  {
    title: 'Project 1',
    image: heroImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Nulla vitae elit libero, a pharetra augue.' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Nulla vitae elit libero, a pharetra augue.',
    link: 'project1',
  },
  {
    title: 'Project 2',
    image: heroImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Nulla vitae elit libero, a pharetra augue.',
    link: 'project2',
  },
  {
    title: 'Project 3',
    image: heroImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Nulla vitae elit libero, a pharetra augue.',
    link: 'project3',
  },
];
