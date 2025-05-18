import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InputAdornment from '@mui/material/InputAdornment';
import dayjs, { Dayjs } from 'dayjs';

export const DatePickerInput = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs('2023-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={date}
        onChange={setDate}
        enableAccessibleFieldDOMStructure={false}
        slots={{
          textField: (params) => (
            <TextField
              {...params}
              size="small"
              sx={{
                minWidth: 150,
                borderRadius: 2,
                background: 'transparent',
                ml: 1,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          ),
        }}
      />
    </LocalizationProvider>
  );
}; 