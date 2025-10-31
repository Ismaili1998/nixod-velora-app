import { StarOutlined, ClockCircleOutlined } from '@ant-design/icons';

export const sidebarMenuItems = [
  {
    key: 'starred',
    icon: <StarOutlined />,
    label: 'Starred',
  },
  {
    key: 'recent',
    icon: <ClockCircleOutlined />,
    label: 'Recent',
  },
  {
    key: 'divider1',
    type: 'divider',
  },
  {
    key: 'sales-list',
    label: 'Sales list',
  },
  {
    key: 'goals',
    label: 'Goals',
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
  },
  {
    key: 'divider2',
    type: 'divider',
  },
  {
    key: 'shared',
    label: 'Shared with me',
    children: [
      { key: 'cargo2go', label: 'Cargo2go' },
      { key: 'cloudz3r', label: 'Cloudz3r', badge: 2 },
      { key: 'idioma', label: 'Idioma' },
      { key: 'syllables', label: 'Syllables' },
    ],
  },
  {
    key: 'reports',
    label: 'Reports',
    children: [
      { key: 'share-with-me', label: 'Share with me' },
      { key: 'deals-by-user', label: 'Deals by user' },
      { key: 'deal-duration', label: 'Deal duration' },
    ],
  },
];