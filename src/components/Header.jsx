import React from 'react';

const Header = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/k2LyDp4H/3.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-start">
          <div className="ml-[600px] max-w-[700px]">
            <h1 className="mb-5 text-3xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="btn btn-success text-white font-bold">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;