import DoctorSection from './_components/doctor-section';
import HeaderIntro from './_components/header-intro';
import MedicalSpecialtySection from './_components/medical-specialty-section';

export default function Home() {
  return (
    <div>
      <HeaderIntro />
      <DoctorSection />
      <MedicalSpecialtySection />
    </div>
  );
}
