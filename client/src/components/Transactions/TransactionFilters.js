import React from "react";
import { Select, DatePicker } from "antd";
import { UnorderedListOutlined, AreaChartOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const TransactionFilters = ({ frequency, setFrequency, selectedDate, setSelectedDate, type, setType, viewData, setViewData, onAddNew }) => {
  return (
    <div className="filters">
      <div>
        <h6>Select Frequency</h6>
        <Select value={frequency} onChange={(val) => setFrequency(val)}>
          <Select.Option value="7">LAST 1 Week</Select.Option>
          <Select.Option value="30">LAST 1 Month</Select.Option>
          <Select.Option value="365">LAST 1 year</Select.Option>
          <Select.Option value="custom">custom</Select.Option>
        </Select>
        {frequency === "custom" && (
          <RangePicker value={selectedDate} onChange={(val) => setSelectedDate(val)} />
        )}
      </div>

      <div className="filter-tab">
        <h6>Select Type</h6>
        <Select value={type} onChange={(val) => setType(val)}>
          <Select.Option value="all">ALL</Select.Option>
          <Select.Option value="income">INCOME</Select.Option>
          <Select.Option value="expense">EXPENSE</Select.Option>
        </Select>
      </div>

      <div className="switch-icons">
        <UnorderedListOutlined
          className={`mx-2 ${viewData === "table" ? "active-icon" : "inactive-icon"}`}
          onClick={() => setViewData("table")}
        />
        <AreaChartOutlined
          className={`mx-2 ${viewData === "analytics" ? "active-icon" : "inactive-icon"}`}
          onClick={() => setViewData("analytics")}
        />
      </div>

      <div>
        <button className="btn btn-primary" onClick={onAddNew}>
          Add New
        </button>
      </div>
    </div>
  );
};

export default TransactionFilters;
