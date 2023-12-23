import { axiosInstance } from '@/lib/http/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useMyBookingDetail = (id) => {
  return useQuery({
    queryKey: ['my-bookings', id],
    queryFn: () => {
      return axiosInstance.get(`/booking/my-bookings/${id}`);
    },
    enabled: !!id,
  });
};
