import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Input from "./componentsModal/InputModal";
import { ArrowBendLeftUp, ArrowBendRightDown } from "phosphor-react";
import ButtonModal from "./componentsModal/ButtonModal";

export default function ModalNewTransaction() {
  const [open, setOpen] = useState(true);

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
                    <Input placeholder="Titulo" />
                    <Input placeholder="Preço" />
                    <div className="flex justify-between">
                      <ButtonModal
                        icon={
                          <ArrowBendLeftUp
                            size={20}
                            className="text-emerald-500 font-bold"
                          />
                        }
                        title="Entrada"
                      />
                      <ButtonModal
                        icon={
                          <ArrowBendRightDown
                            size={20}
                            className="text-red-500 font-bold"
                          />
                        }
                        title="Saida"
                      />
                    </div>
                    <Input placeholder="Categoria" />
                  </div>
                  <div className="bg-white w-full flex items-center justify-center sm:flex sm:flex-row-reverse mt-5">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
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
