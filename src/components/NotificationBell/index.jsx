import React from "react";
import { Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";

const NotificationBell = ({ hasNotification = true, onClick }) => {
  return (
    <Badge dot={hasNotification}>
      <BellOutlined
        className="text-xl text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
        onClick={onClick}
      />
    </Badge>
  );
};

export default NotificationBell;
