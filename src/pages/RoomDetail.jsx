import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import RoomList from '../components/room/RoomList';
import RoomNotFound from '../components/allRoom/RoomNotFound';

const RoomDetail = () => {
  const { roomId } = useParams(); // Use useParams to get roomId
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/room/${roomId}/`);
        const data = await response.json();
        setRoomData(data);
        console.log('alo', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [roomId]);

  const images = roomData?.images?.map((img) => img.url) || [];
  console.log('anh', images);
  // const images = ['./images/hotel1.jpg', './images/muongthanh_ht.gif', './images/sontra_ht.webp', './images/minhtoan_ht.jpg'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handle = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    const interval = window.innerWidth < 640 ? setInterval(handle, 3000) : null;

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handlePreviewClick = (index) => {
    setCurrentIndex(index);
  };

  if (!roomData) {
    return <RoomNotFound />;
  }

  return (
    <div>
      <div className="px-[30px] md:px-[85px]">
        <div className="mt-8 md:flex justify-between">
          <h2 className="text-[22px] md:text-[32px] font-bold font-archivo w-[80%] break-words text-left md:pr-[100px]"> {roomData.room_type}</h2>
          <p className="text-[18px] md:text-[32px] font-archivo font-extralight mt-5 md:mt-0 md:w-[20%] md:text-right"> {roomData.price_per_night}</p>
        </div>
        <div className="mt-5 w-[150px] md:w-[220px] px-5 py-1 rounded-xl bg-red-300 text-center text-white text-[14px] md:text-[18px]">{roomData.hotel.rating} ★ (11 đánh giá)</div>
        <img src="./images/heading-border.webp" alt="" className="mt-10" />
      </div>

      {/* ảnh phòng */}
      <div className="relative flex mt-10 gap-5 items-center px-[30px] md:px-[30px] hidden sm:flex">
        <div className="sm:h-[400px] sm:w-[15%] overflow-hidden rounded-l-[50px]">
          <img src={process.env.REACT_APP_BASE_API_URL + images[(currentIndex - 1 + images.length) % images.length]} alt="" className="w-full h-full object-cover object-left" />
        </div>

        <div className="sm:w-[80%] sm:h-[400px]">
          <img src={process.env.REACT_APP_BASE_API_URL + images[currentIndex]} alt="" className="w-full h-full object-cover" />
          {/* ảnh con */}
          <div className="relative flex gap-3 justify-center top-[-90px]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`w-[80px] h-[80px] rounded-[15px] border-[3px] border-white cursor-pointer ${index === currentIndex ? 'border-red-200' : ''}`}
                onClick={() => handlePreviewClick(index)}
              >
                <img src={process.env.REACT_APP_BASE_API_URL + img} alt="" className="w-full h-full rounded-[15px] object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="sm:h-[400px] sm:w-[15%] overflow-hidden rounded-r-[50px]">
          <img src={process.env.REACT_APP_BASE_API_URL + images[(currentIndex + 1) % images.length]} alt="" className="w-full h-full object-cover object-right" />
        </div>

        <button
          onClick={handlePrev}
          className="p-2 w-[50px] h-[50px] bg-white absolute left-[40px] top-[50%] transform -translate-y-1/2 rounded-full border-2 border-black hover:bg-red-200 flex justify-center items-center"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={handleNext}
          className="p-2 w-[50px] h-[50px] bg-white absolute right-[40px] top-[50%] transform -translate-y-1/2 rounded-full border-2 border-black hover:bg-red-200 flex justify-center items-center"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* ảnh phòng mobile */}
      <div className="relative flex mt-10 gap-5 items-center px-[30px] md:px-[30px] sm:hidden">
        <div className="sm:w-[80%] sm:h-[400px]">
          <img src={images[currentIndex]} alt="" className="w-full h-full object-cover rounded-[30px]" />
        </div>
      </div>

      {/* đi đến */}
      <div className="px-[30px] md:px-[85px] mt-14">
        <ul className="flex gap-5 bg-pink-100 px-5 py-3 justify-center rounded-[15px]">
          <li>
            <a href="#introduction" className="hover:bg-white rounded-[10px] px-3 py-2">
              Giới thiệu
            </a>
          </li>
          <li>
            <a href="#related-rooms" className="hover:bg-white rounded-[10px] px-3 py-2">
              Phòng liên quan
            </a>
          </li>
        </ul>
      </div>

      {/* Giới thiệu */}
      <div id="introduction" className="px-[30px] md:px-[85px] mt-5">
        <h2 className="text-[22px] md:text-[32px] font-archivo font-bold">Giới thiệu</h2>
        <img src="./images/heading-border.webp" alt="" className="mt-5" />
        <h2 className="text-[14px] md:text-[18px] font-archivo font-extralight mt-5">{roomData.description}</h2>
      </div>

      {/* Phòng liên quan */}
      <div id="related-rooms" className="px-[30px] md:px-[85px] mt-5">
        <RoomList />
      </div>
    </div>
  );
};

export default RoomDetail;
