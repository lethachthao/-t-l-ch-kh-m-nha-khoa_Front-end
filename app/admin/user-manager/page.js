'use client';

import { Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import UserList from '../_components/user-list';
import AddUserModal from '../_components/modals/add-user';
import { useState } from 'react';
import { useToggle } from '@/hooks/use-toggle';

const UserManager = () => {
  const { toggleState: isModalOpen, on, off } = useToggle(false);
  // chờ anh xíu vâng
  return (
    <>
      <div>
        <div className="mb-8">
          <Button type="primary" icon={<UserAddOutlined />} onClick={on}>
            Thêm người dùng
          </Button>
        </div>

        <UserList />
      </div>

      <AddUserModal
        name="Người dùng"
        isOpen={isModalOpen}
        onCancel={off}
        onAddAction={console.log}
      />
    </>
  );
};

export default UserManager;
// next js bug , cái biến đó đâu còn đâu
