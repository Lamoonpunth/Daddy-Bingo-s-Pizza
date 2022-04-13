import React from "react";
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import { StyleSheet, SafeAreaView } from "react-native";

const Gradient: React.FC = ({children}) => {

    return (
        <LinearGradient colors={['#FF6D6D', '#F7878A', '#FFFFFF']} style={style.linearGradient}>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
};

const style=StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Gradient