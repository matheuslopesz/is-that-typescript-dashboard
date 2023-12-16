import React from 'react';
import DateInput from './DateInput';

const DateRange = () => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()} className='box flex'>
      <DateInput 
        label='Start date'
        value={startDate}
        onChange={({ target }) => setStartDate(target.value)}
      />
      <p>{startDate}</p>
      <DateInput 
        label='End date'
        value={endDate}
        onChange={({ target }) => setEndDate(target.value)}
      />
      <p>{endDate}</p>
    </form>
  );
};

export default DateRange; 
