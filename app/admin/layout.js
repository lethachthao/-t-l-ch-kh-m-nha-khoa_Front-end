'use client';

import React, { useMemo, useState } from 'react';
import { Layout, Menu } from 'antd';
import Logo from '@/assets/images/tooth-logo.jpg';
import Image from 'next/image';
import HeaderAdmin from './_components/header';
import { menuRoutes } from './_configs/menu-routes';
import withAuth from '@/hocs/withAuth';
import { useAuth } from '@/hooks/use-auth';

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = ({ children }) => {
  const { data: profile } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const menuRoutesFilter = useMemo(() => {
    return menuRoutes.filter((route) =>
      route.roleAccess.includes(profile?.data?.role),
    );
  }, [profile]);

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
            items={menuRoutesFilter}
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

export default withAuth()(AdminLayout);
