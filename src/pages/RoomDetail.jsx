import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import RoomList from '../components/room/RoomList';

const RoomDetail = () => {
  const images = ['./images/hotel1.jpg', './images/muongthanh_ht.gif', './images/sontra_ht.webp', './images/minhtoan_ht.jpg'];

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

  return (
    <div>
      <div className="px-[30px] md:px-[85px]">
        <div className="mt-8 md:flex justify-between">
          <h2 className="text-[22px] md:text-[32px] font-bold font-archivo w-[80%] break-words text-left md:pr-[100px]">Phòng Vip 0001 Galaxay 2 Giường cực đẹp siêu siêu đẹp</h2>
          <p className="text-[18px] md:text-[32px] font-archivo font-extralight mt-5 md:mt-0 md:w-[20%] md:text-right">3,675,000 đ/ khách</p>
        </div>
        <div className="mt-5 w-[150px] md:w-[220px] px-5 py-1 rounded-xl bg-red-300 text-center text-white text-[14px] md:text-[20px]">4.9 (11 đánh giá)</div>
        <img src="./images/heading-border.webp" alt="" className="mt-10" />
      </div>

      {/* ảnh phòng */}
      <div className="relative flex mt-10 gap-5 items-center px-[30px] md:px-[30px] hidden sm:flex">
        <div className="sm:h-[400px] sm:w-[15%] overflow-hidden rounded-l-[50px]">
          <img src={images[(currentIndex - 1 + images.length) % images.length]} alt="" className="w-full h-full object-cover object-left" />
        </div>

        <div className="sm:w-[80%] sm:h-[400px]">
          <img src={images[currentIndex]} alt="" className="w-full h-full object-cover" />
          {/* ảnh con */}
          <div className="relative flex gap-3 justify-center top-[-90px]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`w-[80px] h-[80px] rounded-[15px] border-[3px] border-white cursor-pointer ${index === currentIndex ? 'border-red-200' : ''}`}
                onClick={() => handlePreviewClick(index)}
              >
                <img src={img} alt="" className="w-full h-full rounded-[15px] object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="sm:h-[400px] sm:w-[15%] overflow-hidden rounded-r-[50px]">
          <img src={images[(currentIndex + 1) % images.length]} alt="" className="w-full h-full object-cover object-right" />
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
        <h2 className="text-[14px] md:text-[18px] font-archivo font-extralight mt-5">
          Vị trí Melia Ho Tram Beach Resort là một nơi nghỉ nằm trong khu vực an ninh, toạ lạc tại Phước Thuận. Thông tin về Melia Ho Tram Beach Resort Khách sạn này là lựa chọn hoàn hảo cho các kỳ
          nghỉ mát lãng mạn hay tuần trăng mật của các cặp đôi. Quý khách hãy tận hưởng những đêm đáng nhớ nhất cùng người thương của mình tại Melia Ho Tram Beach Resort Melia Ho Tram Beach Resort là
          lựa chọn sáng giá dành cho những ai đang tìm kiếm một trải nghiệm xa hoa đầy thú vị trong kỳ nghỉ của mình. Lưu trú tại đây cũng là cách để quý khách chiều chuộng bản thân với những dịch vụ
          xuất sắc nhất và khiến kỳ nghỉ của mình trở nên thật đáng nhớ. Một trong những đặc điểm chính của khách sạn này là các liệu pháp spa đa dạng. Hãy nâng niu bản thân bằng các liệu pháp thư
          giãn, phục hồi giúp quý khách tươi trẻ thân, tâm. Hãy tận hưởng thời gian vui vẻ cùng cả gia đình với hàng loạt tiện nghi giải trí tại Melia Ho Tram Beach Resort, một nơi nghỉ tuyệt vời phù
          hợp cho mọi kỳ nghỉ bên người thân. Khách sạn này là nơi tốt nhất dành cho những ai mong muốn một nơi thanh bình, thư thái để ẩn mình khỏi đám đông ồn ã, xô bồ. Dịch vụ thượng hạng song hành
          với hàng loạt tiện nghi phong phú sẽ đem đến cho quý khách trải nghiệm của một kỳ nghỉ viên mãn nhất. Trung tâm thể dục của nơi nghỉ là một trong những tiện nghi không thể bỏ qua khi lưu trú
          tại đây. Hưởng thụ một ngày thư thái đầy thú vị tại hồ bơi dù quý khách đang du lịch một mình hay cùng người thân. Nhận ưu đãi đặc biệt dành cho các liệu pháp spa tinh tuý nhất giúp thư giãn
          tinh thần và làm tươi trẻ cơ thể. Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng hay bất kỳ yêu cầu nào. Nếu cần giúp đỡ xin hãy liên hệ đội ngũ
          tiếp tân, chúng tôi luôn sẵn sàng hỗ trợ quý khách. Tận hưởng những món ăn yêu thích với phong cách ẩm thực đặc biệt từ Melia Ho Tram Beach Resort chỉ dành riêng cho quý khách. Sóng WiFi phủ
          khắp các khu vực chung của nơi nghỉ cho phép quý khách luôn kết nối với gia đình và bè bạn. Melia Ho Tram Beach Resort là nơi nghỉ sở hữu đầy đủ tiện nghi và dịch vụ xuất sắc theo nhận định
          của hầu hết khách lưu trú. Hãy sẵn sàng đón nhận những giây phút vô giá khó phai trong suốt kỳ nghỉ của quý khách tại Melia Ho Tram Beach Resort.
        </h2>
      </div>

      {/* Phòng liên quan */}
      <div id="related-rooms" className="px-[30px] md:px-[85px] mt-5">
        <RoomList />
      </div>
    </div>
  );
};

export default RoomDetail;
