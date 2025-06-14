import axios from "axios";
import Cardtransaction from "../components/CardTransaction/Cardtransaction";
import {
  ArrowBendLeftUp,
  ArrowBendRightDown,
  CurrencyDollarSimple,
  Trash,
} from "phosphor-react";
import { useEffect, useState } from "react";
import ModalNewTransaction from "../components/ModalNewTransaction/ModalNewTransaction";
import HeaderTransaction from "../components/transactionsComponents/HeaderTransaction";
import { API_BASE_URL } from "../utils/constantes";
import { ToastContainer } from "react-toastify";
import { useTransactionContext } from "../contexts/TransactionContext";
import { Button, IconButton } from "@material-tailwind/react";

const TransactionsPage = () => {
  const {
    allTransactions,
    setAlltransactions,
    handleEditTransaction,
    depositResult,
    withdrawResult,
    total,
    handleDeleteTransactions,
  } = useTransactionContext();
  const [open, setOpen] = useState(false);

  async function fetchTransactions() {
    const transactions = await axios.get(`${API_BASE_URL}/transactions`);
    setAlltransactions(transactions.data);
  }

  function handleOpenModal() {
    setOpen(true);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <HeaderTransaction onClick={handleOpenModal} />
        <main className="flex-1 container mx-auto px-6 py-8 h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-24">
            <Cardtransaction
              amount={depositResult}
              title="Entradas"
              background="bg-white"
              icon={<ArrowBendLeftUp size={25} />}
              iconColor="text-green-500"
              valueColor={"text-green-500"}
            />
            <Cardtransaction
              amount={withdrawResult}
              valueColor={"text-red-500"}
              title="Saidas"
              background="bg-white"
              icon={<ArrowBendRightDown size={25} />}
              iconColor="text-red-500"
            />
            <Cardtransaction
              amount={total}
              title="Total"
              background={`${total < 0 ? "bg-black" : "bg-[#43e807]"}`}
              textColor={`${total < 0 ? "text-red-500" : "text-white"}`}
              icon={<CurrencyDollarSimple size={25} />}
            />
          </div>
          
          <div className="overflow-x-auto mt-8">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="px-6 py-3 pb-4 font-medium">Título</th>
                  <th className="px-6 py-3 pb-4 font-medium">Valor</th>
                  <th className="px-6 py-3 pb-4 font-medium">Categoria</th>
                  <th className="px-6 py-3 pb-4 font-medium">Data</th>
                  <th className="px-6 py-3 pb-4 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allTransactions.map((transactions, index) => {
                  return (
                    <tr
                      onClick={() => {
                        handleEditTransaction(transactions.id);
                      }}
                      className="hover:bg-gray-50 bg-white"
                      key={index}
                    >
                      <td className="px-6 py-4">{transactions.title}</td>
                      <td
                        className={`px-6 py-4 ${
                          transactions.transactionType === "deposit"
                            ? "text-green-500"
                            : "text-red-500"
                        } font-medium`}
                      >
                        {transactions.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                      <td className="px-6 py-4">{transactions.category}</td>
                      <td className="px-6 py-4">{transactions.date}</td>
                      <td
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteTransactions(transactions.id);
                        }}
                        className="px-1 py-1 mt-2 cursor-pointer w-[90px] h-[40px] flex items-center justify-center transition ease-in-out duration-150 rounded bg-amber-100"
                      >
                       <Trash size={23} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <ModalNewTransaction open={open} setOpen={setOpen} />
          <ToastContainer />
        </main>
      </div>
    </>
  );
};

export default TransactionsPage;