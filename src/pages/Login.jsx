import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      username: !formData.username,
      email: !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email),
      password: !formData.password,
      confirmPassword: formData.password !== formData.confirmPassword,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      valid = false;
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div className="bg-gradient-to-r from-blue-400 to-red-200 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex justify-center">
          <Link to="/">
            <img src="./images/logohavenhotel.png" alt="" className="w-[200px] h-[130px] mb-[30px]" />
          </Link>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Đăng nhập</h2>
        <form id="registrationForm" onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập email"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">Vui lòng nhập email chính xác.</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mật khẩu"
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-2">Mật khẩu không đúng.</p>}
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            Đăng Nhập
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Bạn chưa có tài khoản ?{' '}
          <Link to="/register" className="text-blue-500 font-semibold">
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
