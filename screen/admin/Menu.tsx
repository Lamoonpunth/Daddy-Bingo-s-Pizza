import React from 'react';
import {View,
    Text,
    StyleSheet,
    } from 'react-native';
import {DrawerContentScrollView,
    DrawerItem,
    } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Menu(props:any){
    return(
        <View style={styles.menuContainer}>
            
            <TouchableOpacity>
                <Text style={styles.itemFont}>Profile</Text>    
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.itemFont}>Address</Text>   
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.itemFont}>Ingredients</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.itemFont}>Service</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.itemFont}>Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.itemFont}>Appetizer</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.itemFont}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.itemFont}>Log Out</Text>
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