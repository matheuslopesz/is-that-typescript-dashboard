type DateInputProps = React.ComponentProps<'input'> & {
  label: string;
};

const DateInput = ({label, ...props}: DateInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type="date" />
    </div>
  );
};

export default DateInput;
