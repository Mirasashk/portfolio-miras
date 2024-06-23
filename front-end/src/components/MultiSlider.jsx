import Slider from 'react-slick';
import LandingPagePaper from './LandingPagePaper';

const MultiSlider = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: false,
    autoplaySpeed: 20000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className='slider-container w-3/5'>
      <Slider {...settings}>
        <div>
          <LandingPagePaper />
        </div>
        <div>
          <LandingPagePaper />
        </div>
        <div>
          <LandingPagePaper />
        </div>
        <div>
          <LandingPagePaper />
        </div>
        <div>
          <LandingPagePaper />
        </div>
        <div>
          <LandingPagePaper />
        </div>
        <div>
          <LandingPagePaper />
        </div>
        <div>
          <LandingPagePaper />
        </div>
        <div>
          <LandingPagePaper />
        </div>
      </Slider>
    </div>
  );
};

export default MultiSlider;
