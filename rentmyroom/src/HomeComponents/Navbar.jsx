import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import myLogo from '../../logo.png';
import axios from 'axios';


export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [userData, setUserData] = useState({});
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token'); 
    const apiUrl = 'http://localhost:3000';
    const [showDropdown, setShowDropdown] = useState(false); 
    const dropdownRef = useRef(null);

    useEffect(() => {
        if(userId && token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [userId, token]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/users/${userId}`,);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        if (isLoggedIn) {
            fetchUserData();
        }
    }, [isLoggedIn, userId]);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData({});
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={myLogo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    {isLoggedIn ? (
                        <div className="flex items-center lg:order-2 relative">
                            <button 
                                onClick={() => setShowDropdown(!showDropdown)} 
                                className="text-gray-800 hover:bg-transparent hover:text-blue-800 font-medium rounded-lg text-sm px-1 lg:px-1 py-1 lg:py-1.5 mr-1 focus:outline-none"
                            >
                                <IoIosArrowDown />
                            </button>
                            {showDropdown && (
                                <ul ref={dropdownRef} className="absolute bg-white border border-gray-200 py-1.5 z-10 rounded-sm mt-36">
                                    <li>
                                        <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manageproperties" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">My Properties</NavLink>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Logout</button>
                                    </li>
                                </ul>
                            )}
                            <div className="mr-2">{userData.name}</div>
                        </div>
                    ) : (
                        <div className="flex items-center lg:order-2">
                            <Link to="/login" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                                Login
                            </Link>
                        </div>
                    )}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-purple-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/rooms"
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-purple-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Rooms
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-purple-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contactus"
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-purple-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={isLoggedIn ? "/postproperty" : "/login"}
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-purple-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Post Property
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
