import BlogThumbnail from '../components/BlogThumbnail';

const BlogsPage = () => {
  return (
    <div className='grid w-full justify-center min-h-screen mt-16 pt-8'>
      <div className='grid justify-center px-72'>
        <div className=''>
          <div className='grid justify-center text-xl font-bold'>
            Welcome to the Debug Diaries:
          </div>
          <div className='grid justify-center text-5xl font-light pb-6'>
            Tales from a Software Engineer
          </div>
          <div>
            <p className='font-mono text-justify leading-1'>
              This blog is your destination for insights, tips, and stories from
              the world of software development. Whether you’re a seasoned
              developer or just starting out, you&apos;ll find valuable
              information here. Dive into my experiences with debugging complex
              code, exploring new technologies, and navigating the challenges of
              a software engineer’s life. Join me for practical advice, personal
              anecdotes, and a behind-the-scenes look at the fascinating realm
              of software engineering. Let&apos;s learn and discover together!
            </p>
          </div>
          <hr className='bg-teal-700 h-1 mt-2' />
        </div>
        <BlogThumbnail />
      </div>
    </div>
  );
};

export default BlogsPage;
