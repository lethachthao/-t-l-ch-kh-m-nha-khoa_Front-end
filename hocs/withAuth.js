/* eslint-disable react/display-name */
import { useAuth } from '@/hooks/use-auth';
import { isArray } from '@/utils/assertions';
import { Alert, Skeleton } from 'antd';
import { notFound, redirect } from 'next/navigation';

const withAuth =
  (options = {}) =>
  (Component) =>
  (props) => {
    const { role, mode } = options;
    const { data, isLoading, isError } = useAuth();

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

export default withAuth;
