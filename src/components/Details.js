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
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${searchInput}`
      );
      console.log(response);
      if (response.status === 200) {
        setUser(response.data);
      } else {
        console.log("else part", response);
        setError(response.data);
      }
    } catch (err) {
      console.log("catch part", err);
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error !== "") {
    return (
      <View>
        <Text>Error in fetching data</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Hello details page:{user.id}</Text>
      <Text> {user.title}</Text>
    </View>
  );
}
