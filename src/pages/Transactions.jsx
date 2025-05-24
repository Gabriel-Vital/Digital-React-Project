import axios from "axios";
import Cardtransaction from "../components/CardTransaction/Cardtransaction";
import {
  ArrowBendLeftUp,
  ArrowBendRightDown,
  CurrencyDollarSimple,
} from "phosphor-react";
import { useEffect, useState } from "react";
import ModalNewTransaction from "../components/ModalNewTransaction/ModalNewTransaction";
import { useNavigate } from "react-router-dom";

const TransactionsPage = () => {
  const [allTransactions, setAlltransactions] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  function handleEditTransaction(id) {
    navigate(`/transactions/${id}`);
  }

  async function fetchTransactions() {
    const transactions = await axios.get("http://localhost:3000/transactions");
    setAlltransactions(transactions.data);
  }

  // async function deleteTransactions(id) {
  //   const transactionsDelete = await axios.delete("http://localhost:3000/transactions", id)
  //   console.log(transactionsDelete)
  //   return transactionsDelete
    
  // }

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

  const total = depositResult - withdrawResult;

  function handleOpenModal() {
    setOpen(true);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <header className="w-full bg-orange-400 py-6 pb-32 px-4 md:px-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-xl md:text-2xl font-bold">
              Digital Money
            </h1>
            <button
              onClick={handleOpenModal}
              className="bg-white/20 px-12 rounded py-2 hover:bg-white/30 text-white border-0 cursor-pointer"
            >
              Nova transação
            </button>
          </div>
        </header>
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
              background="bg-[#43e807]"
              textColor={`${total > 0 ? "text-white" : "text-red-500"}`}
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
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allTransactions.map((transactions, index) => {
                  return (
                    <tr
                      onClick={() => {handleEditTransaction(transactions.id)}}
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
                      <td className="px-6 py-4 mt-2 cursor-pointer w-[100px] h-[40px] flex items-center justify-center transition ease-in-out duration-150 rounded bg-yellow-100">
                        Delete
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <ModalNewTransaction open={open} setOpen={setOpen} />
        </main>
      </div>
    </>
  );
};

export default TransactionsPage;
