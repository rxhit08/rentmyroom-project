import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import Layout from '../Layout';

const ProfileSection = () => {
  const [activeOption, setActiveOption] = useState('profile');
  const [newEmail, setNewEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [alternateEmailAdded, setAlternateEmailAdded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(''); // State for password
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);
  const [passwordChangeError, setPasswordChangeError] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [userData, setUserData] = useState();
  const token = localStorage.getItem('token'); 
  const userId = localStorage.getItem('userId'); 
  const apiUrl = 'http://localhost:3000';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChangePassword = async () => {
    try {
      setPasswordChangeError('');
      setPasswordChangeSuccess(false);
      const response = await axios.post(`${apiUrl}/auth/change-password`, {
        oldPassword,
        newPassword,
        confirmPassword
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPasswordChangeSuccess(true);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setPasswordChangeError(error.response.data.message);
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Layout />
      <div className="flex h-screen w-full p-10 pl-56 bg-gradient-to-r from-cyan-100 from-10% via-sky-50 to-blue-100 to-90% ">
        <div className="flex flex-col w-1/5">
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2 font-nunito ">Profile Options</h2>
            <ul>
              <li 
                className={`cursor-pointer py-2 ${activeOption === 'profile' ? 'text-blue-500 font-nunito font-bold' : ''}`}
                onClick={() => setActiveOption('profile')}
              >
                My Profile
              </li>
              <li 
                className={`cursor-pointer py-2 ${activeOption === 'password' ? 'text-blue-500 font-nunito font-bold' : ''}`}
                onClick={() => setActiveOption('password')}
              >
                Change Password
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-grow w-4/12 pl-20 bg-transparent items-center justify-center">
          {activeOption === 'profile' && userData && (
            <div>
              <h2 className="text-2xl font-bold mb-2 font-nunito pl-10">My Profile</h2>
              <div className='pb-12'>
                <p className='p-3 pl-10 font-nunito'><span className="font-bold font-nunito">Name:</span> {userData.name}</p>
                <p className='p-3 pl-10 font-nunito'><span className="font-bold font-nunito">Email:</span> {userData.email}</p>
                <p className='pl-10 p-3 font-nunito'><span className="font-bold font-nunito">Phone Number:</span> {userData.phone}</p>
                <p className='pl-10 p-3 font-nunito'><span className="font-bold font-nunito">Gender:</span> {userData.gender}</p>
                <p className='pl-10 p-3 font-nunito'><span className="font-bold font-nunito">Address:</span> {userData.address}</p>
                <div className=" pl-10 p-3">
                  <span className="font-bold font-nunito">Password:</span> 
                  {showPassword ? userData.password : '********'}
                  <button className="ml-6 font-nunito text-blue-500" onClick={handlePasswordVisibility}>
                    {showPassword ? <FaEyeSlash className=''/> : <FaEye className=''/>}
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeOption === 'password' && (
            <div className='w-5/12'>
              <h2 className="text-2xl font-bold mb-2 text-center font-nunito">Change Password</h2>
              <div className="mt-4 pl-10 p-1">
                <label className="block mb-1 font-nunito font-bold">Enter Current Password:</label>
                <div className="relative">
                  <input 
                    type={showCurrentPassword ? "text" : "password"} 
                    className="border border-gray-300 rounded px-2 py-1 mb-2 w-5/6" 
                    value={oldPassword} 
                    onChange={(e) => setOldPassword(e.target.value)} 
                  />
                  <button 
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <FaEyeSlash className='mb-2'/> : <FaEye className='mb-2' />}
                  </button>
                </div>
                <label className="block mb-1 font-nunito font-bold">Enter New Password:</label>
                <div className="relative">
                  <input 
                    type={showNewPassword ? "text" : "password"} 
                    className="border border-gray-300 rounded px-2 py-1 mb-2 w-5/6" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                  />
                  <button 
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <FaEyeSlash className='mb-2' /> : <FaEye className='mb-2' />}
                  </button>
                </div>
                <label className="block mb-1 font-nunito font-bold">Re-enter New Password:</label>
                <div className="relative">
                  <input 
                    type={showConfirmNewPassword ? "text" : "password"} 
                    className="border border-gray-300 rounded px-2 py-1 mb-2 w-5/6" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                  />
                  <button 
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                    onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                  >
                    {showConfirmNewPassword ? <FaEyeSlash className='mb-2' /> : <FaEye className='mb-2' />}
                  </button>
                </div>
                {passwordChangeError && (
                  <p className="text-red-500">{passwordChangeError}</p>
                )}
                <div className="flex items-center mb-2">
                  <span className="text-blue-500">*</span>
                  <span className="text-sm ml-1 font-nunito font-bold ">Password should be at least 8 characters long.</span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-1 rounded font-nunito font-bold" onClick={handleChangePassword}>
                  Change Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
