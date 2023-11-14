import { axiosInstance } from '@/lib/http/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useSearch = (keyword) => {
  return useQuery({
    queryKey: ['search', keyword],
    queryFn: () => {
      return axiosInstance.get('/search', {
        params: {
          q: keyword,
        },
      });
    },
    retry: false,
  });
};
