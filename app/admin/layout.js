'use client';

import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Logo from '@/assets/images/tooth-logo.jpg';
import Image from 'next/image';
import HeaderAdmin from './_components/header';
import Link from 'next/link';
import { menuRoutes } from './_configs/menu-routes';

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <main className="relative" role="main">
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
            <Image
              src={Logo}
              alt="iTooth"
              sizes="100vw"
              width={80}
              height={80}
            />
          </div>
          <Menu
            theme="light"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={menuRoutes}
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
    </main>
  );
};

export default AdminLayout;
