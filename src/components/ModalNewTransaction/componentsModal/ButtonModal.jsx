import { ArrowBendLeftUp } from "phosphor-react";
import React from "react";

const ButtonModal = ({icon, title}) => {
  return (
    <>
      <div className="px-4 py-2 cursor-pointer bg-gray-200 w-[49%] h-[50px] flex gap-4 items-center justify-center transition ease-in-out duration-150 hover:bg-gray-300">
        {icon} {title}
      </div>
    </>
  );
};

export default ButtonModal;
