import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {

  const { createUsers, updateUsers, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    //user login with firebase
    createUsers(email, password)
      .then(result => {
        if (result.user) {
          toast.success('🦄 User Register successfully!', {
            position: "top-right",
            autoClose: 2000,
          })
          const profile = {
            displayName: name,
            photoURL: photo
          }
          updateUsers(profile)
            .then(() => {
              console.log("user Profile Update Successfully")
            })
            .catch(error => {
              console.log(error.message)
            })

          const creationTimeData = result?.user?.metadata?.creationTime;
          const lastSignInTimeData = result?.user?.metadata?.lastSignInTime;

          const usersData = { name, photo, email, creationTimeData, lastSignInTimeData };
          // User sign up data send to the mongodb database
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(usersData)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })

          navigate("/")
          form.reset();
        }
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then(result => {
        if (result.user) {
          navigate('/')
          toast.success('🦄 User Register successfully!', {
            position: "top-right",
            autoClose: 2000,
          })
        }
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <button onClick={handleGoogleSignUp} className='btn btn-success flex items-center justify-center gap-2'><FaGoogle className='text-xl text-blue-700' /> Sign Up with Google</button>
              <form onSubmit={handleRegister} className="fieldset">
                <label className="label font-bold text-black">Name</label>
                <input type="text" className="input w-full" name='name' placeholder="Enter your name" required />
                <label className="label font-bold text-black">Photo URL</label>
                <input type="url" className="input w-full" name='photo' placeholder="Enter your photoURL" required />
                <label className="label font-bold text-black">Email</label>
                <input type="email" className="input w-full" name='email' placeholder="Enter your email" required />
                <label className="label font-bold text-black">Password</label>
                <input type="password" className="input w-full" name='password' placeholder="Enter your password" required />
                <input type="submit" className='btn btn-primary' value="Register" />
              </form>
              <p>Already have an account please <Link to="/login" className='text-blue-600 underline'>Login</Link> now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;