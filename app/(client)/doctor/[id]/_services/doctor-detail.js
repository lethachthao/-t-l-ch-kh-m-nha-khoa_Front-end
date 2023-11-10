import { axiosInstance } from '@/lib/http/axios-instance';

export const doctorDetail = (id) => {
  return axiosInstance.get(`/user/doctors/${id}`);
};
