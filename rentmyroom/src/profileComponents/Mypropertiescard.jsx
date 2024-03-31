import React, { useState } from 'react';

function MyPropertiesCard({ room }) {
  const [userDetails, setUserDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  // Function to fetch user-submitted details for a room ID
  const fetchUserDetails = async (roomId) => {
    try {
      const response = await fetch(`http://localhost:3000/phonenumber/${roomId}`);
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  // Function to handle click on the arrow button
  const handleArrowClick = (roomId) => {
    if (roomId === room.id) {
      fetchUserDetails(roomId);
      setShowDetails(!showDetails); // Toggle showDetails state
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 m-8 ">
      <div className="flex">
        <div className="w-1/3 mr-4">
          <img src={room.image[0]} alt="Room" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-2/3">
          <h2 className="text-lg font-semibold mb-2">{room.location}</h2>
          <h3 className="text-base font-medium mb-2">{room.city}</h3>
          <h1 className="text-xl font-bold mb-2">{room.address}</h1>
          <p className="text-sm text-gray-700 mb-2">{room.description}</p>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Bathrooms: {room.bathrooms}</span>
            <span className="text-sm font-medium">BHK: {room.bhk}</span>
          </div>
          <div className="text-lg font-bold">Price: {room.price}</div>
          <div className="flex items-center mt-4">
            <button onClick={() => handleArrowClick(room.id)} className="text-blue-500 focus:outline-none">
              {showDetails ? 'Hide the details' : 'Show all submitted details'}
            </button>
            {/* Add arrow icon here */}
          </div>
          {/* Render user details */}
          {showDetails && (
            <table className="mt-4 w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Number</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.map((userDetail) => (
                  <tr key={userDetail.id}>
                    <td className="border px-4 py-2">{userDetail.userSubmittedName}</td>
                    <td className="border px-4 py-2">{userDetail.userSubmittedEmail}</td>
                    <td className="border px-4 py-2">{userDetail.userSubmittedNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyPropertiesCard;
