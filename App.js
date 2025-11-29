import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import MoviesScreen from './screens/MoviesScreen';
import ScanScreen from './screens/ScanScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
tabBarStyle: {
  backgroundColor: "#0a0a0a",
  borderTopWidth: 0,
  height: 70,
  position: "absolute",
  paddingBottom: 0,  // ekstra boşluk kaldır
},


    tabBarActiveTintColor: "#d61c1c",
    tabBarInactiveTintColor: "#bdbdbd",

    // 👇 THIS PART — insert here
    tabBarIcon: ({ color, size, focused }) => {
      let iconName;

      if (route.name === "Home") iconName = "home-outline";
      else if (route.name === "Movies") iconName = "film-outline";
      
      // 🔥 SPECIAL SCAN BUTTON
else if (route.name === "Scan") {
  return (
    <View
      style={{
        backgroundColor: focused ? "#d61c1c" : "#cc1010",
        width: 60,
        height: 60,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 35,  // tab bar üstüne taşımak için
      }}
    >
      <MaterialCommunityIcons
        name="qrcode-scan"
        size={32}
        color="#fff"
      />
    </View>
  );
}







      else if (route.name === "Rewards") iconName = "gift-outline";
      else if (route.name === "Profile") iconName = "person-outline";

      return <Ionicons name={iconName} size={22} color={color} />;
    },
  })}
>

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Movies" component={MoviesScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Rewards" component={RewardsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
