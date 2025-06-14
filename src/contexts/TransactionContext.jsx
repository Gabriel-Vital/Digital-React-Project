import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const TransactionContext = createContext(null);
const useTransactionContext = () => useContext(TransactionContext);

const TransactionProvider = ({ children }) => {
  const [allTransactions, setAlltransactions] = useState([]);

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
      value={{ allTransactions, setAlltransactions, navigate, handleEditTransaction, depositResult, withdrawResult, total}}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionProvider, useTransactionContext };
