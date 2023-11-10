import { useMutation } from '@tanstack/react-query';
import { booking } from '../_services/booking-service';
import { App } from 'antd';

export const useBooking = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (data) => {
      return booking(data);
    },
    onSuccess: () => {
      message.success(
        'Đặt lịch khám thành công! Chúng tôi đã gửi đến email của bạn một liên kết xác nhận, vui lòng kiểm tra và xác nhận trong vòng 2 giờ.',
      );
    },
    onError: () => {
      message.error('Đặt lịch khám không thành công!');
    },
  });
};
