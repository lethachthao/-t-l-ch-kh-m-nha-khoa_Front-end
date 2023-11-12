'use client';

import { Avatar, Button, Form, Input, Typography } from 'antd';
import Image from 'next/image';
import Logo from '@/assets/images/tooth-logo.jpg';
import { useLogin } from '@/hooks/use-login';
import Link from 'next/link';
import withAuth from '@/hocs/withAuth';

const { Title } = Typography;

const Login = () => {
  const { mutate: login } = useLogin();

  const loginHandler = (data) => {
    login(data);
  };

  return (
    <div className="container">
      <div className="max-w-lg mx-auto p-4 mt-10 rounded-xl shadow bg-white">
        <div className="flex flex-col items-center">
          <Image src={Logo} alt="iTooth" width={100} height={100} />
          <Title level={3}>Đăng nhập trang quản trị</Title>
        </div>
        <Form
          name="login"
          onFinish={loginHandler}
          autoComplete="on"
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email của bạn!',
              },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu của bạn!',
              },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item>
            <span>Bạn chưa có tài khoản? </span>
            <Link href="/signup">Đăng kí tài khoản</Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
