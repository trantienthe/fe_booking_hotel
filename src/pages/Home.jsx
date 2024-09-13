import React from 'react';
import { CiLocationOn, CiStar } from 'react-icons/ci';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';
import Slider from '../components/home/Slider';
import Banner from '../components/home/Banner';
import Adress from '../components/home/Adress';
import Partners from '../components/home/Partners';
import BlogPost from '../components/home/BlogPost';
import { motion } from 'framer-motion';
//vatiants
import { fadeIn } from '../variants';
const Home = () => {
  return (
    <div>
      {/* Bạn lựa chọn đặt phòng khách sạn nào? */}
      <Banner />

      {/* Phòng khách sạn mới và phổ biến nhất */}
      <div className="px-4 md:px-[100px]">
        <div className="md:flex md:px-[50px]">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[32px] md:text-[36px] font-archivo font-bold md:w-[500px] md:mt-6"
          >
            Phòng khách sạn mới và phổ biến nhất
          </motion.h2>
          <motion.p
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[18px] text-wrap font-archivo font-medium mt-10 md:w-[800px] md:pl-[250px]"
          >
            Tận hưởng sự xa hoa và đẳng cấp mới nhất và phổ biến nhất. Khám phá một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải nghiệm không thể quên.
          </motion.p>
        </div>
        {/* room hotel */}
        <div className="mt-20 sm:grid sm:grid-cols-2 md0:grid-cols-3 justify-items-center gap-y-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              className="mt-5 border-2 rounded-[30px] w-[350px] flex justify-center"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <div className="px-5 py-5">
                <img src="./images/room1.jpg" alt="" className="w-[350px] h-[250px] rounded-[25px]" />
                <div className="relative flex items-center bg-yellow-500 w-[150px] rounded-xl justify-center top-[-240px] left-2">
                  <CiStar />
                  <h2 className="text-[13px] md:text-[15px] ml-2">4.9 (11) đánh giá</h2>
                </div>
                <div className="flex items-center bg-pink-200 w-[200px] rounded-xl justify-center">
                  <CiLocationOn />
                  <h2>Hải Châu, Đà Nẵng</h2>
                </div>
                <div className="mt-5 text-[20px] font-archivo font-semibold text-#475467]">Phòng Vip 0001 Galaxay 2 Giường cực đẹp siêu siêu đẹp</div>
                <div className="flex items-center mt-3">
                  <IoBedOutline />
                  <h2 className="text-[14px] md:text-[16px] ml-2">Giường đôi</h2>
                </div>
                <div className="flex justify-between mt-5">
                  <h2 className="text-[18px] md:text-[22px]">3,675,000đ / Ngày</h2>
                  <button className="h-[40px] w-[150px] bg-gray-300 rounded-[30px] hover:bg-red-500 font-archivo font-bold">Đặt ngay</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* button */}
        <div className="flex justify-center mt-10 pb-10">
          <motion.button
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center h-[50px] w-[250px] bg-white border-2 border-pink-200 justify-center rounded-[30px] hover:bg-red-500"
          >
            <h2>Xem tất cả phòng</h2>
            <FaRegArrowAltCircleRight className="ml-3" />
          </motion.button>
        </div>
      </div>

      {/* Đánh giá từ những người đã trải nghiệm */}
      <div className="bg-bg-home-1 px-4 md:px-[100px] pb-10 pt-5">
        <div className="md:flex md:px-[50px] mt-5">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[32px] md:text-[36px] font-archivo font-bold md:w-[500px] md:mt-6"
          >
            Đánh giá từ những người đã trải nghiệm
          </motion.h2>
          <motion.p
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[18px] text-wrap font-archivo font-medium mt-10 md:w-[800px] md:pl-[250px]"
          >
            Khách hàng chia sẻ về những kỷ niệm tuyệt vời trên chuyến du lịch với chúng tôi.
          </motion.p>
        </div>
        <motion.img
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          src="./images/heading-border.webp"
          alt=""
          className="md:px-[50px] mt-5"
        />
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="pt-5 md:flex">
          <img src="./images/nhaykep1.png" alt="" className="md:px-[50px] h-[25px] md:h-[30px]" />
          <Slider />
        </motion.div>
      </div>

      {/* Các điểm đến */}
      <Adress />

      {/* Đối tác */}
      <Partners />

      {/* Bài viết */}
      <BlogPost />
    </div>
  );
};

export default Home;
