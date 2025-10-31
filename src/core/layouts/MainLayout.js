import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Header from './Header';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('dashboard');

  return (
    <Layout style={{ minHeight: '100vh', background: '#fafafa' }}>
      <Sidebar
        collapsed={collapsed}
        selectedKey={selectedKey}
        onMenuSelect={({ key }) => setSelectedKey(key)}
      />
      <Layout>
        <Header
          collapsed={collapsed}
          onToggleMenu={() => setCollapsed(!collapsed)}
        />
        <Content style={{ padding: 24 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;