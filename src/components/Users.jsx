import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleUserDelete = id => {
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

        fetch(`http://localhost:5000/users/${id}`, {
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

              const remaining = users.filter(user => user._id !== id)
              setUsers(remaining);
            }
          })
      }
    });
  }
  return (
    <div>
      <Navbar />
      <h3 className='text-center text-xl md:text-3xl font-bold py-5'>All users: ({users.length})</h3>
      <div className="overflow-x-auto w-10/12 mx-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>Last SignIn Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map((user, index) =>
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img className='w-10 h-10 rounded-full my-2' src={user?.photo} alt="" />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.creationTimeData}</td>
                  <td>{user.lastSignInTimeData}</td>
                  <td>
                    <button onClick={() => handleUserDelete(user._id)} className='btn'><MdDelete className='text-xl mx-auto' /></button>
                  </td>
                </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;