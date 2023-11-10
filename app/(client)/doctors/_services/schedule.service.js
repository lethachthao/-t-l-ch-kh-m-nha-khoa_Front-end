import { axiosInstance } from '@/lib/http/axios-instance';

export const getSchedule = (id, date) => {
  return axiosInstance.get(`/schedules/${id}`, {
    params: {
      date,
    },
  });
};
