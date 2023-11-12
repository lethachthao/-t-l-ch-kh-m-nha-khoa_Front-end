import { axiosInstance } from '@/lib/http/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useTopDoctors = () => {
  return useQuery({
    queryKey: ['top-doctors'],
    queryFn: () => {
      return axiosInstance.get('/top-doctors');
    },
  });
};
