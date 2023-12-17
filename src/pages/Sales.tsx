import { useData } from "../contexts/DataContext";
import SaleItem from "../components/SaleItem";

const Sales = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          <SaleItem venda={sale} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
