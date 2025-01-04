import React from 'react';
// import { useState } from 'react';
import ProgressBar from '../components/progress-bar';

const Profile = () => {
  // const [progress, setProgress] = useState(80);

  return (
    <>
      <img
        className=" fixed w-full h-full z-[-1] contrast-[180%] brightness-[45%]  "
        src="/bg.jpg"
        alt=""
      />
      <div className=" text-lg flex flex-col lg:flex-row text-white items-center justify-center min-h-screen gap-4 w-full p-4 pt-20">
        <div className="profile backdrop-blur-lg shadow-lg shadow-purple-200 rounded-xl  h-[75vh] w-full lg:w-[20vw] flex flex-col gap-3 items-center justify-center m-2 p-4 ">
          <img className=" invert h-16 m-2" src="/profile.png" alt="image" />
          <div className="font-serif text-2xl">subhrat verma</div>
          <div>abcd@gmail.com</div>
          <hr className="border w-[85%] m-2" />
          <div className="flex flex-col justify-center items-center gap-8">
            {/*TODO: use .map and fetch dynamically */}
            <p className="flex gap-3 justify-center items-center">
              <img className="h-8" src="linkedin.png" alt="linkedIn" />
              <a href="">LindkeIn</a>
            </p>
            <p className="flex gap-3 justify-center items-center">
              <img className="h-8" src="leetcode.png" alt="Leetcode" />
              <a href="">Leetcode</a>
            </p>
            <p className="flex gap-3 justify-center items-center">
              <img className="h-8" src="github.png" alt="Github" />
              Github
            </p>
          </div>
          <hr className="border w-[85%] m-2" />
          <div>About</div>
          <p className="p-3 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            laudantium ratione, fuga optio sapiente qui ea modi ?
          </p>
          <button className="bg-cyan-400 shadow-cyan-300 shadow-md  rounded-xl p-1 drop-shadow-xl w-[4rem]">
            Edit
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-[70vw]">
          <div className="flex flex-col lg:flex-row gap-4 mb-3 justify-center w-full">
            <div className="stats rounded-xl backdrop-blur-lg shadow-xl shadow-blue-900 flex flex-col gap-4 justify-center items-center h-[40vh] p-4 max-lg:w-[90vw]">
              <div className="text-4xl font-serif font-extrabold">Leetcode</div>
              <div className="data flex  justify-center w-full items-center">
                <div className=" flex justify-center m-4 items-center progresBar ">
                  {/*Todo: connect to backend */}
                  <ProgressBar />
                </div>
                <div className="stats w-40">
                  <ul className="flex flex-col justify-center items-center gap-3 text-lg">
                    <div>
                      <li>Easy</li>
                      <li>51/200</li>
                    </div>
                    <div>
                      <li>Medium</li>
                      <li>47/500</li>
                    </div>
                    <div>
                      <li>Hard</li>
                      <li>20/400</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="leaderboard backdrop-blur-lg shadow-xl shadow-blue-900 rounded-xl flex justify-center items-center w-full lg:w-[35vw]">
              <div className="text-4xl font-serif font-extrabold">
                Leaderboard
              </div>
            </div>
          </div>
          <div className="questions rounded-xl backdrop-blur-lg w-full shadow-xl shadow-blue-900 flex flex-col  items-center max-lg:w-[90vw] p-4 h-[30vh]">
            <div className="text-4xl font-serif font-extrabold">
              Weekly Questions
            </div>
            <hr className="border w-full m-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
