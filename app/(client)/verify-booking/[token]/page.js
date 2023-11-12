'use client';
import { useParams, notFound } from 'next/navigation';
import { useVerifyBooking } from '../_hooks/useVerifyBooking';
import { Alert } from 'antd';

const VerifyBooking = () => {
  const { token } = useParams();

  const { data, isLoading, isError } = useVerifyBooking(token);

  if (!token) {
    notFound();
  }

  if (isLoading) {
    return <div>Đang xác thực...</div>;
  }

  if (isError) {
    return <Alert message="Xác thực không thành công!" type="error" />;
  }

  return <Alert message="Xác thực thành công!" type="success" />;
};

export default VerifyBooking;
