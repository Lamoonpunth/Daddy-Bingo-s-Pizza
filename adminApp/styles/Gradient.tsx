import React from "react";
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import { globalStyles } from "./globalStyles";
import DismissKeyboard from "./DismissKeyboard";

const Gradient: React.FC = ({children}) => {

    return (
        <LinearGradient colors={['#FF6D6D', '#F7878A', '#FFFFFF']} style={globalStyles.linearGradient}> 
            <DismissKeyboard>
                {children} 
            </DismissKeyboard>
        </LinearGradient>
    );
};

export default Gradient