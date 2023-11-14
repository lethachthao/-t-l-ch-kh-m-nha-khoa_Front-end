import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/http/axios-instance';

export const useDoctors = () => {
  return useQuery({
    queryKey: ['doctors'],
    queryFn: () => {
      return axiosInstance.get('/user/doctors');
    },
  });
};
