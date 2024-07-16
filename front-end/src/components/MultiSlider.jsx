/* eslint-disable react/prop-types */
import Slider from 'react-slick';

const MultiSlider = ({ projects, slidesToShow }) => {
  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className='slider-container lg:w-3/5 md:w-4/5 w-full'>
      <Slider {...settings}>{projects}</Slider>
    </div>
  );
};

export default MultiSlider;
