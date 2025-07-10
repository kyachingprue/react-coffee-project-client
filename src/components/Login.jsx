import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

  const { signInUsers, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const users = { email, password };
    console.log(users);
    // SignIn User in the firebase
    signInUsers(email, password)
      .then(result => {
        if (result.user) {
          toast.success('🦄 User Register successfully!', {
            position: "top-right",
            autoClose: 2000,
          })
          navigate('/')
          form.reset();
        }
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        if (result.user) {
          toast.success('🦄 User Register successfully!', {
            position: "top-right",
            autoClose: 2000,
          })
          navigate('/')
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
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <button onClick={handleGoogleLogin} className='btn btn-accent flex justify-center items-center gap-3'><FaGoogle className='text-xl text-blue-800' /> Sign In with Google</button>
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label font-bold text-black">Email</label>
                <input type="email" className="input w-full" name='email' placeholder="Email" />
                <label className="label font-bold text-black">Password</label>
                <input type="password" className="input w-full" name='password' placeholder="Password" />
                <input type="submit" className='btn btn-primary' value="Login" />
              </form>
              <p>You haven't account please <Link to="/register" className='text-blue-600 underline'>Register</Link> now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;