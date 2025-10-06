// src/screens/AddItemScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { COURSES } from '../data/courses';
import { useMenu } from '../context/MenuContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Course } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'AddItem'>;

// Simple, safe id generator with crypto.randomUUID fallback when available
const generateId = (): string => {
  // prefer secure random UUID if runtime provides it
  // (modern JS runtimes / newer RN may expose globalThis.crypto.randomUUID)
  // otherwise fallback to a timestamp+random string
  if (typeof globalThis?.crypto?.randomUUID === 'function') {
    try {
      return globalThis.crypto.randomUUID();
    } catch (e) {
      // fall through to fallback
    }
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
};

const AddItemScreen: React.FC<Props> = ({ navigation }) => {
  const { addItem } = useMenu();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>(COURSES[0]);
  const [price, setPrice] = useState('');

  const onAdd = () => {
    const parsed = parseFloat(price);
    if (!name.trim()) {
      Alert.alert('Error', 'Dish name is required');
      return;
    }
    if (isNaN(parsed) || parsed <= 0) {
      Alert.alert('Error', 'Enter a valid price');
      return;
    }

    addItem({
      id: generateId(),
      name,
      description,
      course,
      price: parsed,
    });

    setName('');
    setDescription('');
    setPrice('');
    setCourse(COURSES[0]);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter dish name"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Optional description"
      />

      <Text style={styles.label}>Course</Text>
      {COURSES.map((c) => (
        <View key={c.id} style={{ marginVertical: 4 }}>
          <Button
            title={c.name + (course.id === c.id ? ' ✓' : '')}
            onPress={() => setCourse(c)}
          />
        </View>
      ))}

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        placeholder="e.g. 89.99"
      />

      <View style={{ marginTop: 16 }}>
        <Button title="Add Item" onPress={onAdd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#fff' },
  label: { marginTop: 10, fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default AddItemScreen;
