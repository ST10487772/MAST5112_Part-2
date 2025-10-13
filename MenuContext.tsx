// src/context/MenuContext.tsx
import React, { createContext, useState, ReactNode } from "react";
import { MenuItem } from "../types";
import { v4 as uuidv4 } from "uuid";

type MenuContextType = {
  menu: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, "id">) => void;
  removeItem: (id: string) => void;
};

export const MenuContext = createContext<MenuContextType>({
  menu: [],
  addMenuItem: () => {},
  removeItem: () => {},
});

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuItem[]>([
    { id: uuidv4(), name: "Tomato Soup", description: "Fresh homemade soup", course: "Starters", price: 50 },
    { id: uuidv4(), name: "Grilled Steak", description: "Served with veggies", course: "Mains", price: 180 },
    { id: uuidv4(), name: "Chocolate Cake", description: "Rich and moist", course: "Desserts", price: 70 },
  ]);

  const addMenuItem = (item: Omit<MenuItem, "id">) => {
    const newItem = { id: uuidv4(), ...item };
    setMenu([...menu, newItem]);
  };

  const removeItem = (id: string) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menu, addMenuItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};
