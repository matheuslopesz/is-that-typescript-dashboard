import { IVenda } from "../contexts/DataContext";

const SaleItem = ({ sale }: { sale: IVenda }) => {
  return (
    <div className="venda box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {sale.id}
      </a>
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
