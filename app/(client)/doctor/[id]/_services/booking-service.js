import { axiosInstance } from '@/lib/http/axios-instance';

export const booking = (data) => {
  return axiosInstance.post('/booking', data);
};
