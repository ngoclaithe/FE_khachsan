import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import baidoxe from '../../assets/Group-40.png';
import gym from '../../assets/gym.png';
import beboi from '../../assets/be-boi.png';
import spa from '../../assets/spa.png'; 
import ketsat from '../../assets/kets.png';
import ansang from '../../assets/an-sang.png';
import play from '../../assets/play.png';
import thumnail from '../../assets/thumnail.png';

export const ServiceSection = () => {
    const navigate = useNavigate();
    const [showVideoModal, setShowVideoModal] = useState(false);
    
    const videoUrl = 'https://www.youtube.com/watch?v=US7bGTUkBfg';
    const videoId = 'US7bGTUkBfg';
    
    const openVideoModal = () => {
        setShowVideoModal(true);
        document.body.style.overflow = 'hidden'; 
    };
    
    const closeVideoModal = () => {
        setShowVideoModal(false);
        document.body.style.overflow = 'auto'; 
    };

    const icon_dich_vu = [
        {
            image: baidoxe,
            title: 'Bãi đỗ xe',
        },
        {
            image: gym,
            title: 'Gym',
        },
        {
            image: beboi,
            title: 'Bể bơi',
        },
        {
            image: spa,
            title: 'Spa',
        },
        {
            image: ansang,
            title: 'Ăn sáng',
        },
        {
            image: ketsat,
            title: 'Két sắt',
        }
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto text-center max-w-2xl">
                <h2 className="text-5xl font-serif font-bold text-gray-800 mb-6 transform hover:scale-105 transition duration-300">
                    Các tiện ích của khách sạn
                </h2>
                <p className="text-xl text-gray-600 italic mb-16">
                    Một sự thanh thản tuyệt vời đã chiếm hữu toàn bộ tâm hồn tôi, như những buổi sáng mùa xuân ngọt ngào mà tôi tận hưởng bằng cả trái tim mình.
                </p>
            </div>

            <div className="container mx-auto px-4 mb-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {icon_dich_vu.map((item, index) => (
                        <div 
                            key={index} 
                            className="border border-gray-100 hover:border-yellow-200 hover:shadow transition-all duration-300 overflow-hidden group"
                        >
                            <div className="flex flex-col items-center p-6">
                                <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gray-50 p-3 group-hover:bg-yellow-50 transition-all duration-300">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-gray-800 font-semibold text-lg text-center group-hover:text-yellow-600 transition-colors duration-300">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="container mx-auto px-4">
                <div 
                    className="w-full bg-gray-100 rounded-xl overflow-hidden shadow-lg cursor-pointer relative"
                    onClick={openVideoModal}
                >
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <div className="absolute inset-0 w-full h-full">
                            <img 
                                src={thumnail} 
                                alt="Video thumbnail" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img 
                                    src={play} 
                                    alt="Play button" 
                                    className="w-16 h-16 transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                        Khám phá không gian độc đáo của chúng tôi
                    </h3>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Trải nghiệm đẳng cấp và sự tinh tế trong từng chi tiết của khách sạn, nơi mỗi khoảnh khắc đều là một phần của kỳ nghỉ hoàn hảo.
                    </p>
                </div>
            </div>

            {showVideoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                     onClick={closeVideoModal}>
                    <div className="relative w-11/12 md:w-4/5 max-h-screen" onClick={(e) => e.stopPropagation()}>

                        <button 
                            className="absolute -top-10 right-0 text-white text-3xl font-bold z-10"
                            onClick={closeVideoModal}
                        >
                            &times;
                        </button>
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                            <iframe 
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};