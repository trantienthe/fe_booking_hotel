import React, { useState, useEffect } from 'react';

const reviews = [
  {
    room: 'Phòng Galaxy giường đôi',
    name: 'Trần Tiến Thế',
    comment:
      'Anh chọn ngày đi tàu trùng với sinh nhật vợ anh. Muốn là món quà tặng vợ. Với lại, vợ anh thích chụp ảnh nữa. Anh thấy bạn bè bảo đặt tàu này hơi khó vì rất hot, hay kín phòng. May quá bên em lại có phòng tàu này. Cảm ơn dịch vụ của bên em nhé! Tàu đẹp, sang trọng, rất ổn! Tối sinh nhật vợ anh thì tàu có tặng 1 bánh sinh nhật nhỏ. Nói chung, cả gia đình anh rất hài lòng về chuyến đi cũng như dịch vụ tư vấn của bên em.',
  },
  {
    room: 'Phòng Vũ Trụ hạng sang',
    name: 'Minh Hoàng ',
    comment: 'Dịch vụ thật tuyệt vời, nhân viên phục vụ tận tình và chu đáo. Tàu đẹp và rất sạch sẽ. Cả gia đình tôi đã có một chuyến đi đáng nhớ.',
  },
  {
    room: 'Phòng Mặt Trăng',
    name: 'Lê Thị B',
    comment: 'Chuyến đi rất thú vị và thư giãn. Tôi sẽ giới thiệu cho bạn bè và người thân của mình về dịch vụ này.',
  },
  {
    room: 'Phòng Sao Hỏa',
    name: 'Phạm C',
    comment: 'Cảm ơn các bạn đã mang đến một chuyến đi tuyệt vời. Tàu rất đẹp, phòng ốc sạch sẽ và dịch vụ rất tốt.',
  },
  {
    room: 'Phòng Ngân Hà',
    name: 'Trần D',
    comment: 'Một trải nghiệm rất tuyệt vời. Đội ngũ nhân viên chuyên nghiệp và rất thân thiện. Tôi sẽ quay lại vào lần tới.',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNameClick = (index) => {
    setCurrentIndex(index);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="mt-3 md:ml-[150px] md:w-full">
      <div className="mb-5">
        <p className="text-[20px] md:text-[22px] text-wrap font-archivo font-bold">{currentReview.room}</p>
        <h2 className="mt-3 text-[16px] md:text-[19px] text-wrap font-archivo font-medium text-blue-950 h-[250px] md:h-[200px]">{currentReview.comment}</h2>
        <h3 className="mt-3 text-[16px] md:text-[19px] text-wrap font-archivo font-bold uppercase">Bạn - {currentReview.name}</h3>
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
    </div>
  );
};

export default Slider;
