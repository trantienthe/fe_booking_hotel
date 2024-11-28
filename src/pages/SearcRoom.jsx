import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useNavigate, useSearchParams } from 'react-router-dom';
import RoomFilter from '../components/allRoom/RoomFilter';
import RoomNotFound from '../components/allRoom/RoomNotFound';

const SearcRoom = () => {
  const [sortOption, setSortOption] = useState('Không sắp xếp');
  const [showDropdown, setShowDropdown] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [utilities, setUtilities] = useState([]);
  const [selectedUtilities, setSelectedUtilities] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;
    const name = searchParams.get('query');
    const price = searchParams.get('price');

    if (name) {
      setSearchName(name);
      console.log('Updated name:', name);
    }
    if (price) {
      setSearchPrice(price);

      const ranges = [];
      if (price === 'under1M') ranges.push('under1M');
      if (price === '1to2M') ranges.push('1to2M');
      if (price === 'over3M') ranges.push('over3M');

      setSelectedPriceRange(ranges);
    }
  }, [searchParams]);

  // Cập nhật URL khi thay đổi tìm kiếm
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchName) params.set('query', searchName);
    if (searchPrice) params.set('price', searchPrice);

    navigate({ search: params.toString() }, { replace: true });
  }, [searchName, searchPrice, navigate]);

  // Fetch data
  useEffect(() => {
    const fetchRooms = () => {
      let apiUrl = 'http://127.0.0.1:8000/search/';
      const params = {};

      if (searchName || searchParams.get('query')) params.name = searchName || searchParams.get('query');
      if (searchPrice) params.price = searchPrice;

      axios
        .get(apiUrl, { params })
        .then((response) => {
          setRooms(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('There was an error fetching the rooms!', error);
          setLoading(false);
        });
    };

    fetchRooms();

    // Fetch utilities
    axios
      .get('http://127.0.0.1:8000/utilities/')
      .then((response) => {
        setUtilities(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the utilities!', error);
      });
  }, [searchName, searchPrice]);

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowDropdown(false);
  };

  const handleUtilityChange = (event) => {
    const { value, checked } = event.target;
    setSelectedUtilities((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((utility) => utility !== value);
      }
    });
  };

  const handlePriceRangeChange = (event) => {
    const { value, checked } = event.target;
    setSelectedPriceRange((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((range) => range !== value);
      }
    });
  };

  const filteredRooms = rooms.filter((room) => {
    if (selectedUtilities.length === 0) {
      return true;
    }
    return selectedUtilities.every((utility) => room?.utilities?.some((roomUtility) => roomUtility.name === utility));
  });

  const filteredRoomsByPrice = filteredRooms.filter((room) => {
    if (selectedPriceRange.length === 0) {
      return true;
    }

    const price = parseFloat(room.price_per_night);
    return selectedPriceRange.some((range) => {
      switch (range) {
        case 'under1M':
          return price < 1000000;
        case '1to2M':
          return price >= 1000000 && price <= 2000000;
        case 'over3M':
          return price > 3000000;
        default:
          return false;
      }
    });
  });

  const sortedRooms = filteredRoomsByPrice.sort((a, b) => {
    if (sortOption === 'Giá cao xuống thấp') {
      return b.price_per_night - a.price_per_night;
    } else if (sortOption === 'Giá thấp đến cao') {
      return a.price_per_night - b.price_per_night;
    }
    return 0;
  });

  return (
    <div className="px-[30px] md:px-[85px] mt-5">
      {/* Search */}
      <div className="pt-5 border-2 px-3 py-5 rounded-[30px] shadow-xl">
        <h2 className="text-[24px] md:text-[30px] text-center font-bold">Bạn lựa chọn đặt phòng khách sạn nào?</h2>
        <p className="text-[18px] mt-3 md:text-[20px] font-light text-[#101828] text-center">Hơn 100 phòng hạng sang giá tốt đang chờ bạn</p>
        <div className="mt-5 flex justify-center items-center relative">
          <input
            type="text"
            className="w-full sm:w-[80%] rounded-[25px] border-2 px-5 h-[40px] md:h-[50px] pr-10"
            placeholder="Nhập tìm kiếm phòng"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <CiSearch className="absolute right-4 sm:right-[calc(10%+1rem)] top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Kết quả text */}
      <h2 className="mt-10 text-[22px] md:text-[32px] font-archivo font-bold">Tìm thấy {sortedRooms.length} kết quả</h2>
      <img src="./images/heading-border.webp" alt="" className="mt-5" />

      {/* Bộ lọc */}
      <div className="mt-10 flex justify-between gap-3">
        <div className="relative md:hidden">
          <div
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="text-[13px] md:text-[18px] font-archivo font-medium border-2 px-5 py-3 rounded-[30px] flex gap-2 justify-between items-center cursor-pointer"
          >
            <h2>Bộ lọc</h2>
            {showMobileFilter ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          {showMobileFilter && (
            <div className="absolute bg-white border rounded-xl shadow-lg w-[200px] mt-2">
              <div className="px-5 py-3">
                <h2 className="text-[16px] md:text-[20px] font-medium">Giá tiền</h2>
                <div className="pt-2">
                  <label className="block text-[18px] font-archivo font-extralight mt-3">
                    <input
                      type="checkbox"
                      name="priceRange"
                      value="under1M"
                      className="mr-3 transform scale-150 shadow"
                      onChange={handlePriceRangeChange}
                      checked={selectedPriceRange.includes('under1M')}
                    />
                    Dưới 1 triệu
                  </label>
                  <label className="block text-[18px] font-archivo font-extralight mt-3">
                    <input
                      type="checkbox"
                      name="priceRange"
                      value="1to2M"
                      className="mr-3 transform scale-150 shadow"
                      onChange={handlePriceRangeChange}
                      checked={selectedPriceRange.includes('1to2M')}
                    />
                    1 - 2 triệu
                  </label>
                  <label className="block text-[18px] font-archivo font-extralight mt-3">
                    <input
                      type="checkbox"
                      name="priceRange"
                      value="over3M"
                      className="mr-3 transform scale-150 shadow"
                      onChange={handlePriceRangeChange}
                      checked={selectedPriceRange.includes('over3M')}
                    />
                    Trên 3 triệu
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative justify-end">
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

      {/* Kết quả */}
      <div className="sm:flex justify-between w-full gap-5 mt-5">
        <div className="hidden sm:block sm1:w-[25%] rounded-[30px] border-2">
          <div className="flex px-5 py-5 border-b-2 items-center justify-between">
            <h2 className="text-[16px] md:text-[20px] font-bold">Lọc kết quả</h2>
            {/* <div className="text-[16px] md:text-[18px] font-extralight">Đặt lại</div> */}
          </div>
          {/* Giá tiền */}
          <div className="px-5 py-3">
            <h2 className="text-[16px] md:text-[20px] font-medium">Giá tiền</h2>
            <div className="pt-2">
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input
                  type="checkbox"
                  name="priceRange"
                  value="under1M"
                  className="mr-3 transform scale-150 shadow"
                  onChange={handlePriceRangeChange}
                  checked={selectedPriceRange.includes('under1M')}
                />
                Dưới 1 triệu
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="priceRange" value="1to2M" className="mr-3 transform scale-150 shadow" onChange={handlePriceRangeChange} checked={selectedPriceRange.includes('1to2M')} />1
                - 2 triệu
              </label>
              <label className="block text-[18px] font-archivo font-extralight mt-3">
                <input type="checkbox" name="priceRange" value="over3M" className="mr-3 transform scale-150 shadow" onChange={handlePriceRangeChange} checked={selectedPriceRange.includes('over3M')} />
                Trên 3 triệu
              </label>
            </div>
          </div>

          {/* Filters */}
          <div className="px-5 py-3">
            <h2 className="text-[16px] md:text-[20px] font-medium">Tiện ích</h2>
            <div className="pt-2">
              {utilities.map((utility) => (
                <label key={utility.utilities_id} className="block text-[18px] font-archivo font-extralight mt-3">
                  <input
                    type="checkbox"
                    name="utility"
                    value={utility.name}
                    className="mr-3 transform scale-150 shadow"
                    checked={selectedUtilities.includes(utility.name)} // Check if the utility is selected
                    onChange={handleUtilityChange}
                  />
                  {utility.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:w-[75%]">{filteredRoomsByPrice.length > 0 ? filteredRoomsByPrice.map((room) => <RoomFilter key={room.id} room={room} />) : <RoomNotFound />}</div>
      </div>
    </div>
  );
};

export default SearcRoom;
