import { axiosInstance } from '@/lib/http/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: () => {
      return axiosInstance.get('/user/me');
    },
  });
};
