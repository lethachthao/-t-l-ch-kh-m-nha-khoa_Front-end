import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editAccount } from '../_services/account-service';
import { App } from 'antd';

export const useEditAccount = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const mutationResults = useMutation({
    mutationFn: (data) => {
      return editAccount(data);
    },
    onSuccess: () => {
      message.success('Edit tài khoản thành công!');
      queryClient.invalidateQueries({ queryKey: ['account-type'] });
    },
    onError: () => {
      message.error('Edit tài khoản không thành công!');
    },
  });

  return mutationResults;
};
