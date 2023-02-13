import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Favorite } from '@mui/icons-material';

const TabsPage = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Tab one" value="1" icon={<Favorite />} iconPosition="start" />
            <Tab label="Tab two" value="2" disabled />
            <Tab label="Tab three" value="3" />
            <Tab label="Tab four" value="4" />
            <Tab label="Tab five" value="5" />
            <Tab label="Tab six" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel one</TabPanel>
        <TabPanel value="2">Panel two</TabPanel>
        <TabPanel value="3">Panel three</TabPanel>
        <TabPanel value="4">Panel four</TabPanel>
        <TabPanel value="5">Panel five</TabPanel>
        <TabPanel value="6">Panel six</TabPanel>
      </TabContext>
    </Box>
  );
};

export default TabsPage;
