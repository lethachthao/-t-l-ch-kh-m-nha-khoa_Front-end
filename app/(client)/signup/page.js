'use client';

import React from 'react';
import { Button, DatePicker, Form, Input, Radio, Typography } from 'antd';
import Image from 'next/image';
import Logo from '@/assets/images/tooth-logo.jpg';
import moment from 'moment';
import { useSignup } from '@/hooks/use-signup';

const { Title } = Typography;

const Signup = () => {
  const { mutate: signup } = useSignup();

  const onFinish = (values) => {
    values.birthday = moment(values.birthday).format();
    signup(values);
  };

  return (
    <div className="container">
      <div className="max-w-lg mx-auto p-4 mt-10 rounded-xl shadow bg-white">
        <div className="flex flex-col items-center">
          <Image src={Logo} alt="iTooth" width={100} height={100} />
          <Title level={3}>Đăng kí tài khoản</Title>
        </div>
        <Form
          name="signup"
          onFinish={onFinish}
          autoComplete="on"
          layout="vertical"
        >
          <Form.Item
            label="Tên bệnh nhân"
            name="name"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên bệnh nhân!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email bệnh nhân!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập địa chỉ bệnh nhân!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số điện thoại bệnh nhân!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Ngày sinh"
            name="birthday"
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn tuổi bệnh nhân!',
              },
            ]}
          >
            <DatePicker format="DD/MM/YYYY" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Giới tính"
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn giới bệnh nhân!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value="male">Nam</Radio>
              <Radio value="female">Nữ</Radio>
              <Radio value="lgbt">Khác</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Signup;
