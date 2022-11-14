import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
export default function Details({ route, navigation }) {
  console.log(route.params);
  return (
    <View>
      <Text>Hello details page</Text>
    </View>
  );
}
