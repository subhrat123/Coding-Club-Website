import React from 'react';
// import { useState } from 'react';
import ProgressBar from '../components/progress-bar';

const Profile = () => {
  // const [progress, setProgress] = useState(80);

  return (
    <>
      <div className="fixed w-full h-full z-[-1] brightness-[50%] contrast-[180%]">
        <img className="w-full h-full object-cover" src="/bg.jpg" alt="" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}
      </div>
      <div className=" text-lg flex font-Roboto flex-col lg:flex-row text-white items-center justify-center min-h-screen gap-4 w-full p-4 pt-10 max-lg:pt-20">
        <div className=" profile glassmorphism shadow-sm hover:shadow-lg shadow-slate-50 hover:shadow-purple-200 transition duration-500 ease-in-out transform rounded-xl  h-[80vh] w-full lg:w-[25vw] flex flex-col gap-3 items-center justify-center m-2 p-4 pb-7 ">
          <img className=" invert h-16 m-2" src="/profile.png" alt="image" />
          <div className=" text-2xl">subhrat verma</div>
          <div>abcd@gmail.com</div>
          <hr className="border w-[85%] m-2" />
          <div className="flex flex-col justify-center items-center gap-8">
            <p className="flex gap-3 justify-center items-center">
              <img className="h-8" src="linkedin.png" alt="linkedIn" />
              <a href="">LinkedIn</a>
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
          <div className=" text-lg">About</div>
          <p className="p-3 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            laudantium ratione, fuga optio sapiente qui ea modi ?
          </p>
          <button className="outline-none bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-blue-400/50 hover:shadow-purple-500/50 rounded-xl p-2 drop-shadow-xl w-[5rem] text-white">
            Edit
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-[70vw] font-Roboto">
          <div className="flex flex-col lg:flex-row gap-6 mb-3 justify-center w-full">
            <div className="stats rounded-xl glassmorphism shadow-sm hover:shadow-lg shadow-blue-400 hover:shadow-blue-300 transition duration-300 ease-in-out transform flex flex-col gap-4 justify-center items-center h-[40vh] lg:w-[35vw] p-4 max-lg:w-[90vw]">
              <div className="text-3xl  font-extrabold">Leetcode</div>
              <div className="data flex  justify-center w-full items-center">
                <div className=" flex justify-center m-4 items-center progresBar ">
                  <ProgressBar />
                </div>
                <div className="stats w-40">
                  <ul className="flex flex-col justify-center items-center gap-3 text-lg">
                    <div className="flex flex-col items-center">
                      <li className="text-blue-400 font-bold">Easy</li>
                      <li className="text-white">51/200</li>
                    </div>
                    <div className="flex flex-col items-center">
                      <li className="text-yellow-400 font-bold">Medium</li>
                      <li className="text-white">47/500</li>
                    </div>
                    <div className="flex flex-col items-center">
                      <li className="text-red-400 font-bold">Hard</li>
                      <li className="text-white">20/400</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="leaderboard glassmorphism shadow-sm shadow-blue-400 hover:shadow-lg hover:shadow-blue-300 transition duration-300 ease-in-out transform rounded-xl flex flex-col items-center w-full lg:w-[35vw]">
              <div className="text-3xl p-3 font-extrabold">Leaderboard</div>
              <hr className="border w-full m-2" />
            </div>
          </div>
          <div className="questions rounded-xl glassmorphism w-full shadow-sm hover:shadow-lg transition duration-300 ease-in-out transform shadow-blue-400 hover:shadow-blue-300 flex flex-col items-center max-lg:w-[90vw] p-4 lg:h-[37vh]">
            <div className="text-3xl  font-extrabold">Weekly Questions</div>
            <hr className="border w-full m-2" />
            <div className="lg:overflow-y-auto lg:h-[25vh] w-full hide-scrollbar">
              <ul className="flex flex-col gap-4 justify-start items-start text-lg w-full p-6">
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="question1" />
                  <label htmlFor="question1">
                    <a
                      href="https://leetcode.com/problems/two-sum/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Two Sum
                    </a>
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="question2" />
                  <label htmlFor="question2">
                    <a
                      href="https://leetcode.com/problems/add-two-numbers/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Add Two Numbers
                    </a>
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="question3" />
                  <label htmlFor="question3">
                    <a
                      href="https://leetcode.com/problems/longest-substring-without-repeating-characters/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Longest Substring Without Repeating Characters
                    </a>
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="question4" />
                  <label htmlFor="question4">
                    <a
                      href="https://leetcode.com/problems/median-of-two-sorted-arrays/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Median of Two Sorted Arrays
                    </a>
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="question5" />
                  <label htmlFor="question5">
                    <a
                      href="https://leetcode.com/problems/longest-palindromic-substring/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Longest Palindromic Substring
                    </a>
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="question6" />
                  <label htmlFor="question6">
                    <a
                      href="https://leetcode.com/problems/zigzag-conversion/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zigzag Conversion
                    </a>
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="question7" />
                  <label htmlFor="question7">
                    <a
                      href="https://leetcode.com/problems/reverse-integer/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reverse Integer
                    </a>
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="question8" />
                  <label htmlFor="question8">
                    <a
                      href="https://leetcode.com/problems/string-to-integer-atoi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      String to Integer (atoi)
                    </a>
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="question9" />
                  <label htmlFor="question9">
                    <a
                      href="https://leetcode.com/problems/palindrome-number/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Palindrome Number
                    </a>
                  </label>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" id="question10" />
                  <label htmlFor="question10">
                    <a
                      href="https://leetcode.com/problems/regular-expression-matching/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Regular Expression Matching
                    </a>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
