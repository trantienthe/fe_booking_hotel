import React from 'react';

const Menu = () => {
  return (
    <div className="flex justify-center mt-3 pb-3 mr-16 ml-16 sm:mr-1 sm:ml-1">
      <ul className="flex gap-[50px] w-[50%] text-[14px] font-semibold justify-center xl:text-[16px] md1:w-[75%]">
        <li className="hover:text-[#77dada] sm:text-[14px] sm0:text-[12px]">Trang chủ</li>
        <li className="hover:text-[#77dada] sm:text-[14px] sm0:text-[12px]">Giới thiệu</li>
        <li className="hover:text-[#77dada] sm:text-[14px] sm0:text-[12px] sm0:hidden">Đặt phòng</li>
        <li className="hover:text-[#77dada] sm:hidden">Bài viết</li>
        <li className="hover:text-[#77dada] sm:hidden">Khuyến mãi</li>
        <li className="hover:text-[#77dada] md:hidden">Hướng dẫn</li>
      </ul>
    </div>
  );
};

export default Menu;
