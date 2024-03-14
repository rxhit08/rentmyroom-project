import React, { useState } from 'react';
import UserSubmittedNumber from './UserSubmittedNumber';
import Layout from '../Layout';

function Roomoverviewcard(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  }

  return (
    <div>
      <Layout />
      <section className="overflow-hidden bg-gradient-to-r from-cyan-100 from-10% via-sky-50 to-blue-100 to-90%">
        <div className="mx-auto max-w-5xl px-5 py-24">
          {/* Shadowed box */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex flex-wrap items-center relative">
              {/* Thumbnail images */}
              <div className="flex flex-col mr-6">
                {props.image.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Room Image ${index}`}
                    className="w-16 h-16 mb-4 rounded cursor-pointer"
                    onClick={() => handleImageChange(index)}
                    onMouseEnter={() => setHoveredImageIndex(index)}
                    onMouseLeave={() => setHoveredImageIndex(null)}
                  />
                ))}
              </div>
              {/* Main image */}
              <div className="w-full lg:w-2/3 relative">
                <img
                  alt="Main room image"
                  className="h-96 w-full ml-24 mb-8 mt-8 rounded object-cover shadow-md"
                  src={hoveredImageIndex !== null ? props.image[hoveredImageIndex] : props.image[currentImageIndex]}
                />
              </div>
              {/* End of Main image */}
              <div className="w-full lg:w-1/2 lg:ml-auto lg:mr-auto">
                <div className="mt-6 lg:mt-0 lg:pl-10">
                  <h1 className="my-4 text-3xl font-semibold text-black">{props.city}</h1>
                  <h2 className="text-lg font-semibold tracking-widest text-gray-500">Area : {props.location}</h2>
                  <h1 className="text-sm font-semibold tracking-widest text-gray-500">Address : {props.address}</h1>
                  <p className="leading-relaxed mt-3 font-nunito text-sm">
                    {props.description}
                  </p>
                  <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                    <div className="flex items-center">
                      <span className="rounded-md bg-slate-100 px-1 py-1 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black">#BHK : {props.bhk}</span>
                    </div>
                    <div className="ml-auto flex items-center">
                      <span className="rounded-md bg-slate-100 px-1 py-1 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black">#Bathrooms : {props.bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="title-font text-2xl font-bold text-gray-900">₹ {props.price}</span>
                    <button
                      type="button"
                      className="rounded-md bg-black px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={() => setButtonPopup(true)}
                    >
                      Rent
                    </button>
                    <UserSubmittedNumber trigger={buttonPopup} setTrigger={setButtonPopup}>
                    </UserSubmittedNumber>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Shadowed box */}
        </div>
      </section>
    </div>
  )
}

export default Roomoverviewcard
