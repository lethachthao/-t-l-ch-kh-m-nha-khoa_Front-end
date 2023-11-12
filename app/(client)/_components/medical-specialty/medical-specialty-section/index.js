'use client';

import HomeSection from '../../home-section';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import MedicalSpecialtyCard from '../medical-specialty-card';
import { Skeleton } from 'antd';

export default function MedicalSpecialtySection({ specialist, isLoading }) {
  return (
    <HomeSection
      title="Chuyên khoa nổi bật"
      isLoading={isLoading}
      loader={<Skeleton.Image active />}
      to="/chuyen-khoa"
    >
      {specialist && (
        <Swiper slidesPerView={4} spaceBetween={20}>
          {specialist.map((spe) => (
            <SwiperSlide key={spe._id}>
              <MedicalSpecialtyCard
                id={spe._id}
                name={spe.name}
                imageUrl={spe.avatar.path}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </HomeSection>
  );
}
