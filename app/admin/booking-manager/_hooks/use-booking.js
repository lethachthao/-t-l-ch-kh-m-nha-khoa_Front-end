import { axiosInstance } from '@/lib/http/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useBooking = (date) => {
  return useQuery({
    queryKey: ['booking', date],
    queryFn: () => {
      return axiosInstance.get('/booking', { params: { date } });
    },
  });
};
