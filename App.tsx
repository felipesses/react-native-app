import { StyleSheet, Text, View } from "react-native";
import Lottie from "lottie-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, este é o React Native!</Text>
      <Lottie
        source={require("./assets/lottie-react-native.json")}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#67159C",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  animation: {
    height: 200,
    width: 200,
  },
});
