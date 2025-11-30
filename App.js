import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import MoviesScreen from './screens/MoviesScreen';
import ScanScreen from './screens/ScanScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Animated } from 'react-native';
import { useRef, useEffect } from 'react';
import { Easing } from 'react-native';


const Tab = createBottomTabNavigator();

// Animated Scan Button Component
function AnimatedScanButton({ focused }) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1.1 : 1,
      useNativeDriver: true,
      friction: 10,
      tension: 40,
    }).start();
  }, [focused]);

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
        backgroundColor: focused ? "#d61c1c" : "#111",
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 35,
      }}
    >
      <MaterialCommunityIcons
        name="qrcode-scan"
        size={32}
        color={focused ? "#fff" : "#d61c1c"}
      />
    </Animated.View>
  );
}


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
            paddingBottom: 0,
          },
          tabBarActiveTintColor: "#d61c1c",
          tabBarInactiveTintColor: "#bdbdbd",

          tabBarIcon: ({ color, size, focused }) => {
            // Special Scan Button
            if (route.name === "Scan") {
              return <AnimatedScanButton focused={focused} />;
            }

            // Normal icons
            let iconName;
            if (route.name === "Home") iconName = "home-outline";
            else if (route.name === "Movies") iconName = "film-outline";
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
