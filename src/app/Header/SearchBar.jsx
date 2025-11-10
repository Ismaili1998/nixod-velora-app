import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = ({ placeholder = "Search...", className = "w-64" }) => {
  return (
    <Input
      placeholder={placeholder}
      prefix={<SearchOutlined className="text-gray-400" />}
      className={`${className} rounded-lg`}
      style={{ backgroundColor: "#f8f9fa" }}
      bordered={false}
    />
  );
};

export default SearchBar;
