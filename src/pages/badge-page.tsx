import React from 'react';
import { Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const BadgePage = () => (
  <Stack spacing={2} direction="row">
    <Badge badgeContent={5} color="primary">
      <MailIcon />
    </Badge>
    <Badge badgeContent={0} color="secondary" showZero>
      <MailIcon />
    </Badge>
    <Badge badgeContent={100} color="secondary" showZero max={999}>
      <MailIcon />
    </Badge>
    <Badge variant="dot" color="secondary">
      <MailIcon />
    </Badge>
    <Badge variant="dot" color="secondary" invisible>
      <MailIcon />
    </Badge>
  </Stack>
);

export default BadgePage;
