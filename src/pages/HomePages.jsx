import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { useLoaderData } from 'react-router-dom';
import Coffees from '../components/Coffees';

const HomePages = () => {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee)
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className='w-8/12 mx-auto'>
        <h3 className='text-3xl font-bold text-center py-5'>Our Popular Products: {loadedCoffee.length}</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10 mx-auto'>
          {
            coffees.map(coffee => <Coffees key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}></Coffees>)
          }
        </div>
      </div>
    </div>
  );
};

export default HomePages;