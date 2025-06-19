export interface Product {
  id: number;
  productName: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, productName: 'Wireless Mouse', description: 'Ergonomic and fast', price: 800 },
  { id: 2, productName: 'Keyboard', description: 'Mechanical keyboard', price: 1500 },
  { id: 3, productName: 'Monitor', description: '27\" Full HD Display', price: 7000 },
  { id: 4, productName: 'USB-C Cable', description: 'Durable charging cable', price: 300 },
];
