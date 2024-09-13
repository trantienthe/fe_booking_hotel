import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Adress = () => {
  return (
    <div className="mt-10 pb-10">
      <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="mx-5 md:text-center">
        <h2 className="text-[22px] md:text-[36px] font-archivo font-bold">Các chi nhánh của khách sạn</h2>
        <p className="text-[14px] md:text-[19px] font-archivo text-green-900 mt-5 md:mt-0">Khám phá vẻ đẹp tuyệt vời của khách sạn: Hành trình đến thiên đường hotel</p>
      </motion.div>
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="mx-[20px] md:mx-[120px] md:mt-10">
        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 mds:grid-cols-3 gap-[80px]">
          <motion.div variants={fadeIn('up', 0.2)} className="border-2 rounded-[30px] flex flex-col items-center p-5">
            <img src="./images/room1.jpg" alt="Room 1" className="w-full h-auto max-w-[350px] rounded-[25px]" />
            <div className="mt-5 text-[20px] font-archivo font-semibold text-[#475467] text-center">Hải Châu</div>
            <div className="flex justify-center mt-5">
              <button className="h-[40px] w-[150px] bg-gray-300 rounded-[30px] hover:bg-red-500 font-archivo font-bold">Xem ngay</button>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.4)} className="border-2 rounded-[30px] flex flex-col items-center p-5">
            <img src="./images/room1.jpg" alt="Room 2" className="w-full h-auto max-w-[350px] rounded-[25px]" />
            <div className="mt-5 text-[20px] font-archivo font-semibold text-[#475467] text-center">Hòa Khánh</div>
            <div className="flex justify-center mt-5">
              <button className="h-[40px] w-[150px] bg-gray-300 rounded-[30px] hover:bg-red-500 font-archivo font-bold">Xem ngay</button>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.6)} className="border-2 rounded-[30px] flex flex-col items-center p-5">
            <img src="./images/room1.jpg" alt="Room 3" className="w-full h-auto max-w-[350px] rounded-[25px]" />
            <div className="mt-5 text-[20px] font-archivo font-semibold text-[#475467] text-center">Sơn Trà</div>
            <div className="flex justify-center mt-5">
              <button className="h-[40px] w-[150px] bg-gray-300 rounded-[30px] hover:bg-red-500 font-archivo font-bold">Xem ngay</button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Adress;
