import React, { useEffect, useState } from 'react';
import Review from '../components/room/Review';
import { IoArrowRedo, IoLocationOutline } from 'react-icons/io5';
import { PiCrownThin } from 'react-icons/pi';

const AboutBranch = () => {
  // Mảng chứa các ảnh
  const images = ['./images/room1.jpg', './images/hotel1.jpg', './images/logodep.jpg'];

  // State để lưu chỉ số ảnh hiện tại
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect để tự động thay đổi ảnh mỗi 3 giây
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000 ms = 3 giây

    // Cleanup interval khi component bị unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
      {/* Giới thiệu */}
      <div className="mx-[10px] md:mx-[40px] px-[30px] mt-3 md:mt-10 border-2 rounded-[15px] bg-white shadow-xl pb-[30px]">
        <h2 className="text-[18px] md:text-[32px] font-archivo font-bold flex items-center gap-3 mt-5 justify-center text-green-900">
          <PiCrownThin />
          Chi Nhánh Hải Châu
          <PiCrownThin />
        </h2>
        <div className=" flex items-center justify-center mt-3">
          <p className="w-[120px] h-[25px] px-5 bg-blue-200 flex items-center justify-center rounded-xl">Khách sạn</p>
        </div>
        <p className="text-[24px] text-yellow-300 flex items-center justify-center mt-3">★★★★★</p>

        {/* Mô tả */}
        <div className="mt-5">
          <h2 className="text-[18px] md:text-[22px] px-5 bg-blue-200 flex items-center justify-center rounded-xl text-green-900 font-archivo font-bold">Mô tả</h2>
          <p className="text-[14px] md:text-[18px] px-5 mt-5">
            Haven Hotel Chi Nhánh Hải Châu tọa lạc ngay trung tâm quận Hải Châu, một trong những khu vực sầm uất và năng động nhất của thành phố Đà Nẵng. Với vị trí đắc địa, từ đây, quý khách dễ dàng
            tiếp cận các điểm tham quan nổi tiếng như Cầu Rồng, sông Hàn, và các khu mua sắm, giải trí.{' '}
          </p>
          <p className="text-[14px] md:text-[18px] px-5 mt-3">
            Haven Hotel Hải Châu không chỉ mang đến cho quý khách không gian nghỉ dưỡng thoải mái mà còn được thiết kế hiện đại, sang trọng, phù hợp với cả khách du lịch và doanh nhân. Khách sạn cung
            cấp đầy đủ các tiện nghi cao cấp như hồ bơi, nhà hàng, phòng gym, cùng các dịch vụ chăm sóc khách hàng chuyên nghiệp.{' '}
          </p>
          <p className="text-[14px] md:text-[18px] px-5 mt-3">
            Dù quý khách đang tìm kiếm một nơi nghỉ ngơi lý tưởng sau những chuyến đi dài hay một không gian thuận tiện cho các sự kiện doanh nghiệp, Haven Hotel Chi Nhánh Hải Châu đều sẵn sàng mang
            đến những trải nghiệm tuyệt vời, đáp ứng mọi nhu cầu của quý khách.
          </p>
          {/* ảnh */}
          <div className="mt-5 flex justify-center pb-5">
            <img src={images[currentImageIndex]} alt="" className=" w-full h-auto md:w-[1000px] md:h-[500px]" />
          </div>
        </div>

        <div className="sm1:flex sm1:justify-between gap-[30px] mt-5">
          {/* Tiện ích */}
          <div className="sm1:w-[50%]">
            <div className="sm1:mx-[20px] flex justify-center mt-3">
              <h2 className="text-[18px] w-full md:text-[22px] px-5 bg-blue-200 flex items-center justify-center rounded-xl text-green-900 font-archivo font-bold">Tiện ích</h2>
            </div>
            <div className="w-full grid md:grid-cols-2 mx-[80px]">
              <div className="flex items-center gap-5 mt-5">
                <img src="./images/svg/maylanh.svg" alt="" className="w-[20px] h-[20px]" />
                <h2 className="text-[14px] md:text-[18px] font-archivo font-thin sm:w-[100px]">Máy lạnh</h2>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <img src="./images/svg/wifi.svg" alt="" className="w-[20px] h-[20px]" />
                <h2 className="text-[14px] md:text-[18px] font-archivo font-thin w-[100px]">Wifi</h2>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <img src="./images/svg/letan.svg" alt="" className="w-[20px] h-[20px]" />
                <h2 className="text-[14px] md:text-[18px] font-archivo font-thin w-[100px]">Lễ tân 24h</h2>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <img src="./images/svg/hoboi.svg" alt="" className="w-[20px] h-[20px]" />
                <h2 className="text-[14px] md:text-[18px] font-archivo font-thin w-[100px]">Hồ Bơi</h2>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <img src="./images/svg/thangmay.svg" alt="" className="w-[20px] h-[20px]" />
                <h2 className="text-[14px] md:text-[18px] font-archivo font-thin w-[100px]">Thang máy</h2>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <img src="./images/svg/an.svg" alt="" className="w-[20px] h-[20px]" />
                <h2 className="text-[14px] md:text-[18px] font-archivo font-thin w-[100px]">Ăn</h2>
              </div>
            </div>
          </div>
          {/* vị trí */}
          <div className="sm1:w-[50%]">
            <div className="sm1:mx-[20px] flex justify-center mt-3">
              <h2 className="text-[18px] w-full md:text-[22px] px-5 bg-blue-200 flex items-center justify-center rounded-xl text-green-900 font-archivo font-bold">Vị trí</h2>
            </div>
            <div className="w-full grid md:grid-cols-2">
              <div className="w-full mx-[80px]">
                <div className="flex items-center gap-5 mt-5">
                  <IoLocationOutline />
                  <h2 className="text-[14px] md:text-[18px] font-archivo font-thin sm:w-[100px]">Vị trí</h2>
                </div>
                <div className="flex gap-3 items-center ml-5">
                  <IoArrowRedo />
                  <h2 className="text-[14px] md:text-[18px] font-archivo font-thin sm:w-[100px] mt-3">Hải Châu</h2>
                </div>
                <div className="flex gap-3 items-center ml-5">
                  <IoArrowRedo />
                  <h2 className="text-[14px] md:text-[18px] font-archivo font-thin sm:w-[100px] mt-3">Hòa Khánh</h2>
                </div>
                <div className="flex gap-3 items-center ml-5">
                  <IoArrowRedo />
                  <h2 className="text-[14px] md:text-[18px] font-archivo font-thin sm:w-[100px] mt-3">Sơn Trà</h2>
                </div>
              </div>
              <div className="w-full mx-[80px]">
                <div className="flex items-center gap-5 mt-5">
                  <IoLocationOutline />
                  <h2 className="text-[14px] md:text-[18px] font-archivo font-thin sm:w-[200px]">Vị trí thuận tiện</h2>
                </div>
                <div className="flex gap-3 items-center ml-5">
                  <IoArrowRedo />
                  <h2 className="text-[14px] md:text-[18px] font-archivo font-thin sm:w-[200px] mt-3">Bệnh viện Hoàn Mỹ</h2>
                </div>
                <div className="flex gap-3 items-center ml-5">
                  <IoArrowRedo />
                  <h2 className="text-[14px] md:text-[18px] font-archivo font-thin sm:w-[200px] mt-3">Cầu rồng</h2>
                </div>
                <div className="flex gap-3 items-center ml-5">
                  <IoArrowRedo />
                  <h2 className="text-[14px] md:text-[18px] font-archivo font-thin sm:w-[200px] mt-3">Cầu sông Hàn</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* đánh giá */}
      <div id="reviews" className="px-[30px] md:px-[85px] mt-5">
        <Review />
      </div>
    </div>
  );
};

export default AboutBranch;
