import React from "react";
import { 
    View ,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from "../styles/Gradient";
import { globalStyles } from "../styles/globalStyles";
import SwitchSelector from "react-native-switch-selector";

export default function Subscription({navigation,route}:{navigation:any,route:any}){
   
    const onBackButton = () =>{
        navigation.goBack()
    }

    return(
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                        <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
                    </TouchableOpacity>
                    <Text style={globalStyles.fontHeader}>Subscription</Text>
                    <View style={globalStyles.underline}></View>  
                </View>
            </View>
        </Gradient>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: 'transparent',
    },
    selector: {
        padding:10,
        width:screenWidth,
        height:60,
        backgroundColor:'transparent',
        opacity:1
    },
    header: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    iconContainer: {
        width:screenWidth*0.9,
        flexDirection:'row',
        alignItems:'flex-start'
    },
});