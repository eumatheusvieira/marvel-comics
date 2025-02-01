import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SwiperComponent() {
    return (
        <div className='slideContainer'>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img src="/slides/slide1.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/slides/slide2.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/slides/slide3.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}