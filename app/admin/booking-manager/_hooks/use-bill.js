import { axiosInstance } from '@/lib/http/axios-instance';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

export const useBill = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post('/bill', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    onSuccess: () => {
      message.success('Gửi hóa đơn thành công!');
    },
    onError: () => {
      message.error('Gửi hóa đơn không thành công!');
    },
  });
};
