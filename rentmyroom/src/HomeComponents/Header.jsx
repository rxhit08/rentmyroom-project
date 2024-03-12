import React from 'react'
import homeHeaderImagee from 'D:/rentmyroom/homeHeaderImagee.jpg'

function Header() {
  return (
    <div>
        <div className=" h-96 w-full mx-auto flex flex-row bg-cover bg-center items-center justify-center" style={{backgroundImage: `url(${homeHeaderImagee})`}}>
          
            <div className="pt-24">
                <h2 className="text-5xl font-outline-2 font-bold mb-4 text-center text-white ">Search Your Next Home</h2>
                <p className="text-xl text-white text-center">
                Find new and featured home located in your city
                </p>
            </div>
            </div>
    </div>
  )
}

export default Header