import React from 'react';

function Recentlyproperlistedcard(props) {
  return (
    <div className="h-auto w-full">
      <div className="w-72 rounded-md border m-2 ml-6 bg-white shadow-2xl">
        <div className="">
          <img
            src={props.image}
            alt="roomImage"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-black mb-2">{props.name}</h1>
            <p className="text-gray-300 mb-2">{props.address}</p>
            <p className="text-sm text-gray-600 mb-2">{props.desc}</p>
            <hr className="border-t my-2" />
            <div className="flex justify-between items-center">
              <div className="bg-green-500 rounded-xl px-2 py-1 text-white">{props.price}</div>
              <div className="text-gray-900 rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold">{props.type}</div>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-blue-700 hover:bg-blue-800 px-2 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recentlyproperlistedcard;
