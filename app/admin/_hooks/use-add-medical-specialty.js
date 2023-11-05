import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addMedicalSpecialty } from '../medical-specialty-manager/_services/medical-specialty-service';
import { App } from 'antd';

export const useAddMedicalSpecialty = (options) => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (data) => {
      return addMedicalSpecialty(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['medical-specialty'],
      });

      message.success('Tạo chuyên khoa thành công!');
    },
    onError: () => {
      message.error('Tạo chuyên khoa không thành công!');
    },
  });
};
