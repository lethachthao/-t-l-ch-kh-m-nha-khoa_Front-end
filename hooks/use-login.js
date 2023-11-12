import { axiosInstance } from '@/lib/http/axios-instance';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const router = useRouter();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post('/auth/signin', data);
    },
    onSuccess: (response) => {
      localStorage.setItem('accessToken', response?.accessToken?.token);

      message.success('Đăng nhập thành công!');
      router.replace('/admin');
    },
    onError: () => {
      message.error('Đăng nhập không thành công!');
    },
  });
};
