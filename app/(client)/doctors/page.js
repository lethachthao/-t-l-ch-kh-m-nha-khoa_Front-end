'use client';

import { Skeleton } from 'antd';
import DoctorList from './_components/doctor-list';
import DetailIntro from '../_components/detail-intro';
import { useDoctors } from './_hooks/use-doctors';

const Doctors = () => {
  const { data: doctors, isLoading } = useDoctors();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col gap-4">
      <DetailIntro
        title="Đội ngũ bác sĩ"
        description="Physicians and surgeons diagnose and treat injuries or illnesses and address health maintenance. Physicians examine patients; take medical histories; prescribe medications; and order, perform, and interpret diagnostic tests. They often counsel patients on diet, hygiene, and preventive healthcare."
      />

      <div className="container mb-8">
        <DoctorList doctors={doctors.data} />
      </div>
    </div>
  );
};

export default Doctors;
