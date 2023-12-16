import DateInput from './DateInput';
import { useData } from '../contexts/DataContext';

const DateRange = () => {
  const { start, setStart, end, setEnd } = useData();

  return (
    <form onSubmit={(e) => e.preventDefault()} className='box flex'>
      <DateInput 
        label='Start date'
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <p>{start}</p>
      <DateInput 
        label='End date'
        value={end}
        onChange={({ target }) => setEnd(target.value)}
      />
      <p>{end}</p>
    </form>
  );
};

export default DateRange; 
