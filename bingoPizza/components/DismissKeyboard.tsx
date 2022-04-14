import React from "react";
import {TouchableWithoutFeedback,SafeAreaView,Keyboard} from "react-native";

const DismissKeyboard: React.FC = ({children}) =>{
    return(
        <TouchableWithoutFeedback onPress={() =>{Keyboard.dismiss()}}>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default DismissKeyboard;