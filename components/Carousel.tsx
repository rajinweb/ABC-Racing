'use client';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from 'next/navigation';
const carouselImages = [
  'https://img.freepik.com/free-vector/realistic-racing-checkered-flag-background_52683-64050.jpg',
  'https://img.freepik.com/free-vector/checkered-racing-flag-speed-background_1017-23607.jpg',
  'https://img.freepik.com/free-photo/automobile-racing-sports-competition_23-2150800037.jpg',
  
];
const Carousel = () => {
  const router=useRouter();
  return (
    <section className="relative w-full h-[500px]">
        <Swiper
        spaceBetween={0} 
        slidesPerView={1}  
        loop={true}     
        autoplay={{
            delay: 1000,   
            disableOnInteraction: false, 
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }} 
        navigation={true} 
        className="w-full h-[500px] "  
        >
        {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
            <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
            />
            </SwiperSlide>
        ))}
        <div className="z-[9] absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 text-white">
            <div className="text-center w-[80%]">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ABC Racing</h1>
                <p className="text-lg md:text-xl mb-6">Experience the thrill of motorsport with our comprehensive digital platform.</p>
                <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-md text-white transition-colors" onClick={()=>{
                    router.push('/races')
                }}>
                    Get Started
                </button>
            </div>
        </div>
        </Swiper>
    </section>
  );
};

export default Carousel;
