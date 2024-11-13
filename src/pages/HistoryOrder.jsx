import React, { useState } from 'react';

const HistoryOrder = () => {
  const [orders] = useState([
    { id: 1, roomName: 'Phòng Deluxe', bookingDate: '2024-11-01', status: 'Đang chờ', totalAmount: '1,500,000 VND' },
    { id: 2, roomName: 'Phòng Standard', bookingDate: '2024-11-05', status: 'Đã xác nhận', totalAmount: '1,200,000 VND' },
    { id: 3, roomName: 'Phòng Suite', bookingDate: '2024-10-15', status: 'Hoàn thành', totalAmount: '2,000,000 VND' },
    { id: 4, roomName: 'Phòng Superior', bookingDate: '2024-10-20', status: 'Hủy', totalAmount: '1,000,000 VND' },
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">Lịch Sử Đặt Phòng</h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-400 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Tên Phòng</th>
                <th className="px-4 py-2 text-left">Ngày Đặt</th>
                <th className="px-4 py-2 text-left">Trạng Thái</th>
                <th className="px-4 py-2 text-left">Tổng Tiền</th>
                <th className="px-4 py-2 text-left">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{order.roomName}</td>
                  <td className="px-4 py-2">{order.bookingDate}</td>
                  <td className="px-4 py-2">{order.status}</td>
                  <td className="px-4 py-2">{order.totalAmount}</td>
                  <td className="px-4 py-2">
                    <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300">Chỉnh sửa</button>
                    <button className="ml-2 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-300">Hủy</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryOrder;
