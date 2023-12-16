import React from 'react';

import DateInput from './DateInput';

const DateRange = () => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  return (
    <div>
      <DateInput 
        label='Start date'
        value={startDate}
        onChange={({ target }) => setStartDate(target.value)}
      />
      {startDate}
      <DateInput 
        label='End date'
        onChange={({ target }) => setEndDate(target.value)}
        value={endDate}
      />
      {endDate}
    </div>
  );
};

export default DateRange;
