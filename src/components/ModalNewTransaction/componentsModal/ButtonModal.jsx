const ButtonModal = ({icon, title, onClick, transactionType}) => {
  return (
    <>
      <div onClick={onClick} className={`${transactionType} px-4 py-2 cursor-pointer w-[49%] h-[50px] flex gap-4 items-center justify-center transition ease-in-out duration-150 rounded`} >
        {icon} {title}
      </div>
    </>
  );
};

export default ButtonModal;
