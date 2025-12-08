import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp, query, where, getDocs, orderBy } from "firebase/firestore";

export default function ScanScreen() {
  const [barcode, setBarcode] = useState("");
  const [tickets, setTickets] = useState([]);


  const fetchTickets = async () => {
    try {
      const q = query(
        collection(db, "userTickets"),
        where("userId", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTickets(list);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleAddTicket = async () => {
    if (!barcode) {
      Alert.alert("Error", "Please enter a barcode");
      return;
    }

    try {
      await addDoc(collection(db, "userTickets"), {
        userId: auth.currentUser.uid,
        barcode: barcode,
        timestamp: serverTimestamp(),
      });
      Alert.alert("Success", "Ticket added successfully!");
      setBarcode("");
      fetchTickets();
    } catch (error) {
      console.error("Error adding ticket:", error);
      Alert.alert("Error", "Could not add ticket");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSpace} />
      <View style={styles.header}>
        <Text style={styles.title}>Scan</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Enter Ticket Barcode:</Text>
        <TextInput
          style={styles.input}
          placeholder="Scan or type barcode"
          placeholderTextColor="#888"
          value={barcode}
          onChangeText={setBarcode}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTicket}>
          <Text style={styles.buttonText}>Add Ticket</Text>
        </TouchableOpacity>

        <Text style={[styles.text, { marginTop: 30 }]}>Your Ticket History:</Text>
        {tickets.length === 0 ? (
          <Text style={{ color: "#fff", marginTop: 10 }}>No tickets added yet.</Text>
        ) : (
          tickets.map((item) => (
            <View key={item.id} style={styles.ticketItem}>
              <Text style={{ color: "#fff" }}>• {item.barcode}</Text>
            </View>
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
    marginTop: 20,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#fff",
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#E50914",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  ticketItem: {
    backgroundColor: "#2C2C2C",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
});
