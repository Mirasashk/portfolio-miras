import MirasHeadShot from '../assets/Miras-headshot2.png';

const AboutPage = () => {
  return (
    <div className='flex w-full justify-center min-h-screen mt-16'>
      <div className='grid justify-center  w-3/4'>
        <div className='grid grid-cols-8 pt-8 '>
          <div className='col-span-5'>
            <h2 className='text-3xl font-bold'>Beyond the Code?</h2>
            <p className='pt-8 text-xl font-light pb-16'>
              As an avid traveler, I thrive on exploring different cultures and
              immersing myself in new experiences. I find joy in discovering the
              unique aspects of each destination, whether it&apos;s through
              savoring local cuisine, learning about traditions, or simply
              strolling through charming streets. My love for travel is
              complemented by my appreciation for spending quality time with my
              family, creating cherished memories wherever we go. These
              experiences enrich my perspective and fuel my passion for
              connecting with people from all walks of life. In my personal
              life, I am deeply connected to nature and enjoy various outdoor
              activities. Playing sports and being active in the great outdoors
              rejuvenates me, providing a perfect balance to my professional
              pursuits. I relish meeting new people in new places, often
              striking up conversations in cozy coffee shops as I explore
              different neighborhoods. These spontaneous moments of connection
              and the simple pleasure of enjoying a good cup of coffee in a new
              setting are some of the many ways I embrace life&apos;s adventures
              and the beauty of the world around me.
            </p>
          </div>
          <div className='flex col-span-3 justify-center items-center pt-16'>
            <img src={MirasHeadShot} className='object-contain' />
          </div>
        </div>
        <div className='grid grid-cols-8 bg-teal-800 pt-16 pb-16 px-16 mb-16'>
          <div className='grid col-span-8'>
            <h2 className='text-3xl text-white font-bold'>
              The Value I Bring to Your Projects?
            </h2>
            <p className='pt-8 text-xl text-white font-light'>
              As a dedicated software developer, I thrive on crafting innovative
              technology and practical solutions. My expertise spans various
              programming languages and frameworks, allowing me to create robust
              and efficient applications. I&apos;m passionate about coding and
              continuously pursue knowledge to stay updated with the latest
              industry trends and advancements. This dedication ensures that I
              not only meet but exceed project expectations, consistently
              delivering high-quality results. In addition to my technical
              skills, I am a collaborative team player who values effective
              communication and teamwork. I understand the importance of
              translating complex technical concepts into understandable terms
              for clients and stakeholders. This ability to bridge the gap
              between technical and non-technical audiences highlights my
              leadership potential and makes me a valuable asset to any project.
              My commitment to excellence and innovation drives me to constantly
              improve and refine my skills, making me a standout professional in
              the field of software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
