import React from 'react';
import {View,
    Text,
    StyleSheet,
    } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function OrderDrawer({navigation}:{navigation:any},props:any){

    const onProfile = () => {
        
    }

    const onService = () => {
        
    }

    const onAddress = () => {
        
    }

    const onSettings = () => {
        
    }

    const onLogOut = () => {
        navigation.pop();
    }
    
    return(
        <View style={styles.menuContainer}>
            
            <TouchableOpacity onPress={onProfile}>
                <Text style={styles.itemFont}>Profile</Text>    
            </TouchableOpacity>
            <TouchableOpacity onPress={onAddress}>
                <Text style={styles.itemFont}>Address</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onService}>
                <Text style={styles.itemFont}>Service</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.itemFont}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.itemFont} onPress={onLogOut}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        marginTop:25,
        marginLeft:25,
    },
    itemFont:{
        fontSize:22,
        color:'#FF6D6D'
    },
});