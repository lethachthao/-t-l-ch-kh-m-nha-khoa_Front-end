'use client';

import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'; //icon
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Logo from '@/assets/images/tooth-logo.jpg';
import Image from 'next/image';
import HeaderAdmin from './_components/header';
import Link from 'next/link';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label: <Link href={`/admin/${key}`}>{label}</Link>,
    //em tuong laf to thay href, trong nextjs cai Link component cua no la href chu ko phai `to` nhu ben react router dom nha em, vang a
  };
}

const items = [
  getItem('Quản lí bệnh nhân', 'user-manager', <PieChartOutlined />),
  getItem('Quản lí bác sĩ', 'doctor-manager', <DesktopOutlined />),
  getItem('Quản lí chuyên khoa', 'medical-specialty', <UserOutlined />, [
    getItem('Cơ xương khớp', '3'),
    getItem('Thần kinh', '4'),
    getItem('Tiêu hóa', '5'),
    getItem('Tim mạch', '5'),
  ]),
  getItem('Quản lí thời gian hẹn', 'works-manager', <TeamOutlined />),
  getItem('Lịch sử khám bệnh', 'history-manager', <FileOutlined />),
];

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      className="min-h-screen"
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        theme="light"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="text-white font-bold flex justify-center items-center relative overflow-hidden py-2">
          <Image src={Logo} alt="iTooth" sizes="100vw" width={80} height={80} />
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header className="!p-0 !bg-white">
          <HeaderAdmin />
        </Header>
        <Content className="my-[16px] container mx-auto max-w-5xl">
          {children}
        </Content>
        <Footer className="text-center">
          iTooth © 2023. All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
