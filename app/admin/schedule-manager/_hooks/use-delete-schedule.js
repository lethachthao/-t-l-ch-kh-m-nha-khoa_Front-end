import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteSchedule } from '../_services/schedule-service';
import { App } from 'antd';

export const useDeleteSchedule = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (id) => {
      return deleteSchedule(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['schedules'] });
      message.success('Xóa lịch trình thành công!');
    },
    onError: async () => {
      message.error('Xóa lịch trình không thành công!');
    },
  });
};
