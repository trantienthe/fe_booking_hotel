import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

const RoomNotFound = () => {
  return (
    <div className="rounded-[30px] border-2 px-3 py-5 shadow">
      <div className="flex justify-center">
        <img src="./images/tiecnuoi.jpg" alt="" className="px-5 py-5" />
      </div>
      <h2 className="text-[24px] md:text-[30px] text-center font-bold">Rất tiếc, Haven Hotel không tìm thấy kết quả cho bạn</h2>
      <p className="text-[16px] mt-3 md:text-[20px] font-light text-[#101828] text-center">Nhấn OK để bắt đầu tìm kiếm mới.</p>
      <div className="flex justify-center mt-5">
        <div className="flex items-center justify-center gap-2 w-[100px] rounded-[30px] border-2 px-3 py-3 text-[14px] md:text-[18px] hover:bg-red-200">
          <h2 className="font-bold font-archivo">OK</h2>
          <IoMdArrowForward className="font-bold" />
        </div>
      </div>
    </div>
  );
};

export default RoomNotFound;
