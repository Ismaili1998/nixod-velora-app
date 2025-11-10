import React from "react";
import { Layout } from "antd";
import SearchBar from "./SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import NotificationBell from "@/components/NotificationBell";
import UserProfile from "@/components/UserProfile";

const { Header } = Layout;

const AppHeader = ({
  title = "Dashboard",
  user,
  onThemeToggle,
  onNotificationClick,
  onUserMenuClick,
}) => {
  return (
    <Header className="bg-white shadow-sm px-6 flex items-center justify-between h-16 sticky top-0 z-10">
      <div className="flex items-center gap-6">
        <h1 className="text-gray-900 text-xl font-semibold m-0">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        <SearchBar />
        <div className="flex items-center gap-4">
          <ThemeToggle onToggle={onThemeToggle} />
          <NotificationBell onClick={onNotificationClick} />
          <UserProfile
            name={user?.name}
            role={user?.role}
            avatarUrl={user?.avatarUrl}
            onMenuClick={onUserMenuClick}
          />
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
