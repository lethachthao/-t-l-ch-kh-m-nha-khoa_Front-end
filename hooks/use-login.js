import { axiosInstance } from '@/lib/http/axios-instance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post('/auth/signin', data);
    },
    onSuccess: async (response) => {
      localStorage.setItem('accessToken', response?.accessToken?.token);

      // await queryClient.invalidateQueries({ queryKey: ['auth'] });

      message.success('Đăng nhập thành công!');
      router.push('/admin');
    },
    onError: () => {
      message.error('Đăng nhập không thành công!');
    },
  });
};
