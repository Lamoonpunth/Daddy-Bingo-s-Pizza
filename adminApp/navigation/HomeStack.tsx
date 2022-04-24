import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,
    } from '@react-navigation/drawer';

import LogIn from "../screen/LogIn";

import HomeAdmin from '../screen/admin/HomeAdmin';
import EditProfile from '../screen/admin/edit/EditProfile';
import EditService from '../screen/admin/edit/EditService';
import EditIngredients from '../screen/admin/edit/EditIngredients';
import EditPresetPizza from '../screen/admin/edit/EditPresetPizza';
import EditPizza from '../screen/admin/edit/EditPizza';
import EditAppetizer from '../screen/admin/edit/EditAppetizer';

import TaskOrder from "../screen/chef/TaskOrder";
import RiderTask from "../screen/rider/RiderTask";

import 'react-native-gesture-handler';
import { Menu } from '../screen/admin/Menu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AdminNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} drawerContent={props => <Menu{...props}/>}>
            <Drawer.Screen name='Home' component={HomeAdmin}/>
            <Drawer.Screen name='Profile' component={EditProfile}/>
            <Drawer.Screen name='Service' component={EditService} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='Ingredients' component={EditIngredients} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='Pizza' component={EditPizza} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='PresetPizza' component={EditPresetPizza} options={{swipeEnabled:false,}}/>
            <Drawer.Screen name='Appetizer' component={EditAppetizer}/>
            <Drawer.Screen name='Log Out' component={LogIn}/>
        </Drawer.Navigator>
    )
};

export const HomeStack = () => (
    <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='LogIn' component={LogIn}/>
        <Stack.Screen name='Admin' component={AdminNavigator}/>
        <Stack.Screen name='Chef'  component={TaskOrder}/>
        <Stack.Screen name='Rider' component={RiderTask}/>  
    </Stack.Navigator>
);

export default HomeStack;