import MultiSlider from './MultiSlider';
import ProjectsPaper from './ProjectsPaper';
import SkillsAndCertsPaper from './SkillsAndCertsPaper';
import heroImg from '../assets/hero.jpg';
import { useEffect, useState } from 'react';

const LandingPageBody = () => {
  const [reactIcon, setReactIcon] = useState();
  useEffect(() => {
    fetch('http://localhost:3000/skillsAndCerts/images/reactIcon')
      .then((res) => res.blob())
      .then((blob) => {
        setReactIcon(URL.createObjectURL(blob));
      });
  }, []);

  const skillsAndCerts = [
    {
      title: 'React',
      image: reactIcon,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      link: 'skill1',
    },
    {
      title: 'NodeJS',
      image: reactIcon,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      link: 'skill2',
    },
    {
      title: 'Mulesoft',
      image: reactIcon,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      link: 'skill3',
    },
    {
      title: 'AWS',
      image: reactIcon,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      link: 'cert1',
    },
    {
      title: 'Azure',
      image: heroImg,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      link: 'cert2',
    },
    {
      title: 'SQL',
      image: reactIcon,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      link: 'cert3',
    },
  ];

  const renderedProjects = projects.map((project) => {
    return (
      <div key={project.title}>
        <ProjectsPaper
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      </div>
    );
  });

  const renderedSkillsAndCerts = skillsAndCerts.map((skillAndCert) => {
    return (
      <div key={skillAndCert.title}>
        <SkillsAndCertsPaper
          title={skillAndCert.title}
          description={skillAndCert.description}
          image={skillAndCert.image}
          link={skillAndCert.link}
        />
      </div>
    );
  });

  return (
    <div>
      <div className='grid grid-cols-1 bg-gray-200'>
        <div className='flex col-span-1 justify-center items-center pt-8'>
          <h3 className='text-3xl font-bold'>Recent Projects</h3>
        </div>

        <div className='flex col-span-1 justify-center items-center py-8'>
          <MultiSlider projects={renderedProjects} slidesToShow={2} />
        </div>
      </div>
      <div className='grid grid-cols-1 bg-gray-200'>
        <div className='flex col-span-1 justify-center items-center pt-8'>
          <h3 className='text-3xl font-bold'>Skills And Certifications</h3>
        </div>

        <div className='flex col-span-1 justify-center items-center py-8'>
          <MultiSlider projects={renderedSkillsAndCerts} slidesToShow={3} />
        </div>
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
