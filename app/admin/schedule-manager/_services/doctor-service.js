import { axiosInstance } from '@/lib/http/axios-instance';

export const getDoctors = () => {
  return axiosInstance.get('/user/doctor');
};
