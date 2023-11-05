import { axiosInstance } from '@/lib/http/axios-instance';

export const addMedicalSpecialty = (data) => {
  return axiosInstance.post('/medical-specialty', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getMedicalSpecialty = () => {
  return axiosInstance.get('/medical-specialty');
};

export const deleteMedicalSpecialty = (id) => {
  return axiosInstance.delete(`/medical-specialty/${id}`);
};

export const updateMedicalSpecialty = ({ id, data }) => {
  return axiosInstance.put(`/medical-specialty/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
