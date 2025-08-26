import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Spinner from "../components/Spinner";
import Analytics from "../components/anal";
import { message } from "antd";
import {
  getTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
} from "../services/transactionService";

import TransactionFilters from "../components/Transactions/TransactionFilters";
import TransactionTable from "../components/Transactions/TransactionTable";
import TransactionModal from "../components/Transactions/TransactionModal";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [selectedDate, setSelectedDate] = useState([]);
  const [type, setType] = useState("all");
  const [viewData, setViewData] = useState("table");
  const [showModal, setShowModal] = useState(false);
  const [editable, setEditable] = useState(null);

  const fetchTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;
      setLoading(true);
      const res = await getTransactions({
        userId: user._id,
        frequency,
        selectedDate,
        type,
      });
      setTransactions(res.data);
    } catch {
      message.error("Failed to fetch transactions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [frequency, selectedDate, type]);

  const handleDelete = async (record) => {
    try {
      setLoading(true);
      await deleteTransaction(record._id);
      await fetchTransactions();
      message.success("Transaction Deleted!");
    } catch {
      message.error("Unable to delete transaction");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);

      if (editable) {
        await editTransaction(editable._id, { ...values, userId: user._id });
        message.success("Transaction Updated Successfully");
      } else {
        await addTransaction({ ...values, userid: user._id });
        message.success("Transaction Added Successfully");
      }

      await fetchTransactions();
      setShowModal(false);
      setEditable(null);
    } catch {
      message.error("Please fill all fields");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {loading && <Spinner />}

      <TransactionFilters
        frequency={frequency}
        setFrequency={setFrequency}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        type={type}
        setType={setType}
        viewData={viewData}
        setViewData={setViewData}
        onAddNew={() => setShowModal(true)}
      />

      <div className="content">
        {viewData === "table" ? (
          <TransactionTable
            transactions={transactions}
            onEdit={(record) => {
              setEditable(record);
              setShowModal(true);
            }}
            onDelete={handleDelete}
          />
        ) : (
          <Analytics allTransection={transactions} />
        )}
      </div>

      <TransactionModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        editable={editable}
      />
    </Layout>
  );
};

export default HomePage;
