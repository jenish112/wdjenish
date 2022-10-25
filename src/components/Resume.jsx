import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Resume = () => {
  const scrollToBack= () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",

    });
  };
  return (
    <div id='resume' className='w-full p-2 mt-0 items-center bg-[#ecf0f3] py-10 px-8'>
      <p className='text-4xl tracking-widest uppercase text-[#5651e5]'>
        Resume
      </p>
      <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
        <h2 className='text-center'>Jenish Vekariya</h2>
        <div className='flex'>
          <a
            href='https://www.linkedin.com/in/jenish-vekariya-0756a4212/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
          </a>
          <a
            href='https://github.com/jenish112'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub size={20} style={{ marginRight: '1rem' }} />
          </a>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 rounded inline-flex items-center">
            <a href='/resume.pdf' download={true} className='underline cursor-pointer text-decoration-line: none;' rel="noreferrer" target='_blank'>
              Download
            </a>
          </button>
        </div>
      </div>
      <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
        <div className='hidden sm:block'>
          <p>
            Proven Leadership <span className='px-1'>|</span> Web Development{' '}
            <span className='px-1'>|</span> Complex Problem Solving
          </p>
        </div>
        <div className='block sm:hidden'>
          <p>Proven Leadership</p>
          <p className='py-2'>Web Development</p>
          <p>Complex Problem Solving</p>
        </div>
      </div>
      <p>
        Analytical, innovative, and motivated web development beginner. Adept at developing strategies and driving streamlined
        operations. Diverse analytical skills, team collaboration, and
        relationship building. Motivated leader with solid interpersonal abilities and complex problem-solving skills.
        Effective and proven track record of critical thinking, idea
        generation, and optimizing efficiencies.
      </p>

      {/* Skills */}
      <div className='text-center py-4'>
        <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
        <p className='py-2'>
          <span className='font-bold'>Technical Skills</span>
          <span className='px-2'>|</span>Front-End Web Developer
          <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
          CSS <span className='px-2'>|</span>React
          <span className='px-2'>|</span>Tailwind
          <span className='px-2'>|</span> Firebase
        </p>
        {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
      </div>

      <h5 className='text-center underline text-[18px] py-4'>
        EDUCATION
      </h5>
      <div className="text-center">
        {/* EDUCATION */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Bachelor of Computer Application (BCA)
            </span>
            <span className='px-2'>|</span>Ahmedabad
          </p>
          Gujarat University
          <p className='py-1 italic'>2019-2022</p>
          <ul className='px-7 py-1 list-disc list-inside leading-relaxed'>
            <li>
              Gained basic knowledge of I.T. Department.
            </li>
            <li>
              Overall GPA : 7.1
            </li>
            <li>
              Score: 1064/1400
            </li>
          </ul>
        </div>
        {/* Education */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Higher Secondary School</span>
            <span className='px-2'>|</span>Abrama
          </p>
          P.P. Savani School
          <p className='py-1 italic'>2017-2019</p>
          <ul className='list-disc list-inside px-7 py-1 leading-relaxed'>
            <li>
              Academic Excellence In Accounts, ORG, Of Commerce Economics And Statistics.
            </li>
            <li>
              Score: 540/750
            </li>
            <li>
              Percentage: 72%
            </li>
            <li>
              Percentile Rank: 88.26%
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Secondary School</span>
            <span className='px-2'>|</span>Uttran
          </p>
          <p className='py-1 italic'>2014-2017</p>
          <ul className='list-disc list-inside px-7 py-1 leading-relaxed'>
            <li>
              Academic Excellence In Science, English, Social Science And Mathematics.
            </li>
            <li>
              Score: 416/700
            </li>
            <li>
              Percentage: 69.33%
            </li>
            <li>
              Percentile Rank: 88.70%
            </li>
          </ul>
        </div>
        <Link to='/' onClick={scrollToBack}>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};


export default Resume;
