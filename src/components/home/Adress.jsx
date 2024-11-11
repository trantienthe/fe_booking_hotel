import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Adress = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/hotels/')
      .then((response) => {
        setHotels(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the hotel data!', error);
      });
  }, []);

  return (
    <div className="mt-10 pb-10">
      <div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="mx-5 md:text-center">
        <h2 className="text-[22px] md:text-[36px] font-archivo font-bold">Các chi nhánh của khách sạn</h2>
        <p className="text-[14px] md:text-[19px] font-archivo text-green-900 mt-5 md:mt-0">Khám phá vẻ đẹp tuyệt vời của khách sạn: Hành trình đến thiên đường hotel</p>
      </div>
      <div className="mx-[20px] md:mx-[120px] md:mt-10">
        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 mds:grid-cols-3 gap-[80px]">
          {hotels.map((hotel) => (
            <div key={hotel?.hotel_id} className="border-2 rounded-[30px] flex flex-col items-center p-5">
              <Link to={`/gioi-thieu-chi-nhanh/${hotel?.hotel_id}`}>
                <img src={hotel?.image} alt={hotel?.hotel_name} className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] max-w-[350px] rounded-[25px]" />
              </Link>
              <div className="mt-5 text-[20px] font-archivo font-semibold text-[#475467] text-center">{hotel?.address}</div>
              <div className="flex justify-center mt-5">
                <button className="h-[40px] w-[150px] bg-gray-300 rounded-[30px] hover:bg-red-500 font-archivo font-bold">
                  <Link to={`/gioi-thieu-chi-nhanh/${hotel?.hotel_id}`}>Xem ngay</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adress;
