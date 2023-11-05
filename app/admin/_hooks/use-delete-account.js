import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';
import { deleteAccount } from '../_services/account-service';

export const useDeleteAccount = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const mutationResults = useMutation({
    mutationFn: (email) => {
      return deleteAccount(email);
    },
    onSuccess: async () => {
      // sau khi xóa xong thì tìm nạp lại dữ liệu trong nền để cập nhật list account mới nhất
      await queryClient.invalidateQueries({ queryKey: ['account-type'] });
      message.success('Xóa tài khoản thành công!');
    },
    onError: () => {
      message.error('Xóa tài khoản không thành công!');
    },
  });

  return mutationResults;
};
