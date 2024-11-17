import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserId } from '../utils/jwt';
import RoomNotFound from '../components/allRoom/RoomNotFound';
import { Link } from 'react-router-dom';

const HistoryOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/order/')
      .then((response) => {
        const userId = getUserId();
        const filteredOrders = response.data.filter((order) => order.user === userId);
        setOrders(filteredOrders);
      })
      .catch((error) => {
        console.error('There was an error fetching the orders!', error);
      });
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">Lịch Sử Đặt Phòng</h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {orders.length === 0 ? (
          <RoomNotFound />
        ) : (
          <div>
            {/* Table layout for large screens */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-blue-400 text-white">
                    <tr>
                      <th className="px-4 py-2 text-left">Người đặt</th>
                      <th className="px-4 py-2 text-left">Email</th>
                      <th className="px-4 py-2 text-left">Số điện thoại</th>
                      <th className="px-4 py-2 text-left">Thanh toán</th>
                      <th className="px-4 py-2 text-left">Tổng Tiền</th>
                      <th className="px-4 py-2 text-left">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-100">
                        <td className="px-4 py-2">{order.full_name}</td>
                        <td className="px-4 py-2">{order.email}</td>
                        <td className="px-4 py-2">{order.phone_number}</td>
                        <td className="px-4 py-2">{order.payment_method}</td>
                        <td className="px-4 py-2">{order.total_price} VND</td>
                        <td className="px-4 py-2">
                          <Link to={`/lịch-sử-chi-tiết/${order.id}`} className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300">
                            Xem chi tiết
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Card layout for small screens */}
            <div className="block md:hidden">
              {orders.map((order) => (
                <div key={order.id} className="mb-6 p-4 bg-white rounded-lg shadow-lg border">
                  <h4 className="text-lg font-semibold">Người đặt</h4>
                  <p>{order.full_name}</p>

                  <h4 className="text-lg font-semibold">Email</h4>
                  <p>{order.email}</p>

                  <h4 className="text-lg font-semibold">Số điện thoại</h4>
                  <p>{order.phone_number}</p>

                  <h4 className="text-lg font-semibold">Thanh toán</h4>
                  <p>{order.payment_method}</p>

                  <h4 className="text-lg font-semibold">Tổng Tiền</h4>
                  <p>{order.total_price} VND</p>

                  <div className="mt-4">
                    <Link to={`/lịch-sử-chi-tiết/${order.id}`} className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryOrder;
