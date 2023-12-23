import { axiosInstance } from '@/lib/http/axios-instance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

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

      await queryClient.resetQueries();

      message.success('Đăng nhập thành công!');

      const tokenDecoded = jwtDecode(response?.accessToken?.token);
      router.push(tokenDecoded?.role === 'user' ? '/' : '/admin');
    },
    onError: () => {
      message.error('email hoặc password không chính xác!');
    },
  });
};
