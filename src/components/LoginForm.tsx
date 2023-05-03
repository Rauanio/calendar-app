import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/ActionCreators';
import { useSelector } from 'react-redux';
import { selectAuth } from '../store/slices/authSlice';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { error, isLoading } = useSelector(selectAuth);
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(login(username, password));
    };

    return (
        <Form onFinish={onSubmit}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
