import React from 'react';
import { Box, TextField } from '@mui/material';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';

const DateRangePickerPage = () => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  console.log(value);
  return (
    <Box width="500px">
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> To </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
};

export default DateRangePickerPage;
