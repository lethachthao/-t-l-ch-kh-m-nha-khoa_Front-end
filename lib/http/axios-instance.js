import axios from 'axios';

// em hiểu cái này hông em

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000, // cho phép thời gian request gửi đi tối đa 30s, nếu vượt qua 30s sẽ trả về lỗi
  headers: { 'Content-Type': 'application/json' }, // cai nay la gi anh cái đó là bắt buộc định dạng json gửi đi của chúng ta đó em, là json, da vang
});

// Add a request interceptor, tất cả các request đều đi qua cái interceptors này trước khi gửi đi
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('accessToken');

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (error) {
    // nếu request gửi đi bị lỗi gì đó nó sẽ lọt vào đây,
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor, tất cả các response đều đi qua cái interceptors này sau khi trả về
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // chổ này để xử lí refresh token đây, refresh token được xử lí khi sau khi nhận được response nha em, da vang
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export { axiosInstance };
