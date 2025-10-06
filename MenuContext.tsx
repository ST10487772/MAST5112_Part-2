import React, { createContext, useState, useContext } from 'react';
import { MenuItem } from '../types';

type MenuContextType = {
  items: MenuItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => setItems(prev => [item, ...prev]);
  const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <MenuContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error('useMenu must be used within MenuProvider');
  return context;
};
