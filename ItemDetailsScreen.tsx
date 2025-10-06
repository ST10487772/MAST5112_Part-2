import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useMenu } from '../context/MenuContext';

const ItemDetailsScreen: React.FC = ({ route, navigation }: any) => {
  const { id } = route.params;
  const { items, removeItem } = useMenu();

  const item = items.find(i => i.id === id);

  if (!item) return <Text>Item not found</Text>;

  const onRemove = () => {
    Alert.alert('Confirm', 'Remove this item?', [
      { text: 'Cancel' },
      { text: 'Remove', style: 'destructive', onPress: () => { removeItem(id); navigation.navigate('Home'); } }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.course.name}</Text>
      <Text>R {item.price.toFixed(2)}</Text>
      <Text>{item.description}</Text>
      <Button title="Remove Item" color="red" onPress={onRemove} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  name: { fontSize: 22, fontWeight: 'bold' },
});

export default ItemDetailsScreen;
