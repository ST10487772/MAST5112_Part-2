// src/screens/AddItemScreen.tsx
import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuContext } from "../context/MenuContext";
import { courses } from "../data/courses";

const AddItemScreen = ({ navigation }: any) => {
  const { addMenuItem } = useContext(MenuContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState(courses[0]);
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (name && description && price) {
      addMenuItem({ name, description, course, price: parseFloat(price) });
      navigation.navigate("Home");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>

      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Text>Course:</Text>
  <Picker selectedValue={course} onValueChange={(v: string) => setCourse(v)} style={styles.input}>
        {courses.map((c) => (
          <Picker.Item label={c} value={c} key={c} />
        ))}
      </Picker>

      <TextInput
        placeholder="Price (R)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />

      <Button title="Add Dish" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginVertical: 5, borderRadius: 5 },
});

export default AddItemScreen;
