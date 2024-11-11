import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUserId } from '../utils/jwt';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const handleConfirmPayment = async () => {
    if (!fullName || !email || !phoneNumber || !paymentMethod) {
      toast.error('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    const totalPrice = cartItems.reduce((total, item) => total + Number(item.total_price), 0);

    const orderData = {
      user: getUserId(),
      full_name: fullName,
      email: email,
      phone_number: phoneNumber,
      payment_method: paymentMethod,
      total_price: totalPrice.toString(),
      promo_code: promoCode || '',
      order_details: cartItems.map((item) => ({
        room: item.room,
        price: item.total_price,
      })),
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/order/', orderData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        toast.success('Đặt phòng thành công!');
        setCartItems([]);
        navigate('/');
      }
    } catch (error) {
      console.error('Error placing the order:', error);
      toast.error('Đã xảy ra lỗi, vui lòng thử lại!');
    }
  };

  useEffect(() => {
    if (location.state && location.state.cartItems) {
      setCartItems(location.state.cartItems);
    } else {
      navigate('/gio-hang');
    }
  }, [location, navigate]);

  return (
    <div className="mb-[30px]">
      <h2 className="text-[14px] md:text-[26px] font-bold font-archivo mt-8 text-[#14532d] text-center">Thanh toán</h2>
      <div className="flex items-center mt-5 justify-center">
        <div className="sm:flex sm:justify-between w-[90%]">
          <div className="sm:w-[60%] flex flex-col items-center">
            {/* Customer Information */}
            <div className="sm:w-[90%] rounded-[20px] px-5 bg-inherit border-2 border-green-200 py-5 shadow-xl">
              <h2 className="text-[14px] md:text-[20px] font-bold font-archivo mt-5 text-[#14532d]">Thông tin khách hàng</h2>
              <hr className="mt-3" />
              <input
                type="text"
                placeholder="Họ và tên"
                className="h-[40px] sm:h-[45px] w-full rounded-[20px] px-5 bg-inherit border-2 border-green-200 mt-5"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <div className="flex gap-2 sm:gap-3 justify-between">
                <input
                  type="text"
                  placeholder="Email"
                  className="h-[40px] sm:h-[45px] w-full rounded-[20px] px-5 bg-inherit border-2 border-green-200 mt-5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="h-[40px] sm:h-[45px] w-full rounded-[20px] px-5 bg-inherit border-2 border-green-200 mt-5"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            {/* Promo Code */}
            <div className="sm:w-[90%] rounded-[20px] px-5 bg-inherit border-2 border-green-200 py-5 shadow-xl mt-5">
              <h2 className="text-[14px] md:text-[20px] font-bold font-archivo mt-5 text-[#14532d]">Mã khuyến mãi</h2>
              <hr className="mt-3" />
              <input
                type="text"
                placeholder="Nhập mã khuyến mãi (tùy chọn)"
                className="h-[40px] sm:h-[45px] w-full rounded-[20px] px-5 bg-inherit border-2 border-green-200 mt-5"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </div>

            {/* Order Summary */}
            <div className="sm:w-[90%] rounded-[20px] px-5 bg-inherit border-2 border-green-200 py-5 shadow-xl mt-5">
              <h2 className="text-[14px] md:text-[20px] font-bold font-archivo mt-5 text-[#14532d]">Phòng đặt</h2>
              <hr className="mt-3" />
              {cartItems?.map((item, index) => (
                <div key={index} className="mt-5 flex">
                  <div className="w-[33%]">
                    <img src={`http://127.0.0.1:8000${item?.room_image}`} alt={item.room_type} className="rounded-[10px] w-[100px] h-auto" />
                  </div>
                  <div className="flex gap-2 w-[33%]">
                    <label className="text-[14px] md:text-[16px] font-semibold text-[#14532d]">Tên phòng:</label>
                    <div className="text-[14px] md:text-[16px] text-gray-700">{item?.room_type}</div>
                  </div>
                  <div className="flex gap-2 w-[33%]">
                    <label className="text-[14px] md:text-[16px] font-semibold text-[#14532d]">Giá tiền:</label>
                    <div className="text-[14px] md:text-[16px] text-gray-700">{Number(item?.total_price).toLocaleString()} VNĐ</div>
                  </div>
                </div>
              ))}
              <div className="mt-5 text-center">
                <label className="text-[14px] md:text-[16px] font-semibold text-[#14532d]">Tổng tiền:</label>
                <div className="text-[14px] md:text-[16px] text-gray-700">{cartItems?.reduce((total, item) => total + Number(item.total_price), 0).toLocaleString()} VNĐ</div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="sm:w-[40%]">
            <div className="sm:w-[90%] rounded-[20px] px-5 bg-inherit border-2 border-green-200 py-5 shadow-xl mt-5 sm:mt-0">
              <h2 className="text-[14px] md:text-[20px] font-bold font-archivo mt-5 text-[#14532d]">Thanh toán</h2>
              <hr className="mt-3" />
              <select className="h-[40px] sm:h-[45px] w-full rounded-[20px] px-5 bg-inherit border-2 border-green-200 mt-5" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="">Chọn phương thức thanh toán</option>
                <option value="atm">Thanh toán ATM</option>
                <option value="cash">Thanh toán tiền mặt</option>
              </select>

              {paymentMethod === 'atm' && (
                <div className="atm-details">
                  {/* ATM Card Details */}
                  <select className="h-[40px] sm:h-[45px] w-full rounded-[20px] px-5 bg-inherit border-2 border-green-200 mt-5">
                    <option value="">Chọn ngân hàng</option>
                    {/* Add actual bank options here */}
                    <option value="vietcombank">Vietcombank</option>
                    <option value="viettinbank">Viettinbank</option>
                  </select>
                </div>
              )}

              <button className="mt-5 w-full text-white bg-green-500 hover:bg-green-700 py-2 px-4 rounded-[20px]" onClick={handleConfirmPayment}>
                Xác nhận thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
