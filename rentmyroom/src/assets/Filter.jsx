
import React from 'react'
import roomsData from './Roomdata'

function Filter({roomTypes, filterRooms, setRooms}) {
  console.log(roomTypes)
  
  return (
    <div className=' flex justify-center items-center '>
      {
        
        roomTypes.map(val => (
          <button className='  text-black text-xl flex flex-wrap p-10'
          onClick={() => filterRooms(val)}>
          {val}
        </button>
      ))}
      <button className=' bg-black text-white'
      onClick={() => setRooms(roomsData)}>
          all
      </button>
    </div>
  )
}

export default Filter