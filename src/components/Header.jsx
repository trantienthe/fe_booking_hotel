import React, { useEffect, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showBranches, setShowBranches] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [branches, setBranches] = useState([]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleBranches = () => setShowBranches(!showBranches);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch branches and addresses
  const fetchBranches = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/hotels/');
      setBranches(response.data);
    } catch (error) {
      console.error('Error fetching branches:', error);
    }
  };

  useEffect(() => {
    if (showBranches) fetchBranches();
  }, [showBranches]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('accessToken');
    navigate('/', {
      state: {
        notify: {
          type: 'success',
          message: 'bye bye',
        },
      },
    });
  };

  return (
    <div className="border-b-2 sticky top-0 bg-white z-[99999999] px-10">
      <div className="flex justify-between h-[100px]">
        <div className="flex items-center w-[200px]">
          <Link to="/">
            <img src="/images/logohavenhotel.png" alt="" className="w-[160px] h-[100px]" />
          </Link>
        </div>
        <div className="flex gap-10 font-semibold text-[15px]">
          <p className="flex justify-center items-center hover:text-[#77dada] hidden md:flex">bookinghotel@gmail.com</p>
          <p className="flex justify-center items-center gap-2 hover:text-[#77dada] hidden sm:flex">
            <FaPhoneAlt />
            Hotline: 0378002209
          </p>
          <p className="flex justify-center items-center hover:text-[#77dada] hidden md:flex">Liên hệ</p>
        </div>
        {/* Menu đăng ký đăng nhập */}
        <div className="hidden sm:flex gap-5 items-center">
          {isAuthenticated ? (
            <>
              <div className="w-[130px] h-[40px] border-2 border-blue-400 rounded-[10px] flex items-center justify-center text-[15px] text-white bg-blue-400 font-bold hover:bg-blue-500">
                <Link to="/gio-hang">Giỏ Hàng</Link>
              </div>
              <div className="w-[130px] h-[40px] border-2 border-red-400 rounded-[10px] flex items-center justify-center text-[15px] text-red-900 font-bold hover:bg-pink-200" onClick={handleLogout}>
                Đăng Xuất
              </div>
            </>
          ) : (
            <>
              <div className="w-[130px] h-[40px] border-2 border-blue-400 rounded-[10px] flex items-center justify-center text-[15px] text-red-900 font-bold hover:bg-pink-200">
                <Link to="/login">Đăng Nhập</Link>
              </div>
              <div className="w-[130px] h-[40px] border-2 border-blue-400 rounded-[10px] flex items-center justify-center text-[15px] text-white bg-blue-400 font-bold hover:text-red-900 hover:bg-blue-500">
                <Link to="/register">Đăng Ký</Link>
              </div>
            </>
          )}
        </div>

        {/* Mobile */}
        <div className="sm:hidden flex gap-5 items-center">{!menuOpen && <IoMenu onClick={toggleMenu} className="h-[30px] w-[30px]" />}</div>

        <div className={`fixed top-0 right-0 w-[200px] h-full bg-white shadow-lg transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {menuOpen && (
            <div className="flex flex-col items-center gap-3 mt-3">
              {isAuthenticated ? (
                <>
                  <div className="mt-5">
                    <div className="text-[14px] font-archivo font-thin mt-5 hover:text-red-400">
                      <Link to="/gio-hang">Trang chủ</Link>
                    </div>
                    <div className="text-[14px] font-archivo font-thin mt-5 hover:text-red-400" onClick={toggleBranches}>
                      Chi nhánh
                    </div>
                    {showBranches && (
                      <ul className="text-[14px] font-archivo font-thin mt-3">
                        {branches.map((branch) => (
                          <li key={branch.id} className="hover:text-red-400 mt-2">
                            <span>{branch.name}</span>
                            <Link className="text-[14px] font-archivo font-thin ml-5" to={`/gioi-thieu-chi-nhanh/${branch?.hotel_id}`}>
                              CN {branch.address}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="text-[14px] font-archivo font-thin mt-5 hover:text-red-400">
                      <Link to="/mã-khuyến-mãi">Khuyến mãi</Link>
                    </div>
                    <div className="text-[14px] font-archivo font-thin mt-5 hover:text-red-400">
                      <Link to="/hướng-dẫn-đặt-phòng">Hướng dẫn</Link>
                    </div>
                    <div className="text-[14px] font-archivo font-thin mt-5 hover:text-red-400">
                      <Link to="/lịch-sử-đặt-phòng">Lịch sử</Link>
                    </div>
                    <div className="text-[14px] font-archivo font-thin mt-5 hover:text-red-400">
                      <Link to="/gio-hang">Giỏ Hàng</Link>
                    </div>
                  </div>
                  <div
                    className="w-[80px] h-[30px] border-2 border-red-400 rounded-[10px] flex items-center justify-center text-[12px] text-red-900 font-bold hover:bg-pink-200"
                    onClick={handleLogout}
                  >
                    Đăng Xuất
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[80px] h-[30px] border-2 border-blue-400 rounded-[10px] flex items-center justify-center text-[12px] text-red-900 font-bold hover:bg-pink-200">
                    <Link to="/login">Đăng Nhập</Link>
                  </div>
                  <div className="w-[80px] h-[30px] border-2 border-blue-400 rounded-[10px] flex items-center justify-center text-[12px] text-white bg-blue-400 font-bold hover:text-red-900 hover:bg-blue-500">
                    <Link to="/register">Đăng Ký</Link>
                  </div>
                </>
              )}
              <div onClick={toggleMenu} className="cursor-pointer text-red-900 font-bold hover:text-red-700">
                <IoIosCloseCircleOutline className="h-[20px] w-[20px]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
