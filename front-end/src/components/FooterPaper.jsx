/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const FooterPaper = ({ icon, action, info }) => {
  return (
    <div className='w-52 h-40 bg-teal-950 rounded-tl-2xl rounded-br-2xl shadow-[12px_12px_0px_3px_rgba(59,7,100,0.7)] '>
      <div className='grid justify-center  h-full'>
        <div className='flex justify-center items-center text-2xl'>
          <Link to={`${action}${info}`}>{icon}</Link>
        </div>
        <div className='flex justify-center h-3/4 hover:text-teal-400 '>
          <Link to={`${action}${info}`}>{info}</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterPaper;
