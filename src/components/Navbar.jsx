import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import NavLogo1 from '../assets/navLogo1.png'
import { BrowserRouter as router, BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Resume from './Resume';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937')
  const tempnev = useRef()


  const navcol = () => {
    if (
      router.asPath === '/admin' ||
      router.asPath === '/hotel' ||
      router.asPath === '/netflix'
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    }
    else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }

  tempnev.current = navcol

  useEffect(() => {
    tempnev.current()
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollX >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const scrollToMain = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToMainM = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    window.scrollTo({
      top: 550,
      behavior: 'smooth'
    });
  };
  const scrollToAboutM = () => {
    window.scrollTo({
      top: 750,
      behavior: 'smooth'
    });
  };
  const scrollToSkills = () => {
    window.scrollTo({
      top: 1090,
      behavior: 'smooth'
    });
  };
  const scrollToSkillsM = () => {
    window.scrollTo({
      top: 1930,
      behavior: 'smooth'
    });
  };
  const scrollToProjects = () => {
    window.scrollTo({
      top: 1680,
      behavior: 'smooth'
    });
  };
  const scrollToProjectsM = () => {
    window.scrollTo({
      top: 2700,
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    window.scrollTo({
      top: 2700,
      behavior: 'smooth'
    });
  };
  const scrollToContactM = () => {
    window.scrollTo({
      top: 3650,
      behavior: 'smooth'
    });
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed shadow-xl first-letter:w-full h-20 z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div data-aos="fade-right" data-aos-duration="2000">
          <img
            src={NavLogo1}
            alt='/'
            width='100'
            height='120'
            className='cursor-pointer ml-2 mb-1'
            onClick={scrollToMain}
          />
        </div>
        <div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <ul style={{ color: `${linkColor}` }} className='hidden gap-2 md:flex mr-4'>
              <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer' onClick={scrollToMain}>
                Home
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer' onClick={scrollToAbout}>
                About
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer' onClick={scrollToSkills}>
                Skills
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer' onClick={scrollToProjects}>
                Projects
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                <Link exact to='/resume'>Resume</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer' onClick={scrollToContact}>
                Contact
              </li>
            </ul>
            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className='md:hidden'
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link to='/'>
                <a>
                  <img
                    src={NavLogo1}
                    width='90'
                    height='90'
                    alt='/'
                    className='cursor-pointer'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] py-2'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <li className='py-4 text-sm' onClick={() => { setNav(false); scrollToMainM(); }}>
                Home
              </li>
              <li onClick={() => { setNav(false); scrollToAboutM(); }} className='py-4 text-sm'>
                About
              </li>
              <li onClick={() => { setNav(false); scrollToSkillsM(); }} className='py-4 text-sm'>
                Skills
              </li>
              <li onClick={() => { setNav(false); scrollToProjectsM(); }} className='py-4 text-sm'>
                Projects
              </li>
              <Link to='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <li onClick={() => { setNav(false); scrollToContactM(); }} className='py-4 text-sm'>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
