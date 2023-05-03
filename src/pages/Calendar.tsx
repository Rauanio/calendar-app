import React from 'react';
import { EventCalendar } from '../components/EventCalendar';
import { Button, Modal, Row } from 'antd';
import { EventForm } from '../components/EventForm';
import { useDispatch } from 'react-redux';
import { fetchGuests } from '../store/slices/ActionCreators';
import { selectEvent } from '../store/slices/eventSlice';
import { useSelector } from 'react-redux';

export const Calendar = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { quests } = useSelector(selectEvent);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGuests());
  }, []);

  return (
    <div>
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Добавить</Button>
      </Row>
      <EventCalendar events={[]} />
      <Modal
        title="Добавить событие"
        open={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}>
        <EventForm quests={quests} />
      </Modal>
    </div>
  );
};
