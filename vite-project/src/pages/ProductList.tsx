import { useState, useEffect } from 'react';
import { Row, Col, Card, Spin, Alert, Typography } from 'antd';
import type { Product } from '../types';

const { Title } = Typography;

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('ไม่สามารถดึงข้อมูลสินค้าได้');
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <Spin size="large" tip="กำลังโหลดข้อมูล..." />
      </div>
    );
  }

  if (error) {
    return <Alert message="เกิดข้อผิดพลาด" description={error} type="error" showIcon />;
  }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>รายการสินค้า</Title>
      <Row gutter={[16, 16]}>
        {products.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  style={{ height: 200, objectFit: 'contain', padding: 12 }}
                />
              }
            >
              <Card.Meta title={item.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}