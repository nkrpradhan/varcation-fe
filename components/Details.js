import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Details({ route, navigation }) {
  console.log(route.params);
  const { searchInput } = route.params;
  const [user, setUser] = useState({});
  useEffect(async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${searchInput}`
    );
    console.log(result.data);
    setUser(result.data);
  }, []);
  return (
    <View>
      <Text>Hello details page:{user.id}</Text>
      <Text> {user.title}</Text>
    </View>
  );
}
