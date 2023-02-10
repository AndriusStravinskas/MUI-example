import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

const tableData = [{
  id: 1,
  first_name: 'Antonietta',
  last_name: 'Darwen',
  email: 'adarwen0@tinypic.com',
  gender: 'Female',
  ip_address: '58.126.111.94',
}, {
  id: 2,
  first_name: 'Minda',
  last_name: 'Bonder',
  email: 'mbonder1@narod.ru',
  gender: 'Female',
  ip_address: '4.195.200.35',
}, {
  id: 3,
  first_name: 'Lucias',
  last_name: 'Truss',
  email: 'ltruss2@yale.edu',
  gender: 'Male',
  ip_address: '241.53.236.134',
}, {
  id: 4,
  first_name: 'Padraig',
  last_name: 'Barnsley',
  email: 'pbarnsley3@wikimedia.org',
  gender: 'Male',
  ip_address: '7.107.104.13',
}, {
  id: 5,
  first_name: 'Ethyl',
  last_name: 'Hollebon',
  email: 'ehollebon4@privacy.gov.au',
  gender: 'Female',
  ip_address: '237.54.115.131',
}, {
  id: 6,
  first_name: 'Baillie',
  last_name: 'Chillingsworth',
  email: 'bchillingsworth5@accuweather.com',
  gender: 'Male',
  ip_address: '208.133.17.131',
}, {
  id: 7,
  first_name: 'Cordula',
  last_name: 'Atyea',
  email: 'catyea6@disqus.com',
  gender: 'Female',
  ip_address: '154.227.94.219',
}, {
  id: 8,
  first_name: 'Collette',
  last_name: 'McSpirron',
  email: 'cmcspirron7@istockphoto.com',
  gender: 'Female',
  ip_address: '58.6.133.47',
}, {
  id: 9,
  first_name: 'Janith',
  last_name: 'Laimable',
  email: 'jlaimable8@home.pl',
  gender: 'Genderfluid',
  ip_address: '175.245.248.16',
}, {
  id: 10,
  first_name: 'Marven',
  last_name: 'Oxenden',
  email: 'moxenden9@stanford.edu',
  gender: 'Male',
  ip_address: '128.170.49.24',
},
];

const TablePage = () => (
  <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
    <Table aria-label="simple table" stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>First name</TableCell>
          <TableCell>Last name</TableCell>
          <TableCell align="center">Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </TableContainer>
);

export default TablePage;
