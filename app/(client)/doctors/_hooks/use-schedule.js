import { useQuery } from '@tanstack/react-query';
import { getSchedule } from '../_services/schedule.service';

export const useSchedule = (doctorId, date) => {
  return useQuery({
    queryKey: ['schedules', doctorId, date],
    queryFn: () => {
      return getSchedule(doctorId, date);
    },
    enabled: Boolean(doctorId) && Boolean(date),
  });
};
