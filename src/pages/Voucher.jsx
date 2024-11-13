import React, { useState } from 'react';

const Voucher = () => {
  const [vouchers] = useState([
    { id: 1, name: 'Voucher Giảm Giá 10%', code: 'DISCOUNT10', quantity: 15 },
    { id: 2, name: 'Voucher Giảm Giá 20%', code: 'DISCOUNT20', quantity: 30 },
    { id: 3, name: 'Voucher Giảm Giá 50%', code: 'DISCOUNT50', quantity: 5 },
    { id: 4, name: 'Voucher Quà Tặng', code: 'GIFTVOUCHER', quantity: 25 },
  ]);

  const copyToClipboard = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert('Mã voucher đã được sao chép!');
      })
      .catch((err) => {
        alert('Không thể sao chép mã voucher: ' + err);
      });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-[16px] md:text-3xl font-archivo font-semibold text-center mb-6">Danh Sách Voucher</h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-6">
          {/* Tiêu đề cho mỗi cột */}
          <div className="hidden md:flex justify-between items-center border-b py-2">
            <div className="flex-1">
              <p className="font-semibold font-archivo text-[16px] md:text-[18px]">Tên Voucher</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold font-archivo text-[16px] md:text-[18px]">Mã Voucher</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold font-archivo text-[16px] md:text-[18px]">Số Lượng</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold font-archivo text-[16px] md:text-[18px]">Hành Động</p>
            </div>
          </div>

          {/* Duyệt qua danh sách vouchers */}
          {vouchers.map((voucher) => (
            <div key={voucher.id} className="flex flex-col md:flex-row justify-between items-center border-b py-4">
              <div className="flex-1">
                <p className="text-sm">{voucher.name}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-red-500 font-semibold">{voucher.code}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm">Số Lượng: {voucher.quantity}</p>
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <button onClick={() => copyToClipboard(voucher.code)} className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300">
                  Sao Chép
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Voucher;
