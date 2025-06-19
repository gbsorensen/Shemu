import React, { createContext, useContext, useState, useMemo } from 'react';

export type Product = {
  id: number;
  productName: string;
  description: string;
  price: number;
};

type CartItem = Product;

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const removeFromCartByIndex = (indexToRemove: number) => {
    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };


  const value = useMemo(() => ({ cartItems, addToCart, removeFromCart, removeFromCartByIndex }), [cartItems]);
  

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};



