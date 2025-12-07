import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MoviesScreen from "./screens/MoviesScreen";
import ScanScreen from "./screens/ScanScreen";
import RewardsScreen from "./screens/RewardsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function ScanButton({ focused }) {
  return (
    <View
      style={{
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: focused ? "#d61c1c" : "#000000ff",
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
    </View>
  );
}


function MainApp() {
  return (
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
        tabBarIcon: ({ focused }) => {
          if (route.name === "Scan") return <ScanButton focused={focused} />;
          
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Movies") iconName = "film-outline";
          else if (route.name === "Rewards") iconName = "gift-outline";
          else if (route.name === "Profile") iconName = "person-outline";

          return <Ionicons name={iconName} size={22} color={focused ? "#d61c1c" : "#bdbdbd"} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
    
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
