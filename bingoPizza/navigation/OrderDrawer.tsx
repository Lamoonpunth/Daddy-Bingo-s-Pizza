import React from 'react';
import {View,
    Text,
    Alert,
    Image,
    StyleSheet,
    Dimensions,
    ImageBackground,
    } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export function OrderDrawer({navigation,route}:{navigation:any,route:any},props:any){
   
    const onProfile = () => {
        //console.log(route)        
        navigation.navigate("Profile",route);
    }

    const onSubscription = () => {
        navigation.navigate("Sub");
    }

    const onService = () => {
        
    }

    const onAddress = () => {
        
    }

    const onLogOut = () => {
        Alert.alert(
            "Are you sure?",
            "",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel"),
                style: "cancel"
              },
              { text: "Log Out", onPress: () => navigation.pop()}
            ]
          ); 
    }
    
    return(
        <View style={styles.menuContainer}>
            <ImageBackground style={styles.profile} source={require('../constants/images/profile.jpg')}>
            </ImageBackground>
            <View style={styles.optionsBox}>
                <TouchableOpacity onPress={onProfile} style={styles.option}>
                    <Image source={require('../assets/images/user_icon.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Profile</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={onSubscription} style={styles.option}>
                    <Image source={require('../assets/images/subscription.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Subscription</Text>    
                </TouchableOpacity>
                <TouchableOpacity onPress={onAddress} style={styles.option}>
                    <Image source={require('../assets/images/address_icon.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Address</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onService} style={styles.option}>
                    <Image source={require('../assets/images/service.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Service</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={onLogOut}>
                    <Image source={require('../assets/images/logout.png')} style={styles.optionImage}/>
                    <Text style={styles.itemFont}>Log Out</Text>
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