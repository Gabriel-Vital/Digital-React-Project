import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../utils/constantes";

const TransactionContext = createContext(null);
const useTransactionContext = () => useContext(TransactionContext);

const TransactionProvider = ({ children }) => {
  const [allTransactions, setAlltransactions] = useState([]);
  async function handleDeleteTransactions(id) {
    const confirmDelete = window.confirm(
      "Tem certeza que desaja deletar esta transação?"
    );
    if (!confirmDelete) {
      return;
    }

    await axios.delete(`${API_BASE_URL}/transactions/${id}`);
  }

  const navigate = useNavigate();

  function handleEditTransaction(id) {
    navigate(`/transactions/${id}`);
  }

  const depositResult = allTransactions.reduce((prev, current) => {
    if (current.transactionType === "deposit") {
      return prev + current.price;
    }
    return prev;
  }, 0);

  const withdrawResult = allTransactions.reduce((prev, current) => {
    if (current.transactionType === "withdraw") {
      return prev - current.price;
    }
    return prev;
  }, 0);

  const total = depositResult + withdrawResult;

  return (
    <TransactionContext.Provider
      value={{
        allTransactions,
        setAlltransactions,
        navigate,
        handleEditTransaction,
        depositResult,
        withdrawResult,
        total,
        handleDeleteTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionProvider, useTransactionContext };
