import { axiosInstance } from '@/lib/http/axios-instance';

export const booking = (data) => {
  return axiosInstance.post('/booking', data);
};

export const verifyBooking = (token) => {
  return axiosInstance.post('/booking/verify', undefined, {
    params: { token },
  });
};
