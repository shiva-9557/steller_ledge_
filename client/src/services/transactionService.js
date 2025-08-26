import axios from "axios";

export const getTransactions = async ({ userId, frequency, selectedDate, type }) => {
  return axios.post("/api/v1/transections/get-transection", {
    userid: userId,
    frequency,
    selectedDate,
    type,
  });
};

export const addTransaction = async (data) => {
  return axios.post("/api/v1/transections/add-transection", data);
};

export const editTransaction = async (transectionId, payload) => {
  return axios.post("/api/v1/transections/edit-transection", { payload, transectionId });
};

export const deleteTransaction = async (transectionId) => {
  return axios.post("/api/v1/transections/delete-transection", { transectionId });
};
