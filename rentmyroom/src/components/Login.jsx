import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import loginImageUsage from '../../loginImageUsage.jpg';
import bgLoginImage from '../../bgLoginImage.jpg';
import cartoonHuman from '../../cartoonHuman.png'
import axios from 'axios';
import {toast} from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/auth/login', { email, password })
      .then(result => {
        console.log(result);
        navigate('/');
        localStorage.setItem('token', result.data.access_token);
        localStorage.setItem('userId', result.data.user_id);
        toast("loggined");
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 400) {
          toast.error("Email or password error");
        }
        else if(err.response.status === 401) {
          toast.error("email does not exist")
        }
      });
  };

  return (
    <section>
      <div className="h-screen flex items-center justify-center px-4 py-10 sm:px-6 sm:py-4 lg:px-4 lg:py-24 bg-cover bg-center" style={{ backgroundImage: `url(${bgLoginImage})` }}>
      <div className="relative w-1/2">
          <img src={cartoonHuman} alt="Room" className="w-full ml-24 h-auto rounded-xl" />
        </div>
        <div className='w-7/12' >
          <div className="p-15 rounded-lg xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
            </div>
            <h1 className=' text-5xl p-2 pb-3 text-center font-bold font-sans w-30'>
              Welcome  Back!
            </h1>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              Don&apos;t have an account?
              <NavLink
                to="/signup"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </NavLink>
            </p>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get started
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
}
