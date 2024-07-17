import FooterPaper from './FooterPaper';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
  const mailIcon = <MdOutlineMailOutline className='text-white' />;
  const phoneIcon = <FiPhone className='text-white' />;
  return (
    <div className='grid bg-teal-800 h-72 text-white font-semibold'>
      <div className='flex justify-center items-center '>
        <div className='flex justify-center items-center w-3/4 h-full'>
          <div className='flex w-full'>
            <div className='grid w-2/5'>
              <div className='text-4xl font-bold'>Get In Touch</div>
              <div className='text-xl'>
                Crafting innovative software solutions with passion and
                precision.
              </div>
              <div className=''>Social Icons go here</div>
            </div>
            <div className='flex w-3/5 justify-center items-center space-x-16'>
              <FooterPaper icon={mailIcon} info='MirasAshk@gmail.com' />
              <FooterPaper icon={phoneIcon} info='+1(480)516-6465' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
