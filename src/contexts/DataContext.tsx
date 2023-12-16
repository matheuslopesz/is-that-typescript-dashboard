import React from "react";

import useFetch from "../hooks/useFetcher";

export type IVenda = {
  id: string;
  name: string;
  price: number;
  status: "pago" | "processando" | "falha";
  paymentMethod: "boleto" | "pix" | "card";
  date: string;
  installments: number | null;
};

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  start: string;
  end: string;
  setStart: React.Dispatch<React.SetStateAction<string>>;
  setEnd: React.Dispatch<React.SetStateAction<string>>;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataContextProvider");
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [start, setStart] = React.useState(getDate(14));
  const [end, setEnd] = React.useState(getDate(0));

  const { data, loading, error } = useFetch<IVenda[]>(
    "https://data.origamid.dev/vendas/",
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, start, setStart, end, setEnd }}
    >
      {children}
    </DataContext.Provider>
  );
};
