import { Card, Layout, Row } from 'antd';
import { LoginForm } from '../components';

export const Login = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginForm />
                </Card>
            </Row>
        </Layout>
    );
};
