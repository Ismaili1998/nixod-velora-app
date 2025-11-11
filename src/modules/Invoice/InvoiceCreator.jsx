import React, { useState } from "react";
import { Button, Input, DatePicker, InputNumber, Divider, message } from "antd";
import {
  DownloadOutlined,
  PlusOutlined,
  DeleteOutlined,
  UndoOutlined,
  RedoOutlined,
  FontSizeOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  LinkOutlined,
  SettingOutlined,
  FileTextOutlined,
  MenuOutlined,
  LayoutOutlined,
  StarOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { InvoicePDFDownloadButton } from "./InvoicePDF";
import docHeader from './docHeader'

const { TextArea } = Input;

export default function InvoiceCreator() {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "INV-001",
    date: dayjs(),
    dueDate: dayjs().add(30, "day"),
    from: {
      name: "Your Company Name",
      address: "123 Business Street",
      city: "New York, NY 10001",
      email: "hello@yourcompany.com",
      phone: "+1 (555) 123-4567",
    },
    to: {
      name: "Client Company Name",
      address: "456 Client Avenue",
      city: "Los Angeles, CA 90001",
      email: "contact@clientcompany.com",
      phone: "+1 (555) 987-6543",
    },
    items: [
      {
        id: 1,
        description: "Web Design Services",
        quantity: 1,
        rate: 2500,
        amount: 2500,
      },
      {
        id: 2,
        description: "Frontend Development",
        quantity: 40,
        rate: 100,
        amount: 4000,
      },
    ],
    notes: "Thank you for your business!",
    terms: "Payment is due within 30 days",
    taxRate: 10,
  });

  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + item.amount, 0);
  };

  const calculateTax = () => {
    return (calculateSubtotal() * invoiceData.taxRate) / 100;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const updateInvoiceData = (path, value) => {
    setInvoiceData((prev) => {
      const newData = { ...prev };
      const keys = path.split(".");
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      description: "New Item",
      quantity: 1,
      rate: 0,
      amount: 0,
    };
    setInvoiceData((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const updateItem = (id, field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: value };
          if (field === "quantity" || field === "rate") {
            updated.amount = updated.quantity * updated.rate;
          }
          return updated;
        }
        return item;
      }),
    }));
  };

  const deleteItem = (id) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const EditableText = ({
    value,
    onChange,
    className = "",
    multiline = false,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);

    const handleBlur = () => {
      setIsEditing(false);
      onChange(tempValue);
    };

    if (isEditing) {
      return multiline ? (
        <TextArea
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          autoSize
          className={className}
        />
      ) : (
        <Input
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={handleBlur}
          onPressEnter={handleBlur}
          autoFocus
          className={className}
        />
      );
    }

    return (
      <div
        onClick={() => {
          setIsEditing(true);
          setTempValue(value);
        }}
        className={`cursor-pointer hover:bg-blue-50 rounded px-2 py-1 transition-colors ${className}`}
      >
        {value || "Click to edit"}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
     < docHeader/>
      {/* Text Formatting Toolbar */}
      <div className="bg-slate-800 border-b border-slate-700 px-6 py-2 flex items-center justify-center gap-2">
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="text-gray-300 hover:text-white hover:bg-slate-700"
        />
        <Button
          type="text"
          icon={<BoldOutlined />}
          className="text-gray-300 hover:text-white hover:bg-slate-700"
        />
        <Button
          type="text"
          icon={<ItalicOutlined />}
          className="text-gray-300 hover:text-white hover:bg-slate-700"
        />
        <Button
          type="text"
          icon={<UnderlineOutlined />}
          className="text-gray-300 hover:text-white hover:bg-slate-700"
        />
        <Button
          type="text"
          icon={<LinkOutlined />}
          className="text-gray-300 hover:text-white hover:bg-slate-700"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex gap-6 p-6">
        {/* Template Selector Sidebar */}
        <div className="w-72 space-y-4">
          <div className="bg-slate-800 rounded-lg p-4 shadow-xl">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <LayoutOutlined />
              Switch Templates
            </h3>
            <div className="space-y-3">
              <div
                onClick={() => setSelectedTemplate("modern")}
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedTemplate === "modern"
                    ? "ring-2 ring-teal-500 shadow-lg"
                    : "hover:ring-2 hover:ring-slate-600"
                }`}
              >
                <div className="bg-white p-4 h-32">
                  <div className="text-xs font-semibold mb-2">Modern</div>
                  <div className="space-y-1">
                    <div className="h-1 bg-teal-500 w-3/4 rounded"></div>
                    <div className="h-1 bg-gray-200 w-full rounded"></div>
                    <div className="h-1 bg-gray-200 w-5/6 rounded"></div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setSelectedTemplate("classic")}
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedTemplate === "classic"
                    ? "ring-2 ring-teal-500 shadow-lg"
                    : "hover:ring-2 hover:ring-slate-600"
                }`}
              >
                <div className="bg-white p-4 h-32">
                  <div className="text-xs font-semibold mb-2">Classic</div>
                  <div className="space-y-1">
                    <div className="h-1 bg-blue-500 w-2/3 rounded"></div>
                    <div className="h-1 bg-gray-200 w-full rounded"></div>
                    <div className="h-1 bg-gray-200 w-4/5 rounded"></div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setSelectedTemplate("minimal")}
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedTemplate === "minimal"
                    ? "ring-2 ring-teal-500 shadow-lg"
                    : "hover:ring-2 hover:ring-slate-600"
                }`}
              >
                <div className="bg-white p-4 h-32">
                  <div className="text-xs font-semibold mb-2">Minimal</div>
                  <div className="space-y-1">
                    <div className="h-1 bg-gray-800 w-1/2 rounded"></div>
                    <div className="h-1 bg-gray-200 w-full rounded"></div>
                    <div className="h-1 bg-gray-200 w-3/4 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Preview */}
        <div className="flex-1 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-teal-500 to-blue-500"></div>

            <div className="p-12">
              {/* Invoice Header */}
              <div className="flex items-start justify-between mb-12">
                <div>
                  <h1 className="text-5xl font-bold text-slate-800 mb-2">
                    INVOICE
                  </h1>
                  <div className="flex items-center gap-2 text-slate-600">
                    <span className="font-medium">No:</span>
                    <EditableText
                      value={invoiceData.invoiceNumber}
                      onChange={(v) => updateInvoiceData("invoiceNumber", v)}
                      className="font-semibold"
                    />
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 font-medium">Date:</span>
                    <DatePicker
                      value={invoiceData.date}
                      onChange={(v) => updateInvoiceData("date", v)}
                      format="MMM DD, YYYY"
                      bordered={false}
                      className="hover:bg-blue-50 rounded"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 font-medium">
                      Due Date:
                    </span>
                    <DatePicker
                      value={invoiceData.dueDate}
                      onChange={(v) => updateInvoiceData("dueDate", v)}
                      format="MMM DD, YYYY"
                      bordered={false}
                      className="hover:bg-blue-50 rounded"
                    />
                  </div>
                </div>
              </div>

              {/* From and To */}
              <div className="grid grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-3">
                    From
                  </div>
                  <div className="space-y-1">
                    <EditableText
                      value={invoiceData.from.name}
                      onChange={(v) => updateInvoiceData("from.name", v)}
                      className="font-semibold text-slate-800 text-lg"
                    />
                    <EditableText
                      value={invoiceData.from.address}
                      onChange={(v) => updateInvoiceData("from.address", v)}
                      className="text-slate-600 text-sm"
                    />
                    <EditableText
                      value={invoiceData.from.city}
                      onChange={(v) => updateInvoiceData("from.city", v)}
                      className="text-slate-600 text-sm"
                    />
                    <EditableText
                      value={invoiceData.from.email}
                      onChange={(v) => updateInvoiceData("from.email", v)}
                      className="text-slate-600 text-sm"
                    />
                    <EditableText
                      value={invoiceData.from.phone}
                      onChange={(v) => updateInvoiceData("from.phone", v)}
                      className="text-slate-600 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-3">
                    Bill To
                  </div>
                  <div className="space-y-1">
                    <EditableText
                      value={invoiceData.to.name}
                      onChange={(v) => updateInvoiceData("to.name", v)}
                      className="font-semibold text-slate-800 text-lg"
                    />
                    <EditableText
                      value={invoiceData.to.address}
                      onChange={(v) => updateInvoiceData("to.address", v)}
                      className="text-slate-600 text-sm"
                    />
                    <EditableText
                      value={invoiceData.to.city}
                      onChange={(v) => updateInvoiceData("to.city", v)}
                      className="text-slate-600 text-sm"
                    />
                    <EditableText
                      value={invoiceData.to.email}
                      onChange={(v) => updateInvoiceData("to.email", v)}
                      className="text-slate-600 text-sm"
                    />
                    <EditableText
                      value={invoiceData.to.phone}
                      onChange={(v) => updateInvoiceData("to.phone", v)}
                      className="text-slate-600 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-teal-500">
                      <th className="text-left py-3 text-sm font-bold text-slate-700 uppercase tracking-wide">
                        Description
                      </th>
                      <th className="text-right py-3 text-sm font-bold text-slate-700 uppercase tracking-wide w-24">
                        Qty
                      </th>
                      <th className="text-right py-3 text-sm font-bold text-slate-700 uppercase tracking-wide w-32">
                        Rate
                      </th>
                      <th className="text-right py-3 text-sm font-bold text-slate-700 uppercase tracking-wide w-32">
                        Amount
                      </th>
                      <th className="w-12"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.items.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-slate-200 hover:bg-slate-50"
                      >
                        <td className="py-4">
                          <Input
                            value={item.description}
                            onChange={(e) =>
                              updateItem(item.id, "description", e.target.value)
                            }
                            bordered={false}
                            className="font-medium text-slate-800"
                          />
                        </td>
                        <td className="py-4 text-right">
                          <InputNumber
                            value={item.quantity}
                            onChange={(v) => updateItem(item.id, "quantity", v)}
                            bordered={false}
                            min={1}
                            className="text-right w-full"
                          />
                        </td>
                        <td className="py-4 text-right">
                          <InputNumber
                            value={item.rate}
                            onChange={(v) => updateItem(item.id, "rate", v)}
                            bordered={false}
                            min={0}
                            prefix="$"
                            className="text-right w-full"
                          />
                        </td>
                        <td className="py-4 text-right font-semibold text-slate-800">
                          ${item.amount.toFixed(2)}
                        </td>
                        <td className="py-4 text-center">
                          <Button
                            type="text"
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => deleteItem(item.id)}
                            size="small"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Button
                  type="dashed"
                  icon={<PlusOutlined />}
                  onClick={addItem}
                  className="mt-4 w-full border-teal-300 text-teal-600 hover:border-teal-500 hover:text-teal-700"
                >
                  Add Item
                </Button>
              </div>

              {/* Totals */}
              <div className="flex justify-end mb-8">
                <div className="w-80 space-y-3">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="font-medium">Subtotal:</span>
                    <span className="font-semibold">
                      ${calculateSubtotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Tax:</span>
                      <InputNumber
                        value={invoiceData.taxRate}
                        onChange={(v) => updateInvoiceData("taxRate", v)}
                        min={0}
                        max={100}
                        suffix="%"
                        bordered={false}
                        className="w-20 hover:bg-blue-50 rounded"
                      />
                    </div>
                    <span className="font-semibold">
                      ${calculateTax().toFixed(2)}
                    </span>
                  </div>
                  <Divider className="my-2" />
                  <div className="flex items-center justify-between text-slate-800 text-xl">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-teal-600">
                      ${calculateTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Notes and Terms */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Notes
                  </div>
                  <EditableText
                    value={invoiceData.notes}
                    onChange={(v) => updateInvoiceData("notes", v)}
                    className="text-slate-600 text-sm"
                    multiline
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Terms & Conditions
                  </div>
                  <EditableText
                    value={invoiceData.terms}
                    onChange={(v) => updateInvoiceData("terms", v)}
                    className="text-slate-600 text-sm"
                    multiline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
