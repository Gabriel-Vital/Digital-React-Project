import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import TransactionsPage from "./pages/Transactions.jsx";
import TransactionDetails from "./pages/TransactionDetails.jsx";
import { ToastContainer } from "react-toastify";
import { TransactionProvider } from "./components/contexts/TransactionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TransactionProvider>
      <HashRouter>
        <Routes>
          <Route path="/Digital-React-Project" element={<LoginPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/transactions/:id" element={<TransactionDetails />} />
        </Routes>
      </HashRouter>
    </TransactionProvider>
    <ToastContainer />
  </StrictMode>
);
