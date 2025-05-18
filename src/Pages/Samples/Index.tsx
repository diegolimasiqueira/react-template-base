import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SampleTable } from '@/Shared/Components/UI/SampleTable';

export default function Samples() {
  return (
    <Box>
      <Typography variant="h6" component="h1" gutterBottom>
        Samples
      </Typography>
      <SampleTable />
    </Box>
  );
} 