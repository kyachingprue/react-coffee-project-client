import React from 'react';
import imgLogo from '../assets/images/more/logo1.png'

const Navbar = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/KpnKr4Vr/15.jpg)",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className=" flex justify-center items-center gap-5 text-2xl font-bold">
              <img className='w-10' src={imgLogo} alt="" />
              Espresso Emporium</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;