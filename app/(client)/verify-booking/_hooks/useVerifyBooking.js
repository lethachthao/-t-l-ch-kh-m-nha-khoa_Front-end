import { useMutation, useQuery } from '@tanstack/react-query';
import { verifyBooking } from '../../doctor/[id]/_services/booking-service';
import { App } from 'antd';

export const useVerifyBooking = (token) => {
  return useQuery({
    queryKey: ['verify-token', token],
    queryFn: () => {
      return verifyBooking(token);
    },
    enabled: !!token,
  });
};
