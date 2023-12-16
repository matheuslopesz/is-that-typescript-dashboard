import React from 'react';

import DateInput from './DateInput';

const DateRange: React.FC = () => {
  return (
   <div>
      <DateInput label='start date'/>
      <DateInput label='end date'/>
    </div>
  );
};

export default DateRange;
