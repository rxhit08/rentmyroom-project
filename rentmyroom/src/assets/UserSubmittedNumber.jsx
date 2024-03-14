import React, { useState, useEffect, useRef } from 'react';

function UserSubmittedNumber(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        props.setTrigger(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [props]);

  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when form is open
    } else {
      document.body.style.overflow = ''; // Enable scrolling when form is closed
    }
    return () => {
      document.body.style.overflow = ''; // Reset overflow when component unmounts
    };
  }, [props]);

  return props.trigger ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
      <div className="absolute inset-0 bg-black opacity-50" onClick={() => props.setTrigger(false)}></div>
      <div ref={formRef} className="relative bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Enter Your Information</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={() => props.setTrigger(false)}>Close</button>
        </div>
        <div className="bg-yellow-100 p-4 mb-4 rounded-md">
          <p className="text-sm text-gray-800">Enter your number so that the owner can contact you.</p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full outline-none" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full outline-none" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full outline-none" required />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
}

export default UserSubmittedNumber;
