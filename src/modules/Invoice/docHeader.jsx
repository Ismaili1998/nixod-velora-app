import React from "react";
import {
  FileTextOutlined,
  UndoOutlined,
  RedoOutlined,
  LayoutOutlined,
  FontSizeOutlined,
  LinkOutlined,
  SettingOutlined,
  DownloadOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Divider } from "antd";
import InvoicePDFDownloadButton from "./InvoicePDF"; // adjust path as needed

const InvoiceNavbar = ({ invoiceData }) => {
  return (
    <div className="bg-slate-800 border-b border-slate-700 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <FileTextOutlined className="text-white text-xl" />
            </div>
            <span className="text-white text-xl font-semibold">
              InvoiceBuilder
            </span>
          </div>

          <div className="flex items-center gap-1 ml-6">
            <Button
              type="text"
              icon={<UndoOutlined />}
              className="text-gray-300 hover:text-white hover:bg-slate-700"
            />
            <Button
              type="text"
              icon={<RedoOutlined />}
              className="text-gray-300 hover:text-white hover:bg-slate-700"
            />
            <Divider type="vertical" className="bg-slate-600 mx-2" />
            <Button
              type="text"
              icon={<LayoutOutlined />}
              className="text-gray-300 hover:text-white hover:bg-slate-700"
            />
            <Button
              type="text"
              icon={<FontSizeOutlined />}
              className="text-gray-300 hover:text-white hover:bg-slate-700"
            />
            <Button
              type="text"
              icon={<LinkOutlined />}
              className="text-gray-300 hover:text-white hover:bg-slate-700"
            />
            <Button
              type="text"
              icon={<SettingOutlined />}
              className="text-gray-300 hover:text-white hover:bg-slate-700"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <InvoicePDFDownloadButton invoiceData={invoiceData}>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              className="bg-teal-500 hover:bg-teal-600 border-0 rounded-full px-6 shadow-lg"
              size="large"
            >
              Download
              <StarOutlined className="ml-2" />
            </Button>
          </InvoicePDFDownloadButton>

          <Button
            type="default"
            className="bg-white text-slate-800 border-0 rounded-full px-6"
            size="large"
          >
            Send by Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceNavbar;
