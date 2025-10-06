import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useMenu } from '../context/MenuContext';
import { COURSES } from '../data/courses';

const FilterScreen: React.FC = () => {
  const { items } = useMenu();
  const [selected, setSelected] = useState<string>('All');

  const filtered =
    selected === 'All' ? items : items.filter(i => i.course.id === selected);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>
      <View style={styles.row}>
        <Button title="All" onPress={() => setSelected('All')} />
        {COURSES.map(c => (
          <Button key={c.id} title={c.name} onPress={() => setSelected(c.id)} />
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} — R {item.price.toFixed(2)}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold' },
  row: { flexDirection: 'row', marginVertical: 10, justifyContent: 'space-around' },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
});

export default FilterScreen;
