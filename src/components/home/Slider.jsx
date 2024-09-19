import React, { useEffect, useState } from 'react';
import { PiCrownThin } from 'react-icons/pi';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // Thêm trạng thái để điều khiển tự động chuyển đổi

  const reviews = [
    {
      name: 'Trần Tiến Thế',
      comment:
        'Anh chọn ngày đi tàu trùng với sinh nhật vợ anh. Muốn là món quà tặng vợ. Với lại, vợ anh thích chụp ảnh nữa. Anh thấy bạn bè bảo đặt tàu này hơi khó vì rất hot, hay kín phòng. May quá bên em lại có phòng tàu này. Cảm ơn dịch vụ của bên em nhé! Tàu đẹp, sang trọng, rất ổn! Tối sinh nhật vợ anh thì tàu có tặng 1 bánh sinh nhật nhỏ. Nói chung, cả gia đình anh rất hài lòng về chuyến đi cũng như dịch vụ tư vấn của bên em.',
      rating: 4,
    },
    {
      name: 'Minh Hoàng',
      comment: 'Dịch vụ thật tuyệt vời, nhân viên phục vụ tận tình và chu đáo. Tàu đẹp và rất sạch sẽ. Cả gia đình tôi đã có một chuyến đi đáng nhớ.',
      rating: 5,
    },
    {
      name: 'Lê Thị B',
      comment: 'Chuyến đi rất thú vị và thư giãn. Tôi sẽ giới thiệu cho bạn bè và người thân của mình về dịch vụ này.',
      rating: 3,
    },
    {
      name: 'Phạm C',
      comment: 'Cảm ơn các bạn đã mang đến một chuyến đi tuyệt vời. Tàu rất đẹp, phòng ốc sạch sẽ và dịch vụ rất tốt.',
      rating: 4,
    },
    {
      name: 'Trần D',
      comment: 'Một trải nghiệm rất tuyệt vời. Đội ngũ nhân viên chuyên nghiệp và rất thân thiện. Tôi sẽ quay lại vào lần tới.',
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex text-[32px]">
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} className="text-yellow-500">
            ★
          </span>
        ))}
        {Array.from({ length: 5 - rating }, (_, index) => (
          <span key={index + rating} className="text-gray-300">
            ★
          </span>
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [autoSlide]);

  const handleNameClick = (index) => {
    setAutoSlide(false); // Dừng tự động chuyển đổi khi người dùng nhấp vào tên
    setCurrentIndex(index);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="mt-3 md:ml-[150px] md:w-full">
      <p className="text-[20px] md:text-[30px] text-wrap font-archivo font-thin flex gap-5 items-center">
        <PiCrownThin />
        Haven Hotel
        <PiCrownThin />
      </p>
      <div className="mt-2 mb-5">{renderStars(currentReview.rating)}</div>
      <div className="mb-5">
        <h2 className="mt-3 text-[16px] md:text-[19px] text-wrap font-archivo font-thin text-blue-950 h-[250px] md:h-[200px]">{currentReview.comment}</h2>
        <h3 className="mt-3 text-[16px] md:text-[19px] text-wrap font-archivo font-light uppercase">Bạn - {currentReview.name}</h3>
      </div>
      <div className="flex gap-2 overflow-x-auto scrollbar-hidden md:scrollbar-visible">
        {reviews.map((review, index) => (
          <div
            key={index}
            onClick={() => handleNameClick(index)}
            className="inline-block min-w-[30%] text-[13px] md:text-[18px] font-archivo font-bold uppercase text-center bg-gray-300 hover:bg-red-300 rounded-lg p-2 my-2 cursor-pointer"
          >
            {review.name}
          </div>
        ))}
      </div>
      <div className="mt-5 justify-center flex">
        <button className="w-[160px] h-[40px] text-[14px] md:text-[16px] md:w-[200px] md:h-[50px] rounded-[25px] border-2 border-red-300 bg-white hover:bg-red-500 hover:text-white">
          Viết đánh giá
        </button>
      </div>
    </div>
  );
};

export default Slider;
