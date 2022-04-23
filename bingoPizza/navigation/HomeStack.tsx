import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

import LogInTab from "../screens/LogInTab";
import Reginfo from "../screens/Reginfo";
import OrderTab from "../screens/OrderTab";
import { OrderDrawer } from "./OrderDrawer";
import FoodCart from "../screens/FoodCart";
import Menu from "../screens/Menu";
import MoreTab from "../screens/MoreTab";
import Subscription from "../screens/SubscriptionTab";

import 'react-native-gesture-handler';

const LogIn = createNativeStackNavigator();
const Order = createDrawerNavigator();

function HomeOrder(){
    return (
        <Order.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} drawerContent={props => <OrderDrawer{...props}/>}>
            <Order.Screen name='Home' component={OrderTab} options={{swipeEnabled:false}}/>
            <Order.Screen name='Cart' component={FoodCart} options={{swipeEnabled:false}}/>
            <Order.Screen name='Menu' component={Menu} options={{swipeEnabled:false}}/>
            <Order.Screen name='More' component={MoreTab} options={{swipeEnabled:false}}/>
            <Order.Screen name='Sub' component={Subscription} options={{swipeEnabled:false}}/>
        </Order.Navigator>
    )
};

function HomeStack() {
    return (
      <LogIn.Navigator screenOptions={{headerShown:false}}>
        <LogIn.Screen name="LogIn" component={LogInTab} />
        <LogIn.Screen name="Order" component={HomeOrder} />
        <LogIn.Screen name="Register" component={Reginfo} />
      </LogIn.Navigator>
    );
  }

export default HomeStack;