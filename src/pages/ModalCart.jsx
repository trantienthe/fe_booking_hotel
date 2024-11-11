import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModalCart = ({ onClose, onAddToCart, roomId }) => {
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');

  // Lấy ngày hiện tại
  const today = new Date().toISOString().split('T')[0];

  const handleAddToCart = () => {
    if (!checkinDate || !checkoutDate) {
      toast.error('Vui lòng chọn ngày!');
      return;
    }
    onAddToCart(roomId, checkinDate, checkoutDate);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-lg font-bold">Thêm vào giỏ hàng</h2>
        <div className="mt-4">
          <label className="block mb-2">Ngày check-in:</label>
          <input
            type="date"
            value={checkinDate}
            onChange={(e) => setCheckinDate(e.target.value)}
            className="border rounded w-full p-2"
            min={today} // Giới hạn từ ngày hiện tại
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Ngày check-out:</label>
          <input
            type="date"
            value={checkoutDate}
            onChange={(e) => setCheckoutDate(e.target.value)}
            className="border rounded w-full p-2"
            min={checkinDate || today} // Giới hạn từ ngày check-in hoặc ngày hiện tại
          />
        </div>
        <button onClick={handleAddToCart} className="mt-4 h-[40px] w-full bg-gray-300 rounded-[30px] hover:bg-red-500 font-archivo font-bold">
          Thêm vào giỏ hàng
        </button>
        <button onClick={onClose} className="mt-2 h-[40px] w-full bg-gray-200 rounded-[30px] hover:bg-red-300 font-archivo font-bold">
          Đóng
        </button>
      </div>
    </div>
  );
};

export default ModalCart;
