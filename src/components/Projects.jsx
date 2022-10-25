import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import adminImg from '../assets/Admin.png';
import hotelImg from '../assets/Hotel.png'
import netflixImg from '../assets/Netflix.jpg'
import ProjectItem from '../components/ProjectItem';
import Admin from '../components/Admin'

const Projects = () => {
  const scrollToBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",

    });
  };
  return (
    <div id='projects' className='w-screen px-8 bg-[#ecf0f3]'>
      <div className='max-w-[1240px] px-2 py-16'>
        <div data-aos="flip-down" data-aos-duration="2000">
          <p className='text-4xl tracking-widest uppercase text-[#5651e5]'>
            Projects
          </p>
          <h2 className='py-4'>What I&apos;ve Built</h2>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div data-aos="fade-in" data-aos-duration="2000">
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
              <img className='rounded-xl group-hover:opacity-10' src={adminImg} alt='/' />
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Admin Dashboard</h3>
                <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                <Link exact to='/admin' onClick={scrollToBack}>
                  <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-in" data-aos-duration="2000">
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
              <img className='rounded-xl group-hover:opacity-10' src={hotelImg} alt='/' />
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Online Hotel Booking</h3>
                <p className='pb-4 pt-2 text-white text-center'>PHP</p>
                <Link exact to='/hotel' onClick={scrollToBack}>
                  <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-in" data-aos-duration="2000">
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
              <img className='rounded-xl group-hover:opacity-10' src={netflixImg} alt='/' />
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Netflix App</h3>
                <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                <Link exact to='/netflix' onClick={scrollToBack}>
                  <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
