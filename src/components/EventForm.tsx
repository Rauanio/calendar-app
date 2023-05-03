import React from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { IUser } from '../models/IUser';

interface EventFormProps {
  quests: IUser[];
}

export const EventForm = ({ quests }: EventFormProps) => {
  return (
    <Form>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[{ required: true, message: 'Обязательное поле!' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[{ required: true, message: 'Обязательное поле!' }]}>
        <DatePicker  />
      </Form.Item>
      <Form.Item
        label="Пользовытели"
        name="guests"
        rules={[{ required: true, message: 'Обязательное поле!' }]}>
        <Select>
          {quests.map((quest) => (
            <Select.Option value={quest.username}>{quest.username}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item>
          <Button type="primary">Создать</Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
