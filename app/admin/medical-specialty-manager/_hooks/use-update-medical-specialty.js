import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMedicalSpecialty } from '../_services/medical-specialty-service';
import { App } from 'antd';

export const useUpdateMedicalSpecialty = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (data) => {
      return updateMedicalSpecialty(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['medical-specialty'] });
      message.success('Cập nhật chuyên khoa thành công!');
    },
    onError: () => {
      message.error('Cập chuyên khoa không thành công!');
    },
  });
};
