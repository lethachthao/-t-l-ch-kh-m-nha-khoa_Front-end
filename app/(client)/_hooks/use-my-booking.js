import { axiosInstance } from '@/lib/http/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useMyBookings = () => {
  return useQuery({
    queryKey: ['my-bookings'],
    queryFn: () => {
      return axiosInstance.get('/booking/my-bookings');
    },
  });
};
