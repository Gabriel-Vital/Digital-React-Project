const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-[#FFCD4F] hover:bg-[#fec534] focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-5"
    >
      Sign Up
    </button>
  );
};

export default Button;
