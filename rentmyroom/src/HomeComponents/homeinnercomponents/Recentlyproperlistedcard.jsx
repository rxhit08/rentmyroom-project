import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

function Recentlyproperlistedcard(props) {


  const handleClick = () => {
    localStorage.setItem('roomId', props.id);
  };

  return (
    <NavLink to="/roomsoverview">
    <div className="w-[300px] rounded-md border m-2 ml-6 bg-white" onClick={handleClick}>
      <img
        src={props.image[1]}
        alt="roomImage"
        className="h-[200px] w-full rounded-t-md object-cover cursor-pointer"
      />
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <h1 className="inline-flex items-center text-lg font-semibold rounded-md">
              <FaLocationDot className="h-4 w-4"/> &nbsp; {props.location} &nbsp;
            </h1>
            <p className="mt-1 text-sm text-gray-600">{props.city}</p>
          </div>
          <div></div>
        </div>
        <div className="overflow-hidden h-20"> {/* Set a fixed height for description */}
          <p className="mt-3 text-sm text-gray-600">{props.description}</p>
        </div>
        {/* Add a thin line between description and price */}
        <hr className="my-2 border-t border-gray-200" />
        <div className="flex items-center justify-between mt-1">
          <div className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-800">
            Rs. {props.price}
          </div>
          <div>
            <div className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-white">
              {props.bhk} BHK
            </div>
            <p className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-white">
              {props.bathrooms} Bathroom
            </p>
          </div>
        </div>
      </div>
    </div>
    </NavLink>
  );
}

export default Recentlyproperlistedcard;
