import React from "react";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";

const TransactionTable = ({ transactions, onEdit, onDelete }) => {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    { title: "Amount", dataIndex: "amount" },
    { title: "Type", dataIndex: "type" },
    { title: "Category", dataIndex: "category" },
    { title: "Refrence", dataIndex: "refrence" },
    {
      title: "Actions",
      render: (_, record) => (
        <div>
          <EditOutlined onClick={() => onEdit(record)} />
          <DeleteOutlined className="mx-2" onClick={() => onDelete(record)} />
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={transactions} />;
};

export default TransactionTable;
