import LandingPage1 from "./Pages/LandingPage1";
import Login from "./Pages/Login";
import LandingPage2 from "./Pages/LandingPage2";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        console.log('Checking authentication...');
        const authStatus = await AsyncStorage.getItem('isAuthenticated');
        setIsAuthenticated(authStatus === "true"); 
        console.log('Is authenticated:', authStatus);
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "LandingPage1"}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="LandingPage1" component={LandingPage1} options={{ headerShown: false }} />
        <Stack.Screen name="LandingPage2" component={LandingPage2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
