'use client';

import HomeSection from '../home-section';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import MedicalSpecialtyCard from '../medical-specialty-card';

export default function MedicalSpecialtySection() {
  return (
    <HomeSection title="Chuyên khoa nổi bật" to="/chuyen-khoa">
      <Swiper slidesPerView={4} spaceBetween={20}>
        <SwiperSlide>
          <MedicalSpecialtyCard />
        </SwiperSlide>

        <SwiperSlide>
          <MedicalSpecialtyCard />
        </SwiperSlide>

        <SwiperSlide>
          <MedicalSpecialtyCard />
        </SwiperSlide>

        <SwiperSlide>
          <MedicalSpecialtyCard />
        </SwiperSlide>

        <SwiperSlide>
          <MedicalSpecialtyCard />
        </SwiperSlide>

        <SwiperSlide>
          <MedicalSpecialtyCard />
        </SwiperSlide>

        <SwiperSlide>
          <MedicalSpecialtyCard />
        </SwiperSlide>
      </Swiper>
    </HomeSection>
  );
}
