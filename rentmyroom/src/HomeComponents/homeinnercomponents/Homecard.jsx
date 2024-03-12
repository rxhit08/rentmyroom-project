import React, { useState, useEffect } from 'react';
import { FaHome } from "react-icons/fa";

const Card = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/property')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Filter properties based on BHK type
  const filterPropertiesByBHK = bhk => properties.filter(property => property.bhk === bhk);

  const oneBHKProperties = filterPropertiesByBHK(1);
  const twoBHKProperties = filterPropertiesByBHK(2);
  const threeBHKProperties = filterPropertiesByBHK(3);

  return (
    <div className='px-28 grid grid-cols-3 gap-1 mb-9'>
      <div className="bg-white m-10 py-10 w-60 rounded overflow-hidden shadow-lg items-center justify-center">
        <img src='https://funny-daffodil-350bc9.netlify.app/images/hero/h1.png' className="w-14 h-14 text-blue-500 rounded-full mx-auto place-content-center" />
        <div>
          <div className="font-bold text-xl m-1 text-center">1 BHK</div>
          <p className="text-gray-700 text-base text-center">{oneBHKProperties.length} property</p>
        </div>
      </div>
      <div className="bg-white m-10 py-10 w-60 rounded overflow-hidden shadow-lg items-center justify-center">
        <img src='https://funny-daffodil-350bc9.netlify.app/images/hero/h2.png' className="w-14 h-14 text-blue-500 rounded-full mx-auto place-content-center" />
        <div>
          <div className="font-bold text-xl m-1 text-center">2 BHK</div>
          <p className="text-gray-700 text-base text-center">{twoBHKProperties.length} property</p>
        </div>
      </div>
      <div className="bg-white m-10 py-10 w-60 rounded overflow-hidden shadow-lg items-center justify-center">
        <img src='https://funny-daffodil-350bc9.netlify.app/images/hero/h3.png' className="w-14 h-14 text-blue-500 rounded-full mx-auto place-content-center" />
        <div>
          <div className="font-bold text-xl m-1 text-center">3 BHK</div>
          <p className="text-gray-700 text-base text-center">{threeBHKProperties.length} property</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
