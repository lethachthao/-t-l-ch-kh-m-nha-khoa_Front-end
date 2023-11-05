import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { addAccount } from '../_services/account-service';

// custom hook đễ xử lí việc add user, hook này sẽ gửi data user sang backend
export const useAddAccount = () => {
  const { message } = App.useApp();

  const mutationResults = useMutation({
    mutationFn: (data) => {
      //cho em hỏi trong trường hợp nào thì mình điền là data còn trường hợp nào thì điền là value
      // nó là cách đặt tên biến thôi em, em muốn đặt sau cũng duoc974 cả hai value và data đều hợp lệ, da vang
      // đặt axios trong đây để fetch data, data đó sẽ do useMutation sử dụng
      return addAccount(data);
    },
    onSuccess: () => {
      // nếu add account thành công, hàm onSuccess này sẽ được gọi, ở đây chúng ta show thông báo lên UI cho người dùng biết kết quả
      message.success('Tạo tài khoản thành công!');
    },
    onError: () => {
      // nếu add ko thành công thì show thông báo lỗi cho người dùng biết
      message.error('Tạo tài khoản không thành công!');
    },
  });

  return mutationResults;
};
