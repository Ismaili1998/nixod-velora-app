import React from 'react';
import { Layout, Menu, Button, Avatar } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { sidebarMenuItems } from '../constants/menuItems';

const { Sider } = Layout;

const Logo = ({ collapsed }) => (
  <div style={{
    height: 48,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
    paddingLeft: collapsed ? 0 : 8,
    justifyContent: collapsed ? 'center' : 'flex-start',
  }}>
    <div style={{
      width: 36,
      height: 36,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>N</span>
    </div>
    {!collapsed && <span style={{ fontWeight: 700, fontSize: 16 }}>Nixod.com</span>}
  </div>
);

const UserProfile = ({ collapsed }) => (
  <div style={{
    position: 'absolute',
    bottom: 24,
    left: collapsed ? 8 : 12,
    right: collapsed ? 8 : 12,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: collapsed ? 8 : 12,
    borderRadius: 8,
    cursor: 'pointer',
    background: '#fef2f2',
  }}>
    <Avatar size={36} style={{ background: '#ec4899', flexShrink: 0 }}>JD</Avatar>
    {!collapsed && (
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          John Doe
        </div>
        <div style={{ fontSize: 11, color: '#64748b' }}>Admin</div>
      </div>
    )}
  </div>
);

const Sidebar = ({ collapsed, selectedKey, onMenuSelect }) => {
  return (
    <Sider
      width={240}
      collapsed={collapsed}
      collapsedWidth={60}
      style={{
        background: 'white',
        borderRight: '1px solid #f0f0f0',
        padding: collapsed ? '12px 8px' : '12px',
      }}
    >
      <Logo collapsed={collapsed} />
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={onMenuSelect}
        style={{
          background: 'transparent',
          border: 'none',
          fontSize: 13,
        }}
        items={sidebarMenuItems}
      />
      {!collapsed && (
        <Button
          type="text"
          icon={<PlusOutlined />}
          style={{ marginTop: 16, width: '100%', textAlign: 'left' }}
        >
          Add new
        </Button>
      )}
      <UserProfile collapsed={collapsed} />
    </Sider>
  );
};

export default Sidebar;