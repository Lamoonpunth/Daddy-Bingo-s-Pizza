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

export function DrawerChef({navigation}:{navigation:any},props:any){

    const onProfile = () => {
        navigation.navigate('ChefProfile')
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
            <ImageBackground style={styles.profile} source={require('../assets/images/chefIcon.jpg')}>
            </ImageBackground>
            <View style={styles.optionsBox}>
                <TouchableOpacity onPress={onProfile} style={styles.option}>
                    <Image source={require('../assets/images/user_icon.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Profile</Text>    
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