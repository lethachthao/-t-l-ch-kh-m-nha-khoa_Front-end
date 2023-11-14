import { Col, Row } from 'antd';
import DoctorCard from '@/app/(client)/_components/doctor/doctor-card';

const DoctorList = ({ doctors }) => {
  return (
    <Row gutter={[16, 16]}>
      {doctors.map((doctor) => (
        <Col key={doctor._id} span={6}>
          <DoctorCard doctor={doctor} className="rounded-lg shadow-md" />
        </Col>
      ))}
    </Row>
  );
};

export default DoctorList;
