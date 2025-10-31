import React from 'react';
import { Layout, Button, Input, Space, Badge, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  BellOutlined,
} from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header = ({ collapsed, onToggleMenu }) => {
  return (
    <AntHeader style={{
      background: 'white',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #f0f0f0',
      height: 64,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggleMenu}
          style={{ fontSize: 18 }}
        />
        <Input
          placeholder='Try searching "insights"'
          prefix={<SearchOutlined style={{ color: '#94a3b8' }} />}
          style={{ width: 320, borderRadius: 8 }}
          size="large"
        />
      </div>

      <Space size={16}>
        <Badge dot>
          <BellOutlined style={{ fontSize: 20, cursor: 'pointer' }} />
        </Badge>
        <Avatar.Group maxCount={3}>
          <Avatar style={{ background: '#3b82f6' }}>A</Avatar>
          <Avatar style={{ background: '#ec4899' }}>E</Avatar>
          <Avatar style={{ background: '#8b5cf6' }}>M</Avatar>
          <Avatar style={{ background: '#10b981' }}>+</Avatar>
        </Avatar.Group>
      </Space>
    </AntHeader>
  );
};

export default Header;