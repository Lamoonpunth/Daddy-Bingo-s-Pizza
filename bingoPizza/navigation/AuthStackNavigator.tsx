import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStack";

import LogInTab from "../screens/LogInTab";
import OrderTab from "../screens/OrderTab";
import Reginfo from "../screens/Reginfo";

export type LogInNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'AuthStackNavigator'
>;

export type Props = {
    navigation: LogInNavigation;
  };

const AuthStack = createNativeStackNavigator();

export default function AuthStackNavigator({navigation}: Props){
    
    return (
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Group>
                <AuthStack.Screen name={'LogIn'} component={LogInTab}/>
                <AuthStack.Screen name={'RegisterInformation'} component={Reginfo}/>    
            </AuthStack.Group>
            <AuthStack.Group>
                <AuthStack.Screen name={'Order'} component={OrderTab}/>    
            </AuthStack.Group>
        </AuthStack.Navigator>
    );
}