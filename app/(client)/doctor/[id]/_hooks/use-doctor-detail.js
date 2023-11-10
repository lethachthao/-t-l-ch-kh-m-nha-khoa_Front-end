import { useQuery } from '@tanstack/react-query';
import { doctorDetail } from '../_services/doctor-detail';

export const useDoctorDetail = (id) => {
  return useQuery({
    queryKey: ['doctor-detail', id],
    queryFn: () => {
      return doctorDetail(id);
    },
    enabled: !!id,
  });
};
