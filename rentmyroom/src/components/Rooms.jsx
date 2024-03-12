import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import Roomscard from '../assets/Roomscard';
import Footer from '../HomeComponents/Footer';

function Rooms() {
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

  return (
    <div>
      <Layout />
      <div className="main-component md:grid md:grid-cols-2 md:gap-3 lg:grid lg:grid-cols-4 lg:gap-3 bg-gradient-to-r from-cyan-100 from-10% via-sky-50 to-blue-100 to-90%">
        {roomsData.map(room => (
          <Roomscard key={room.id} room={room} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Rooms;
