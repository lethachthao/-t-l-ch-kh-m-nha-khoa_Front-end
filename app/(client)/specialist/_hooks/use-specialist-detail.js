import { axiosInstance } from '@/lib/http/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useSpecialistDetail = (id) => {
  return useQuery({
    queryKey: ['specialist-detail', id],
    queryFn: () => {
      return axiosInstance.get(`/medical-specialty/${id}`);
    },
    enabled: !!id,
  });
};
