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
import * as ImagePicker from 'expo-image-picker';

export default function Transaction({ navigation, route }: { navigation: any, route: any }) {

    const onBackButton = () =>{
        navigation.goBack();
    }

    const [image, setImage] = useState(null);
    const [isUpload , setIsUpload] = React.useState(false);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const {price} = route.params;
    console.log(price)

    useEffect(() => {
        if (isUpload){
            navigation.navigate('OrderAwait');
        }
    });

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
                <View style={styles.insertBox}>
                    <Text style={styles.insertFont}>Insert transaction</Text>
                    <View style={styles.upload}>
                        <TouchableOpacity style={styles.insertButton} onPress={pickImage}>
                            <Text style={styles.uploadFont}>Upload</Text>
                        </TouchableOpacity>   
                        <Text style={styles.imageNameFont}>Image name</Text> 
                    </View>
                    
                </View>
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
    insertBox: {
        padding:15,
        height: width*0.4,
        width: width*0.8,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:10,
    },
    insertFont: {
        fontSize:20,
        color:'black'
    },
    upload: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width: width*0.7,
        height: 50,
    },
    insertButton: {
        padding:15,
        height: 50,
        width: width*0.2,
        backgroundColor:'#FF6D6D',
        borderRadius:10,
    },
    uploadFont: {
        fontSize:14,
        color:'white',
    },
    imageNameFont: {
        fontSize:16,
        color:'black',
    },
})