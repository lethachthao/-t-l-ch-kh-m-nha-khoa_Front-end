import React from 'react';
import { Button, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const columns = [
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
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => (
      <div className="flex items-center gap-2">
        <Button type="primary" danger size="small" icon={<DeleteOutlined />}>
          Xóa
        </Button>
        <Button type="primary" size="small" icon={<EditOutlined />}>
          Sửa
        </Button>
      </div>
    ),
  },
];
const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];
const UserList = () => (
  <Table
    pagination={false}
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
);
export default UserList;
