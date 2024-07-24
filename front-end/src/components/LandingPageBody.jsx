import MultiSlider from './MultiSlider';
import ProjectsPaper from './ProjectsPaper';
import SkillsAndCertsPaper from './SkillsAndCertsPaper';
import { useEffect, useState } from 'react';
import { database } from '../utils/Firebase';
import { ref, onValue } from 'firebase/database';
import axios from 'axios';

const LandingPageBody = () => {
  const [skills, setSkills] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectsThumbnail();
    getSkillsAndCerts();
    // const getSkills = ref(database, 'skillsAndCerts');
    // onValue(getSkills, (snapshot) => {
    //   const data = snapshot.val();
    //   setSkills(data);
    // });

    setLoaded(true);
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

  const getProjectsThumbnail = async () => {
    //http://127.0.0.1:5000/projects/thumbnails
    //https://miras-portfolio-api.web.app/projects/thumbnails
    axios
      .get('http://127.0.0.1:5000/projects/thumbnails')
      .then((response) => {
        setProjects(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderedProjects = projects.map((project) => {
    return (
      <div key={project.title}>
        <ProjectsPaper
          title={project.title}
          description={project.description}
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
        </>
      )}
    </div>
  );
};

export default LandingPageBody;

// const projects = [
//   {
//     title: 'Project 1',
//     image: heroImg,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
//       'Nulla vitae elit libero, a pharetra augue.' +
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
//       'Nulla vitae elit libero, a pharetra augue.',
//     link: 'project1',
//   },
//   {
//     title: 'Project 2',
//     image: heroImg,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
//       'Nulla vitae elit libero, a pharetra augue.',
//     link: 'project2',
//   },
//   {
//     title: 'Project 3',
//     image: heroImg,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
//       'Nulla vitae elit libero, a pharetra augue.',
//     link: 'project3',
//   },
// ];
