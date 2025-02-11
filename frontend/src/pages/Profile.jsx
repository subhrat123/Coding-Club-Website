import React, { useEffect, useState } from 'react';
import ProgressBar from '../components/progress-bar';

const generateDots = (count) => {
  return Array.from({ length: count }, () => ({
    id: Math.random(),
    x: Math.random() * 100,
    y: Math.random() * -10,
    speed: Math.random() * 1 + 0.2,
    opacity: 1,
  }));
};

const Profile = () => {
  const [dots, setDots] = useState(generateDots(50));

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) =>
        prevDots.map((dot) =>
          dot.y > 100
            ? { ...dot, y: Math.random() * -10, opacity: 1 }
            : {
                ...dot,
                y: dot.y + dot.speed,
                opacity: Math.max(0, dot.opacity - 0.01),
              }
        )
      );
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background */}
      <div className="fixed w-full h-full z-[-1] bg-gradient-to-b from-[#040015] to-[#110d24] overflow-hidden">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute bg-white rounded-full"
            style={{
              width: '2px',
              height: '2px',
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              opacity: dot.opacity,
              filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))',
              transition: 'opacity 0.1s ease-in-out',
            }}
          />
        ))}
      </div>
      <div className="text-lg flex flex-col lg:flex-row text-white items-center justify-center lg:min-h-screen w-full p-6 pt-10 max-lg:pt-20  overflow-auto max-h-screen ">
        {/* Profile Section */}
        <div className=" max-lg:top-96 relative flex max-lg:flex-col max-lg:py-44 justify-center items-center">
          <div className="profile  shadow-lg glassmorphism transition duration-500 ease-in-out transform lg:min:h-[80vh]  lg:w-[25vw] max-lg:w-[86vw] flex flex-col gap-5 items-center justify-center m-4 p-6 pb-8 bg-[#1a1a40]/60 border border-[#6f00ff]/50">
            <img className="invert h-16" src="/profile.png" alt="Profile" />
            <div className="text-2xl sora uppercase text-[#f8f5ff] tracking-wider">
              Subhrat Verma
            </div>
            <div className=" inter">abcd@gmail.com</div>
            <hr className="w-[85%] " />
            <div className="flex flex-col justify-center items-center gap-6">
              <p className="flex gap-4 justify-center items-center">
                <img className="h-8" src="linkedin.png" alt="LinkedIn" />
                <a
                  href="#"
                  className=" hover:text-white transition inter hover:scale-105"
                >
                  LinkedIn
                </a>
              </p>
              <p className="flex gap-4 justify-center items-center">
                <img className="h-8" src="leetcode.png" alt="LeetCode" />
                <a
                  href="#"
                  className=" hover:text-white inter transition hover:scale-105"
                >
                  LeetCode
                </a>
              </p>
              <p className="flex gap-4 justify-center items-center">
                <img className="h-8" src="github.png" alt="GitHub" />
                <a
                  href="#"
                  className=" hover:text-white inter transition hover:scale-105"
                >
                  GitHub
                </a>
              </p>
            </div>
            <hr className=" w-[85%] " />
            <div className="text-xl sora font-bold ">About</div>
            <p className="p-1 font-thin  h-[7rem] inter  text-center overflow-hidden text-gray-300">
              Passionate web developer and programmer exploring the MERN stack.
            </p>
            <button className=" bg-[#4b19675b] font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:text-white focus:outline-none border  hover:scale-105">
              Edit
            </button>
          </div>

          {/* Stats and Leaderboard Section */}
          <div className="flex flex-col justify-center gap-6 items-center w-full lg:w-[70vw] font-orbitron">
            <div className="flex flex-col lg:flex-row max-lg:gap-6 justify-center items-center w-full">
              <div className="flex flex-col lg:flex-row gap-6 justify-center ">
                <div className="stats  shadow-lg glassmorphism transition duration-300 ease-in-out transform flex flex-col gap-6 justify-center items-center h-[40vh] lg:w-[35vw] p-6 max-lg:w-[86vw] bg-[#1a1a40]/60 border border-[#6f00ff]/50">
                  <div className="text-2xl font-bold ">LeetCode Stats</div>
                  <div className="data flex justify-center w-full items-center">
                    <div className="flex justify-center m-4 items-center h-auto progresBar">
                      <ProgressBar percentage={50} />
                    </div>
                    {/* <div className="stats w-40">
                  <ul className="flex flex-col justify-center items-center gap-3 text-lg">
                    <div className="flex flex-col items-center">
                      <li className="text-[#80aee3] font-bold">Easy</li>
                      <li className="text-white">51/200</li>
                    </div>
                    <div className="flex flex-col items-center">
                      <li className="text-[#d4db46] font-bold">Medium</li>
                      <li className="text-white">47/500</li>
                    </div>
                    <div className="flex flex-col items-center">
                      <li className="text-red-500 font-bold">Hard</li>
                      <li className="text-white">20/400</li>
                    </div>
                  </ul>
                </div> */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 justify-center ">
                <div className="stats  shadow-lg glassmorphism transition duration-300 ease-in-out transform flex flex-col gap-6 justify-center items-center h-[40vh] lg:w-[35vw] p-6 max-lg:w-[86vw] bg-[#1a1a40]/60 border border-[#6f00ff]/50">
                  <div className="text-2xl font-bold ">LinkedIN</div>
                  <div className="data inter flex justify-center w-full items-center">
                    coming...
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Questions Section */}
            <div className="questions  w-full shadow-lg transition duration-300 ease-in-out transform flex flex-col items-center max-lg:w-[86vw] lg:h-[37vh] glassmorphism bg-[#1a1a40]/60 border border-[#6f00ff]/50">
              <div className="text-2xl font-bold p-4 ">Weekly Questions</div>
              <hr className=" w-[95%] " />
              <div className="lg:overflow-y-auto lg:h-[25vh] px-5 w-full hide-scrollbar">
                <ul className="flex flex-col gap-4 justify-start items-start text-lg w-full p-6">
                  {/* Weekly questions list will be dynamically generated here */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

//  {
//   // const [progress, setProgress] = useState(80);

//   return (
//     <>
//       <div className="fixed w-full h-full z-[-1]">
//         <img className="w-full h-full object-cover" src="/bg.png"/>
//         {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}
//       </div>
//       <div className=" text-lg flex font-Roboto flex-col lg:flex-row text-white items-center justify-center min-h-screen gap-4 w-full p-4 pt-10 max-lg:pt-20">
//         <div className=" profile glassmorphism shadow-sm hover:shadow-lg shadow-slate-50 hover:shadow-purple-200 transition duration-500 ease-in-out transform -xl  lg:h-[80vh] w-full lg:w-[25vw] flex flex-col gap-3 items-center justify-center m-2 p-4 pb-7 ">
//           <img className=" invert h-16 m-2" src="/profile.png" alt="image" />
//           <div className=" text-2xl font-orbitron">subhrat verma</div>
//           <div>abcd@gmail.com</div>
//           <hr className="border w-[85%] m-2" />
//           <div className="flex flex-col justify-center items-center gap-8">
//             <p className="flex gap-3 justify-center items-center">
//               <img className="h-8" src="linkedin.png" alt="linkedIn" />
//               <a href="">LinkedIn</a>
//             </p>
//             <p className="flex gap-3 justify-center items-center">
//               <img className="h-8" src="leetcode.png" alt="Leetcode" />
//               <a href="">Leetcode</a>
//             </p>
//             <p className="flex gap-3 justify-center items-center">
//               <img className="h-8" src="github.png" alt="Github" />
//               Github
//             </p>
//           </div>
//           <hr className="border w-[85%] m-2" />
//           <div className=" text-lg">About</div>
//           <p className="p-3 text-center">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//           </p>
//           <button className="outline-none bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-blue-400/50 hover:shadow-purple-500/50 -xl p-2 drop-shadow-xl w-[5rem] text-white">
//             Edit
//           </button>
//         </div>
//         <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-[70vw] font-Roboto">
//           <div className="flex flex-col lg:flex-row gap-6 mb-3 justify-center w-full">
//             <div className="stats -xl glassmorphism shadow-sm hover:shadow-lg shadow-blue-400 hover:shadow-blue-300 transition duration-300 ease-in-out transform flex flex-col gap-4 justify-center items-center h-[40vh] lg:w-[35vw] p-4 max-lg:w-[90vw]">
//               <div className="text-3xl  font-extrabold">Leetcode</div>
//               <div className="data flex  justify-center w-full items-center">
//                 <div className=" flex justify-center m-4 items-center progresBar ">
//                   <ProgressBar />
//                 </div>
//                 <div className="stats w-40">
//                   <ul className="flex flex-col justify-center items-center gap-3 text-lg">
//                     <div className="flex flex-col items-center">
//                       <li className="text-blue-400 font-bold">Easy</li>
//                       <li className="text-white">51/200</li>
//                     </div>
//                     <div className="flex flex-col items-center">
//                       <li className="text-yellow-400 font-bold">Medium</li>
//                       <li className="text-white">47/500</li>
//                     </div>
//                     <div className="flex flex-col items-center">
//                       <li className="text-red-400 font-bold">Hard</li>
//                       <li className="text-white">20/400</li>
//                     </div>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="leaderboard glassmorphism shadow-sm shadow-blue-400 hover:shadow-lg hover:shadow-blue-300 transition duration-300 ease-in-out transform -xl flex flex-col items-center w-full lg:w-[35vw]">
//               <div className="text-3xl p-3 font-extrabold">Leaderboard</div>
//               <hr className="border w-full m-2" />
//             </div>
//           </div>
//           <div className="questions -xl glassmorphism w-full shadow-sm hover:shadow-lg transition duration-300 ease-in-out transform shadow-blue-400 hover:shadow-blue-300 flex flex-col items-center max-lg:w-[90vw] p-4 lg:h-[37vh]">
//             <div className="text-3xl  font-extrabold">Weekly Questions</div>
//             <hr className="border w-full m-2" />
//             <div className="lg:overflow-y-auto lg:h-[25vh] w-full hide-scrollbar">
//               <ul className="flex flex-col gap-4 justify-start items-start text-lg w-full p-6">
//                 <li className="flex items-center gap-2">
//                   <input type="checkbox" id="question1" />
//                   <label htmlFor="question1">
//                     <a
//                       href="https://leetcode.com/problems/two-sum/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Two Sum
//                     </a>
//                   </label>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <input type="checkbox" id="question2" />
//                   <label htmlFor="question2">
//                     <a
//                       href="https://leetcode.com/problems/add-two-numbers/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Add Two Numbers
//                     </a>
//                   </label>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <input type="checkbox" id="question3" />
//                   <label htmlFor="question3">
//                     <a
//                       href="https://leetcode.com/problems/longest-substring-without-repeating-characters/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Longest Substring Without Repeating Characters
//                     </a>
//                   </label>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <input type="checkbox" id="question4" />
//                   <label htmlFor="question4">
//                     <a
//                       href="https://leetcode.com/problems/median-of-two-sorted-arrays/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Median of Two Sorted Arrays
//                     </a>
//                   </label>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <input type="checkbox" id="question5" />
//                   <label htmlFor="question5">
//                     <a
//                       href="https://leetcode.com/problems/longest-palindromic-substring/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Longest Palindromic Substring
//                     </a>
//                   </label>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <input type="checkbox" id="question6" />
//                   <label htmlFor="question6">
//                     <a
//                       href="https://leetcode.com/problems/zigzag-conversion/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Zigzag Conversion
//                     </a>
//                   </label>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <input type="checkbox" id="question7" />
//                   <label htmlFor="question7">
//                     <a
//                       href="https://leetcode.com/problems/reverse-integer/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Reverse Integer
//                     </a>
//                   </label>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <input type="checkbox" id="question8" />
//                   <label htmlFor="question8">
//                     <a
//                       href="https://leetcode.com/problems/string-to-integer-atoi/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       String to Integer (atoi)
//                     </a>
//                   </label>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <input type="checkbox" id="question9" />
//                   <label htmlFor="question9">
//                     <a
//                       href="https://leetcode.com/problems/palindrome-number/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Palindrome Number
//                     </a>
//                   </label>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <input type="checkbox" id="question10" />
//                   <label htmlFor="question10">
//                     <a
//                       href="https://leetcode.com/problems/regular-expression-matching/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Regular Expression Matching
//                     </a>
//                   </label>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
