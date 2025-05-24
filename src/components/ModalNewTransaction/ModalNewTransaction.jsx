import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Input from "./componentsModal/InputModal";
import { ArrowBendLeftUp, ArrowBendRightDown } from "phosphor-react";
import ButtonModal from "./componentsModal/ButtonModal";
import { useState } from "react";
import axios from "axios";
import { format } from "date-fns";

export default function ModalNewTransaction({ open, setOpen }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState("deposit")

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
    setTransactionType(type)
  }

  async function handleNewTransaction() {
    await axios.post("http://localhost:3000/transactions", {
      title,
      price: Number(price),
      category,
      transactionType,
      date: format(new Date(), "dd/MM/yyyy")
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95 p-2"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-[430px]">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <DialogTitle
                    as="h1"
                    className="text-2xl font-bold text-gray-900 mb-5"
                  >
                    Cadastrar transação
                  </DialogTitle>
                  <div className="mt-2 w-full space-y-5">
                    <Input
                      placeholder="Titulo"
                      onChange={(ev) => {
                        handleChangeTitle(ev.target.value);
                      }}
                    />
                    <Input
                      placeholder="Preço"
                      onChange={(ev) => {
                        handleChangePrice(ev.target.value);
                      }}
                    />
                    <div className="flex justify-between">
                      <ButtonModal
                        transactionType={`${transactionType === "deposit" ? "bg-emerald-100 hover:bg-emerald-200" : "bg-gray-200 hover:bg-gray-300"}`}
                        icon={
                          <ArrowBendLeftUp
                            size={20}
                            className="text-emerald-500 font-bold"
                          />
                        }
                        title="Entrada"
                        onClick={() => {handleClickTransactionType("deposit")}}
                      />
                      <ButtonModal
                        transactionType={`${transactionType === "withdraw" ? "bg-red-100 hover:bg-red-200" : "bg-gray-200 hover:bg-gray-300"}`}
                        icon={
                          <ArrowBendRightDown
                            size={20}
                            className="text-red-500 font-bold"
                          />
                        }
                        title="Saida"
                        onClick={() => {handleClickTransactionType("withdraw")}}
                      />
                    </div>
                    <Input
                      placeholder="Categoria"
                      onChange={(ev) => {
                        handleChangeCategory(ev.target.value);
                      }}
                    />
                  </div>
                  <div className="bg-white w-full flex items-center justify-center sm:flex sm:flex-row-reverse mt-5">
                    <button
                      type="button"
                      onClick={handleNewTransaction}
                      className="w-full h-[50px] items-center justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 cursor-pointer"
                    >
                      Cadastrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
