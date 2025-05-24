import { useParams } from "react-router-dom";

const TransactionDetails = () => {
  const params = useParams();
  const { id } = params;
  return <div>TransactionDetails</div>;
};

export default TransactionDetails;
