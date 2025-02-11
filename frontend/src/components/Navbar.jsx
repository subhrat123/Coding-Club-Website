import React from 'react';

const Nav = () => {
  return (
    <>
      <div className="nav font-Roboto z-10 p-1 bg-black fixed shadow-inherit shadow-md text-white flex justify-around w-full items-center">
        <div className="logo flex h-16 gap-4 justify-center items-center">
          <a href="/">
            <img
              className="h-20 rounded-full w-20"
              src="/cc.jpg"
              alt="cc image"
            />
          </a>
          <h1 className=" text-xl">Coding Club</h1>
        </div>
        <nav className=" menu">
          <ul className="flex gap-12">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/teams">
              <li>Teams</li>
            </a>
            <a href="/events">
              <li>Events</li>
            </a>
            <a href="/member">
              <li>Profile</li>
            </a>
            <button className=" border rounded-md p-1">
              <a href="/login">Login</a>
            </button>
            <button className=" border rounded-md p-1">
              <a href="/signUp">SignIn</a>
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
