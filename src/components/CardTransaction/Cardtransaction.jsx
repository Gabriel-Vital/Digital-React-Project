import { ArrowBendLeftUp } from "phosphor-react";

const Cardtransaction = ({
  title,
  background,
  textColor = "text-black",
  icon,
  iconColor,
}) => {
  return (
    <>
      <div
        className={`rounded p-6 flex flex-col gap-2 shadow-md ${background} ${textColor}`}
      >
        <div className="flex justify-between items-center">
          <span className={`${textColor}`}>{title}</span>
          <div className={`${iconColor} font-bold`}>{icon}</div>
        </div>
        <strong className="text-3xl font-medium mt-1">R$ 0,00</strong>
      </div>
    </>
  );
};

export default Cardtransaction;
