import React from "react";
import { 
    View ,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    } from "react-native";

import '../globals';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from "../styles/Gradient";
import { globalStyles } from "../styles/globalStyles";

export default function FoodCart({navigation}:{navigation:any}){
    
    return(
        <Gradient>
            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {navigation.goBack()}}>
                        <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
                    </TouchableOpacity>
                    <Text style={globalStyles.fontHeader}>ตะกร้าของคุณ</Text>
                    <View style={globalStyles.underline}></View>  
                </View>

                <View style={styles.cartContainer}>
                    <View style={styles.flatContainer}>
                        <TouchableOpacity style={styles.menu}>
                            <Image source={require('../assets/images/pooh.jpg')} style={styles.menu}/>
                        </TouchableOpacity>
                    </View>
                </View>
            
            </View>
        </Gradient>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',
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
      cartContainer: {
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*.9,
        height:screenHeight*.7,
        backgroundColor:'#fff',
        borderRadius:50,
        elevation: 10,
      },
      flatContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*.8,
        height:screenHeight*.65,
        backgroundColor:'#fff',
      },
      menu: {
        marginVertical:5,
        borderRadius:50,
        borderWidth:1,
        borderColor:'gray',
        backgroundColor:'white',
        width:screenWidth*0.8,
        height:screenHeight*0.22,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
      },
      boxImage: {
        borderRadius:20,
        backgroundColor:'white',
        width:screenHeight*0.125,
        height:screenHeight*0.125,
        borderWidth:1
      },
      boxDetails: {
        backgroundColor:'transparent',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:screenHeight*0.2,
        height:screenHeight*0.2,
      },
      serviceFont:{
        fontSize: 18,
        width: screenHeight*0.2,
        height: screenHeight * 0.05,
        margin: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 12,
      },
      moreBox:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width: screenHeight*0.1,
        height: screenHeight * 0.05,
        borderRadius: 10,
        backgroundColor: '#FF6D7D',
        elevation: 12,
      },
      moreFont:{
        fontSize: 18,
        color:'white',
      },
});