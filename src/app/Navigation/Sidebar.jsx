import React from "react";
import { Layout, Menu } from "antd";
import Logo from "@/app/Logo";
import { MENU_ITEMS, SIDEBAR_CONFIG } from "./menuConfig";

const { Sider } = Layout;

const Sidebar = ({ collapsed, onCollapse, selectedKey = "social-media" }) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={SIDEBAR_CONFIG.width}
      className="bg-white shadow-sm"
      theme={SIDEBAR_CONFIG.theme}
    >
      <Logo collapsed={collapsed} />
      <Menu
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        defaultOpenKeys={["marketing"]}
        items={MENU_ITEMS}
        className="border-0 pt-4"
      />
    </Sider>
  );
};

export default Sidebar;
