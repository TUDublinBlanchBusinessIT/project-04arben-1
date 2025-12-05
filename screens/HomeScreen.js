import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.topSpace} />

      <View style={styles.header}>
        <Text style={styles.title}>Welcome to CineStar</Text>
        <Text style={styles.subtitle}>Discover trending movies and earn rewards</Text>
      </View>


      <View style={styles.imageContainer}>
        <Image 
          source={require("../assets/fnaf.jpg")} 
          style={styles.image} 
          resizeMode="contain"
        />
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
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20, 
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 500,   
    height: 250,  
  },
});
