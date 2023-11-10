import DoctorSection from './_components/doctor/doctor-section';
import HeaderIntro from './_components/header-intro';
import MedicalSpecialtySection from './_components/medical-specialty/medical-specialty-section';

export default function Home() {
  return (
    <div>
      <HeaderIntro />
      <DoctorSection />
      <MedicalSpecialtySection />
    </div>
  );
}
