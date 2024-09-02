import MultiSlider from './MultiSlider';
import ProjectsPaper from './ProjectsPaper';
import SkillsAndCertsPaper from './SkillsAndCertsPaper';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ProjectsContext from '../contexts/ProjectsContext';

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const LandingPageBody = () => {
  const [skills, setSkills] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useContext(ProjectsContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    getSkillsAndCerts();
    setLoaded(true);
  }, []);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWindowWidth(window.innerWidth);
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  const getSkillsAndCerts = async () => {
    axios
      .get('http://127.0.0.1:5000/skillsAndCerts/thumbnails')
      .then((response) => {
        setSkills(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderedProjects = projects.map((project) => {
    return (
      <div key={project.projectTitle}>
        <ProjectsPaper
          title={project.projectTitle}
          description={project.overview}
          image={project.thumbnailImage}
          link={project.link}
        />
      </div>
    );
  });

  const renderedSkillsAndCerts = skills.map((skillAndCert) => {
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
      {!loaded ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='grid grid-cols-1 bg-gray-200'>
            <div className='flex col-span-1 justify-center items-center pt-8'>
              <h3 className='text-3xl font-bold'>Recent Projects</h3>
            </div>

            <div className='flex col-span-1 justify-center items-center pt-8'>
              <MultiSlider
                projects={renderedProjects}
                slidesToShow={
                  projects.lenght < 3
                    ? 1
                    : windowWidth < 769
                    ? 1
                    : windowWidth < 1200
                    ? 2
                    : 3
                }
              />
            </div>
          </div>
          <div className='grid grid-cols-1 bg-gray-200'>
            <div className='flex col-span-1 justify-center items-center'>
              <h3 className='text-3xl font-bold'>Skills And Certifications</h3>
            </div>

            <div className='flex col-span-1 justify-center items-center pt-8 pb-16'>
              <MultiSlider
                projects={renderedSkillsAndCerts}
                slidesToShow={
                  windowWidth < 564
                    ? 1
                    : windowWidth < 769
                    ? 2
                    : windowWidth < 1125
                    ? 3
                    : 4
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPageBody;
