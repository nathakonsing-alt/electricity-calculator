export interface CalculatorState {
  units: number;
  ratePerUnit: number;
  total: number | null;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}