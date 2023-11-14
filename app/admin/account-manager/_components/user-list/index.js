import React, { useMemo, useState } from 'react';
import { Avatar, Button, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDeleteAccount } from '../../../_hooks/use-delete-account';
import { useEditAccount } from '../../../_hooks/use-edit-account';
import { useToggle } from '@/hooks/use-toggle';
import EditAccountModal from '../modal/edit-account';

const UserList = ({ data }) => {
  const { mutate: mutateDeleteAccount } = useDeleteAccount();
  const { isPending: isSubmitting, mutate: mutateEditAccount } =
    useEditAccount();
  const [editId, setEditId] = useState('');

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text, record) => {
        return (
          <Avatar src={record?.avatar?.path} size="small">
            {record.name.slice(0, 1)}
          </Avatar>
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => {
        return (
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              danger
              size="small"
              icon={<DeleteOutlined />}
              onClick={deleteAccount(record.email)}
            >
              Xóa
            </Button>
            <Button
              type="primary"
              size="small"
              icon={<EditOutlined />}
              onClick={() => setEditId(record.email)}
            >
              Sửa
            </Button>
          </div>
        );
      },
    },
  ];

  const normalData = useMemo(() => {
    return data.map((account) => ({
      name: account.name,
      age: 10,
      phoneNumber: account.phoneNumber,
      avatar: account.avatar,
      email: account.email,
      address: account.address,
    }));
  }, [data]);

  const editData = useMemo(() => {
    return data.find((account) => account.email === editId);
  }, [data, editId]);

  // cái này gọi là curried function nha em, tức là bên trong function return một function khác
  // ở trên onClick là một callback trả về 1 hàm nhưng chúng ta lại gọi một hàm deleteAccount(record.email) nữa nên chúng ta sẽ nhận được 2 hàm
  function deleteAccount(email) {
    // <=== hàm này là hàm chúng ta gọi
    return () => {
      // <====  hàm này là hàm của onClick trả về
      mutateDeleteAccount(email);
    };
  }

  function editAccount(data, id) {
    mutateEditAccount(
      { data, id },
      {
        onSuccess: () => {
          setEditId('');
        },
      },
    );
  }

  return (
    <>
      <Table pagination={false} columns={columns} dataSource={normalData} />

      <EditAccountModal
        isOpen={Boolean(editId)}
        isSubmitting={isSubmitting}
        data={editData}
        onSubmit={editAccount}
        onCancel={() => setEditId('')}
      />
    </>
  );
};
export default UserList;
