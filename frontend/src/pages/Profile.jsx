import React from 'react';
// import { useState } from 'react';
import ProgressBar from '../components/progress-bar';

const Profile = () => {
  // const [progress, setProgress] = useState(80);

  return (
    <>
      <div className=" flex flex-col lg:flex-row text-white items-center justify-center min-h-screen gap-4 w-full p-4 pt-20">
        <div className="profile rounded-xl  h-[75vh] w-full lg:w-[20vw] flex flex-col gap-3 items-center justify-center m-2 p-4 opacity-60">
          <img className=" invert h-12 m-2" src="/profile.png" alt="image" />
          <div>subhrat verma</div>
          <div>abcd@gmail.com</div>
          <hr className="border w-[85%] m-2" />
          <div className="flex flex-col justify-center items-center gap-8">
            {/*TODO: use .map and fetch dynamically */}
            <img src="" alt="linkedIn" />
            <img src="" alt="Leetcode" />
            <img src="" alt="Github" />
          </div>
          <hr className="border w-[85%] m-2" />
          <div>About</div>
          <p className="p-4 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            laudantium ratione, fuga optio sapiente qui ea modi ?
          </p>
          <button className="bg-cyan-400 shadow-cyan-300 shadow-md border-cyan-300 rounded-xl p-1 drop-shadow-xl w-[4rem]">
            Edit
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-[70vw]">
          <div className="flex flex-col lg:flex-row gap-4 mb-3">
            <div className="stats rounded-xl border-zinc-700 border-4 flex flex-col justify-center items-center h-[40vh] w-[35vw]">
              <div>Leetcode</div>
              <div className="data flex justify-center items-center">
                <div className=" flex justify-center items-center progresBar ">
                  {/*Todo: connect to backend */}
                  <ProgressBar />
                </div>
                <div className="stats ">stats</div>
              </div>
            </div>
            <div className="leaderboard border-zinc-700 border-4  rounded-xl flex justify-center items-center w-full lg:w-[35vw]">
              leaderboard
            </div>
          </div>
          <div className="questions rounded-xl flex justify-center items-center  h-[30vh]">
            question
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
