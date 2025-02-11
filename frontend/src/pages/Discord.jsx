import React from 'react';

const Home = () => {
  return (
    <>
      {/* background */}
      <div className="fixed w-full bg-[#040015] h-full z-[-1]"></div>
      {/* content */}
      <div className="flex flex-col items-center gap-10 justify-center h-screen text-white">
        <div className="text-2xl font-bold">
          <h1>DISCORD COMMUNITY</h1>
        </div>
        <div className="flex max-lg:flex-col lg:w-[60vw] max-lg:w-[80vw] py-8 max-lg:p-7 glassmorphism gap-8 items-center justify-center">
          <div className="lg:w-[40%]">
            <h1 className=" font-bold  text-lg py-2">
              Fundamental Skills and Techniques
            </h1>
            <p className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              laboriosam. Pariatur ducimus?
            </p>
            <br />
            <h1 className=" text-lg font-bold py-2">
              Fundamental Skills and Techniques
            </h1>
            <p className="text-gray-400">
              {' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              eaque voluptatibus praesentium impedit autem dignissimos modi quam
              voluptatum iure inventore nam voluptatem, accusamus cumque rem ea
              sit. Velit, veniam ut.
            </p>
          </div>
          <div className="relative h-40 flex justify-center">
            <img className=" max-lg:h-40 left-5" src="3.png" alt="" />
            <img
              className="absolute max-lg:h-40  max-lg:w-20 lg:left-20 bottom-5"
              src="3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
