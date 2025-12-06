import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.replace("MainApp");
      })
      .catch((error) => {
        Alert.alert("Signup failed", error.message);
      });
  };

  return (
    <View style={styles.container}>


      <Image 
        source={require("../assets/cinestar.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Signup</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#ccc"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Signup" onPress={handleSignup} />

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000",
    alignItems: "center",
  },
  logo: {
    width: 700,
    height: 420,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 6,
    borderColor: "#555",
    color: "#fff",
  },
});
