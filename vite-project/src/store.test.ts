import { describe, it, expect } from 'vitest';
import { calculateElectricityFee } from './store';

describe('ทดสอบฟังก์ชันคำนวณค่าไฟฟ้า', () => {
  it('หน่วยที่ใช้ 100 หน่วย ค่าไฟต่อหน่วย 4 บาท ต้องได้ผลลัพธ์ 400 บาท', () => {
    const result = calculateElectricityFee(100, 4);
    expect(result).toBe(400);
  });
});