import React from 'react';
import { Button, Modal, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, fetchEvents, fetchGuests } from '../store/slices/ActionCreators';
import { selectEvent } from '../store/slices/eventSlice';
import { EventCalendar, EventForm } from '../components';
import { IEvent } from '../models/IEvent';
import { selectAuth } from '../store/slices/authSlice';

export const Calendar = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { quests, events } = useSelector(selectEvent);
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGuests());
    dispatch(fetchEvents(user.username));
  }, []);

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    dispatch(createEvent(event));
  };

  return (
    <div>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Button onClick={() => setModalVisible(true)}>Добавить</Button>
      </Row>
      <EventCalendar events={events} />
      <Modal
        title="Добавить событие"
        open={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}>
        <EventForm quests={quests} submit={addNewEvent} />
      </Modal>
    </div>
  );
};
