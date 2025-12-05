import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function MoviesScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.topSpace} />


      <View style={styles.header}>
        <Text style={styles.title}>Movies</Text>
      </View>


      <View style={styles.content}>
        <Text style={styles.text}>Movies Screen</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  topSpace: {
    height: 60,
    backgroundColor: "#000",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});
