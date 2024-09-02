/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import { useEffect } from 'react';

const ProjectThumbnail = ({ project }) => {
  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 20000,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 1,
          centerPadding: '75px',
          centerMode: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],

    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    dots: true,
  };

  const renderedImages = project.images.map((image) => {
    return (
      <div key={image} className=''>
        <img src={image} alt='projectImage' />
      </div>
    );
  });

  const techStack = Object.values(project.technologiesUsed).map((key) => {
    return key.productTitle;
  });

  const maxLengthDescription = (description) => {
    if (description.length > 300) {
      let truncated = description.slice(0, 300);
      let lastSpaceIndex = truncated.lastIndexOf(' ');
      return truncated.slice(0, lastSpaceIndex);
    }
    return description;
  };

  return (
    <div className='grid grid-cols-5 justify-center pt-4 pb-4 w-full object-cover overflow-hidden'>
      <div className='col-span-5 object-contain slider-container w-full '>
        <Slider {...settings}> {renderedImages} </Slider>
      </div>
      <div className='col-span-5 pt-6'>
        <div className='pb-2'>
          <div className='grid justify-center text-center w-full'>
            <div>
              <div className='grid text-2xl font-mono'>
                {project.projectTitle}
              </div>
              <div className='text-sm font-mono'>{project.tagline}</div>
              <div className='grid font-mono'>
                By {project.author}, {project.year}
              </div>
              <div className='grid font-mono text-sm'>
                Tech Stack: {techStack.join(', ')}
              </div>
            </div>
          </div>
        </div>

        <p className='text-sm px-4 text-center pb-3'>
          {maxLengthDescription(project.overview)}
          <a href='#' className='font-mono font-bold hover:text-teal-500 pl-2'>
            Read More...
          </a>
        </p>
        <hr className='bg-teal-700 h-[5px] mb-1' />
      </div>
    </div>
  );
};

export default ProjectThumbnail;
