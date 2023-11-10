import { axiosInstance } from '@/lib/http/axios-instance';

export const doctorSchedule = (doctorId, date) => {
  return axiosInstance.get(`/schedule/${doctorId}`, { params: { date } });
};
