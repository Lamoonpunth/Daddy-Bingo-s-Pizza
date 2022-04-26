import React,{useState} from "react";
import { 
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    Dimensions,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
     } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
import { useFocusEffect } from '@react-navigation/native';
import { globalStyles } from "../../../styles/globalStyles";
import Gradient from "../../../styles/Gradient";
import * as ImagePicker from 'expo-image-picker';
export default function EditAddMenu({navigation,route}:{navigation:any,route:any}) {

    const {type} = route.params;
    const {userid} = route.params;

    const [nameMenu, onNameMenu] = React.useState('');
    const [description, onDescription] = React.useState('');
    const [price, onPrice] = React.useState('');
    const [image, setImage] = useState(null);
    const [result,setResult] = useState();

    const onBackButton = () =>{
        navigation.navigate('Menu',{"type":type,userid:userid});
    }

    //เพิ่มรูปผ่านตัวนี้
    const onSelectImage = () =>{
        pickImage()
    }

    const onAddMenu = () =>{
        alert('สินค้าชื่อ : '+ nameMenu + 'ราคา : '+ price);

        var extension = result.uri.split(".")
        extension.reverse()
        let newfile = {
            uri:result.uri,
            type:`menu/${extension[0]}`,
            name:`menu.${extension[0]}`
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
            fetch("http://10.0.2.2:3000/addmenu",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                "name":nameMenu,
                "type":type,
                "price":price,
                "ingr_need":[],
                "description":description,
                "img_path":file.filename
            })
            }
        )})

    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [16, 9],
          quality: 1,
        });
    
        console.log(result);    
        if (!result.cancelled) {
          setImage(result.uri); 
          setResult(result)
        }
      };

    return (
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                        <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon}/>   
                    </TouchableOpacity>
                    <Text style={styles.fontHeader}>Add {type}</Text>
                    <View style={globalStyles.underline}></View>  
                </View>

                <View style={styles.cartContainer}>
                    <TextInput
                        style={styles.addName}
                        placeholder='กรุณากรอกชื่อเมนู'
                        value={nameMenu} 
                        onChangeText={onNameMenu}
                    />
                    <TouchableOpacity style={styles.foodImage} onPress={onSelectImage}>
                        <Image source={{uri:image}} style={{
                            resizeMode: "contain",
                            height: 300,
                            width: 300
                        }}/>
                    </TouchableOpacity>
                    <View style={styles.detail}>
                        <TextInput
                            style={styles.addPrice}
                            placeholder='กรุณากรอกราคา'
                            value={price} 
                            onChangeText={onPrice}
                        />
                        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                            <TextInput 
                                style={styles.descriptionFont} 
                                placeholder={'กรุณากรอกรายละเอียดเพิ่มเติม(ถ้ามี)'}
                                value={description} 
                                onChangeText={onDescription}
                                multiline/>
                                
                        </ScrollView>
                        <View style={styles.selected}>
                            <TouchableOpacity style={styles.addMenu} onPress={onAddMenu}>
                            <Text style={styles.addFont}>Add Menu</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Gradient>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
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
        width:screenWidth*0.9,
        flexDirection:'row',
        alignItems:'flex-start'
    },
    cartContainer: {
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'flex-start',
        width:screenWidth*.9,
        height:screenHeight*.7,
        backgroundColor:'#fff',
        borderRadius:50,
        elevation: 10,
        padding:20
    },
    addName: {
        fontSize:20,
        textAlign:'center',
        marginVertical:10,
        width:screenWidth*.8,
        height:50,
        borderRadius:10,
        backgroundColor:'white',
        elevation:5
    },
    addPrice: {
        textAlign:'center',
        fontSize:20,
        marginVertical:10,
        width:screenWidth*.4,
        height:50,
        borderRadius:10,
        backgroundColor:'white',
        elevation:5
    },
    foodImage: {
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*0.8,
        height:screenHeight*0.25,
        borderRadius:50,
        backgroundColor:'white',
        elevation:5,
    },
    detail: {
        width:screenWidth*.8,
        height:screenHeight*.3,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
    },
    scrollContainer: {
        
    },
    descriptionFont: {
        fontSize:20,
    },
    selected: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*.8,
        height:screenHeight*.1,
        //borderWidth:1,
    },
    addMenu: {
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        width:screenWidth*.8,
        height:screenHeight*.05,
        borderColor:'rgba(0,0,0,0)',
        backgroundColor:'#FF6D6D',
        borderRadius:10,
    },
    addFont:{
        fontSize: 18,
        color:'white',
    },
})