import React from 'react';
import { FaBed, FaUserFriends } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import phong1 from '../../assets/gll-ho2.jpg';
import phong2 from '../../assets/gll-ho2.jpg';
import phong3 from '../../assets/gll-ho2.jpg';

export const RoomSection = () => {
    const navigate = useNavigate(); 

    const rooms = [
        {
            image: phong1,
            discount: '20%',
            title: 'Phòng Deluxe hướng thành phố',
            details: '1 Giường đôi · 2 khách',
        },
        {
            image: phong2,
            discount: '15%',
            title: 'Phòng Senior Deluxe hướng thành phố',
            details: '2 Giường đôi · 3 khách',
        },
        {
            image: phong3,
            discount: '10%',
            title: 'Phòng Suite Triple có Ban công',
            details: '1 Giường đôi · 2 khách',
        },
    ];

    const handleViewAllRooms = () => {
        navigate('/phong');
    };

    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto text-center max-w-2xl">
                <h2 className="text-5xl font-serif font-bold text-gray-800 mb-6 transform hover:scale-105 transition duration-300">
                    Phòng của chúng tôi
                </h2>
                <p className="text-xl text-gray-600 italic mb-16">
                    "Một sự thanh thản tuyệt vời đã chiếm hữu toàn bộ tâm hồn tôi, như những buổi sáng mùa xuân ngọt ngào mà tôi tận hưởng bằng cả trái tim mình. Tôi chỉ có một mình, và cảm nhận được sức hấp dẫn của sự tồn tại ở nơi này, nơi được tạo ra để mang lại niềm hạnh phúc cho tâm hồn."
                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {rooms.map((room, index) => (
                        <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={room.image}
                                alt={room.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                {room.discount}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{room.title}</h3>
                                <p className="text-gray-600 flex items-center space-x-2">
                                    <FaBed className="text-teal-500" />
                                    <span>{room.details.split('·')[0].trim()}</span>
                                    <FaUserFriends className="text-teal-500" />
                                    <span>{room.details.split('·')[1].trim()}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleViewAllRooms}
                        className="relative bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
                    >
                        <span className="relative z-10 font-semibold text-lg">Xem tất cả phòng</span>
                        <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-lg"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};