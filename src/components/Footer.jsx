import React from 'react';
import { CgMail } from 'react-icons/cg';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { motion } from 'framer-motion';
//vatiants
import { fadeIn } from '../variants';

const Footer = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className="text-white bg-[#101828] px-[80px] py-10 md:grid sm:grid-cols-2 md:grid-cols-4"
    >
      <div className="text-[16px] md:text-[14px] sm:text-[13px] md1:mt-5">
        <img src="./images/logohavenhotel.png" alt="" className="w-[150px] h-[100px] bg-white" />
        <div className="mt-2">Công ty TNHH Du Lịch và Dịch Vụ</div>
        <div className="mt-2">Đà Nẵng</div>
        <div className="mt-2">Mã số doanh nghiệp: 2002</div>
      </div>
      <div className="text-[16px] md:text-[14px] sm:text-[13px] md1:mt-5">
        <h2 className="text-[16px] text-[#5e6780] font-semibold">GIỚI THIỆU</h2>
        <ul className="text-[16px]">
          <li className="mt-2 hover:text-[#98a2ae]">Về chúng tôi</li>
          <li className="mt-2 hover:text-[#98a2ae]">Điều khoản và điều kiện</li>
          <li className="mt-2 hover:text-[#98a2ae]">Chính sách riêng tư</li>
          <li className="mt-2 hover:text-[#98a2ae]">Hướng dẫn sử dụng</li>
          <li className="mt-2 hover:text-[#98a2ae]">Liên hệ</li>
          <li className="mt-2 hover:text-[#98a2ae]">Hotline: 0378002209</li>
          <li className="mt-2 hover:text-[#98a2ae]">Email: bookinghotel@gmail.com</li>
        </ul>
      </div>
      <div className="text-[16px] md:text-[14px] sm:text-[13px] md1:mt-5">
        <h2 className="text-[16px] text-[#5e6780] font-semibold">ĐIỂM ĐẾN</h2>
        <ul className="text-[16px]">
          <li className="mt-2 hover:text-[#98a2ae]">Hải Châu</li>
          <li className="mt-2 hover:text-[#98a2ae]">Sơn Trà</li>
          <li className="mt-2 hover:text-[#98a2ae]">Hòa Khánh</li>
        </ul>
      </div>
      <div className="text-[16px] md:text-[14px] sm:text-[13px] md1:mt-5">
        <h2 className="text-[16px] text-[#5e6780] font-semibold">THEO DÕI CHÚNG TÔI</h2>
        <ul className="flex gap-5">
          <li className="mt-2">
            <FaFacebookSquare className="w-[20px] h-[20px] hover:bg-[#98a2ae] " />
          </li>
          <li className="mt-2">
            <FaSquareInstagram className="w-[20px] h-[20px] hover:bg-[#98a2ae] " />
          </li>
          <li className="mt-2">
            <CgMail className="w-[20px] h-[20px] hover:bg-[#98a2ae] " />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;
