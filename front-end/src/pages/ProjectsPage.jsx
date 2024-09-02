import ProjectThumbnail from '../components/ProjectThumbnail';
import { useContext } from 'react';
import ProjectsContext from '../contexts/ProjectsContext';

const ProjectsPage = () => {
  const [projects, setProjects] = useContext(ProjectsContext);

  const renderedProjects = projects.map((project) => {
    return (
      <div
        key={project.projectTitle}
        className='tablet:col-span-6 laptop:col-span-4 '>
        <div>
          <ProjectThumbnail project={project} />
        </div>
      </div>
    );
  });

  return (
    <div className='grid w-full justify-center mt-16 pt-8 tablet:px-10'>
      <div className='grid justify-center '>
        <div className=''>
          <div className='flex justify-center text-center text-5xl font-light pb-6'>
            Welcome to My Coding Creations
          </div>
          <div>
            <p className='font-mono text-justify px-6'>
              This page highlights my software development projects, showcasing
              my skills and commitment to innovation. Each project reflects my
              journey from concept to completion, demonstrating my ability to
              solve challenges and deliver results. I hope you enjoy exploring
              my work as much as I enjoyed creating it!
            </p>
          </div>
          <hr className='bg-teal-700 h-1 mt-2 w-full' />
          <div className='tablet:grid tablet:grid-cols-12 tablet:gap-4'>
            {renderedProjects}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
