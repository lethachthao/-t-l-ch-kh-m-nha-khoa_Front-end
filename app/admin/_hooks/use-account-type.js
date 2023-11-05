import { useQuery } from '@tanstack/react-query';
import { getAccountType } from '../_services/account-service';

export const useAccountType = (type) => {
  return useQuery({
    queryKey: ['account-type'],
    queryFn: () => {
      return getAccountType(type);
    },
  });
};
