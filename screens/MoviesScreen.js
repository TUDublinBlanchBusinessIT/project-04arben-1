import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

export default function MoviesScreen() {
  const [cinemas, setCinemas] = useState([]);

  useEffect(() => {
    const fetchCinemas = async () => {
      const snapshot = await getDocs(collection(db, "cinemas"));
      const list = snapshot.docs.map((doc) => doc.data());
      setCinemas(list);
    };

    fetchCinemas();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSpace} />
      <View style={styles.header}>
        <Text style={styles.title}>Movies</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Cinema Locations:</Text>

        {cinemas.length === 0 ? (
          <Text style={{ color: "#fff", marginTop: 10 }}>Loading...</Text>
        ) : (
          cinemas.map((item, index) => (
            <Text key={index} style={{ color: "#fff", marginTop: 10 }}>
              • {item.name}
            </Text>
          ))
        )}
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
  marginTop: 200,           
  paddingHorizontal: 20,
  paddingVertical: 20,    
  backgroundColor: "#8e1c1cff", 
  borderRadius: 10,         
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});
