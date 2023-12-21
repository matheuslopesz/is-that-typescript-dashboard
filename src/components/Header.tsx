import React from "react";
import DateRange from "./DateRange";
import LastMonths from "./LastMonths";
import { useLocation } from "react-router-dom";


const Header = () => {
  const [title, setTitle] = React.useState("OverView");

  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("OverView");
      document.title = "Fintech | OverView";
    } else if (location.pathname === "/vendas") {
      setTitle("Sales");
      document.title = "Fintech | Sales";
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <LastMonths />
    </header>
  );
};

export default Header;
