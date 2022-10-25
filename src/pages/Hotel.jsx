import React from 'react';
import hotelImg from '../assets/Hotel.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Hotel = () => {
  const scrollToBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",

    });
  };
  return (
    <div className='w-full bg-[#ecf0f3]' id='hotel'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <img
          className='object-cover w-full h-full'
          layout='fill'
          src={hotelImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <p className='py-2 font-semibold text-5xl'>Online Hotel Booking</p>
          <h3>PHP / MySql</h3>
        </div>
      </div>

      <div className='max-w-[1240px] px-8 mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-4xl mt-1 font-semibold'>Overview</p>
          <p className='mt-3 text-lg'>
            This is a web app which is mainly made for management of a Hotel. The project Hotel Management manages and maintains the
            records of customers and rooms of the hotel.The rooms have
            different categories such as standard, deluxe, VIP etc. Also some
            rooms have AC, TV, Refrigerator and many other facilities. Hotel also
            has other facilities like restaurant, swimming pool etc. So these
            charges and records will be maintained accordingly.This web app has been made in a user friendly interface , so that
            normal person can add , delete and modify the entries of customer
            and handle the transactions of customers easily.
          </p><br />
          <p classname='text-lg'>
            I made 2 panels:
            1) User Panel and
            2) Admin Panel
          </p>
          <div className="mt-7">

            <a href='https://github.com/jenish112/royal-hotel' target='_blank' rel='noreferrer'
              className="px-8 py-2 mt-4 mr-8 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-white">Code</span>
            </a>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PHP
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MySql
              </p>
            </div>
          </div>
        </div>
        <Link to='/' onClick={scrollToBack}>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Hotel;
