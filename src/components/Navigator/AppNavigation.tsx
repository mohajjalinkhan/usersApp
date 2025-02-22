//screens
import AllUsers from "../../screens/AllUsers";
import UpdateUser from "../../screens/UpdateUser";
import AddUser from "../../screens/AddUser";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName="allUsers">
        <Stack.Screen
          name="allUsers"
          component={AllUsers}
          options={{
            title: "",
            // headerTintColor: "#fff",
            // headerStyle: { backgroundColor: "#1f2937" },
            // headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addUser"
          component={AddUser}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#1f2937" },
            headerTintColor: "#fff",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="updateUser"
          component={UpdateUser}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#1f2937" },
            headerTintColor: "#fff",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
