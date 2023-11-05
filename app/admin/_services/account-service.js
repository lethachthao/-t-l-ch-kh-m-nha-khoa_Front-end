import { axiosInstance } from '@/lib/http/axios-instance';

export const addAccount = (data) => {
  // đối số đầu tiên là user, do chúng ta config base url bên trong axios instance rồi cho nên chúng ta chỉ cần để '/user' là nó sẽ tự động chuyển thành url như này http://localohst:3001/api/user
  // thứ 2 là đối số data, cái đó là data nhận từ form đăng kí
  return axiosInstance.post('/user', data);
};

export const getAccountType = (type) => {
  return axiosInstance.get(`/user/${type}`);
};

export const deleteAccount = (email) => {
  return axiosInstance.delete('/user', { params: { email } });
};

export const editAccount = (data) => {
  // method put là method cho update account
  return axiosInstance.put('/user', data);
};
