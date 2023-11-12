'use client';

import HomeSection from '../../home-section';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import DoctorCard from '../doctor-card';
import { Skeleton } from 'antd';

export default function DoctorSection({ doctors, isLoading }) {
  return (
    <HomeSection
      title="Bác sĩ nổi bật"
      isLoading={isLoading}
      loader={<Skeleton.Image active />}
      className="bg-cyan-50"
      to="/doctors"
    >
      {doctors && (
        <Swiper slidesPerView={4} spaceBetween={20} className="mySwiper">
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor?._id}>
              <DoctorCard doctor={doctor} className="rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </HomeSection>
  );
}
