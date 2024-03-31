import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyPropertiesCard from './Mypropertiescard';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const ownerId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/property');
        const propertiesData = response.data;
        // Filter properties based on ownerId
        const filteredProperties = propertiesData.filter(property => property.owner.id === ownerId);
        setProperties(filteredProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    // Check if ownerId exists before fetching data
    if (ownerId) {
      fetchData();
    }
  }, [ownerId]); // Execute effect when ownerId changes

  return (
    <div className="bg-gradient-to-r from-cyan-100 to-blue-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Properties</h1>
        {properties.length > 0 ? (
          <ul>
            {properties.map(room => (
              <MyPropertiesCard key={room.id} room={room} />
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No properties have been listed by you.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
