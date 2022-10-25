import React from 'react';
import AboutImg from '../assets/About1.jpg';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div id='about' className='w-screen bg-[#ecf0f3] md:h-screen p-2 flex items-center py-16 px-8'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <div data-aos="flip-down" data-aos-duration="2000">
            <p className='uppercase text-4xl tracking-widest text-[#5651e5]'>
              About
            </p>
            <h2 className='py-4'>Who I Am</h2>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000">
            <p className='py-2 text-gray-600'>
              / / I am not your average developer
            </p>
            <p className='py-2 text-gray-600'>
              Recent graduate student looking for an opportunity in Web Development. Highly
              poised and dedicated with a strong education in design principles and
              programming languages. I have always had a knack for technology and working with computers. In 2019 I started working
              with HTML and CSS to make some minor edits. What I thought was just a few small edits turned into a love for programming.
            </p>
            <p className='py-2 text-gray-600'>
              Fascinated with how intricate programming can be I was quickly drawn
              to learn more. I started learning javascript and was even more
              enthused with making websites interactive. I am now spending my time building projects with React JS, Firebase, and
              learning new technologies.
            </p>
            <Link to='projects' spy={true} smooth={true} offset={20} duration={500}>
              <p className='py-2 text-gray-600 underline cursor-pointer'>
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <div className='w-100 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img src={AboutImg} className='rounded-xl' alt='/' />
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;
