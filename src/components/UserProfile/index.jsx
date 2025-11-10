import React from "react";
import { Avatar, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { USER_MENU_ITEMS } from "@/constants/menuConfig";

const UserProfile = ({
  name = "User",
  role = "Admin",
  avatarUrl,
  onMenuClick,
}) => {
  const handleMenuClick = ({ key }) => {
    if (onMenuClick) {
      onMenuClick(key);
    }
  };

  return (
    <Dropdown
      menu={{ items: USER_MENU_ITEMS, onClick: handleMenuClick }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
        <Avatar
          src={
            avatarUrl ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
          }
          size={32}
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">{name}</span>
          <span className="text-xs text-gray-500">{role}</span>
        </div>
        <DownOutlined className="text-xs text-gray-400" />
      </div>
    </Dropdown>
  );
};

export default UserProfile;
