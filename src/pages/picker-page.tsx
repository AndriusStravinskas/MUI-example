import React from 'react';
import { Stack, TextField } from '@mui/material';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';

const PickerPage = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = React.useState<Date | null>(null);
  console.log(selectedDateTime);
  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="Time Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      />
      <DateTimePicker
        label="DateTime Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};

export default PickerPage;
