import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogInTab from "../screens/LogInTab";
import OrderTab from "../screens/OrderTab";
import Reginfo from "../screens/Reginfo";

const AuthStack = createNativeStackNavigator();

export function AuthStackNavigator() {
    
    return (
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name={'LogIn'} component={LogInTab}/>
            <AuthStack.Screen name={'RegisterInformation'} component={Reginfo}/>
            <AuthStack.Screen name={'Order'} component={OrderTab}/>
        </AuthStack.Navigator>
    );
}