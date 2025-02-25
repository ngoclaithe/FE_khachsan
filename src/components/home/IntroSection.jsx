import React from 'react';
import introImage from '../../assets/resort-swim.jpg'; 

export const IntroSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">

        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0 md:pl-8 md:pr-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            5 Sao · 25 Phòng
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Khách sạn của chúng tôi nằm ở trung tâm của New Forest. Một lối sống năm sao được bao quanh bởi khu rừng.
          </p>
          <button className="text-teal-500 border-2 border-teal-500 px-8 py-3 rounded-full hover:bg-teal-500 hover:text-white transition transform hover:scale-105 shadow-lg">
            Khám phá thêm
          </button>
        </div>

        <div className="md:w-1/2">
          <img 
            src={introImage} 
            alt="Mô tả khách sạn" 
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};