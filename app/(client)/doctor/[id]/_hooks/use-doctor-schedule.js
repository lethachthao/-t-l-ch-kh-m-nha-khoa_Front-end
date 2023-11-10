import { useQuery } from '@tanstack/react-query';
import { doctorSchedule } from '../_services/doctor-schedule';

export const useDoctorSchedule = (doctorId, date) => {
  return useQuery({
    queryKey: ['doctor-schedule', doctorId, date],
    queryFn: () => {
      return doctorSchedule(doctorId, date);
    },
    enabled: !!doctorId && !!date,
  });
};
