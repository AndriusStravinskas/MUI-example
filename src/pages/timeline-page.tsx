import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

const TimelinePage = () => (
  <Timeline position="alternate">
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        9:30 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        City A
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        10:00 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        City B
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        10:30 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined" />
      </TimelineSeparator>
      <TimelineContent>
        City C
      </TimelineContent>
    </TimelineItem>
  </Timeline>
);

export default TimelinePage;
