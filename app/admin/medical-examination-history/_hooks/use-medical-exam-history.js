import { axiosInstance } from '@/lib/http/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useMedicalExaminationHistory = (email) => {
  return useQuery({
    queryKey: ['medical-exam-history', email],
    queryFn: () => {
      return axiosInstance.get('/medical-examination-history', {
        params: { email },
      });
    },
  });
};
