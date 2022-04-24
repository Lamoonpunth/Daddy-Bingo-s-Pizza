import React from "react";
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import { globalStyles } from "./globalStyles";
import DismissKeyboard from "./DismissKeyboard";
import { KeyboardAvoidingView } from "react-native";

const Gradient: React.FC = ({children}) => {

    return (
        <LinearGradient colors={['#FF6D6D', '#A863C7']} style={globalStyles.linearGradientforapplybtn}> 
            <DismissKeyboard>
                <KeyboardAvoidingView style={globalStyles.keyboardAvoid}>
                    {children}
                </KeyboardAvoidingView>
            </DismissKeyboard>
        </LinearGradient>
    );
};


export default Gradient