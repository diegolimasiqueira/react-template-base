import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export const SearchInput = () => (
  <TextField
    variant="outlined"
    size="small"
    placeholder="Search..."
    sx={{
      minWidth: 180,
      borderRadius: 2,
      background: 'transparent',
      '& .MuiOutlinedInput-root': {
        borderRadius: 2,
      },
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon fontSize="small" />
        </InputAdornment>
      ),
    }}
  />
); 