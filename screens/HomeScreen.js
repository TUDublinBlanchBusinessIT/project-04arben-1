import { View, Text, StyleSheet, ScrollView, Image, FlatList, Dimensions } from "react-native";

import movie1 from "../assets/avatar.webp";
import movie2 from "../assets/terminator.jpg";

const screenWidth = Dimensions.get("window").width;

const movies = [movie1, movie2];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.topSpace} />

      <View style={styles.header}>
        <Text style={styles.title}>Welcome to CineStar</Text>
        <Text style={styles.subtitle}>Discover trending movies and earn rewards</Text>
      </View>



      <View style={styles.sliderContainer}>
        <Text style={styles.sliderTitle}>Now Showing</Text>
        <FlatList
          data={movies}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => (
            <Image source={item} style={styles.movieImage} resizeMode="cover" />
          )}
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
  sliderContainer: {
    marginTop: 80,
  },
  sliderTitle: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  movieImage: {
    width: screenWidth * 0.8,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
