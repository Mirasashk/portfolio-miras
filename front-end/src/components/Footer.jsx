import FooterPaper from './FooterPaper';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  const mailIcon = (
    <MdOutlineMailOutline className='text-white hover:text-teal-400 ' />
  );
  const phoneIcon = <FiPhone className='text-white hover:text-teal-400 ' />;

  const mailTo = 'mailto:';
  const phoneTo = 'tel:';

  return (
    <div className='grid bg-teal-800 text-white font-semibold'>
      <div className='grid justify-center items-center px-20 pt-4 '>
        <div className='flex justify-center items-center w-full h-full'>
          <div className='grid justify-center w-full'>
            <div className='grid w-full justify-center pb-8'>
              <div className='flex justify-center text-4xl font-bold'>
                Get In Touch
              </div>
              <div className='flex text-center text-xl pb-4'>
                Crafting innovative software solutions with passion and
                precision.
              </div>
              <div className='flex justify-center space-x-4 text-3xl'>
                <Link to='https://www.github.com/MirasAshk' target='_blank'>
                  <FaGithub className='hover:text-teal-950' />
                </Link>
                <Link to='https://www.github.com/MirasAshk' target='_blank'>
                  <FaLinkedin className='hover:text-teal-950' />
                </Link>
                <Link to='https://www.github.com/MirasAshk' target='_blank'>
                  <FaUpwork className='hover:text-teal-950' />
                </Link>
              </div>
            </div>
            <div className='grid'>
              <div className='grid tablet:flex w-full justify-center items-center space-y-8 tablet:space-y-0 tablet:space-x-8 pb-8'>
                <FooterPaper
                  icon={mailIcon}
                  action={mailTo}
                  info='MirasAshk@gmail.com'
                />
                <FooterPaper
                  icon={phoneIcon}
                  action={phoneTo}
                  info='+1(480)516-6465'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
