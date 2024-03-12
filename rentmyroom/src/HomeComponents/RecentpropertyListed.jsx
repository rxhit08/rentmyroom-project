import React from 'react';
import Recentlyproperlistedcard from './homeinnercomponents/Recentlyproperlistedcard';
import contents from '../assets/Roomdata';

function RecentpropertyListed() {
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
          {contents.slice(0, 3).map((content) => (
            <div key={content.key}>
              <Recentlyproperlistedcard
                name={content.name}
                desc={content.desc}
                image={content.image}
                price={content.price}
                rating={content.rating}
                type={content.type}
                address = {content.address}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentpropertyListed;
