import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div style={{ maxWidth: 600, margin: '40px auto', textAlign: 'center' }}>
      <Card style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Title level={2}>เครื่องคำนวณค่าไฟฟ้ารายเดือน</Title>

        <div style={{ background: '#e6f7ff', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <Title level={4} style={{ color: '#1677ff' }}>สูตรการคำนวณค่าไฟฟ้า</Title>
          <Paragraph style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
            ค่าไฟฟ้า = จำนวนหน่วยที่ใช้ * ค่าไฟฟ้าต่อหน่วย
          </Paragraph>
        </div>
      </Card>
    </div>
  );
}