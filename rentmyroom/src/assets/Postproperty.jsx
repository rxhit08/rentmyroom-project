import React, { useState } from 'react';
import postHouseImage from 'D:/rentmyroom/postHouseImage.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Postproperty() {
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [bhk, setBhk] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [charCount, setCharCount] = useState(0);

  const navigate = useNavigate();

  // function from which description should not exceed 250 words
  
  const handleDescriptionChange = (e) => {
    const inputText = e.target.value;
    setCharCount(inputText.length);
    setDescription(inputText.substring(0, 250));
  };

  // taking only positive input

  const handlePositiveInputChange = (e, setter, max) => {
    const value = parseInt(e.target.value);
    if (e.target.value === '' || (!isNaN(value) && value >= 0 && value <= max)) {
      setter(e.target.value === '' ? '' : value);
    }
  };


  const token1 = localStorage.getItem('token');
  console.log('Token:', token1);

  //encoding image to string

  const handleChange = (e) => {
    console.log(e.target.files)
    const file = e.target.files[0];
    const reader = new FileReader()

    reader.onload = (event) => {
      const base64string = event.target.result
      setImage(base64string);
    }
    reader.readAsDataURL(file)
  }

  console.log(image)

  // Handling Form Submission

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Type of description:', typeof description);
    console.log('Type of price:', typeof price);
    console.log('Type of image:', typeof image);
    console.log('Type of bhk:', typeof bhk);
    console.log('Type of bathrooms:', typeof bathrooms);
    console.log('Type of city:', typeof city);
    console.log('Type of location:', typeof location);
    
    let token = "Bearer "+localStorage.getItem("token");

    axios.post(
      'http://localhost:3000/property',
      {
        "description": description,
        "price": parseInt(price),
        "image": image,
        "bhk": parseInt(bhk),
        "bathrooms": parseInt(bathrooms),
        "city": city,
        "location": location
      },
      {
          headers: {
              'authorization': token
          }
      }
    )
    .then((response) => {
      console.log(response.data);
      navigate('/');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  

  return (
    <div className='bg-gradient-to-r from-cyan-100 from-10% via-sky-50 to-blue-100 to-90%'>
      <div className='mx-80 bg-white font-nunito'>
        <div className="container flex flex-row items-center pl-20">
          <div className="w-8/12">
            <h2 className="text-2xl font-bold text-center ">Rent Your Room</h2>
            <h3 className="text-center">Sell your room easily with us!</h3>
          </div>
          <div className=" h-40 w-40 md:p-8">
            <img className="w-auto h-auto m-34" src={postHouseImage} alt="Room" />
          </div>
        </div>
        <div className=''>
          <div className="container mx-auto w-1/2">
            <h1 className="text-2xl font-bold mb-4 text-center">Room Rent Posting Form</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-10">
              <div className="mb-4">
                <label className="block mb-2 font-bold">Address of room</label>
                <input
                  type="text"
                  placeholder="Location"
                  id="location"
                  name="location"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="City"
                  id="city"
                  name="city"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Number of Bedrooms (BHK)</label>
                  <input
                    type="number"
                    placeholder="Number of Bedrooms"
                    id="bhk"
                    name="bhk"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={bhk}
                    onChange={(e) => handlePositiveInputChange(e, setBhk, 3)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Number of Bathrooms</label>
                  <input
                    type="number"
                    placeholder="Number of Bathrooms"
                    id="bathrooms"
                    name="bathrooms"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={bathrooms}
                    onChange={(e) => handlePositiveInputChange(e, setBathrooms, 3)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Total expected price</label>
                  <input
                    type="number"
                    placeholder="Price"
                    id="price"
                    name="price"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={price}
                    onChange={(e) => handlePositiveInputChange(e, setPrice, Infinity)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Any other information you want to add</label>
                  <input
                    type="text"
                    placeholder="Type here..."
                    id="description"
                    name="description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                    value={description}
                    onChange={handleDescriptionChange}
                    maxLength={250}
                  />
                  <p className="text-sm text-gray-500">{charCount}/250 characters</p>
                </div>
                <div className="mb-4 text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>

          </div>
        </div>
      </div>
    </div>
  );
}
