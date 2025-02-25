import React from 'react';
import logoHotelBooking from '../../assets/logo.png';
import thongtinthanhtoan from '../../assets/footer-cards-300x53.png';
import footerbanner from '../../assets/footer-banner.png';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img 
                src={logoHotelBooking} 
                alt="HOTALE" 
                className="h-16 rounded-full bg-transparent object-contain" 
              />
            </div>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Liên Hệ</h3>
            <ul className="space-y-2">
              <li>Số Điện Thoại: (024) 2242 0777</li>
              <li>
                Email: <a href="mailto:info@webhotel.vn" className="hover:text-gray-300">info@webhotel.vn</a>
              </li>
            </ul>
          </div>

          {/* Địa chỉ khách sạn */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Địa Chỉ Khách Sạn</h3>
            <p>Số 147 Mai Dịch, Cầu Giấy, Hà Nội</p>
            
            {/* Giải thưởng và phương thức thanh toán */}
            <div className="mt-4 flex flex-col items-center space-y-2">
              <img src={footerbanner} alt="Hotel Awards" className="h-10" />
              <img src={thongtinthanhtoan} alt="Phương thức thanh toán" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
