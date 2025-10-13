import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MenuContext } from '../context/MenuContext';

export default function MenuDetailsScreen({ route, navigation }: any) {
  const { item } = route.params;
  const { removeItem } = useContext(MenuContext);

  const handleRemove = () => {
    Alert.alert('Confirm', 'Remove this dish?', [
      { text: 'Cancel' },
      {
        text: 'Yes',
        onPress: () => {
          removeItem(item.id);
          navigation.navigate('Home');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>Course: {item.course}</Text>
      <Text>Price: R{item.price}</Text>

      <TouchableOpacity style={styles.button} onPress={handleRemove}>
        <Text style={styles.buttonText}>🗑️ Remove Dish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  button: { backgroundColor: '#E53935', padding: 12, borderRadius: 8, marginTop: 20 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
