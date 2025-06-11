
import { ArrowBendLeftUp, ArrowBendRightDown } from "phosphor-react";
import Input from "./InputModal";
import ButtonModal from "./ButtonModal";
import { ToastContainer } from "react-toastify";

const FormTransaction = ({
  formTitle = "Cadastrar transação",
  buttonTitle = "Cadastrar",
  handleChangeCategory,
  handleChangePrice,
  handleChangeTitle,
  handleClickTransactionType,
  transactionType,
  handleNewTransaction,
  titleValue,
  priceValue,
  categoryValue,
}) => {
  return (
    <>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-[430px] rounded w-full">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
            <h1 as="h1" className="text-2xl font-bold text-gray-900 mb-5">
              {formTitle}
            </h1>
            <div className="mt-2 w-full space-y-5">
              <Input
                value={titleValue}
                placeholder="titulo"
                onChange={(ev) => {
                  handleChangeTitle(ev.target.value);
                }}
              />
              <Input
                value={priceValue}
                placeholder="valor"
                onChange={(ev) => {
                  handleChangePrice(ev.target.value);
                }}
              />
              <div className="flex justify-between">
                <ButtonModal
                  transactionType={`${
                    transactionType === "deposit"
                      ? "bg-emerald-100 hover:bg-emerald-200"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  icon={
                    <ArrowBendLeftUp
                      size={20}
                      className="text-emerald-500 font-bold"
                    />
                  }
                  title="Entrada"
                  onClick={() => {
                    handleClickTransactionType("deposit");
                  }}
                />
                <ButtonModal
                  transactionType={`${
                    transactionType === "withdraw"
                      ? "bg-red-100 hover:bg-red-200"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  icon={
                    <ArrowBendRightDown
                      size={20}
                      className="text-red-500 font-bold"
                    />
                  }
                  title="Saida"
                  onClick={() => {
                    handleClickTransactionType("withdraw");
                  }}
                />
              </div>
              <Input
                value={categoryValue}
                placeholder="categoria"
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
                {buttonTitle}
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTransaction;
