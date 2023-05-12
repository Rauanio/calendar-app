import { FC } from 'react';
import { Calendar, Layout } from 'antd';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';
import dayjs from 'dayjs';

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  function dateCellRender(value: dayjs.Dayjs) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter((ev) => ev.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
    );
  }
  return (
    <Layout>
      <Calendar dateCellRender={dateCellRender} />
    </Layout>
  );
};
