import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./Navigation/Sidebar.jsx";
import AppHeader from "./Header/Header.jsx";
import Invoice from "@/modules/invoice";

const { Content } = Layout;

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [brands, setBrands] = useState([]);
  const [currentUser] = useState({
    name: "Audrey",
    role: "Admin",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Audrey",
  });

  // Event Handlers
  const handleCreateBrand = () => {
    console.log("Create brand clicked");
    // Add your brand creation logic here
  };

  const handleThemeToggle = () => {
    console.log("Theme toggle clicked");
    // Add your theme toggle logic here
  };

  const handleNotificationClick = () => {
    console.log("Notification clicked");
    // Add your notification logic here
  };

  const handleUserMenuClick = (key) => {
    console.log("User menu clicked:", key);
    // Add your user menu logic here
    if (key === "logout") {
      // Handle logout
    } else if (key === "profile") {
      // Handle profile navigation
    }
  };

  return (
    <Layout className="min-h-screen">
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        selectedKey="social-media"
      />

      <Layout>
        <AppHeader
          title="Velora erp"
          user={currentUser}
          onThemeToggle={handleThemeToggle}
          onNotificationClick={handleNotificationClick}
          onUserMenuClick={handleUserMenuClick}
        />

        <Content className="bg-gray-50 p-6">
          <Invoice />
        </Content>
      </Layout>
    </Layout>
  );
}
