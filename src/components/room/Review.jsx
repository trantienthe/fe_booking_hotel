import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';

const Review = () => {
  const reviews = [
    { id: 1, name: 'Trần Tiến Thế', content: 'Tốt', date: '15/09/2025', rating: 5 },
    { id: 2, name: 'Nguyễn Văn An', content: 'Rất hài lòng với dịch vụ', date: '14/09/2025', rating: 4 },
    { id: 3, name: 'Lê Thị Lan', content: 'Khách sạn đẹp nhưng giá hơi cao', date: '13/09/2025', rating: 3 },
    { id: 4, name: 'Hoàng Minh Tuấn', content: 'Chất lượng tốt, dịch vụ chưa được tốt lắm', date: '12/09/2025', rating: 4 },
    { id: 5, name: 'Phạm Thị Hương', content: 'Tuyệt vời, tôi sẽ quay lại', date: '11/09/2025', rating: 5 },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleToggleReviews = () => {
    setShowAll((prev) => !prev);
  };

  const displayedReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div className="px-[30px] md:px-[85px] mt-20">
      <h2 className="text-xl md:text-[32px] font-archivo font-bold">Đánh giá</h2>
      <img src="./images/heading-border.webp" alt="" className="mt-5" />

      {/* tỉ lệ đánh giá */}
      <div className="mt-5">
        <div className="flex bg-red-50 justify-between py-10 rounded-xl shadow-xl">
          <div className="w-[20%] text-[14px] font-archivo font-extralight flex justify-center items-center sm:text-[28px]">
            <h2>5.00</h2>
          </div>
          <div className="w-[80%] pl-5">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="w-full">
                <div className="flex items-center gap-5">
                  <h2 className="w-[150px] text-[14px] font-archivo font-extralight sm:text-[18px] text-center">{i + 1} sao</h2>
                  <div className="w-[100%] sm:w-[60%] h-[6px] rounded-full bg-white border-2"></div>
                  <h2 className="w-[150px] text-[14px] font-archivo font-extralight sm:text-[18px] text-center">0 đánh giá</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* khách hàng đánh giá */}
      <h2 className="text-[18px] font-archivo font-bold sm:text-[28px] mt-10">Các bài đánh giá</h2>
      <img src="./images/heading-border.webp" alt="" className="mt-5" />
      <div className="mt-10">
        {displayedReviews.map((review) => (
          <div key={review.id} className="flex bg-red-50 justify-between py-10 rounded-xl shadow-md px-[50px] mb-5">
            <div className="text-[14px] font-archivo font-extralight sm:text-[28px]">
              <h2 className="flex gap-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <CiStar key={i} color={i < review.rating ? '#FFD700' : '#D3D3D3'} />
                ))}
              </h2>
              <h2 className="text-[14px] font-archivo font-extralight sm:text-[18px] mt-5">{review.name}</h2>
              <h2 className="text-[14px] font-archivo font-extralight sm:text-[18px] mt-5">Nội dung: {review.content}</h2>
              <h2 className="text-[14px] font-archivo font-extralight sm:text-[18px] mt-5">{review.date}</h2>
            </div>
          </div>
        ))}
        <div className="flex justify-center pb-10 mt-5">
          <button onClick={handleToggleReviews} className="text-[14px] md:text-[18px] w-[220px] h-[40px] bg-gray-200 rounded-[30px] hover:bg-red-200">
            {showAll ? 'Thu gọn' : 'Xem tất cả'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
