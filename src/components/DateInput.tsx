type DateInputProps = {
  label: string;
};

const DateInput = ({label}: DateInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type="date" />
    </div>
  );
};

export default DateInput;
