import React from 'react';
import { Stack, CircularProgress, LinearProgress } from '@mui/material';

const ProgressPage = () => (
  <Stack spacing={2} width="500px" display="flex" justifyContent="center">
    <Stack spacing={2} display="flex" alignItems="center">
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress color="success" variant="determinate" value={60} />
    </Stack>

    <LinearProgress />
    <LinearProgress color="success" />
    <LinearProgress color="success" variant="determinate" value={60} />
  </Stack>
);

export default ProgressPage;
