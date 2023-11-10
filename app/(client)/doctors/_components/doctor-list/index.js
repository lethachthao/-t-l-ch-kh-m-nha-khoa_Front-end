import DoctorCard from '@/app/(client)/_components/doctor/doctor-card';
import { Col, Row } from 'antd';

const DoctorList = ({ doctors }) => {
  return (
    <Row gutter={16}>
      {doctors.map((doctor) => (
        <Col key={doctor._id} span={6}>
          <DoctorCard doctor={doctor} className="rounded-lg shadow-md" />
        </Col>
      ))}
    </Row>
  );
};

export default DoctorList;
