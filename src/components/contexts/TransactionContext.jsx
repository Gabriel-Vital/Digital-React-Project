import { createContext, useContext, useState } from "react";

const TransactionContext = createContext(null);
const useTransactionContext = () => useContext(TransactionContext);

const TransactionProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  
  return (
    <TransactionContext.Provider value={{count, setCount}}>{children}</TransactionContext.Provider>
  )
};

export {TransactionProvider, useTransactionContext }