import React from 'react';
import { Card } from 'antd';

const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  dark = false,
  extra,
  children,
}) => {
  const cardStyle = dark ? {
    borderRadius: 12,
    background: '#1e293b',
    color: 'white',
    border: 'none',
  } : {
    borderRadius: 12,
    border: '1px solid #f0f0f0',
  };

  return (
    <Card style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8 }}>
        <span style={{ fontSize: 13, opacity: dark ? 0.7 : 1, color: dark ? 'inherit' : '#94a3b8' }}>
          {title}
        </span>
        {icon}
      </div>
      <div style={{ fontSize: dark ? 28 : 32, fontWeight: 700, marginBottom: 8 }}>
        {value}
      </div>
      {subtitle && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
          {subtitle}
        </div>
      )}
      {extra}
      {children}
    </Card>
  );
};

export default StatCard;