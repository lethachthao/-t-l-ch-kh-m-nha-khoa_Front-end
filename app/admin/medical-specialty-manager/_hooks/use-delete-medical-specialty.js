import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMedicalSpecialty } from '../_services/medical-specialty-service';
import { App } from 'antd';

export const useDeleteMedicalSpecialty = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (id) => {
      return deleteMedicalSpecialty(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['medical-specialty'] });
      message.success('Xóa chuyên khoa thành công!');
    },
    onError: () => {
      message.error('Xóa chuyên khoa không thành công!');
    },
  });
};
