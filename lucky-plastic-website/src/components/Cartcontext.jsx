import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "lucky-cart";

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load);

  // keep the cart after refresh
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  /* Quantity is counted in cartons (or rolls for cling film) */
  const addItem = (p) =>
    setItems((prev) => {
      if (prev.some((i) => i.id === p.id)) {
        return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [
        ...prev,
        {
          id: p.id,
          name: p.name,
          code: p.code,
          image: p.image,
          pack: p.pack,
          unit: p.unit,
          unitPrice: p.price == null ? null : p.pack ? p.price * p.pack : p.price, // price of 1 carton / 1 roll (null = price on request)
          qty: 1,
        },
      ];
    });

  const increase = (id) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));

  const decrease = (id) =>
    setItems((prev) =>
      prev.flatMap((i) => (i.id !== id ? [i] : i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []))
    );

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clear = () => setItems([]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      increase,
      decrease,
      remove,
      clear,
      count: items.reduce((s, i) => s + i.qty, 0),
      total: items.reduce((s, i) => s + (i.unitPrice == null ? 0 : i.qty * i.unitPrice), 0),
      hasUnpriced: items.some((i) => i.unitPrice == null),
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}