import { useMutation } from '@tanstack/react-query';
import { addSchedule } from '../_services/schedule-service';
import { App } from 'antd';

export const useAddSchedule = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (data) => {
      return addSchedule(data);
    },
    onSuccess: () => {
      message.success('Tạo lịch trình thành công!');
    },
    onError: () => {
      message.error('Tạo lịch trình không thành công!');
    },
  });
};
