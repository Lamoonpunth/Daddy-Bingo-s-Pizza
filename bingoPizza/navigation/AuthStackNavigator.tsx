import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogInTab from "../screens/LogInTab";
import OrderTab from "../screens/OrderTab";
import RegisterInformationTab from "../screens/RegisterInformationTab";

const AuthStack = createNativeStackNavigator();

export function AuthStackNavigator() {
    
    return (
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name={'LogIn'} component={LogInTab}/>
            <AuthStack.Screen name={'Register Information'} component={RegisterInformationTab}/>
            <AuthStack.Screen name={'Order'} component={OrderTab}/>
        </AuthStack.Navigator>
    );
}