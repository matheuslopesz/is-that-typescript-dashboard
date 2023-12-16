import DateRange from "./DateRange";
import LastMonths from "./LastMonths";

const Header = () => {
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <LastMonths />
    </header>
  );
};

export default Header;
