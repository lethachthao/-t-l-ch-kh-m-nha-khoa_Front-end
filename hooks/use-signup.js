import { axiosInstance } from '@/lib/http/axios-instance';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useRouter } from 'next/navigation';

export const useSignup = () => {
  const { message } = App.useApp();
  const router = useRouter();

  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post('/auth/signup', data);
    },
    onSuccess: () => {
      message.success('Đăng kí thành công!');
      router.replace('/');
    },

    onError: () => {
      message.error('Đăng kí không thành công!');
    },
  });
};
