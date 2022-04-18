import React from 'react';
import {View,
    Text,
    StyleSheet,
    } from 'react-native';
import {DrawerContentScrollView,
    DrawerItem,
    } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';



export function Menu({navigation}:{navigation:any},props:any){

    const onProfile = () => {
        navigation.navigate('Profile')
    }

    const onService = () => {
        navigation.navigate('Service')
    }

    const onIngredients = () => {
        navigation.navigate('Ingredients')
    }

    const onPizza = () => {
        navigation.navigate('Pizza')
    }

    const onAppetizer = () => {
        navigation.navigate('Appetizer')
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
            <TouchableOpacity onPress={onService}>
                <Text style={styles.itemFont}>Service</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onIngredients}>
                <Text style={styles.itemFont}>Ingredients</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPizza}>
                <Text style={styles.itemFont}>Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onAppetizer}>
                <Text style={styles.itemFont}>Appetizer</Text>
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