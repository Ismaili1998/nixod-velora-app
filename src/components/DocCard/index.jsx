// pages/Invoices/components/DocCard.jsx
import React from 'react';
import { Card, Dropdown, Button, Avatar } from 'antd';
import {
  MoreOutlined,
  UserOutlined,
  CalendarOutlined,
  FileTextOutlined,
  DollarOutlined,
  MailOutlined,
  EyeOutlined,
  EditOutlined,
  DownloadOutlined,
  SendOutlined,
  CopyOutlined,
  DeleteOutlined,
  BankOutlined
} from '@ant-design/icons';

const DocCard = ({ doc, onAction }) => {
  const {
    number,
    customer,
    customerEmail,
    status,
    date,
    dueDate,
    total,
    items
  } = doc;

  const statusConfig = {
    paid: { 
      text: 'PAID', 
      className: 'text-green-600 border-green-600',
      stampBg: 'bg-green-50',
      stampRotate: '-rotate-12'
    },
    draft: { 
      text: 'DRAFT', 
      className: 'text-gray-600 border-gray-600',
      stampBg: 'bg-gray-50',
      stampRotate: 'rotate-12'
    },
    overdue: { 
      text: 'OVERDUE', 
      className: 'text-red-600 border-red-600',
      stampBg: 'bg-red-50',
      stampRotate: '-rotate-12'
    },
    unpaid: { 
      text: 'UNPAID', 
      className: 'text-orange-600 border-orange-600',
      stampBg: 'bg-orange-50',
      stampRotate: 'rotate-12'
    },
  };

  const config = statusConfig[status];

  // Modern menu items with icons and descriptions
  const menuItems = [
    { 
      key: 'view', 
      label: (
        <div className="flex items-center gap-3 px-1 py-1">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50">
            <EyeOutlined className="text-teal-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">View Details</div>
            <div className="text-xs text-gray-500">See full document</div>
          </div>
        </div>
      ),
      onClick: () => onAction('view', doc)
    },
    { 
      key: 'edit', 
      label: (
        <div className="flex items-center gap-3 px-1 py-1">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-50">
            <EditOutlined className="text-green-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Edit</div>
            <div className="text-xs text-gray-500">Modify document</div>
          </div>
        </div>
      ),
      onClick: () => onAction('edit', doc)
    },
    { 
      key: 'download', 
      label: (
        <div className="flex items-center gap-3 px-1 py-1">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-50">
            <DownloadOutlined className="text-purple-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Download PDF</div>
            <div className="text-xs text-gray-500">Save to device</div>
          </div>
        </div>
      ),
      onClick: () => onAction('download', doc)
    },
    { 
      key: 'send', 
      label: (
        <div className="flex items-center gap-3 px-1 py-1">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50">
            <SendOutlined className="text-indigo-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Send to Customer</div>
            <div className="text-xs text-gray-500">Email document</div>
          </div>
        </div>
      ),
      onClick: () => onAction('send', doc)
    },
    { 
      type: 'divider',
      className: 'my-2'
    },
    { 
      key: 'duplicate', 
      label: (
        <div className="flex items-center gap-3 px-1 py-1">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50">
            <CopyOutlined className="text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Duplicate</div>
            <div className="text-xs text-gray-500">Create a copy</div>
          </div>
        </div>
      ),
      onClick: () => onAction('duplicate', doc)
    },
    { 
      type: 'divider',
      className: 'my-2'
    },
    { 
      key: 'delete', 
      label: (
        <div className="flex items-center gap-3 px-1 py-1">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-50">
            <DeleteOutlined className="text-red-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-red-600">Delete</div>
            <div className="text-xs text-red-400">Remove permanently</div>
          </div>
        </div>
      ),
      danger: true,
      onClick: () => onAction('delete', doc)
    },
  ];

  return (
    <div className="invoice-card-wrapper group h-full">
      <Card
        className="invoice-card relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-2xl cursor-pointer bg-white h-full flex flex-col"
        bodyStyle={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        {/* Document Header - Company Letterhead Style - FIXED HEIGHT */}
        <div className="relative bg-gradient-to-b from-gray-50 to-white border-b-2 border-gray-200 px-4 py-3 flex-shrink-0 h-[90px]">
          {/* Decorative corner lines */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-teal-500 opacity-20" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-teal-500 opacity-20" />
          
          <div className="relative flex justify-between items-start h-full">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <FileTextOutlined className="text-gray-600 text-sm" />
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Invoice
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-0 tracking-tight truncate">
                {number}
              </h3>
              <p className="text-[10px] text-gray-500">Invoice Number</p>
            </div>
            
            <Dropdown
              menu={{ 
                items: menuItems,
                className: 'modern-dropdown-menu'
              }}
              trigger={['click']}
              placement="bottomRight"
              overlayClassName="modern-dropdown-overlay"
            >
              <Button 
                type="text" 
                size="small"
                icon={<MoreOutlined className="text-gray-400 text-sm" />}
                className="hover:bg-gray-100 hover:scale-110 border-0 -mt-1 flex-shrink-0 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              />
            </Dropdown>
          </div>

          {/* Status Stamp */}
          <div className={`absolute top-3 right-10 ${config.stampRotate}`}>
            <div className={`${config.stampBg} ${config.className} border-3 rounded px-2 py-1 font-black text-xs tracking-wider opacity-40 group-hover:opacity-70 transition-opacity whitespace-nowrap`}>
              {config.text}
            </div>
          </div>
        </div>

        {/* Document Body - FLEX GROW */}
        <div className="px-4 py-3 bg-white flex-1 flex flex-col">
          {/* Bill To Section - FIXED HEIGHT */}
          <div className="mb-3 flex-shrink-0">
            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <div className="w-6 h-0.5 bg-gray-500" />
              Bill To
            </div>
            <div className="flex items-start gap-2 bg-gray-50 p-2 rounded border border-gray-100 h-[52px]">
              <Avatar 
                size={32} 
                icon={<BankOutlined  />} 
                className="bg-gradient-to-br from-teal-500 to-teal-600 flex-shrink-0 shadow-sm"
              />
              <div className="flex-1 min-w-0 overflow-hidden">
                <h4 className="font-bold text-gray-900 text-xs mb-0.5 truncate" title={customer}>
                  {customer}
                </h4>
                <div className="flex items-center gap-1 text-[10px] text-gray-600">
                  <MailOutlined className="text-gray-400 flex-shrink-0" style={{ fontSize: '10px' }} />
                  <span className="truncate" title={customerEmail}>{customerEmail}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Details Grid - FIXED HEIGHT */}
          <div className="grid grid-cols-2 gap-2 mb-3 flex-shrink-0">
            <div className="bg-gray-50 p-2 rounded border border-gray-100 h-[48px]">
              <div className="flex items-center gap-1 mb-0.5">
                <CalendarOutlined className="text-gray-400" style={{ fontSize: '10px' }} />
                <span className="text-[10px] text-gray-600 font-medium">Issue Date</span>
              </div>
              <p className="font-semibold text-gray-900 text-xs truncate">{date}</p>
            </div>
            
            <div className="bg-gray-50 p-2 rounded border border-gray-100 h-[48px]">
              <div className="flex items-center gap-1 mb-0.5">
                <CalendarOutlined className="text-gray-400" style={{ fontSize: '10px' }} />
                <span className="text-[10px] text-gray-600 font-medium">Due Date</span>
              </div>
              <p className={`font-semibold text-xs truncate ${status === 'overdue' ? 'text-red-600' : 'text-gray-900'}`}>
                {dueDate}
              </p>
            </div>
          </div>

          {/* Items Summary - FIXED HEIGHT */}
          <div className="bg-teal-50 border-2 border-none rounded p-2 mb-3 flex-shrink-0 h-[40px]">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center gap-1.5">
                <FileTextOutlined className="text-gray-600 text-xs" />
                <span className="text-xs font-medium text-gray-700">Line Items</span>
              </div>
              <span className="bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {items}
              </span>
            </div>
          </div>

          {/* Total Section - FIXED HEIGHT - Push to bottom */}
          <div className="border-t-2 border-dashed border-gray-300 pt-3 mt-auto flex-shrink-0">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded p-3 shadow-md h-[50px]">
              <div className="flex items-center justify-between h-full">
                <div className="flex-1 min-w-0">
                  <p className="text-[8px] text-gray-400 uppercase tracking-wider mb-0.5">
                    Total Amount
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-black text-white truncate" title={`$${total.toLocaleString()}`}>
                      ${total.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-gray-400 flex-shrink-0">USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Footer - Subtle pattern - FIXED HEIGHT */}
        <div className="h-1 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-200 flex-shrink-0" />

        {/* Paper fold effect corner */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-t-gray-300 border-l-[15px] border-l-transparent opacity-0 group-hover:opacity-30 transition-opacity" />
      </Card>

      {/* Shadow underneath for depth */}
      <div className="absolute inset-x-2 bottom-0 h-3 bg-gray-900 opacity-5 blur-md -z-10 group-hover:opacity-10 transition-opacity rounded-lg" />
    </div>
  );
};

export default DocCard;