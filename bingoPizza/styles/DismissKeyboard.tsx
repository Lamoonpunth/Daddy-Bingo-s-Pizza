import React from "react";
import {TouchableWithoutFeedback, SafeAreaView,Keyboard, KeyboardAvoidingView} from "react-native";

const DismissKeyboard: React.FC = ({children}) =>{
    return(
        <KeyboardAvoidingView style={{flex:1}}>
            <TouchableWithoutFeedback onPress={() =>{Keyboard.dismiss()}}>
                <SafeAreaView>
                    {children}
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default DismissKeyboard;