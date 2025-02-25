import React from 'react';
import { FaBed, FaUserFriends, FaQuoteLeft } from 'react-icons/fa';
import khachhang1 from '../../assets/khachhang1.jpg';
import khachhang2 from '../../assets/khachhang2.jpg';

export const FeedbackSection = () => {
    const customers = [
        {
            image: khachhang1,
            title: 'Alex',
            details: 'Phòng sạch sẽ, thoáng mát, nội thất hiện đại và view thành phố cực đẹp. Nhân viên thân thiện, hỗ trợ tận tình từ lúc nhận phòng đến khi trả phòng. Buffet sáng đa dạng, món ăn ngon miệng. Chắc chắn sẽ quay lại lần sau!',
        },
        {
            image: khachhang2,
            title: 'James',
            details: 'Khách sạn có vị trí thuận tiện, gần trung tâm và dễ dàng di chuyển đến các địa điểm tham quan. Phòng nghỉ thoải mái, giường êm, tuy nhiên cách âm chưa tốt lắm nên buổi tối hơi ồn một chút. Dịch vụ nhìn chung ổn, nhân viên lễ tân nhanh nhẹn và chuyên nghiệp.',
        }
    ];

    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-black mb-2">Lời công nhận</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {customers.map((customer, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                            style={{
                                clipPath: "polygon(0% 0%, 100% 0%, 95% 95%, 0% 100%)",
                                borderTop: "4px solid transparent",
                                borderImage: "linear-gradient(to right,rgb(99, 241, 217),rgb(85, 247, 242)) 1",
                            }}
                        >
                            <div className="absolute -top-5 -left-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-3 shadow-md opacity-90">
                                <img 
                                    src={customer.image} 
                                    alt={customer.title} 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                                />
                            </div>
                            
                            <div className="ml-16 mt-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{customer.title}</h3>
                            </div>
                            
                            <div className="relative">
                                <FaQuoteLeft className="text-indigo-100 text-4xl absolute -left-1 -top-3" />
                                <p className="text-gray-600 italic relative z-10 pl-6">{customer.details}</p>
                            </div>
                        
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
