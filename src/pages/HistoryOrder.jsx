import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserId } from '../utils/jwt';
import RoomNotFound from '../components/allRoom/RoomNotFound';
import { Link } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa';
import { MdPayments } from 'react-icons/md';
import { SiTicktick } from 'react-icons/si';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Swal from 'sweetalert2';

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

  const handlePayment = (orderId, totalPrice) => {
    const formattedTotalPrice = Math.round(Number(totalPrice));

    // Hiển thị hộp thoại xác nhận thanh toán
    Swal.fire({
      title: 'Xác nhận thanh toán',
      text: `Bạn muốn thanh toán ${formattedTotalPrice} Vnđ bằng ZaloPay ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy bỏ',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post('http://127.0.0.1:8000/zalopay/create-order/', {
            order_id: orderId,
            total_price: formattedTotalPrice,
          })
          .then((response) => {
            if (response.data && response.data.order_url) {
              window.location.href = response.data.order_url; // Chuyển hướng đến trang thanh toán
            } else {
              Swal.fire('Lỗi', 'Có lỗi xảy ra khi tạo yêu cầu thanh toán', 'error');
            }
          })
          .catch((error) => {
            console.error('Error during payment creation:', error);
            Swal.fire('Lỗi', 'Có lỗi xảy ra khi xử lý thanh toán', 'error');
          });
      }
    });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">Lịch Sử Đặt Phòng</h1>

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
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
                      <th className="px-4 py-2 text-left whitespace-nowrap">Người đặt</th>
                      <th className="px-4 py-2 text-left whitespace-nowrap">Email</th>
                      <th className="px-4 py-2 text-left whitespace-nowrap">Số điện thoại</th>
                      <th className="px-4 py-2 text-left whitespace-nowrap">Thanh toán</th>
                      <th className="px-4 py-2 text-left whitespace-nowrap">Tổng Tiền</th>
                      <th className="px-4 py-2 text-left whitespace-nowrap">Trạng thái thanh toán</th>
                      <th className="px-4 py-2 text-left whitespace-nowrap">Hành Động</th>
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
                        <td className={`px-4 py-2 ${order.status === 'pending' ? 'text-blue-600' : 'text-red-600'}`}>{order.status === 'pending' ? 'Vui lòng thanh toán' : 'Đã thanh toán'}</td>
                        <td className="px-4 py-2">
                          <div className="flex space-x-2">
                            <Link to={`/lịch-sử-chi-tiết/${order.id}`} className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300">
                              <FaRegEye />
                            </Link>
                            {order.status === 'pending' && (
                              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400" onClick={() => handlePayment(order.id, order.total_price)}>
                                <MdPayments />
                              </button>
                            )}
                          </div>
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
                  <div className="flex justify-between px-3">
                    <h4 className="text-[14px] font-archivo font-normal">Người đặt</h4>
                    <p className="text-[14px] font-archivo font-normal">{order.full_name}</p>
                  </div>

                  <div className="flex justify-between px-3">
                    <h4 className="text-[14px] font-archivo font-normal">Email</h4>
                    <p className="text-[14px] font-archivo font-normal">{order.email}</p>
                  </div>
                  <div className="flex justify-between px-3">
                    <h4 className="text-[14px] font-archivo font-normal">Số điện thoại</h4> <p className="text-[14px] font-archivo font-normal">{order.phone_number}</p>
                  </div>
                  <div className="flex justify-between px-3">
                    <h4 className="text-[14px] font-archivo font-normal">Thanh toán</h4>
                    <p className="text-[14px] font-archivo font-normal">{order.payment_method}</p>
                  </div>
                  <div className="flex justify-between px-3">
                    <h4 className="text-[14px] font-archivo font-normal">Tổng Tiền</h4>
                    <p className="text-[14px] font-archivo font-normal">{order.total_price} VND</p>
                  </div>
                  <div className="mt-4">
                    <Link to={`/lịch-sử-chi-tiết/${order.id}`} className="text-[14px] px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300">
                      Xem chi tiết
                    </Link>
                    {order.status === 'pending' && (
                      <button className="ml-8 text-[14px] px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 mt-2" onClick={() => handlePayment(order.id, order.total_price)}>
                        Thanh toán
                      </button>
                    )}
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
