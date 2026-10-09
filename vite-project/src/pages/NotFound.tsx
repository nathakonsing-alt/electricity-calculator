import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ maxWidth: 500, margin: '80px auto', textAlign: 'center' }}>
      <Card style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Title level={1} style={{ color: '#ff4d4f' }}>404</Title>
        <Title level={3}>Page not found 404</Title>
        <Paragraph>ระบบจะนำคุณกลับสู่หน้าหลักภายใน 5 วินาที...</Paragraph>
      </Card>
    </div>
  );
}