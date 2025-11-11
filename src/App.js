import React, { useState } from 'react';
import { Layout, Menu, Button, Input, Avatar, Badge, Dropdown } from 'antd';
import {
  DashboardOutlined,
  ShoppingOutlined,
  RiseOutlined,
  MailOutlined,
  FileTextOutlined,
  BarChartOutlined,
  RobotOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  ApiOutlined,
  SearchOutlined,
  BellOutlined,
  PlusOutlined,
  FolderOutlined,
  DownOutlined,
} from '@ant-design/icons';
import InvoiceCreator from './Invoice/InvoiceCreator.jsx';
const { Header, Sider, Content } = Layout;

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: 'general',
      label: 'GENERAL',
      type: 'group',
    },
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'menu-optimization',
      icon: <FileTextOutlined />,
      label: 'Menu Optimization',
    },
    {
      key: 'direct-ordering',
      icon: <ShoppingOutlined />,
      label: 'Direct Ordering',
    },
    {
      key: 'marketing',
      icon: <RiseOutlined />,
      label: 'Marketing',
      children: [
        {
          key: 'social-media',
          icon: <RiseOutlined />,
          label: 'Social Media Marketing',
        },
        {
          key: 'email-marketing',
          icon: <MailOutlined />,
          label: 'Email Marketing',
        },
        {
          key: 'physical-marketing',
          icon: <FileTextOutlined />,
          label: 'Physical Marketing',
        },
      ],
    },
    {
      key: 'analytics',
      icon: <BarChartOutlined />,
      label: 'Analytics & Reporting',
    },
    {
      key: 'automation',
      icon: <RobotOutlined />,
      label: 'Automation',
    },
    {
      key: 'support',
      label: 'SUPPORT',
      type: 'group',
    },
    {
      key: 'integrations',
      icon: <ApiOutlined />,
      label: 'Integrations',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      key: 'help',
      icon: <QuestionCircleOutlined />,
      label: 'Help & Support',
    },
  ];

  const userMenuItems = [
    {
      key: 'profile',
      label: 'Profile Settings',
    },
    {
      key: 'logout',
      label: 'Logout',
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={240}
        className="bg-white shadow-sm"
        theme="light"
      >
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            {!collapsed && (
              <span className="text-gray-900 font-semibold text-lg">Platelink</span>
            )}
          </div>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['social-media']}
          defaultOpenKeys={['marketing']}
          items={menuItems}
          className="border-0 pt-4"
        />
      </Sider>

      <Layout>
        <Header className="bg-white shadow-sm px-6 flex items-center justify-between h-16 sticky top-0 z-10">
          <div className="flex items-center gap-6">
            <h1 className="text-gray-900 text-xl font-semibold m-0">
              Social Media Marketing
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <Input
              placeholder="Search..."
              prefix={<SearchOutlined className="text-gray-400" />}
              className="w-64 rounded-lg"
              style={{ backgroundColor: '#f8f9fa' }}
              bordered={false}
            />

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span>Light</span>
              </div>

              <Badge dot>
                <BellOutlined className="text-xl text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
              </Badge>

              <Dropdown
                menu={{ items: userMenuItems }}
                trigger={['click']}
                placement="bottomRight"
              >
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
                  <Avatar
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Audrey"
                    size={32}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Audrey</span>
                    <span className="text-xs text-gray-500">Admin</span>
                  </div>
                  <DownOutlined className="text-xs text-gray-400" />
                </div>
              </Dropdown>
            </div>
          </div>
        </Header>

        <Content className="bg-gray-50 p-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 m-0">
                  Brand List
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  See your projects and create new ones under the selected brand
                </p>
              </div>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                size="large"
                className="bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                Create a Brand
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center py-24">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                  <FolderOutlined className="text-5xl text-gray-300" />
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-700 transition-colors">
                  <PlusOutlined className="text-white text-lg" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-500 mb-6">
                No project has been created yet. Create a new project
              </p>

              <Button
                type="primary"
                icon={<PlusOutlined />}
                size="large"
                className="bg-gray-700 hover:bg-gray-800 rounded-lg"
              >
                Create a Brand
              </Button>
            </div>
          </div>
          <InvoiceCreator/>
        </Content>
      </Layout>
    </Layout>
  );
}