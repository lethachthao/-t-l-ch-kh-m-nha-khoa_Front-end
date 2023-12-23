import { Button, Form, Input } from 'antd';
import Link from 'next/link';

const Login = ({ onSubmit }) => {
  return (
    <Form name="login" onFinish={onSubmit} autoComplete="on" layout="vertical">
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
  );
};

export default Login;
