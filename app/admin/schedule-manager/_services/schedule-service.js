import { axiosInstance } from '@/lib/http/axios-instance';

export const addSchedule = (data) => {
  return axiosInstance.post('/schedule', data);
};
