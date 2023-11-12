'use client';

import AddUserForm from '../_components/form/user-form';
import { useAddAccount } from '../../_hooks/use-add-account';
import withAuth from '@/hocs/withAuth';

const AddAccount = () => {
  const { mutate } = useAddAccount();
  // ở đây chúng ta sẽ xử lí việc gửi data đó qua server để đưa vào trong database
  const addUserHandler = (value) => {
    // ở đây chúng ta sẽ gọi cái hook đó để tiến hành gủi data bằng cách gọi hàm mutate() và truyền data vào
    // test thử nha
    mutate(value);
  };

  return <AddUserForm onSubmit={addUserHandler} />;
};

export default withAuth({ role: ['admin'] })(AddAccount);
