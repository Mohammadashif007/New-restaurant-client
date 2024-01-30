import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import food1 from "../../../assets/home/slide1.jpg";
import food2 from "../../../assets/home/slide2.jpg";
import food3 from "../../../assets/home/slide3.jpg";
import food4 from "../../../assets/home/slide4.jpg";
import food5 from "../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <div className="mb-16">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={food1} alt="" />
                    <p className="text-center text-[32px] text-white -mt-16">Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food2} alt="" />
                    <p className="text-center text-[32px] text-white -mt-16">Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food3} alt="" />
                    <p className="text-center text-[32px] text-white -mt-16">Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={food4} alt="" />
                    <p className="text-center text-[32px] text-white -mt-16">desserts</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
