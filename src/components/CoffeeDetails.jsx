import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import { FaArrowLeft } from 'react-icons/fa';

const CoffeeDetails = () => {
  const coffees = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <div className='w-8/12  mx-auto my-5'>
        <Link to="/">
          <h3 className='text-center text-xl py-10 flex items-center gap-3  text-shadow-2xs'><FaArrowLeft />Back to home</h3>
        </Link>
        <div className='flex justify-around bg-slate-200 rounded-xl items-center p-10'>
          <div>
            <img className='w-80 mx-auto' src={coffees.photo} alt="" />
          </div>
          <div className='space-y-2'>
            <h3 className='text-xl font-bold py-5 text-[#331A15]'>Niceties</h3>
            <p className='text-black font-bold'>Name: <span className='text-gray-600'>{coffees.name}</span></p>
            <p className='text-black font-bold'>Chef: <span className='text-gray-600'>{coffees.chef}</span></p>
            <p className='text-black font-bold'>Supplier: <span className='text-gray-600'>{coffees.supplier}</span></p>
            <p className='text-black font-bold'>Taste: <span className='text-gray-600'>{coffees.taste}</span></p>
            <p className='text-black font-bold'>Category: <span className='text-gray-600'>{coffees.category}</span></p>
            <p className='text-black font-bold'>Details: <span className='text-gray-600'>{coffees.details}</span></p>
            <p className='text-black font-bold'>Price: <span className='text-gray-600'>{coffees.price}</span></p>
            <p className='text-black font-bold'>Coffee Color: <span className='text-gray-600'>{coffees.color}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;