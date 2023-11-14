'use client';

import { useParams } from 'next/navigation';
import { useSpecialistDetail } from '../_hooks/use-specialist-detail';
import DetailIntro from '../../_components/detail-intro';
import DoctorList from '../../doctors/_components/doctor-list';
import { Skeleton } from 'antd';

const SpecialistDetail = () => {
  const { id } = useParams();

  const { isLoading, data: specialistDetail } = useSpecialistDetail(id);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col gap-4">
      <DetailIntro
        title={`Chuyên khoa ${specialistDetail.data.name}`}
        description={specialistDetail.data.description}
        avatar={specialistDetail.data.avatar.path}
      />

      <div className="container">
        {!specialistDetail.data.members.length ? (
          'Chưa có thành viên'
        ) : (
          <DoctorList doctors={specialistDetail.data.members} />
        )}
      </div>
    </div>
  );
};

export default SpecialistDetail;
