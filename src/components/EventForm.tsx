import React from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';
import { useSelector } from 'react-redux';
import { selectAuth } from '../store/slices/authSlice';
import dayjs from 'dayjs';

interface EventFormProps {
  quests: IUser[];
  submit: (event: IEvent) => void;
}

export const EventForm = ({ quests, submit }: EventFormProps) => {
  const [event, setEvent] = React.useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent);

  const { user } = useSelector(selectAuth);

  const selectDate = (date: dayjs.Dayjs | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const submitForm = () => {
    submit({ ...event, author: user.username });
  };

  return (
    <Form>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[{ required: true, message: 'Обязательное поле!' }]}>
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[{ required: true, message: 'Обязательное поле!' }]}>
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item
        label="Пользовытели"
        name="guests"
        rules={[{ required: true, message: 'Обязательное поле!' }]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {quests.map((quest) => (
            <Select.Option key={quest.username} value={quest.username}>
              {quest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button onClick={submitForm} type="primary">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
