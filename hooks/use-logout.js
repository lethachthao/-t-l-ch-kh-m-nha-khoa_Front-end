import { useQueryClient } from '@tanstack/react-query';

export const useLogout = () => {
  const queryClient = useQueryClient();

  const logout = async () => {
    localStorage.removeItem('accessToken');
    await queryClient.invalidateQueries({ queryKey: ['auth'] });
  };

  return {
    logout,
  };
};
