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
        setResult({})
        setImage(null)
        setIsUpload(false)
        navigation.goBack();
    }

    const [image, setImage] = useState(null);
    const [isUpload , setIsUpload] = React.useState(false);
    const {cart,rawCart,user,userid,total} = route.params
    const [result,setResult] = React.useState({});
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setResult(result)
            setImage("Uploaded");
            setIsUpload(true);
        }
    };

    const handleupload = (image) =>{
        console.log(image.uri)
        var extension = image.uri.split(".")
        extension.reverse()
        let newfile = {
            uri:image.uri,
            type:`bill/${extension[0]}`,
            name:`bill.${extension[0]}`
        }
        var formdata = new FormData();
        formdata.append('image', newfile);
        console.log(formdata)
        fetch("http://10.0.2.2:3000/uploadSingle",{
        method:"POST",
        body:formdata,
        })
        .then(response=>response.json())
        .then(file=>{
            console.log(file.filename)
            fetch("http://10.0.2.2:3000/checkout",{
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                userid:userid,
                cart:rawCart,
                user_fname:user.fname,
                user_lname:user.lname,
                price:total,
                province:user.province,
                district:user.district,
                subdistrict:user.subdistrict,
                postcode:user.postcode,
                bill_img:file.filename
                })
            })
            .then(response => response.json())
            .then(json =>{
                console.log(json)
            })
            .catch(error => console.log(error))
        })
        .catch(error =>console.log(error))

    }
    const onConfirm = () =>{
        handleupload(result);
        fetch("http://10.0.2.2:3000/clearcart",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({_id:userid})
        })
        .then(response => response.json())
        .then(json =>{
            console.log(json)
            navigation.navigate("OrderAwait",{cart:cart,user:user,orderid:json._id});
            setResult({})
            setImage(null)
            setIsUpload(false)
        })
        .catch(error => console.log(error))
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
                </View>
                <View style={globalStyles.underline}></View>  

                <Image style={styles.transaction} source={{uri:"https://qrmango.com/promptpay/qr?pp_no=0808491161"+"&amount="+price+"&size=300"}}/>
                <View style={styles.insertBox}>
                    <Text style={styles.insertFont}>Insert transaction</Text>
                    <Text style={styles.imageNameFont}>{image}</Text> 
                    <View style={styles.upload}>
                        <TouchableOpacity style={styles.insertButton} onPress={pickImage}>
                            <Text style={styles.uploadFont}>Upload</Text>
                        </TouchableOpacity>
                        {isUpload? 
                        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
                            <Text style={styles.uploadFont}>Confirm</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.confirmButtonFalse} onPress={onConfirm} disabled={true}>
                            <Text style={styles.uploadFont}>Confirm</Text>
                        </TouchableOpacity>
                        }
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
        marginLeft:-width*.14,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    fontHeader:{
        fontSize: 42,
        color:'white',
    },
    iconContainer: {
        width:width*0.15,
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
        height: width*0.65,
        width: width*0.8,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-evenly',
        elevation:10,
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
        width: 85,
        backgroundColor:'#FF6D6D',
        borderRadius:10,
        alignItems:'center',
        elevation:4,
    },
    confirmButton: {
        padding:15,
        height: 50,
        width: 85,
        backgroundColor:'#FF6D6D',
        borderRadius:10,
        alignItems:'center',
        elevation:4,
    },
    confirmButtonFalse: {
        padding:15,
        height: 50,
        width: 85,
        backgroundColor:'gray',
        borderRadius:10,
        alignItems:'center',
        elevation:4,
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