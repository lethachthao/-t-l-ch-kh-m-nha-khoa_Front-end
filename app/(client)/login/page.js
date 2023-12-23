'use client';

import { Avatar, Button, Form, Input, Typography } from 'antd';
import Image from 'next/image';
import Logo from '@/assets/images/tooth-logo.jpg';
import { useLogin } from '@/hooks/use-login';
import Link from 'next/link';
import withAuth from '@/hocs/withAuth';
import Login from '@/components/login';

const { Title } = Typography;

const LoginPage = () => {
  const { mutate: login } = useLogin();

  const loginHandler = (data) => {
    login(data);
  };

  return (
    <div className="container">
      <div className="max-w-lg mx-auto p-4 mt-10 rounded-xl shadow bg-white">
        <div className="flex flex-col items-center">
          <Image src={Logo} alt="iTooth" width={100} height={100} />
          <Title level={3}>Đăng nhập người dùng</Title>
        </div>
        <Login onSubmit={loginHandler} />
      </div>
    </div>
  );
};

export default LoginPage;
