import React from 'react';
import {View,
    Text,
    StyleSheet,
    } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    DrawerContent,
    } from '@react-navigation/drawer';

import LogIn from "../screen/LogIn";
import HomeAdmin from '../screen/admin/HomeAdmin';
import EditService from '../screen/admin/edit/EditService';
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
            <Drawer.Screen name='EditService' component={EditService}/>
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