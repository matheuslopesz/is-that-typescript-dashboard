import { ISale } from "../contexts/DataContext";
import { NavLink } from "react-router-dom";


const SaleItem = ({ sale }: { sale: ISale }) => {
  return (
    <div className="venda box">
       <NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: "monospace" }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SaleItem;
