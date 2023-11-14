'use client';
import { Typography } from 'antd';
import UserList from '../_components/user-list';
import { useAccountType } from '../../_hooks/use-account-type';
import withAuth from '@/hocs/withAuth';

const { Title } = Typography;

const PatientManager = () => {
  const { isPending, isLoading, data } = useAccountType('user');

  if (isPending || isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div>
      <Title level={3}>Quản lí bệnh nhân</Title>
      <UserList data={data.data} />
    </div>
  );
};

export default withAuth({ role: ['admin'] })(PatientManager);
