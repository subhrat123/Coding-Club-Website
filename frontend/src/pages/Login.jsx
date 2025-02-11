import React from 'react';
import ProgressBar from '../components/progress-bar';

const Home = () => {
  return (
    <>
      {/* background */}
      <div className="fixed w-full bg-[#000000] h-full z-[-1]"></div>

      <div className="text-lg font-bold flex flex-col lg:flex-row text-white items-center justify-center min-h-screen gap-6 w-full p-6 pt-10 max-lg:pt-20 font-anek-devanagari">
        {/* Profile Section */}
        <div className="profile glassmorphism shadow-md hover:shadow-lg shadow-red-500 hover:shadow-red-700 transition duration-500 ease-in-out transform rounded-xl lg:min:h-[80vh] w-full lg:w-[25vw] flex flex-col gap-5 items-center justify-center m-4 p-6 pb-8">
          <img className="invert h-16" src="/profile.png" alt="Profile" />
          <div className="text-2xl font-orbitron uppercase">Subhrat Verma</div>
          <div className="text-sm text-gray-300">abcd@gmail.com</div>
          <hr className="border w-[85%] border-red-600" />
          <div className="flex flex-col justify-center items-center gap-6">
            <p className="flex gap-4 justify-center items-center">
              <img className="h-8" src="linkedin.png" alt="LinkedIn" />
              <a
                href="#"
                className="text-[#DB9146] hover:text-white transition"
              >
                LinkedIn
              </a>
            </p>
            <p className="flex gap-4 justify-center items-center">
              <img className="h-8" src="leetcode.png" alt="LeetCode" />
              <a
                href="#"
                className="text-[#DB9146] hover:text-white transition"
              >
                LeetCode
              </a>
            </p>
            <p className="flex gap-4 justify-center items-center">
              <img className="h-8" src="github.png" alt="GitHub" />
              <a
                href="#"
                className="text-[#DB9146] hover:text-white transition"
              >
                GitHub
              </a>
            </p>
          </div>
          <hr className="border w-[85%] border-red-600" />
          <div className="text-xl font-roboto">About</div>
          <p className="p-4 text-center text-gray-300">
            Passionate web developer and programmer exploring the MERN stack.
          </p>
          <button className="outline-none bg-gradient-to-r from-red-500 to-red-700 shadow-md shadow-red-400 hover:shadow-red-600 rounded-xl p-2 drop-shadow-xl w-[10rem] text-white font-bold">
            Edit
          </button>
        </div>

        {/* Stats and Leaderboard Section */}
        <div className="flex flex-col justify-center items-center gap-6 w-full lg:w-[70vw] font-roboto">
          <div className="flex flex-col lg:flex-row gap-6 justify-center w-full">
            <div className="stats rounded-xl glassmorphism shadow-md hover:shadow-lg shadow-red-400 hover:shadow-red-600 transition duration-300 ease-in-out transform flex flex-col gap-6 justify-center items-center h-[40vh] lg:w-[35vw] p-6 max-lg:w-[90vw]">
              <div className="text-3xl font-orbitron font-extrabold text-red-400">
                LeetCode
              </div>
              <div className="data flex justify-center w-full items-center">
                <div className="flex justify-center m-4 items-center progresBar">
                  <ProgressBar />
                </div>
                <div className="stats w-40">
                  <ul className="flex flex-col justify-center items-center gap-3 text-lg">
                    <div className="flex flex-col items-center">
                      <li className="text-red-500 font-bold">Easy</li>
                      <li className="text-white">51/200</li>
                    </div>
                    <div className="flex flex-col items-center">
                      <li className="text-yellow-500 font-bold">Medium</li>
                      <li className="text-white">47/500</li>
                    </div>
                    <div className="flex flex-col items-center">
                      <li className="text-purple-500 font-bold">Hard</li>
                      <li className="text-white">20/400</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="leaderboard glassmorphism shadow-md shadow-red-400 hover:shadow-lg hover:shadow-red-600 transition duration-300 ease-in-out transform rounded-xl flex flex-col items-center w-full lg:w-[35vw]">
              <div className="text-3xl font-orbitron p-4 font-extrabold text-red-400">
                LinkedIn
              </div>
              <hr className="border w-full border-red-600" />
            </div>
          </div>

          {/* Weekly Questions Section */}
          <div className="questions rounded-xl glassmorphism w-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform shadow-red-400 hover:shadow-red-600 flex flex-col items-center max-lg:w-[90vw] p-6 lg:h-[37vh]">
            <div className="text-3xl font-orbitron font-extrabold text-red-400">
              Weekly Questions
            </div>
            <hr className="border w-full border-red-600" />
            <div className="lg:overflow-y-auto lg:h-[25vh] w-full hide-scrollbar">
              <ul className="flex flex-col gap-4 justify-start items-start text-lg w-full p-6">
                {[
                  {
                    label: 'Two Sum',
                    link: 'https://leetcode.com/problems/two-sum/',
                  },
                  {
                    label: 'Add Two Numbers',
                    link: 'https://leetcode.com/problems/add-two-numbers/',
                  },
                  {
                    label: 'Longest Substring Without Repeating Characters',
                    link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
                  },
                  {
                    label: 'Median of Two Sorted Arrays',
                    link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
                  },
                  {
                    label: 'Longest Palindromic Substring',
                    link: 'https://leetcode.com/problems/longest-palindromic-substring/',
                  },
                  {
                    label: 'Zigzag Conversion',
                    link: 'https://leetcode.com/problems/zigzag-conversion/',
                  },
                  {
                    label: 'Reverse Integer',
                    link: 'https://leetcode.com/problems/reverse-integer/',
                  },
                  {
                    label: 'String to Integer (atoi)',
                    link: 'https://leetcode.com/problems/string-to-integer-atoi/',
                  },
                  {
                    label: 'Palindrome Number',
                    link: 'https://leetcode.com/problems/palindrome-number/',
                  },
                  {
                    label: 'Regular Expression Matching',
                    link: 'https://leetcode.com/problems/regular-expression-matching/',
                  },
                ].map((question, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <input type="checkbox" id={`question${index}`} />
                    <label htmlFor={`question${index}`} className="text-white">
                      <a
                        href={question.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-400 transition"
                      >
                        {question.label}
                      </a>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
