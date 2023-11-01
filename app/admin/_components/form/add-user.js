import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Avatar, Button, Form, Input } from 'antd';

const AddUserForm = ({ name, onSubmit }) => {
  const [form] = Form.useForm();
  const fieldName = Form.useWatch('name', form);

  const onFinish = (values) => {
    onSubmit?.(values);
  };

  return (
    <div>
      <Alert
        message="Warning"
        description="Tạo tài khoản chỉ dành cho mục đích test, không sử dụng trong thực
            tế để đảm bảo an toàn thông tin người dùng."
        type="warning"
        className="mb-4"
        showIcon
      />

      <div className="flex flex-col items-center text-center gap-2">
        <Avatar size={100} icon={<UserOutlined />} />
        <span className="font-bold text-lg">{`${name} ${
          fieldName || ''
        }`}</span>
      </div>

      <Form
        name="signup_form"
        layout="vertical"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input name!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input Email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="phonenumber"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input Phone Number!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Phone Number"
          />
        </Form.Item>

        <Form.Item
          name="Address"
          label="Address"
          rules={[
            {
              required: true,
              message: 'Please input Address!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Address"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Tạo tài khoản
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddUserForm;
