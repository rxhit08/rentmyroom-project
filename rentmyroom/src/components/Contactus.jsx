import React from 'react'
import Layout from '../Layout'
import contactUsImg from '../../contactUsImg.jpg'
import  { useState } from 'react';
import Footer from '../HomeComponents/Footer';

function Contactus() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [issue, setIssue] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div>
      <Layout />
      <div className='lg:w-full lg:h-auto'>
        <div className=' w-full bg-cover bg-center h-80' style={{backgroundImage: `url(${contactUsImg})`}}>
          <div className='bg-black bg-opacity-50 h-full'>
            <h1 className='text-white px-44 pt-32 text-2xl font-normal'>Contact Us</h1>
            <p className="text-white px-44 pt-4 pb-24 text-4xl font-nunito font-semibold">Get Help and Friendly Support</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto pt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={firstName}
                  onChange={(e) => handleInputChange(e, setFirstName)}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={lastName}
                  onChange={(e) => handleInputChange(e, setLastName)}
                />
              </div>
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="tel"
              value={mobileNumber}
              onChange={(e) => handleInputChange(e, setMobileNumber)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="text"
              value={subject}
              onChange={(e) => handleInputChange(e, setSubject)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Issue
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              value={issue}
              onChange={(e) => handleInputChange(e, setIssue)}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    <Footer />
    </div>
  )
}

export default Contactus
