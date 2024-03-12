import React from 'react'
import { FaHome } from "react-icons/fa";
import Card from './homeinnercomponents/Homecard.jsx';

function Propertytype() {
  return (
    <div className='bg-slate-100 h-[26rem]'>
    <div className="h-auto w-full flex flex-row bg-cover bg-center items-center justify-center">
        <div className="">
            <h2 className="text-3xl font-bold pt-10 text-center text-black ">Featured Property Types</h2>
            <p className="text-xl text-black text-center font-ubuntu">
            Find all types of Property
            </p>
        </div>
    </div>
    <div>
    <Card className=''/>
    </div>
</div>
  )
}

export default Propertytype

