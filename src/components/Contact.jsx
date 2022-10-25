import React, { useState } from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../assets/contact.jpg'
import { Link } from 'react-router-dom';

const Contact = () => {
  const scrollToBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",

    });
  };

  const validate = empData => {
    const errors = {};

    if (!empData.Name) {
      errors.Name = 'Please Enter Name';
    } else if (empData.Name.length > 1) {
      errors.Name = 'Enter valid name';
    }
    return errors;
  };

  return (
    <div id='contact' className='w-screen px-8 bg-[#ecf0f3]'>
      <div className='max-w-[1240px] px-2 py-16'>
        <div data-aos="flip-down" data-aos-duration="2000">
          <p className='text-4xl tracking-widest uppercase text-[#5651e5]'>
            Contact
          </p>
          <h2 className='py-4'>Get In Touch</h2>
        </div>
        <div className='grid items-center justify-center md:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 items-center w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div data-aos="fade-left" data-aos-duration="2000">
              <div className='lg:p-4 h-full '>
                <div>
                  <img
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src={ContactImg}
                    alt='/'
                  />
                </div>
                <div>
                  <h2 className='py-2'>Jenish Vekariya</h2>
                  <p>Front-End Developer</p>
                  <p className='py-4'>
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  <p className='uppercase pt-8'>Connect With Me</p>
                  <div className='flex items-center justify-between py-4'>
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
                    <a
                      href='https://www.instagram.com/jenish__oo4'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineInstagram />
                      </div>
                    </a>
                    <a
                      href='https://twitter.com/JeNish332'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineTwitter />
                      </div>
                    </a>
                    <Link to='/resume'>
                      <a>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <Link exact to='/resume'>
                            <BsFillPersonLinesFill />
                          </Link>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div data-aos="fade-right" data-aos-duration="2000">
              <div className='p-4'>
                <form
                  action='https://getform.io/f/7f89aaf4-50ef-4b51-8b3b-565caec1e8fa'
                  method='POST'
                  encType='multipart/form-data'
                >
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2 required'>Name</label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='name'
                        required
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>
                        Phone Number
                      </label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='phone'
                        required
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      name='email'
                      required
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='subject'
                      required
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea
                      className='border-2 rounded-lg p-3 border-gray-300'
                      rows='10'
                      name='message'
                      required
                    ></textarea>
                  </div>
                  <button className="mt-4 py-2 w-full p-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                    Send Message
                  </button>
                  {/* <button className='w-full p-4 outline-red-600 text-blue-600 mt-4'>
                </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
            <div data-aos="fade-up" data-aos-duration="2000">
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300' onClick={scrollToBack}>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
