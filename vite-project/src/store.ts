import { create } from 'zustand';
import type { CalculatorState } from './types';
interface CalculatorStore extends CalculatorState {
  setUnits: (units: number) => void;
  setRatePerUnit: (rate: number) => void;
  calculateTotal: () => void;
}
export const calculateElectricityFee = (units: number, ratePerUnit: number): number => {
  return units * ratePerUnit;
};

export const useCalculatorStore = create<CalculatorStore>((set, get) => ({
  units: 0,
  ratePerUnit: 0,
  total: null,
  setUnits: (units) => set({ units }),
  setRatePerUnit: (ratePerUnit) => set({ ratePerUnit }),
  calculateTotal: () => {
    const { units, ratePerUnit } = get();
    set({ total: calculateElectricityFee(units, ratePerUnit) });
  },
}));