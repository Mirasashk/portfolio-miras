/* eslint-disable react/prop-types */
import heroImage from '../assets/hero.jpg';
import Slider from 'react-slick';

const ProjectThumbnail = ({
  title,
  tagLine,
  author,
  techStack,
  description,
  readMoreLink,
  thumbnailImages,
}) => {
  thumbnailImages = [
    { 1: 'image1' },
    { 2: 'image2' },
    { 3: 'image3' },
    { 4: 'image4' },
    { 5: 'image5' },
  ];

  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };

  const renderedImages = thumbnailImages.map((image) => {
    return (
      <div key={image} className=''>
        <img src={heroImage} alt='projectImage' />
      </div>
    );
  });

  return (
    <div className='grid grid-cols-5 justify-center pt-4 pb-4'>
      <div className='col-span-5 object-contain slider-container'>
        <Slider {...settings}> {renderedImages} </Slider>
      </div>
      <div className='col-span-5 pt-2'>
        <div className='pb-1'>
          <div className='text-2xl font-mono'>Project Title</div>
          <div className='text-sm font-mono'>Tag line for the project</div>

          <div className='grid grid-cols-2 w-full'>
            <div className='grid justify-start font-mono '>
              By Miras Ashktorab
            </div>
            <div className='grid justify-end  font-mono '>
              Tech Stack: React, NodeJS, MongoDB
            </div>
          </div>
        </div>
        <hr className='bg-teal-700 h-[3px] mb-1' />

        <p className='text-sm'>
          The CRM System is a comprehensive customer relationship management
          solution designed to streamline business operations and enhance
          customer interactions. This project integrates advanced features such
          as contact management, sales tracking, and customer support, allowing
          businesses to efficiently manage and analyze their customer data. The
          system provides a user-friendly interface, customizable dashboards,
          and robust reporting tools, enabling users to gain valuable insights
          into customer behavior and optimize their sales strategies. By
          centralizing customer information and automating key processes, the
          CRM System helps businesses improve customer satisfaction, boost
          productivity, and drive growth.{' '}
          <a href='#' className='font-mono font-bold hover:text-teal-500 pl-2'>
            Read More...
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
