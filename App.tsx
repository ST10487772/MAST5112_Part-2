import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import FilterScreen from './src/screens/FilterScreen';
import ItemDetailsScreen from './src/screens/ItemDetailsScreen';
import { MenuProvider } from './src/context/MenuContext';

export type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
  Filter: undefined;
  ItemDetails: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Chef Menu' }} />
          <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: 'Add Menu Item' }} />
          <Stack.Screen name="Filter" component={FilterScreen} options={{ title: 'Filter Menu' }} />
          <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} options={{ title: 'Item Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
