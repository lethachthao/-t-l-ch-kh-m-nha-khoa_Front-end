import { axiosInstance } from '@/lib/http/axios-instance';

export const addSchedule = (data) => {
  return axiosInstance.post('/schedule', data);
};

export const getSchedules = () => {
  return axiosInstance.get('/schedule');
};

export const deleteSchedule = (id) => {
  return axiosInstance.delete(`/schedule/${id}`);
};

export const updateSchedule = ({ id, data }) => {
  return axiosInstance.put(`/schedule/${id}`, data);
};
