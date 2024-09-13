import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { motion } from 'framer-motion';
//vatiants
import { fadeIn } from '../../variants';

const Banner = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const locations = ['Hải Châu', 'Sơn Trà', 'Hòa Khánh'];
  const prices = ['Dưới 1 triệu', '1 triệu - 2 triệu', 'Trên 2 triệu'];

  return (
    <div className="flex flex-col items-center md:mr-10 md:ml-10 bg-bg-image-1 bg-contain md:bg-bg-white pb-6">
      <div className="hidden md:block w-full rounded-[50px] h-[580px] overflow-hidden">
        <video src="./videos/hotel1.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
      </div>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="bg-white shadow-md w-[300px] sm0:w-[80%] sm:w-[65%] h-[440px] sm:h-[240px] rounded-[30px] mt-5 relative z-[400] md:top-[-130px]"
      >
        <div className="mx-5 my-10 ">
          <h2 className="text-[24px] md:text-[30px] text-center font-bold ">Bạn lựa chọn đặt phòng khách sạn nào?</h2>
          <p className="text-[18px] mt-3 md:text-[20px] font-light text-[#101828] text-center">Hơn 100 phòng hạng sang giá tốt đang chờ bạn</p>
          <div className="flex flex-col sm:flex-row sm0:justify-between mt-5">
            {/* search */}
            <div className="relative sm0:mt-2">
              <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                className="pl-10 w-full h-[50px] border-2 rounded-[30px] text-[13px] sm:w-[130px] md:w-[200px] md:text-[15px] md0:text-[16px] md0:w-[230px]"
                placeholder="Nhập tên phòng"
              />
            </div>

            {/* địa điểm */}
            <div className="relative flex items-center sm0:mt-2">
              <IoLocationOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                className="text-[13px] pl-10 pr-10 w-full h-[50px] border-2 rounded-[30px] flex items-center cursor-pointer sm:w-[130px] md:w-[200px] md:text-[15px] md0:text-[16px] md0:w-[230px]"
                placeholder="Địa điểm"
                value={selectedLocation}
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                readOnly
              />
              <MdOutlineKeyboardArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={() => setIsLocationOpen(!isLocationOpen)} />
              {isLocationOpen && (
                <ul className="absolute w-full left-0 top-full bg-white border-2 rounded-[10px] mt-2 shadow-lg">
                  {locations.map((location, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedLocation(location);
                        setIsLocationOpen(false);
                      }}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Giá tiền */}
            <div className="relative flex items-center sm0:mt-2">
              <MdOutlineKeyboardArrowDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                className="text-[13px] pl-10 pr-10 w-full h-[50px] border-2 rounded-[30px] flex items-center cursor-pointer sm:w-[130px] md:w-[200px] md:text-[15px] md0:text-[16px] md0:w-[230px]"
                placeholder="Giá tiền"
                value={selectedPrice}
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                readOnly
              />
              <MdOutlineKeyboardArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={() => setIsPriceOpen(!isPriceOpen)} />
              {isPriceOpen && (
                <ul className="absolute w-full left-0 top-full bg-white border-2 rounded-[10px] mt-2 shadow-lg">
                  {prices.map((price, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedPrice(price);
                        setIsPriceOpen(false);
                      }}
                    >
                      {price}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* tìm kiếm */}
            <div className="text-[13px] sm0:mt-2 pl-10 w-full h-[50px] border-2 rounded-[30px] flex items-center bg-red-100 hover:bg-red-300 sm:w-[140px] md0:w-[230px]">Tìm kiếm</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
