import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sos from './Screens/Sos';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="SOS" component={Sos} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Signup" component={Signup} />
        </Tab.Navigator>
    );
}

export default TabNavigator