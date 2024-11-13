import React, { useState } from 'react';
import { CiFilter, CiSearch } from 'react-icons/ci';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import RoomNotFound from '../components/allRoom/RoomNotFound';
import RoomFilter from '../components/allRoom/RoomFilter';

const SearcRoom = () => {
  const [sortOption, setSortOption] = useState('Không sắp xếp');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="px-[30px] md:px-[85px] mt-5">
      {/* search */}
      <div className="pt-5 border-2 px-3 py-5 rounded-[30px] shadow-xl">
        <h2 className="text-[24px] md:text-[30px] text-center font-bold ">Bạn lựa chọn đặt phòng khách sạn nào?</h2>
        <p className="text-[18px] mt-3 md:text-[20px] font-light text-[#101828] text-center">Hơn 100 phòng hạng sang giá tốt đang chờ bạn</p>
        <div className="mt-5 flex justify-center items-center relative">
          <input type="text" className="w-full sm:w-[80%] rounded-[25px] border-2 px-5 h-[40px] md:h-[50px] pr-10" placeholder="Nhập tìm kiếm phòng" />
          <CiSearch className="absolute right-4 sm:right-[calc(10%+1rem)] top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Kết quả text*/}
      <h2 className="mt-10 text-[22px] md:text-[32px] font-archivo font-bold">Tìm thấy 100 kết quả</h2>
      <img src="./images/heading-border.webp" alt="" className="mt-5" />

      {/* Bộ lọc */}
      <div className="mt-10 flex justify-between gap-3">
        <div className="text-[13px] md:text-[18px] font-archivo font-medium border-2 px-5 py-3 rounded-[30px] flex gap-2 justify-between items-center">
          <CiFilter />
          <h2>Bộ lọc</h2>
          <IoIosArrowDown />
        </div>

        <div className="relative">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-[13px] md:text-[18px] font-archivo font-medium border-2 px-5 py-3 rounded-[30px] flex gap-2 justify-between items-center cursor-pointer"
          >
            <h2>{sortOption}</h2>
            {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          {showDropdown && (
            <div className="absolute bg-white border rounded-xl shadow-lg w-full mt-2">
              <ul className="py-2">
                <li onClick={() => handleSortChange('Không sắp xếp')} className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:bg-red-200">
                  Không sắp xếp
                </li>
                <li onClick={() => handleSortChange('Giá cao xuống thấp')} className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:bg-red-200">
                  Giá cao xuống thấp
                </li>
                <li onClick={() => handleSortChange('Giá thấp đến cao')} className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:bg-red-200">
                  Giá thấp đến cao
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Kết quả*/}
      <div className="sm:flex justify-between w-full gap-5 mt-5">
        <div className="hidden sm:block sm1:w-[25%] rounded-[30px] border-2">
          <div className="flex px-5 py-5 border-b-2 items-center justify-between">
            <h2 className="text-[16px] md:text-[20px] font-bold">Lọc kết quả</h2>
            <div className="text-[16px] md:text-[18px] font-extralight">Đặt lại</div>
          </div>

          {/* Xếp hạng sao */}
          <div className="px-5 py-3">
            <h2 className="text-[16px] md:text-[20px] font-medium">Xếp hạng sao</h2>
            <div className="pt-2">
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="1" className="mr-3 transform scale-150 shadow" /> 1 sao
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="2" className="mr-3 transform scale-150 shadow" /> 2 sao
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="3" className="mr-3 transform scale-150 shadow" /> 3 sao
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="4" className="mr-3 transform scale-150 shadow" /> 4 sao
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="5" className="mr-3 transform scale-150 shadow" /> 5 sao
              </label>
            </div>
          </div>

          {/* tiện ích */}
          <div className="px-5 py-3 pb-10">
            <h2 className="text-[16px] md:text-[20px] font-medium">Tiện ích</h2>
            <div className="pt-2">
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="1" className="mr-3 transform scale-150 shadow" /> Phòng gia đình
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="2" className="mr-3 transform scale-150 shadow" /> Giường đôi
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="3" className="mr-3 transform scale-150 shadow" /> Có tất cả bữa ăn
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="4" className="mr-3 transform scale-150 shadow" /> Phòng có bồn tắm
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="5" className="mr-3 transform scale-150 shadow" /> Nhìn ra biển
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="rating" value="5" className="mr-3 transform scale-150 shadow" /> Két an toàn
              </label>
            </div>
          </div>
        </div>

        <div className="sm:w-[75%]">
          <RoomFilter />
          <h2 className="mt-5" />
          <RoomNotFound />
        </div>
      </div>
    </div>
  );
};

export default SearcRoom;
