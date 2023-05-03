import React, { FC } from 'react';
import { Button, Calendar, DatePicker, Form, Input, Layout, Modal, Row, Select } from 'antd';
import { IEvent } from '../models/IEvent';

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = () => {
  return (
    <Layout>
      <Calendar />
    </Layout>
  );
};
