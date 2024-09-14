import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="flex justify-center mt-3 pb-3 mr-16 ml-16 sm:mr-1 sm:ml-1">
      <ul className="flex gap-[50px] w-[50%] text-[14px] font-semibold justify-center xl:text-[16px] md1:w-[75%]">
        <Link to="/">
          <li className="hover:text-[#77dada] min-[sm0]:text-[12px] min-[sm]:text-[14px]">Trang chủ</li>
        </Link>
        <li className="hover:text-[#77dada] min-[sm0]:text-[12px] min-[sm]:text-[14px]">Giới thiệu</li>
        <li className="relative group hover:text-[#77dada] min-[sm0]:text-[12px] min-[sm]:text-[14px] hidden sm:block">
          Đặt phòng
          <ul className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 shadow-lg">
            <li className="hover:bg-gray-100 px-4 py-2 w-[180px] text-[15px] hover:text-[#77dada]">Chi nhánh 1</li>
            <li className="hover:bg-gray-100 px-4 py-2 w-[180px] text-[15px] hover:text-[#77dada]">Chi nhánh 2</li>
            <li className="hover:bg-gray-100 px-4 py-2 w-[180px] text-[15px] hover:text-[#77dada]">Chi nhánh 3</li>
          </ul>
        </li>
        <li className="hover:text-[#77dada] hidden sm:block">Bài viết</li>
        <li className="hover:text-[#77dada] hidden sm:block">Khuyến mãi</li>
        <li className="hover:text-[#77dada] hidden md:block">Hướng dẫn</li>
      </ul>
    </div>
  );
};

export default Menu;
