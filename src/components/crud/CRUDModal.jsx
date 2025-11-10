import React from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Switch,
} from "antd";

const CRUDModal = ({
  visible = false,
  mode = "view",
  entityName = "entity",
  formFields,
  formData,
  onFieldChange,
  onSubmit,
  onCancel,
  width = 600,
}) => {
  const isViewMode = mode === "view";
  const isAddMode = mode === "add";
  const isEditMode = mode === "edit";

  const getTitle = () => {
    if (isViewMode) return `${entityName} Details`;
    if (isAddMode) return `Add ${entityName}`;
    if (isEditMode) return `Edit ${entityName}`;
  };

  const renderField = (field) => {
    const { name, label, type = "text", required, options, ...rest } = field;
    const value = formData[name];

    if (isViewMode) {
      return (
        <Form.Item label={label} key={name}>
          <div className="font-medium">{value || "-"}</div>
        </Form.Item>
      );
    }

    const commonProps = {
      value,
      onChange: (e) => {
        const newValue = e?.target ? e.target.value : e;
        onFieldChange(name, newValue);
      },
      disabled: isViewMode,
      ...rest,
    };

    switch (type) {
      case "text":
      case "email":
        return (
          <Form.Item
            label={label}
            key={name}
            rules={[
              { required, message: `Please enter ${label.toLowerCase()}` },
            ]}
          >
            <Input {...commonProps} type={type} />
          </Form.Item>
        );

      case "textarea":
        return (
          <Form.Item
            label={label}
            key={name}
            rules={[
              { required, message: `Please enter ${label.toLowerCase()}` },
            ]}
          >
            <Input.TextArea {...commonProps} rows={4} />
          </Form.Item>
        );

      case "number":
        return (
          <Form.Item
            label={label}
            key={name}
            rules={[
              { required, message: `Please enter ${label.toLowerCase()}` },
            ]}
          >
            <InputNumber {...commonProps} className="w-full" />
          </Form.Item>
        );

      case "select":
        return (
          <Form.Item
            label={label}
            key={name}
            rules={[
              { required, message: `Please select ${label.toLowerCase()}` },
            ]}
          >
            <Select {...commonProps} options={options} />
          </Form.Item>
        );

      case "date":
        return (
          <Form.Item
            label={label}
            key={name}
            rules={[
              { required, message: `Please select ${label.toLowerCase()}` },
            ]}
          >
            <DatePicker {...commonProps} className="w-full" />
          </Form.Item>
        );

      case "switch":
        return (
          <Form.Item label={label} key={name} valuePropName="checked">
            <Switch {...commonProps} />
          </Form.Item>
        );

      default:
        return null;
    }
  };

  return (
    <Modal
      title={getTitle()}
      open={visible}
      onOk={isViewMode ? onCancel : onSubmit}
      onCancel={onCancel}
      width={width}
      okText={isViewMode ? "Close" : isAddMode ? "Add" : "Update"}
      cancelButtonProps={{ style: isViewMode ? { display: "none" } : {} }}
    >
      <Form layout="vertical" className="mt-4">
        {formFields.map(renderField)}
      </Form>
    </Modal>
  );
};

export default CRUDModal;
