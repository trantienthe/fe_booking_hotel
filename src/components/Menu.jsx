import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const Menu = () => {
  const [showBranches, setShowBranches] = useState(false);
  const [branches, setBranches] = useState([]);

  const fetchBranches = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/hotels/');
      setBranches(response.data);
    } catch (error) {
      console.error('Error fetching branches:', error);
    }
  };

  // Gọi API khi component được render lần đầu
  useEffect(() => {
    fetchBranches();
  }, []);

  const toggleBranches = () => {
    setShowBranches(!showBranches);
  };

  return (
    <div className="flex justify-center mt-3 pb-3 mr-16 ml-16 sm:mr-1 sm:ml-1">
      <ul className="flex gap-[50px] w-[50%] text-[14px] font-semibold justify-center xl:text-[16px] md1:w-[75%]">
        <Link to="/">
          <li className="hover:text-[#77dada] min-[sm0]:text-[12px] min-[sm]:text-[14px]">Trang chủ</li>
        </Link>
        <Link to="/gioi-thieu">
          <li className="hover:text-[#77dada] min-[sm0]:text-[12px] min-[sm]:text-[14px]">Giới thiệu</li>
        </Link>
        <li className="relative cursor-pointer hover:text-[#77dada] min-[sm0]:text-[12px] min-[sm]:text-[14px] hidden sm:block" onClick={toggleBranches}>
          Chi Nhánh
          {showBranches && (
            <ul className="absolute bg-white text-black mt-2 p-2 shadow-lg z-10">
              {branches.map((branch) => (
                <li key={branch.hotel_id} className="hover:bg-gray-100 px-4 py-2 w-[180px] text-[15px] hover:text-[#77dada] cursor-pointer">
                  <Link to={`/gioi-thieu-chi-nhanh/${branch?.hotel_id}`}>CN {branch.address}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <Link to="/mã-khuyến-mãi">
          <li className="hover:text-[#77dada] hidden sm:block">Khuyến mãi</li>
        </Link>
        <Link to="/hướng-dẫn-đặt-phòng">
          <li className="hover:text-[#77dada] hidden md:block">Hướng dẫn</li>
        </Link>
        <Link to="/lịch-sử-đặt-phòng">
          <li className="hover:text-[#77dada] hidden md:block">Lịch sử đặt phòng</li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
