import { useCalculatorStore } from '../store';
import { Card, InputNumber, Button, Typography, Space } from 'antd';

const { Title, Text } = Typography;

export default function Calculate() {
  const { units, ratePerUnit, total, setUnits, setRatePerUnit, calculateTotal } = useCalculatorStore();

  return (
    <div style={{ maxWidth: 450, margin: '40px auto' }}>
      <Card title="เครื่องคำนวณค่าไฟฟ้า" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <div>
            <Text strong>จำนวนหน่วยที่ใช้:</Text>
            <InputNumber
              style={{ width: '100%', marginTop: 8 }}
              min={0}
              value={units}
              onChange={(val) => setUnits(val || 0)}
            />
          </div>

          <div>
            <Text strong>ค่าไฟฟ้าต่อหน่วย (บาท):</Text>
            <InputNumber
              style={{ width: '100%', marginTop: 8 }}
              min={0}
              value={ratePerUnit}
              onChange={(val) => setRatePerUnit(val || 0)}
            />
          </div>

          <Button type="primary" block size="large" onClick={calculateTotal}>
            คำนวณ
          </Button>

          {total !== null && (
            <div style={{ textAlign: 'center', backgroundColor: '#f6ffed', padding: '16px', borderRadius: '8px' }}>
              <Title level={4} style={{ color: '#52c41a', margin: 0 }}>
                ผลลัพธ์ค่าไฟฟ้ารวม: {total} บาท
              </Title>
            </div>
          )}
        </Space>
      </Card>
    </div>
  );
}