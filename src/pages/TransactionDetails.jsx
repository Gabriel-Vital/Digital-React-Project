import { useParams } from "react-router-dom";
import HeaderTransaction from "../components/transactionsComponents/HeaderTransaction";
import FormTransaction from "../components/ModalNewTransaction/componentsModal/FormTransaction";
import axios from "axios";
import { API_BASE_URL } from "../utils/constantes";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const TransactionDetails = ({setOpen}) => {
  // const { id } = useParams() <= da para fazer também e é melhor
  const params = useParams();
  const { id } = params;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState("");

  function handleChangeTitle(ev) {
    setTitle(ev);
  }

  function handleChangePrice(ev) {
    setPrice(ev);
  }

  function handleChangeCategory(ev) {
    setCategory(ev);
  }

  function handleClickTransactionType(type) {
    setTransactionType(type);
  }

  async function handleNewTransaction() {
    await axios.post("http://localhost:3000/transactions", {
      title,
      price: Number(price),
      category,
      transactionType,
      date: format(new Date(), "dd/MM/yyyy"),
    });
    setOpen(false);
  }

  async function fetchTransactionId() {
    const transaction = await axios.get(`${API_BASE_URL}/transactions/${id}`);
    setTitle(transaction.data.title);
    setPrice(transaction.data.price);
    setCategory(transaction.data.category);
    setTransactionType(transaction.data.transactionType);
  }

  useEffect(() => {
    fetchTransactionId();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <HeaderTransaction />
      <main className="max-w-3xl mx-auto px-6 py-8 -mt-25 rounded w-[550px]">
        <FormTransaction
          titleValue={title}
          priceValue={price}
          categoryValue={category}
          handleChangeTitle={handleChangeTitle}
          handleChangePrice={handleChangePrice}
          handleChangeCategory={handleChangeCategory}
          handleClickTransactionType={handleClickTransactionType}
          transactionType={transactionType}
          handleNewTransaction={() => {}}
        />
      </main>
    </div>
  );
};

export default TransactionDetails;
