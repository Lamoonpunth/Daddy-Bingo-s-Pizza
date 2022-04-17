import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from "../screen/LogIn";
import HomeAdmin from '../screen/admin/HomeAdmin';
import TaskOrder from "../screen/chef/TaskOrder";
import RiderTask from "../screen/rider/RiderTask";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export const HomeStack = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LogIn' component={LogIn}/>
        <Stack.Screen name='Admin' component={HomeAdmin}/>
        <Stack.Screen name='Chef'  component={TaskOrder}/>
        <Stack.Screen name='Rider' component={RiderTask}/>  
    </Stack.Navigator>
);

export default HomeStack;