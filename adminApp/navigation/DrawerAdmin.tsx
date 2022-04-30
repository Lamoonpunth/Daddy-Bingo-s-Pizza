import React from 'react';
import {View,
    Text,
    Alert,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    } from 'react-native';
import {DrawerContentScrollView,
    DrawerItem,
    } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export function DrawerMenu({navigation}:{navigation:any},props:any){

    const onProfile = () => {
        navigation.navigate('Profile')
    }

    const onAwaitingPayment = () =>{
        navigation.navigate('Awaiting')
    }

    const onService = () => {
        navigation.navigate('Service')
    }

    const onIngredients = () => {
        navigation.navigate('Ingredients')
    }

    const onRegisterEmployee = () => {
        navigation.navigate('RegisterEmployee')
    }

    const onLogOut = () => {
        Alert.alert(
            "Are you sure?",
            "Have a good day sir.",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel"),
                style: "cancel"
              },
              { text: "Log Out", onPress: () => navigation.pop()}
            ]
          ); 
        //
    }
    
    return(
        <View style={styles.menuContainer}>
            <ImageBackground style={styles.profile} source={require('../assets/images/ricardo.jpg')}>
            </ImageBackground>
            <View style={styles.optionsBox}>
                <TouchableOpacity onPress={onProfile} style={styles.option}>
                    <Image source={require('../assets/images/user_icon.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Profile</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={onService} style={styles.option}>
                    <Image source={require('../assets/images/service.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Service</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onIngredients} style={styles.option}>
                    <Image source={require('../assets/images/ingredients.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Ingredients</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onAwaitingPayment} style={styles.option}>
                    <Image source={require('../assets/images/awaiting.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Awaiting payment</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={onRegisterEmployee} style={styles.option}>
                    <Image source={require('../assets/images/employee.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Register employee</Text>    
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Image source={require('../assets/images/logout.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont} onPress={onLogOut}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer:{
        flex:1,
        flexDirection:'column',
    },
    itemFont:{
        fontSize:22,
        color:'#FF6D6D',
    },
    profile: {
        flex:3,
    },
    optionsBox: {
        flex:7,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginLeft:30
    },
    option: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'white',
        width: screenWidth*0.6,
        height:100,
    },
    optionImage: {
        width:40,
        height:40,
    },
});