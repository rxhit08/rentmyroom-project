import React, { useEffect, useState } from 'react';
import Recentlyproperlistedcard from './homeinnercomponents/Recentlyproperlistedcard';

function RecentpropertyListed() {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    // Fetch data from the endpoint
    fetch('http://localhost:3000/property')
      .then(response => response.json())
      .then(data => {
        setRoomsData(data); // Set the fetched data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filter recently listed properties
  const recentlyListedProperties = roomsData
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);

  return (
    <div>
      <div className='h-auto w-full flex flex-col items-center justify-center'>
        <h1 className='text-center text-4xl mt-6 font-bold'>Recent Property Listed</h1>
        <p className="text-lg text-black font-ubuntu text-center mx-72 mt-3">
          "Explore our latest property listings! Discover a diverse range of homes, apartments, and commercial spaces available for sale or rent. Find your dream property today."
        </p>
      </div>
      <div className='mt-4 w-full flex justify-center'>
        <div className='grid grid-cols-3 gap-14 md:grid-cols-2 lg:grid-cols-3 mb-14'>
          {recentlyListedProperties.map((property) => (
            <div key={property.id} className="card-container">
              <Recentlyproperlistedcard
                location={property.location}
                description={property.description}
                image={property.image}
                price={property.price}
                bathrooms={property.bathrooms}
                bhk={property.bhk}
                address={property.address}
                id = {property.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentpropertyListed;
