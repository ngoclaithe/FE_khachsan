import React from 'react';
// import { SearchBar } from '../common/SearchBar';
import heroImage from '../../assets/home-resort-hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section className="relative h-[600px] mt-16">
      <img 
        src={heroImage}
        alt="Hero" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif tracking-wide">
          Đặt kỳ nghỉ của bạn
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl">
          Khám phá những điểm đến tuyệt vời và tận hưởng kỳ nghỉ đáng nhớ cùng Sky Past.
        </p>
      </div>
    </section>
  );
};