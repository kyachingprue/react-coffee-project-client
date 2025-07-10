import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffees = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = id => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              const remaining = coffees.filter(coffee => coffee._id !== id)
              setCoffees(remaining)
            }
          })
      }
    });

  }
  return (
    <div className='grid grid-cols-12 bg-slate-200 rounded-xl p-3 items-center mx-auto gap-2'>
      <div className='col-span-4'>
        <img className='w-48 h-32' src={photo} alt="" />
      </div>
      <div className='col-span-6 space-y-3'>
        <p className='text-black'>Name: <span className='text-gray-500'>{name}</span></p>
        <p className='text-black'>Chef: <span className='text-gray-500'>{chef}</span></p>
        <p className='text-black'>Price: <span className='text-gray-500'>{price}</span></p>
      </div>
      <div className='col-span-2 '>
        <div className='flex flex-col space-y-1'>
          <Link to={`/coffeeDetails/${_id}`} className='btn btn-accent'><FaEye className='text-xl' /></Link>
          <Link to={`/updateCoffees/${_id}`} className='btn btn-primary'><MdOutlineSystemUpdateAlt className='text-xl' /></Link>
          <button onClick={() => handleDelete(_id)} className='btn btn-error'><MdDelete className='text-xl' /></button>
        </div>
      </div>
    </div>
  );
};

export default Coffees;