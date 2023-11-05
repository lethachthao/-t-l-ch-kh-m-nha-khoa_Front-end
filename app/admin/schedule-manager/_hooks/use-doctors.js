import { useQuery } from '@tanstack/react-query';
import { getDoctors } from '../_services/doctor-service';

export const useDoctors = () => {
  return useQuery({
    queryKey: ['doctors'],
    queryFn: () => {
      return getDoctors();
    },
  });
};
