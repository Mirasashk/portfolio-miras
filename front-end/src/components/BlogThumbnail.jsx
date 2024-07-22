/* eslint-disable react/prop-types */
import heroImage from '../assets/hero.jpg';

const BlogThumbnail = ({
  title,
  postedOn,
  author,
  thumbnailImageLink,
  tags,
  readTime,
  snippet,
}) => {
  return (
    <div className='grid grid-cols-5 justify-center'>
      <div className='col-span-2 object-cover '>
        <img src={heroImage} alt='blogImage' />
      </div>
      <div className='col-span-3 pl-4'>
        <div className='pb-1'>
          <div className='text-2xl font-mono'>This is a blog article</div>
          <div className='text-sm font-mono'>Posted on 2021-09-01</div>
          <div className='text-sm font-mono'>By Miras Ashktorab</div>
          <div className='grid grid-cols-2 w-full'>
            <div className='grid justify-start text-xs font-mono '>
              Tags: React, Web Development
            </div>
            <div className='grid justify-end text-xs font-mono '>
              5 min read
            </div>
          </div>
        </div>
        <hr className='bg-teal-700 h-[3px] mb-1' />

        <p className='text-sm'>
          This blog is your destination for insights, tips, and stories from the
          world of software development. Whether you’re a seasoned developer or
          just starting out, you&apos;ll find valuable information here. Dive
          into my experiences with debugging complex code, exploring new
          technologies, and navigating the challenges of a software engineer’s
          life.
        </p>
        <div className='flex justify-end font-mono text-sm'>Read More...</div>
      </div>
    </div>
  );
};

export default BlogThumbnail;
