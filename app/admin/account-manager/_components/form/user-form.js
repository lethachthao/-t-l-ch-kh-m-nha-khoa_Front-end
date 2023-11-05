import React, { useMemo } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Avatar, Button, Form, Input, Radio, Spin } from 'antd';

const initialData = {
  name: '',
  email: '',
  phoneNumber: '',
  address: '',
  accountType: '',
  password: '',
};

const UserForm = ({ isSubmitting = false, defaultData, onSubmit }) => {
  const { name, email, phoneNumber, address, accountType } =
    defaultData || initialData;

  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);

  const onFinish = (values) => {
    onSubmit?.({ ...defaultData, ...values });
  };

  const isEditMode = useMemo(() => Boolean(defaultData), [defaultData]);
  // khi bấm submit, thì ngay lập tức cái prop callback `onFinish` trong Form sẽ được gọi, anh pass vào đó
  // cái onSubmit tiếp tục, onSubmit ở UserForm là cái prop callback của chúng ta tự làm riêng mục đích là truyền lên trên theo dạng callback void
  // đó em qua bên page kia em thấy cái prop y hệt cái onSubmit bên đây truyền lên, tức là bên đây truyền lên qua prop nào là bên page kia chúng ta sẽ có prop y hệt như vậy
  return (
    <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
      <Alert
        message="Warning"
        description="Tạo tài khoản chỉ dành cho mục đích test, không sử dụng trong thực
            tế để đảm bảo an toàn thông tin người dùng."
        type="warning"
        showIcon
      />

      <div className="flex flex-col items-center text-center gap-2">
        <Avatar size={100} icon={<UserOutlined />} />
        <span className="font-bold text-lg">{nameValue || ''}</span>
      </div>

      <Spin spinning={isSubmitting}>
        <Form
          name="signup_form"
          layout="vertical"
          form={form}
          initialValues={{
            name: name || '',
            email: email || '',
            phoneNumber: phoneNumber || '',
            address: address || '',
            accountType: accountType || '',
          }}
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
            name="phoneNumber"
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
            name="address"
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
            name="accountType"
            label="Loại tài khoản"
            rules={[
              {
                required: true,
                message: 'Please input Account Type!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value="patient">Bệnh nhân</Radio>
              <Radio value="doctor">Bác sĩ</Radio>
              <Radio value="admin">Quản trị viên</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            hidden={isEditMode}
            rules={[
              {
                required: !isEditMode,
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
              {!isEditMode ? 'Tạo tài khoản' : 'Cập nhật tài khoản'}
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};
export default UserForm;
