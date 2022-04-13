import React from "react";
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from "react-native";
import { globalStyles } from "./globalStyles";

const Gradient: React.FC = ({children}) => {

    return (
        <LinearGradient colors={['#FF6D6D', '#F7878A', '#FFFFFF']} style={globalStyles.linearGradient}>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Gradient