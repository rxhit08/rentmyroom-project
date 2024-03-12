import React from 'react';
import { FaStar } from 'react-icons/fa';

function Roomoverviewcard(props) {

  console.log(props);
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="flex flex-row w-full justify-center items-center">
          <div className="w-1/2 h-1/2">
            <img src={props.image} alt="Room 1" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 p-8">
        <h1 className="text-3xl font-semibold mb-4">{props.name}</h1>
        <p className="text-gray-600 mb-4">{props.description}</p>
        <div className="flex flex-row mb-4">
          <div className="mr-4">
            <span className="text-gray-900 font-semibold">Type:</span> {props.bhk}
          </div>
          <div>
            <span className="text-gray-900 font-semibold">Address:</span> {props.city}
          </div>
        </div>
        <div className="text-2xl font-semibold mb-4">{props.price}</div>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
          Rent
        </button>
      </div>
    </div>
  );
}

export default Roomoverviewcard;
