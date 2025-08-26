import React from "react";
import { Form, Input, Modal, Select } from "antd";

const TransactionModal = ({ show, onClose, onSubmit, editable }) => {
  return (
    <Modal
      title={editable ? "Edit Transaction" : "Add Transaction"}
      open={show}
      onCancel={onClose}
      footer={false}
    >
      <Form layout="vertical" onFinish={onSubmit} initialValues={editable}>
        <Form.Item label="Amount" name="amount">
          <Input type="text" required />
        </Form.Item>
        <Form.Item label="Type" name="type">
          <Select>
            <Select.Option value="income">Income</Select.Option>
            <Select.Option value="expense">Expense</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Select>
            <Select.Option value="salary">Salary</Select.Option>
            <Select.Option value="food">Food</Select.Option>
            <Select.Option value="bills">Bills</Select.Option>
            <Select.Option value="movie">Movie</Select.Option>
            <Select.Option value="tax">Tax</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date" name="date">
          <Input type="date" />
        </Form.Item>
        <Form.Item label="Refrence" name="refrence">
          <Input type="text" required />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input type="text" required />
        </Form.Item>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            SAVE
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default TransactionModal;
