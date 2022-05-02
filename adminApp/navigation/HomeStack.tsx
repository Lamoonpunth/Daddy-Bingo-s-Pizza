import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,
    } from '@react-navigation/drawer';

import LogIn from "../screen/LogIn";

import HomeAdmin from '../screen/admin/HomeAdmin';
import EditProfile from '../screen/admin/edit/EditProfile';
import EditService from '../screen/admin/edit/EditService';
import EditIngredients from '../screen/admin/edit/EditIngredients';
import EditRecommend from '../screen/admin/edit/EditRecommend';
import EditAddRecommend from '../screen/admin/edit/EditAddRecommend';
import EditPresetPizza from '../screen/admin/edit/EditPresetPizza';
import AwaitingPayment from '../screen/admin/AwaitingPayment';
import PaymentInfo from '../screen/admin/PaymentInfo';
import TransactionInfo from '../screen/admin/TransactionInfo';
import Menu from '../screen/admin/Menu';
import EditAddMenu from '../screen/admin/edit/EditAddMenu';
import EditMore from '../screen/admin/edit/EditMore';
import RegisterEmployee from '../screen/admin/RegisterEmployee';
import RegisterId from '../screen/admin/RegisterId';
import RegisterInfo from '../screen/admin/RegisterInfo';

import ChefProfile from '../screen/chef/ChefProfile';
import TaskOrder from "../screen/chef/TaskOrder";
import TaskDeny from '../screen/chef/TaskDeny';
import TaskPrepare from '../screen/chef/TaskPrepare';

import RiderProfile from '../screen/rider/RiderProfile';
import RiderTask from '../screen/rider/RiderTask';
import RiderDelivery from '../screen/rider/RiderDelivery'

import 'react-native-gesture-handler';
import { DrawerMenu } from './DrawerAdmin';
import { DrawerChef } from './DrawerChef';
import { DrawerRider } from './DrawerRider';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Chef = createDrawerNavigator();
const Rider = createDrawerNavigator();

function AdminNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} drawerContent={props => <DrawerMenu{...props}/>}>
            <Drawer.Screen name='Home' component={HomeAdmin}/>
            <Drawer.Screen name='Profile' component={EditProfile}/>
            <Drawer.Screen name='Service' component={EditService} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='Recommend' component={EditRecommend} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='AddRecommend' component={EditAddRecommend} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='Menu' component={Menu} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='AddMenu' component={EditAddMenu} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='AddPizza' component={EditPresetPizza} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='EditMore' component={EditMore} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='Ingredients' component={EditIngredients} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='Awaiting' component={AwaitingPayment} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='PaymentInfo' component={PaymentInfo} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='TransactionInfo' component={TransactionInfo} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='RegisterEmployee' component={RegisterEmployee} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='RegisterId' component={RegisterId} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='RegisterInfo' component={RegisterInfo} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='Log Out' component={LogIn}/>
        </Drawer.Navigator>
    )
};

function ChefNavigator({route}:{route:any}) {
    return (
        <Chef.Navigator initialRouteName='TaskOrder' screenOptions={{headerShown:false}} drawerContent={props => <DrawerChef{...props}/>}>
            <Chef.Screen name='TaskOrder' component={TaskOrder}/>
            <Chef.Screen name='TaskDeny' component={TaskDeny}/>
            <Chef.Screen name='TaskPrepare' component={TaskPrepare}/>
            <Chef.Screen name='ChefProfile' component={ChefProfile} initialParams ={{params:route.params}}/>
            <Chef.Screen name='Log Out' component={LogIn}/>
        </Chef.Navigator>
    )
};

function RiderNavigator({route}:{route:any}) {
    return (
        <Rider.Navigator initialRouteName='RiderTask' screenOptions={{headerShown:false}} drawerContent={props => <DrawerRider{...props}/>}>
            <Rider.Screen name='RiderTask' component={RiderTask}/>
            <Rider.Screen name='RiderDelivery' component={RiderDelivery}/>
            <Rider.Screen name='RiderProfile' component={RiderProfile} initialParams = {{params:route.params}}/>
            <Rider.Screen name='Log Out' component={LogIn}/>
        </Rider.Navigator>
    )
};

export const HomeStack = () => (
    <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='LogIn' component={LogIn}/>
        <Stack.Screen name='Admin' component={AdminNavigator}/>
        <Stack.Screen name='Chef'  component={ChefNavigator}/>
        <Stack.Screen name='Rider' component={RiderNavigator}/>
    </Stack.Navigator>
);

export default HomeStack;