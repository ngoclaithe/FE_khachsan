import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoHotelBooking from '../../assets/logo.png';
import { checkLogin } from '../../services/apiAuth';  

export const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const verifyLoginStatus = async () => {
  //     try {
  //       const data = await checkLogin();
  //       setIsLoggedIn(data.loggedIn);  
  //     } catch (error) {
  //       console.error('Lỗi khi kiểm tra đăng nhập:', error);
  //       setIsLoggedIn(false);  
  //     }
  //   };

  //   verifyLoginStatus();  
  // }, []);

  const menuItems = [
    { title: 'Trang chủ', path: '/' },
    { title: 'Dịch vụ', path: '/dichvu' },
    { title: 'Giới thiệu', path: '/gioithieu' },
    { title: 'Phòng', path: '/phong' },
    { title: 'Liên hệ', path: '/lienhe' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logoHotelBooking} alt="HotelBooking Logo" className="h-8 w-auto" />
          <span className="text-xl font-semibold text-sky-400">Sky Past</span>
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-700 font-medium hover:text-teal-500 transition"
            >
              {item.title}
            </Link>
          ))}
          {/* {isLoggedIn ? (
            <Link
              to="/taikhoan"
              className="text-gray-700 font-medium hover:text-teal-500 transition"
            >
              Tài khoản
            </Link>
          ) : (
            <Link
              to="/dangnhap"
              className="text-gray-700 font-medium hover:text-teal-500 transition"
            >
              Đăng nhập
            </Link>
          )} */}
        </nav>

        {/* Nút Đặt Phòng Ngay */}
        <Link
          to="/datphong"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
        >
          Đặt Phòng Ngay
        </Link>
      </div>
    </header>
  );
};