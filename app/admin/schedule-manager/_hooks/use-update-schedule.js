import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSchedule } from '../_services/schedule-service';
import { App } from 'antd';

export const useUpdateSchedule = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (data) => {
      return updateSchedule(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['schedules'] });
      message.success('Cập nhật lịch trình thành công!');
    },
    onError: async () => {
      message.error('Cập nhật lịch trình không thành công!');
    },
  });
};
