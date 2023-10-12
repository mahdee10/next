'use client'
import React, { useState ,useEffect,useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Image from "next/image";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper';
const InfoSwiper = ({ information ,activeInfo}) => {

    const swiperRef = useRef(null);

    useEffect(() => {
      // Check if swiperRef is available and activeInfo is a valid index
      if (swiperRef.current && activeInfo >= 0 && activeInfo < information.length) {
        console.log("hello")
        swiperRef.current.slideTo(activeInfo);
      }
    }, [activeInfo]);
    console.log("I am acctive ",activeInfo)

    if (!information || information.length === 0) {
        return null;
    }
   

    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            
            effect="coverflow"
            onSwiper={(swiper) => (swiperRef.current = swiper)}

            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 1,
                    spaceBetween: 1,
                },

            }}

        >
            {information.map((info, index) => (
                <SwiperSlide key={info.id} >
                    <div className=" sm:pl-9 pl-4  flex flex-col text-white">
                        <p>{info.text1}</p>
                        <p className='pt-5'>{info.text2}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default InfoSwiper;


