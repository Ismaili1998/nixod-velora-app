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
} from "@ant-design/icons";

export const MENU_ITEMS = [
  {
    key: "general",
    label: "GENERAL",
    type: "group",
  },
  {
    key: "dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "menu-optimization",
    icon: <FileTextOutlined />,
    label: "Menu Optimization",
  },
  {
    key: "direct-ordering",
    icon: <ShoppingOutlined />,
    label: "Direct Ordering",
  },
  {
    key: "marketing",
    icon: <RiseOutlined />,
    label: "Marketing",
    children: [
      {
        key: "social-media",
        icon: <RiseOutlined />,
        label: "Social Media Marketing",
      },
      {
        key: "email-marketing",
        icon: <MailOutlined />,
        label: "Email Marketing",
      },
      {
        key: "physical-marketing",
        icon: <FileTextOutlined />,
        label: "Physical Marketing",
      },
    ],
  },
  {
    key: "analytics",
    icon: <BarChartOutlined />,
    label: "Analytics & Reporting",
  },
  {
    key: "automation",
    icon: <RobotOutlined />,
    label: "Automation",
  },
  {
    key: "support",
    label: "SUPPORT",
    type: "group",
  },
  {
    key: "integrations",
    icon: <ApiOutlined />,
    label: "Integrations",
  },
  {
    key: "settings",
    icon: <SettingOutlined />,
    label: "Settings",
  },
  {
    key: "help",
    icon: <QuestionCircleOutlined />,
    label: "Help & Support",
  },
];

export const USER_MENU_ITEMS = [
  {
    key: "profile",
    label: "Profile Settings",
  },
  {
    key: "logout",
    label: "Logout",
  },
];

export const SIDEBAR_CONFIG = {
  width: 240,
  theme: "light",
};

export const APP_NAME = "Velora";
