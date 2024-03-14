import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Roomoverviewcard from './Roomoverviewcard';

function Roomoverview() {
  const [roomData, setRoomData] = useState(null);
  const roomId = localStorage.getItem('roomId');

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/property/${roomId}`);
        setRoomData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    if (roomId) {
      fetchRoomData();
    }
  }, [roomId]);

  return (
    <div>
      <div className=''>
        {roomData ? (
          <Roomoverviewcard
            city={roomData.city}
            description={roomData.description}
            image={roomData.image}
            price={roomData.price}
            bhk={roomData.bhk}
            bathrooms={roomData.bathrooms}
            address={roomData.address}
            location={roomData.location} // Assuming you have address in roomData
            key={roomData.id}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Roomoverview;
