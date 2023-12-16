import MonthButton from "./MonthButton";

const Meses = () => {
  return (
    <div className="flex">
      <MonthButton n={-3} />
      <MonthButton n={-2} />
      <MonthButton n={-1} />
      <MonthButton n={0} />
    </div>
  );
};

export default Meses;
