const FooterPaper = ({ icon, info }) => {
  return (
    <div className='w-52 h-40 bg-teal-950 rounded-tl-2xl rounded-br-2xl shadow-[12px_12px_0px_3px_rgba(59,7,100,0.7)] '>
      <div className='grid justify-center  h-full'>
        <div className='flex justify-center items-center text-2xl '>{icon}</div>
        <div className='flex justify-center  h-3/4'>{info}</div>
      </div>
    </div>
  );
};

export default FooterPaper;
