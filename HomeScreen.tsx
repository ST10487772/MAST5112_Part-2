// src/screens/HomeScreen.tsx
import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { MenuContext } from "../context/MenuContext";

const HomeScreen = ({ navigation }: any) => {
  const { menu } = useContext(MenuContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Chef Menu</Text>
      <Text>Total Dishes: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.course}</Text>
            <Text>{item.description}</Text>
            <Text>R {item.price}</Text>
          </View>
        )}
      />

      <View style={styles.buttons}>
        <Button title="➕ Add Dish" onPress={() => navigation.navigate("AddItem")} />
        <Button title="🔍 Filter Menu" onPress={() => navigation.navigate("Filter")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  card: { backgroundColor: "#f4f4f4", padding: 10, marginVertical: 5, borderRadius: 8 },
  name: { fontWeight: "bold" },
  buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
});

export default HomeScreen;
