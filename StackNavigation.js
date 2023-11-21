import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./Screens/Welcome";
import Home from "./Screens/Home";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import Sos from "./Screens/Sos";

const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SOS" component={Sos} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}


export default StackNavigation

