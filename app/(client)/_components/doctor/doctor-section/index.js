'use client';

import HomeSection from '../../home-section';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import DoctorCard from '../doctor-card';

export default function DoctorSection() {
  return (
    <HomeSection title="Bác sĩ nổi bật" className="bg-cyan-50" to="/doctors">
      <Swiper slidesPerView={4} className="mySwiper">
        <SwiperSlide>
          <DoctorCard />
        </SwiperSlide>

        <SwiperSlide>
          <DoctorCard />
        </SwiperSlide>

        <SwiperSlide>
          <DoctorCard />
        </SwiperSlide>

        <SwiperSlide>
          <DoctorCard />
        </SwiperSlide>

        <SwiperSlide>
          <DoctorCard />
        </SwiperSlide>

        <SwiperSlide>
          <DoctorCard />
        </SwiperSlide>

        <SwiperSlide>
          <DoctorCard />
        </SwiperSlide>
      </Swiper>
    </HomeSection>
  );
}
