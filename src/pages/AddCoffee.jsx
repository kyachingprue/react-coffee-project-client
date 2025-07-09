import React from 'react';
import Navbar from '../components/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCoffee = () => {

  const handleAddCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const color = form.color.value;
    const photo = form.photo.value;
    const addCoffeeData = { name, chef, supplier, taste, category, details, price, color, photo };
    fetch('http://localhost:5000/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addCoffeeData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully!",
            icon: "success",
            draggable: true
          });
          form.reset();
        }
      })
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className='w-8/12 my-5 mx-auto'>
        <Link to="/">
          <h3 className=' text-xl py-10 flex items-center gap-3 text-shadow-2xs'><FaArrowLeft />Back to home</h3>
        </Link>
        <div className="card bg-gray-200 w-full max-w-full mx-auto shrink-0">
          <div className="card-body">
            <div className='py-5 w-10/12 mx-auto'>
              <h2 className='text-center text-4xl font-bold py-4'>Add New Coffee</h2>
              <p className='text-center text-gray-500'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee} className="fieldset">
              <div className='flex justify-between gap-4 items-center'>
                <div className='flex-col w-full'>
                  <label className="label pb-2 font-semibold text-xl text-black">Name</label>
                  <input type="text" className="input w-full" name='name' placeholder="Enter coffee name" required />
                </div>
                <div className='flex-col w-full'>
                  <label className="label pb-2 font-semibold text-xl text-black">Chef</label>
                  <input type="text" className="input w-full" name='chef' placeholder="Enter coffee chef" required />
                </div>
              </div>
              <div className='flex justify-between gap-4 items-center'>
                <div className='flex-col w-full'>
                  <label className="label pb-2 font-semibold text-xl text-black">Supplier</label>
                  <input type="text" className="input w-full" name='supplier' placeholder="Enter coffee supplier" required />
                </div>
                <div className='flex-col w-full'>
                  <label className="label pb-2 font-semibold text-xl text-black">Taste</label>
                  <input type="text" className="input w-full" name='taste' placeholder="Enter coffee taste" required />
                </div>
              </div>
              <div className='flex justify-between gap-4 items-center'>
                <div className='flex-col w-full'>
                  <label className="label pb-2 font-semibold text-xl text-black">Category</label>
                  <input type="text" className="input w-full" name='category' placeholder="Enter coffee category" required />
                </div>
                <div className='flex-col w-full'>
                  <label className="label pb-2 font-semibold text-xl text-black">Details</label>
                  <input type="text" className="input w-full" name='details' placeholder="Enter coffee details" required />
                </div>
              </div>
              <div className='flex justify-between gap-4 items-center'>
                <div className='flex-col w-full'>
                  <label className="label pb-2 font-semibold text-xl text-black">Price</label>
                  <input type="number" className="input w-full" name='price' placeholder="Enter coffee price" required />
                </div>
                <div className='flex-col w-full'>
                  <label className="label pb-2 font-semibold text-xl text-black">Coffee Color</label>
                  <input type="text" className="input w-full" name='color' placeholder="Enter coffee color" required />
                </div>
              </div>
              <div className='w-full'>
                <label className="label pb-2 font-semibold text-xl text-black">Photo</label>
                <input type="url" className="input w-full" name='photo' placeholder="Enter photo URL" required />
              </div>
              <div className='w-full my-4'>
                <input type="submit" className='btn btn-accent text-black w-full' value="Add Coffee" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;