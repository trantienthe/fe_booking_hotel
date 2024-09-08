import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="border-b-2">
      <div className="flex justify-between">
        <img src="./images/logodep.jpg" alt="" className="w-[70px]" />
        <div className="flex gap-10 font-semibold text-[15px]">
          <p className="flex justify-center items-center gap-2 hover:text-red-800 sm:hidden">
            <FaPhoneAlt />
            Hotline: 0378002209
          </p>
          <p className="flex justify-center items-center hover:text-red-800 md:hidden">bookinghotel@gmail.com</p>
          <p className="flex justify-center items-center hover:text-red-800 md:hidden">Liên hệ</p>
          <p className="flex justify-center items-center hover:text-red-800 md:hidden">Blog</p>
        </div>
        {/* Menu đăng ký đăng nhập */}
        <div className="flex gap-5 items-center sm:hidden">
          <div className="w-[130px] h-[40px] border-2 border-blue-400 rounded-[10px] flex items-center justify-center text-[15px] text-red-900 font-bold hover:bg-pink-200">Đăng Nhập</div>
          <div className="w-[130px] h-[40px] border-2 border-blue-400 rounded-[10px] flex items-center justify-center text-[15px] text-white bg-blue-400 font-bold hover:text-red-900 hover:bg-blue-500">
            Đăng Ký
          </div>
        </div>

        {/* Mobile */}
        <div className="gap-5 items-center hidden sm:flex">{!menuOpen && <IoMenu onClick={toggleMenu} />}</div>

        <div className={`fixed top-0 right-0 w-[200px] h-full bg-white shadow-lg transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Hiển thị nút đăng nhập/đăng ký cho mobile */}
          {menuOpen && (
            <div className="flex flex-col items-center gap-3 mt-3">
              <div className="w-[80px] h-[30px] border-2 border-blue-400 rounded-[10px] flex items-center justify-center text-[12px] text-red-900 font-bold hover:bg-pink-200">Đăng Nhập</div>
              <div className="w-[80px] h-[30px] border-2 border-blue-400 rounded-[10px] flex items-center justify-center text-[12px] text-white bg-blue-400 font-bold hover:text-red-900 hover:bg-blue-500">
                Đăng Ký
              </div>
              <div onClick={toggleMenu} className="cursor-pointer text-red-900 font-bold hover:text-red-700">
                <IoIosCloseCircleOutline />
              </div>
            </div>
          )}
        </div>
        {/* Kết thúc Mobile */}
      </div>
    </div>
  );
};

export default Header;
