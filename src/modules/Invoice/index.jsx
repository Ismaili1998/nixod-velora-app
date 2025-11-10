// pages/Invoices/InvoicesPage.jsx
import React, { useState } from "react";
import {
  Input,
  Button,
  Table,
  Tag,
  Dropdown,
  Select,
  DatePicker,
  Space,
  Badge,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
  MoreOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  MessageOutlined,
  HourglassOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import StatsCard from "@/components/StatsCard";

const { RangePicker } = DatePicker;

const InvoicesPage = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    customer: "all",
    status: "all",
    dateRange: null,
  });

  // Stats data
  const stats = [
    {
      icon: <ClockCircleOutlined className="text-2xl" />,
      value: "$60,400",
      label: "Overdue amount",
      color: "black",
    },
    {
      icon: <FileTextOutlined className="text-2xl" />,
      value: "$60,400",
      label: "Drafted totals",
      color: "black",
    },
    {
      icon: <MessageOutlined className="text-2xl" />,
      value: "$60,400",
      label: "Unpaid totals",
      color: "black",
    },
    {
      icon: <HourglassOutlined className="text-2xl" />,
      value: "08",
      label: "Average paid time",
      suffix: "days",
      color: "black",
    },
    {
      icon: <CalendarOutlined className="text-2xl" />,
      value: "05",
      label: "Scheduled for today",
      suffix: "invoices",
      color: "bg-indigo-50",
    },
  ];

  // Mock data
  const invoices = [
    {
      id: 1,
      status: "paid",
      date: "23.05.2023",
      number: "#054",
      customer: "Jane Cooper",
      total: 2800,
      amount: null,
    },
    {
      id: 2,
      status: "paid",
      date: "23.05.2023",
      number: "#054",
      customer: "Esther Howard",
      total: 2800,
      amount: null,
    },
    {
      id: 3,
      status: "draft",
      date: "23.05.2023",
      number: "#054",
      customer: "Cameron Williamson",
      total: 2800,
      amount: null,
    },
    {
      id: 4,
      status: "paid",
      date: "23.05.2023",
      number: "#054",
      customer: "Brooklyn Simmons",
      total: 2800,
      amount: 400,
    },
    {
      id: 5,
      status: "overdue",
      date: "23.05.2023",
      number: "#054",
      customer: "Leslie Alexander",
      total: 2800,
      amount: 400,
    },
    {
      id: 6,
      status: "overdue",
      date: "23.05.2023",
      number: "#054",
      customer: "Arlene McCoy",
      total: 2800,
      amount: 400,
    },
    {
      id: 7,
      status: "overdue",
      date: "23.05.2023",
      number: "#054",
      customer: "Marvin McKinney",
      total: 2800,
      amount: 400,
    },
    {
      id: 8,
      status: "overdue",
      date: "23.05.2023",
      number: "#054",
      customer: "Kathryn Murphy",
      total: 2800,
      amount: 400,
    },
  ];

  // Table columns
  const columns = [
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (status) => {
        const statusConfig = {
          paid: {
            color: "success",
            text: "Paid",
            className: "bg-green-100 text-green-700 border-0",
          },
          draft: {
            color: "default",
            text: "Draft",
            className: "bg-gray-100 text-gray-700 border-0",
          },
          overdue: {
            color: "warning",
            text: "Overdue",
            className: "bg-orange-100 text-orange-700 border-0",
          },
          unpaid: {
            color: "error",
            text: "Unpaid",
            className: "bg-red-100 text-red-700 border-0",
          },
        };
        const config = statusConfig[status];
        return (
          <Tag
            className={`${config.className} px-3 py-1 rounded-full font-medium`}
          >
            {config.text}
          </Tag>
        );
      },
    },
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
      sorter: true,
      width: 150,
    },
    {
      title: "NUMBER",
      dataIndex: "number",
      key: "number",
      width: 120,
    },
    {
      title: "CUSTOMER",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "TOTAL",
      dataIndex: "total",
      key: "total",
      width: 120,
      render: (total) => `$${total}`,
    },
    {
      title: "",
      dataIndex: "amount",
      key: "amount",
      width: 100,
      render: (amount) => (amount ? `$${amount}` : null),
    },
    {
      title: "",
      key: "actions",
      width: 80,
      render: (_, record) => (
        <Space size="small">
          <Button
            type="text"
            icon={<DownOutlined />}
            size="small"
            className="text-gray-400 hover:text-gray-600"
          />
          <Dropdown
            menu={{
              items: [
                { key: "view", label: "View Details" },
                { key: "edit", label: "Edit" },
                { key: "duplicate", label: "Duplicate" },
                { type: "divider" },
                { key: "delete", label: "Delete", danger: true },
              ],
            }}
            trigger={["click"]}
          >
            <Button
              type="text"
              icon={<MoreOutlined />}
              size="small"
              className="text-gray-400 hover:text-gray-600"
            />
          </Dropdown>
        </Space>
      ),
    },
  ];

  // Tab configuration
  const tabs = [
    { key: "all", label: "All Invoices", count: 54 },
    { key: "unpaid", label: "Unpaid", count: 14 },
    { key: "draft", label: "Draft", count: 3 },
  ];

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const applyFilters = () => {
    console.log("Applying filters:", filters);
    // Apply filter logic here
  };

  const resetFilters = () => {
    setFilters({
      customer: "all",
      status: "all",
      dateRange: null,
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
        <Dropdown
          menu={{
            items: [
              { key: "new", label: "Create new invoice" },
              { key: "import", label: "Import invoices" },
              { key: "template", label: "From template" },
            ],
          }}
          trigger={["click"]}
        >
          <Button
            type="primary"
            size="large"
            className="bg-blue-600 hover:bg-blue-700 rounded-lg px-6"
          >
            Create an invoice <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-xl shadow-sm">
        {/* Search and Filter Bar */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <Input
              placeholder="Enter invoice number"
              prefix={<SearchOutlined className="text-gray-400" />}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="max-w-md rounded-lg"
              size="large"
            />

            <div className="flex items-center gap-3">
              {/* Tabs */}
              <div className="flex items-center gap-2">
                {tabs.map((tab) => (
                  <Button
                    key={tab.key}
                    type={selectedTab === tab.key ? "primary" : "text"}
                    onClick={() => setSelectedTab(tab.key)}
                    className={`rounded-lg ${
                      selectedTab === tab.key
                        ? "bg-blue-50 text-blue-600 border-blue-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                    <Badge
                      count={tab.count}
                      className="ml-2"
                      style={{
                        backgroundColor:
                          selectedTab === tab.key ? "#3b82f6" : "#e5e7eb",
                        color: selectedTab === tab.key ? "white" : "#6b7280",
                      }}
                    />
                  </Button>
                ))}
              </div>

              {/* Filter Button */}
              <Button
                icon={<FilterOutlined />}
                onClick={toggleFilter}
                size="large"
                className="rounded-lg"
              >
                Filter
              </Button>

              {/* Sort Dropdown */}
              <Select
                defaultValue="newest"
                suffixIcon={<DownOutlined />}
                size="large"
                className="w-40"
                options={[
                  { value: "newest", label: "Newest First" },
                  { value: "oldest", label: "Oldest First" },
                  { value: "amount-high", label: "Amount: High to Low" },
                  { value: "amount-low", label: "Amount: Low to High" },
                ]}
              />
            </div>
          </div>

          {/* Filter Panel */}
          {filterVisible && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Select
                  placeholder="All Customers"
                  size="large"
                  value={filters.customer}
                  onChange={(value) =>
                    setFilters({ ...filters, customer: value })
                  }
                  className="w-full"
                  options={[
                    { value: "all", label: "All Customers" },
                    { value: "jane", label: "Jane Cooper" },
                    { value: "esther", label: "Esther Howard" },
                  ]}
                />

                <Select
                  placeholder="All Statuses"
                  size="large"
                  value={filters.status}
                  onChange={(value) =>
                    setFilters({ ...filters, status: value })
                  }
                  className="w-full"
                  options={[
                    { value: "all", label: "All Statuses" },
                    { value: "paid", label: "Paid" },
                    { value: "unpaid", label: "Unpaid" },
                    { value: "draft", label: "Draft" },
                    { value: "overdue", label: "Overdue" },
                  ]}
                />

                <RangePicker
                  placeholder={["From", "To"]}
                  size="large"
                  className="w-full"
                  value={filters.dateRange}
                  onChange={(dates) =>
                    setFilters({ ...filters, dateRange: dates })
                  }
                />
              </div>

              <div className="flex gap-2">
                <Button
                  type="primary"
                  onClick={applyFilters}
                  className="rounded-lg"
                >
                  Apply Filters
                </Button>
                <Button onClick={resetFilters} className="rounded-lg">
                  Reset
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Table */}
        <Table
          columns={columns}
          size="small"
          dataSource={invoices}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `Total ${total} invoices`,
            position: ["bottomRight"],
          }}
          className="invoice-table"
        />
      </div>
    </div>
  );
};

export default InvoicesPage;
