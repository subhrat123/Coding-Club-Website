import React from 'react';
const Profile = () => {
  return (
    <>
      <div className=" flex text-white items-center justify-center gap-2 bg-slate-800 w-full h-screen">
        <div className="profile bg-slate-600 rounded-md border h-[70vh] w-[23vw] flex flex-col gap-3 items-center justify-center m-2 p-2">
          <img className=" invert h-12 m-2" src="/profile.png" alt="image" />
          <div>subhrat verma</div>
          <div>abcd@gmail.com</div>
          <hr className="border w-full m-2" />
          <div className="flex flex-col justify-center items-center gap-3">
            <img src="" alt="linkedIn" />
            <img src="" alt="Leetcode" />
            <img src="" alt="Github" />
          </div>
          <hr className="border w-full m-2" />
          <div>About</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            laudantium ratione, fuga optio sapiente qui ea modi ?
          </p>
          <button className="bg-cyan-400 shadow-cyan-300 shadow-md border-cyan-300 rounded p-1 drop-shadow-xl w-[4rem]">
            Edit
          </button>
        </div>
        <div className="flex flex-col gap-2 w-[72vw]">
          <div className="flex gap-2 mb-3">
            <div className="stats rounded flex justify-center items-center border h-[35vh] w-[35vw]">
              <div>box</div>
            </div>
            <div className="leaderboard rounded flex justify-center items-center border w-[40vw]">
              leaderboard
            </div>
          </div>
          <div className="questions rounded flex justify-center items-center border h-[30vh]">
            question
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
