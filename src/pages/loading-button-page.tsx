import React from 'react';
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const LoadingButtonPage = () => (
  <Stack spacing={2} direction="row">
    <LoadingButton variant="outlined">Submit</LoadingButton>
    <LoadingButton loading variant="outlined">Submit</LoadingButton>
    <LoadingButton variant="outlined" loadingIndicator="loading...">Fetch Data</LoadingButton>
    <LoadingButton loading variant="outlined" loadingIndicator="loading...">Fetch Data</LoadingButton>
    <LoadingButton
      variant="outlined"
      loadingPosition="start"
      startIcon={<SaveIcon />}
    >
      Save
    </LoadingButton>
    <LoadingButton
      loading
      variant="outlined"
      loadingPosition="start"
      startIcon={<SaveIcon />}
    >
      Save
    </LoadingButton>
  </Stack>
);

export default LoadingButtonPage;
