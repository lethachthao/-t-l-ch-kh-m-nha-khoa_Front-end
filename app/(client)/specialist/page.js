'use client';

import { Col, Row, Skeleton } from 'antd';
import DetailIntro from '../_components/detail-intro';
import SpecialistCard from '../_components/medical-specialty/medical-specialty-card';
import { useMedicalSpecialty } from '@/hooks/use-medical-specialty';

const Specialist = () => {
  const { data: specialist, isLoading } = useMedicalSpecialty();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col gap-4">
      <DetailIntro
        title="Chuyên khoa"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />

      <div className="container">
        <Row gutter={16}>
          {specialist.data.map((specialist) => (
            <Col key={specialist._id} span={6}>
              <SpecialistCard
                id={specialist._id}
                name={specialist.name}
                imageUrl={specialist.avatar.path}
                className="rounded-lg shadow-md"
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Specialist;
