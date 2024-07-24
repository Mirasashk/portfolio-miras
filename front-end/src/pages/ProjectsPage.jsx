import ProjectThumbnail from '../components/ProjectThumbnail';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //http://127.0.0.1:5000/projects
    //https://miras-portfolio-api.web.app/projects
    axios
      .get('http://127.0.0.1:5000/projects/')
      .then((response) => {
        setProjects(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='grid w-full justify-center min-h-screen mt-16 pt-8'>
      <div className='grid justify-center px-72'>
        <div className=''>
          <div className='grid justify-center text-xl font-bold'></div>
          <div className='grid justify-center text-5xl font-light pb-6'>
            Welcome to My Coding Creations:
          </div>
          <div>
            <p className='font-mono text-justify leading-1'>
              This page showcases a selection of my software development
              projects, highlighting my skills, creativity, and dedication to
              innovative solutions. Each project reflects my journey as a
              developer, from concept to completion, demonstrating my ability to
              tackle complex challenges and deliver high-quality results.
              Explore my work to see firsthand how I bring ideas to life through
              code, and discover the diverse range of applications and
              technologies I&apos;ve mastered. Thank you for visiting, and I
              hope you enjoy viewing my projects as much as I enjoyed creating
              them!
            </p>
          </div>
          <hr className='bg-teal-700 h-1 mt-2' />
        </div>
        <ProjectThumbnail />
      </div>
    </div>
  );
};

export default ProjectsPage;
