import { useQuery } from '@tanstack/react-query';
import { getMedicalSpecialty } from '../_services/medical-specialty-service';

export const useMedicalSpecialty = () => {
  return useQuery({
    queryKey: ['medical-specialty'],
    queryFn: () => {
      return getMedicalSpecialty();
    },
  });
};
