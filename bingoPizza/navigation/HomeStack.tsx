import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

import LogInTab from "../screens/LogInTab";
import Reginfo from "../screens/Reginfo";
import OrderTab from "../screens/OrderTab";
import { OrderDrawer } from "./OrderDrawer";
import FoodCart from "../screens/FoodCart";
import SeeAllRecommend from "../screens/SeeAllRecommend";
import Menu from "../screens/Menu";
import Profile from "../screens/Profile";
import PresetPizza from "../screens/PresetPizza";
import MoreTab from "../screens/MoreTab";
import Subscription from "../screens/SubscriptionTab";
import SubscriptionSummary from "../screens/SubscriptionSummary";
import Transaction from "../screens/Transaction";
import OrderAwait from "../screens/OrderAwait";
import OrderSummary from "../screens/OrderSummary";
import Queue from "../screens/Queue";
import Prepare from "../screens/Prepare";
import Delivery from "../screens/Delivery";
import Arrive from "../screens/Arrive";

import 'react-native-gesture-handler';

const LogIn = createNativeStackNavigator();
const Order = createDrawerNavigator();

function HomeOrder({route,navigation}){
    return (
        <Order.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} drawerContent={props => <OrderDrawer{...props}/>}>
            <Order.Screen name='Home' component={OrderTab} options={{swipeEnabled:false}}/>
            <Order.Screen name='Cart' component={FoodCart} options={{swipeEnabled:false}}/>
            <Order.Screen name='SeeAll' component={SeeAllRecommend} options={{swipeEnabled:false}}/>
            <Order.Screen name='Menu' component={Menu} options={{swipeEnabled:false}}/>
            <Order.Screen name='Profile' component={Profile} options={{swipeEnabled:false}} initialParams={{params:route.params}}/>
            <Order.Screen name='More' component={MoreTab} options={{swipeEnabled:false}}/>
            <Order.Screen name='Sub' component={Subscription} options={{swipeEnabled:false}}/>
            <Order.Screen name='SubscriptionSummary' component={SubscriptionSummary} options={{swipeEnabled:false}}/>
            <Order.Screen name='PresetPizza' component={PresetPizza} options={{swipeEnabled:false}}/>
            <Order.Screen name='OrderSummary' component={OrderSummary} options={{swipeEnabled:false}}/>
            <Order.Screen name='Transaction' component={Transaction} options={{swipeEnabled:false}}/>
            <Order.Screen name='OrderAwait' component={OrderAwait} options={{swipeEnabled:false}}/>
            <Order.Screen name='Queue' component={Queue} options={{swipeEnabled:false}}/>
            <Order.Screen name='Prepare' component={Prepare} options={{swipeEnabled:false}}/>
            <Order.Screen name='Delivery' component={Delivery} options={{swipeEnabled:false}}/>
            <Order.Screen name='Arrive' component={Arrive} options={{swipeEnabled:false}}/>
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