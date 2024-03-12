import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { MdHouse } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaPhoneAlt, FaArrowRight, FaTelegramPlane } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot  } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from 'react';

function Footer() {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className='md:flex w-full h-auto bg-gray-800'>
      <div className='w-1/3 px-20 p-6 pl-4 m-4' >
        <NavLink
          to='/'
          onClick={handleClick}
          className='flex text-2xl pb-4 font-bold text-white font-mukta'>RentMyRoom <MdHouse className='text-blue-500 text-3xl'/>
        </NavLink>
        <p className='text-white'>Get your next room with us!!!! 
        </p>
        <div className='flex flex-wrap pt-3'>
          <FaFacebookSquare className='text-white font-medium text-2xl'/>
          <FaWhatsapp className='text-white ml-3 font-medium text-2xl'/>
          <FaInstagram className='text-white ml-3 font-medium text-2xl'/>
          <FaSquareXTwitter className='text-white ml-3 font-medium text-2xl'/>
          <FaLinkedin className='text-white ml-3 font-medium text-2xl'/>
        </div>
      </div>
      <div className='w-1/4 px-15 p-5 m-4'>
        <h1 className='font-mukta pb-4 text-white font-bold text-2xl'>Contact Info</h1>
        <div className='flex '>
          <MdAlternateEmail className='text-white mt-1'/>
          <ul className=''><a className='text-white flex pl-2' href="mailto:iamrohitrk00@gmailcom?subject=HELP"> iamrohitrk00@gmail.com</a></ul>
        </div>
        <div className='flex'>
          <FaPhoneAlt className='text-white mt-3 text-sm'/>
          <ul className='pt-2'><a className='text-white flex pl-2' href="tel:+918804405300">+918804405300</a></ul>
        </div>
        <div className='flex'>
          <FaLocationDot className='text-white mt-3 text-sm'/>
          <ul className='pt-2'><a className='text-white flex pl-2' href="https://maps.app.goo.gl/JErwXbEV4HG8ubrT6">Patna, Bihar</a></ul>
        </div>
      </div>
      <div className='w-1/4 px-15 p-5 m-4'>
        <h1 className='font-mukta pb-4 text-white font-bold text-2xl'>Quick Links</h1>
        <div className='flex'>
          <FaArrowRight className='text-white mt-1'/>
          <NavLink to="/"
            onClick={handleClick}
            className='text-white flex pl-2'> Home</NavLink>
        </div>
        <div className='flex pt-3'>
          <FaArrowRight className='text-white mt-1'/>
          <NavLink to="/rooms"
            className='text-white flex pl-2'> Rooms</NavLink>
        </div>
        <div className='flex pt-3'>
          <FaArrowRight className='text-white mt-1'/>
          <NavLink to="/about"
            className='text-white flex pl-2'> About Us</NavLink>
        </div>
        <div className='flex pt-3'>
          <FaArrowRight className='text-white mt-1'/>
          <NavLink to="/contactus"
            className='text-white flex pl-2'> Contact Us</NavLink>
        </div>
        <div className='flex pt-3'>
          <FaArrowRight className='text-white mt-1'/>
          <NavLink to="/login"
            className='text-white flex pl-2'> Log In</NavLink>
        </div>
        <div className='flex pt-3'>
          <FaArrowRight className='text-white mt-1'/>
          <NavLink to="/postproperty"
            className='text-white flex pl-2'> Post Property</NavLink>
        </div>
        <div className='flex pt-3'>
          <FaArrowRight className='text-white mt-1'/>
          <NavLink to="/profile"
            className='text-white flex pl-2'> profile</NavLink>
        </div>
      </div>
      <div className=" py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
            className="w-[200px] px-5 py-3 h-10 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <div className='w-3/4 px-4 -ml-1 items-center justify-center'>
          <button
            type="submit"
            className="mt-4 sm:mt-2 flex mx-auto md:w-full sm:w-auto px-8 py-1 bg-indigo-500 text-white rounded-md transition duration-300 hover:bg-indigo-600 text-center "
          >
            Subscribe <FaTelegramPlane className=' ml-1 text-2xl' />
          </button>
          </div>
        </form>
        <p className="mt-3 text-sm text-white">
          Get the latest updates delivered to your inbox.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Footer