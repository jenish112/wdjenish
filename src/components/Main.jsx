import React, { useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"

<script>

</script>

const Main = () => {
  const scrollToContact = () => {
    window.scrollTo({
      top: 2700,
      behavior: "smooth",

    });
  };

  const scrollToContactM = () => {
    window.scrollTo({
      top: 3600,
      behavior: "smooth",

    });
  };

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div id='home' className='w-screen h-screen text-center px-8 bg-[#ecf0f3]'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div data-aos="fade-down" data-aos-duration="1500">
            <p className='uppercase text-sm tracking-widest text-gray-600'>
              LET&#39;S BUILD SOMETHING TOGETHER
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1500">
            <h1 className='py-4 text-6xl font-bold text-gray-700'>
              Hi, I&#39;m <span className='text-[#5651e5]'> Jenish</span>
            </h1>
            <h1 className='py-2 text-6xl font-bold text-gray-700'>A Front-End Web Developer</h1>
            <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
              I’m focused on building responsive front-end web applications while
              learning back-end technologies.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <a
                href='https://www.linkedin.com/in/jenish-vekariya-0756a4212/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href='https://github.com/jenish112'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail onClick={() => { isTabletOrMobile ? (scrollToContactM()) : (scrollToContact()) }} />
              </div>

              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <Link exact to='/resume'>
                  <BsFillPersonLinesFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
