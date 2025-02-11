import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    title: 'Web Development Team',
    text: 'Working with Valour was a fantastic experience. They fulfilled all my expectations flawlessly, and the final results were beyond excellent.',
    name: 'XYZ',
    image: '/team1.jpg',
  },
  {
    id: 2,
    title: 'Design Team',
    text: 'Valour was a pleasure to work with. The design exceeded expectations, and the end results were absolutely great.',
    name: 'ABC',
    image: '/team1.jpg',
  },
  {
    id: 3,
    title: 'Marketing Team',
    text: 'The marketing team’s expertise helped boost our engagement significantly. A great collaboration!',
    name: 'PQR',
    image: '/team1.jpg',
  },
];

const TeamCarousel = () => {
  return (
    <div className=" flex flex-col justify-center bg-[#06061d] items-center h-screen max-w-4xl mx-auto p-6">
      <div className="text-4xl text-white font-bold">{"OUR TEAM's"}</div>
      <div className="w-full flex justify-center bg-[#06061d] items-center max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          className="relative"
        >
          {testimonials.map((item) => (
            <SwiperSlide
              key={item.id}
              className="text-white   p-6 rounded-lg shadow-lg  w-[100%] "
            >
              <div className="flex flex-col glassmorphism w-[50] p-6 justify-center items-center">
                <div className="text-xl  font-bold">{item.title}</div>
                <div className="flex max-lg:flex-col text-center items-center gap-4 justify-center w-[70%]">
                  <p className="text-gray-300  mt-2">{item.text}</p>
                  {/* <div className="mt-4 text-[#c084fc] font-semibold">{item.name}</div> */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mt-4 w-[30vw] h-[20vh] object-cover rounded-md"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamCarousel;
