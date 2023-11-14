/* eslint-disable react/display-name */
import { useAuth } from '@/hooks/use-auth';
import { isArray } from '@/utils/assertions';
import { Alert, Skeleton } from 'antd';
import { notFound, redirect } from 'next/navigation';

const withAuth = (options = {}) => {
  return (Component) => (props) => {
    const { data, isLoading, isError, error } = useAuth();

    const { role, mode } = options;

    console.log('with auth active');

    console.log('error: ', error);

    if (isLoading) {
      return <Skeleton />;
    }

    if (isError) {
      redirect('/login');
    }

    if (isArray(role) && !role.includes(data?.data?.role)) {
      return (
        <Alert message="Bạn không có quyền xem nội dung này" type="error" />
      );
    }

    return <Component {...props} />;
  };
};

export default withAuth;
