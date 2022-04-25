import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get('screen');
import Gradient from "../styles/Gradient";
import GradientForBTN from "../styles/GradientForBTN";
import { globalStyles } from "../styles/globalStyles";

export default function Transaction({ navigation, route }: { navigation: any, route: any }) {

    const onBackButton = () =>{
        navigation.goBack();
    }
    const {price} = route.params;
    console.log(price)
    return (
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                        <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>   
                    </TouchableOpacity>
                    <Text style={styles.fontHeader}>Transaction</Text>
                    <View style={globalStyles.underline}></View>  
                </View>
                <Image style={styles.transaction} source={{uri:"https://qrmango.com/promptpay/qr?pp_no=0808491161"+"&amount="+price+"&size=300"}}/>
            </View>
        </Gradient>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:60,
        backgroundColor: 'transparent',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        height: height,
        width: width,
    },
    header: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    fontHeader:{
        fontSize: 30,
        color:'white',
    },
    iconContainer: {
        width:width*0.9,
        flexDirection:'row',
        alignItems:'flex-start'
    },
    transaction: {
        marginVertical:20,
        height: width*0.8,
        width: width*0.8,
    },
})