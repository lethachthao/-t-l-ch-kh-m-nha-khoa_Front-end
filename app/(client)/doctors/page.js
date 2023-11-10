'use client';

import { Skeleton } from 'antd';
import DoctorList from './_components/doctor-list';
import DoctorsIntro from './_components/doctors-intro';
import { useDoctors } from './_hooks/use-doctors';

const Doctors = () => {
  const { data: doctors, isLoading } = useDoctors();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col gap-4">
      <DoctorsIntro />

      <div className="container">
        <DoctorList doctors={doctors.data} />
      </div>
    </div>
  );
};

export default Doctors;
