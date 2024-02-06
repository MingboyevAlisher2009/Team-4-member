import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './home.css';

// img

import img1 from '../../img/photo_2024-02-03_09-47-36.jpg';
import img2 from '../../img/photo_2024-02-03_09-47-31.jpg';
import img3 from '../../img/photo_2024-02-03_09-50-56.jpg';
import img4 from '../../img/photo_2024-02-03_09-50-51.jpg';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 80,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiger-title ml-10">
                        <h1>Alisher <span> Mingboyev </span></h1>
                        <p>Age: <span> 15 </span></p>
                        <p>Job: <span> Frontend Developer </span></p>
                        <p>Telegram: <span> @MingboyevAlisher </span></p>
                        <p>Instagram: <span> _programmer__009 </span></p>
                        <p>Github: <span> @MingboyevAlisher2009 </span></p>
                        <p></p>
                    </div>
                    <img src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiger-title ml-10">
                        <h1>Shohjahon <span> Ochilov</span></h1>
                        <p>Age: <span> 13</span></p>
                        <p>Job: <span> Frontend Developer </span></p>
                        <p>Telegram: <span> @fix_player </span></p>
                        <p>Instagram: <span> fix_player </span></p>
                        <p>Github: <span> @fix_player </span></p>
                        <p></p>
                    </div>
                    <img src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiger-title ml-8">
                        <h1>Mustafo <span> Jaborov </span></h1>
                        <p>Age: <span> 12 </span></p>
                        <p>Job: <span> Frontend Developer </span></p>
                        <p>Telegram: <span> @Mustafodeveloper </span></p>
                        <p>Instagram: <span> Mustafodeveloper </span></p>
                        <p>Github: <span> @Mustafodeveloper </span></p>
                        <p></p>
                    </div>
                    <img src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiger-title ml-10">
                        <h1>Jonibek <span> Abdusoliqov </span></h1>
                        <p>Age: <span> 14 </span></p>
                        <p>Job: <span> Frontend Developer </span></p>
                        <p>Telegram: <span> @Jonibekdeveloper </span></p>
                        <p>Instagram: <span> No instagram </span></p>
                        <p>Github: <span> @Jonibekdeveloper </span></p>
                        <p></p>
                    </div>
                    <img src={img4} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
