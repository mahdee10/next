'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Image from "next/image";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper';
const MySwiperComponent = ({ news }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    if (!news || news.length === 0) {
        return null; 
    }

    return (
        <Swiper
            modules={[Navigation]} 
            spaceBetween={50}
            navigation
            slidesPerView={1}
            
            effect="coverflow" 
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => {
                console.log('slide change', swiper.activeIndex);
                setActiveSlideIndex(swiper.activeIndex);
            }}

            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 1,
                },

            }}

        >
            {news.map((neww, index) => (
                <SwiperSlide key={neww.id}>
                   


                    <div className=" sm:pl-9 pl-4  flex flex-col rounded-xl  ">
                        <img className='sm:pt-9 pt-4 ' src={neww.details.image} alt="Search Icon"></img>
                        <h4 className={`sm:font-black min-h-200 font-bold text-white sm:text-lg text-xs sm:pt-7 pt-3 ${index === activeSlideIndex + 1 ? 'sm:block' : 'sm:hidden'
                            }  `}>{neww.title}</h4>
                        
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default MySwiperComponent;


