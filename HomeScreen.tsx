import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useMenu } from '../context/MenuContext';
import { COURSES } from '../data/courses';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { items, removeItem } = useMenu();

  const totalCount = items.length;

  const avgByCourse = useMemo(() => {
    const map: Record<string, { sum: number; count: number }> = {};

    // Normalize course names
    COURSES.forEach((c) => {
      const courseName = typeof c === 'string' ? c : c.name;
      map[courseName] = { sum: 0, count: 0 };
    });

    items.forEach((it) => {
      if (!map[it.course]) map[it.course] = { sum: 0, count: 0 };
      map[it.course].sum += it.price;
      map[it.course].count += 1;
    });

    const out: Record<string, number> = {};
    Object.keys(map).forEach((key) => {
      const { sum, count } = map[key];
      out[key] = count ? +(sum / count).toFixed(2) : 0;
    });

    return out;
  }, [items]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Menu</Text>

      <View style={styles.buttons}>
        <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
        <Button title="Filter" onPress={() => navigation.navigate('Filter')} />
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total items: {totalCount}</Text>
        {COURSES.map((c, idx) => {
          const courseName = typeof c === 'string' ? c : c.name;
          return (
            <Text key={idx} style={styles.summaryText}>
              {courseName} avg: R {avgByCourse[courseName]?.toFixed(2) ?? '0.00'}
            </Text>
          );
        })}
      </View>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ItemDetails', { id: item.id })}
            onLongPress={() => removeItem(item.id)}
          >
            <Text style={styles.name}>
              {item.name} — {item.course}
            </Text>
            <Text>R {item.price.toFixed(2)}</Text>
            {item.description ? (
              <Text style={styles.desc}>{item.description}</Text>
            ) : null}
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No menu items yet. Add some!</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  summary: { marginBottom: 15 },
  summaryText: { fontSize: 14, color: '#333' },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  name: { fontWeight: '600', marginBottom: 4 },
  desc: { color: '#666' },
  empty: { textAlign: 'center', marginTop: 20, color: '#888' },
});

export default HomeScreen;
