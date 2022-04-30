import React,{useState} from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    } from "react-native";

import Gradient from "../../styles/Gradient";
import { globalStyles } from "../../styles/globalStyles";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function RegisterEmployee({navigation,route}:{navigation:any,route:any}){
    
    const onBackButton = () => {
        navigation.goBack();
    }
    
    const onAddChef = () =>{
        navigation.navigate('RegisterId', {type:'Chef'});
    }

    const onAddRider = () =>{
        navigation.navigate('RegisterId', {type:'Rider'});
    }

    return(
        <Gradient>
            <View style={styles.header}>
                <View style={styles.iconContainer} >
                    <TouchableOpacity style={styles.backIcon} onPress={onBackButton}>
                        <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
                    </TouchableOpacity>

                    <Text style={styles.headerfont}>Register Employee</Text>

                    <View style={styles.backIcon}></View>
                    
                </View>
                <View style={styles.underline}></View>
            </View>
            <View style={styles.registerOptions}>
                <TouchableOpacity style={styles.options} onPress={onAddChef}>
                    <View style={styles.optionsImage}>
                        <Image source={require('../../assets/images/chef.png')}/>
                    </View>
                    <View style={styles.optionsName}>
                        <Text style={{fontSize:42,fontWeight:'900',color:'#FF6D6D'}}>Chef</Text>
                        <Text style={{fontSize:20,fontWeight:'900',color:'#FF6D6D'}}>เพิ่มเชฟในร้านอาหารของคุณ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.options} onPress={onAddRider}>
                    <View style={styles.optionsImage}>
                        <Image source={require('../../assets/images/rider.png')}/>
                    </View>
                    <View style={styles.optionsName}>
                        <Text style={{fontSize:42,fontWeight:'900',color:'#FF6D6D'}}>Rider</Text>
                        <Text style={{fontSize:20,fontWeight:'900',color:'#FF6D6D'}}>เพิ่มไรเดอร์ในร้านอาหารของคุณ</Text>
                    </View>
                </TouchableOpacity>      
            </View>
        </Gradient>
    ); 
}

const styles = StyleSheet.create({
    header: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerfont:{
        fontSize: 34,
        color:'white',
    },
    backIcon: {
        width:screenWidth*0.1,
        height:screenHeight*.03,
    },
    iconContainer: {
        width: screenWidth * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    underline:{
        width:screenWidth*.7,
        height:screenHeight*0.0035,
        backgroundColor:'white',
    },
    registerOptions: {
        width:screenWidth*.9,
        height:screenHeight*0.7,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    options: {
        width:screenWidth*.8,
        height:screenHeight*0.25,
        elevation:10,
        borderRadius:20,
        backgroundColor:'white',
        flexDirection:'row',
    },
    optionsImage: {
        flexDirection:'row',
        width:screenWidth*.4,
        height:screenHeight*0.25,
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        width: screenWidth*.4,
        height: screenWidth*.4,
    },
    optionsName: {
        flexDirection:'column',
        width:screenWidth*.4,
        height:screenHeight*0.25,
        alignItems:'center',
        justifyContent:'center',
    }
});