import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  console.log(properties);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Properties</h1>
      {properties.length > 0 ? (
        <ul>
          {properties.map(property => (
            <li key={property.roomId} className="mb-4">
              <div className="bg-white rounded p-4 shadow">
                <img src={property.image} alt={property.description} />
                <h2 className="text-lg font-semibold">{property.description}</h2>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-gray-600">{property.price}</p>
                <p className="text-gray-600">{property.bhk}</p>
                <p className="text-gray-600">{property.bathrooms}</p>
                <p className="text-gray-600">{property.city}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No properties have been listed by you.</p>
      )}
    </div>
  );
};

export default PropertyList;
