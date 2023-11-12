'use client';
import DoctorSection from './_components/doctor/doctor-section';
import HeaderIntro from './_components/header-intro';
import MedicalSpecialtySection from './_components/medical-specialty/medical-specialty-section';
import { useTopDoctors } from './_hooks/use-top-doctors';
import { useTopSpecialist } from './_hooks/use-top-specialist';

export default function Home() {
  const { data: topDoctors, isLoading: isTopDoctorsLoading } = useTopDoctors();
  const { data: specialist, isLoading: isSpecialistLoading } =
    useTopSpecialist();

  return (
    <div>
      <HeaderIntro />
      <DoctorSection
        isLoading={isTopDoctorsLoading}
        doctors={topDoctors?.data}
      />
      <MedicalSpecialtySection
        isLoading={isSpecialistLoading}
        specialist={specialist?.data}
      />
    </div>
  );
}
