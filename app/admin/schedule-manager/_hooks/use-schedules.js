import { useQuery } from '@tanstack/react-query';
import { getSchedules } from '../_services/schedule-service';

export const useSchedules = () => {
  return useQuery({
    queryKey: ['schedules'],
    queryFn: () => {
      return getSchedules();
    },
  });
};
