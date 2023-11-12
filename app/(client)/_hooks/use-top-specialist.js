import { axiosInstance } from '@/lib/http/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useTopSpecialist = () => {
  return useQuery({
    queryKey: ['top-specialist'],
    queryFn: () => {
      return axiosInstance.get('/top-specialist');
    },
  });
};
