import React from 'react';
import errorImg from '../assets/images/404/404.gif'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const ErrorPages = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='w-10/12 mx-auto'>
        <Link to="/">
          <h3 className='text-center text-xl py-10 flex items-center gap-3 justify-center text-shadow-2xs'><FaArrowLeft />Back to home</h3>
        </Link>
        <img className='w-full mx-auto' src={errorImg} alt="" />
      </div>
    </div>
  );
};

export default ErrorPages;