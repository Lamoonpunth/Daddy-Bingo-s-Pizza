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

export default function EditAddMenu({navigation,route}:{navigation:any,route:any}) {

    const {type} = route.params;
    const {userid} = route.params;

    const [nameMenu, onNameMenu] = React.useState('');
    const [description, onDescription] = React.useState('');

    const onBackButton = () =>{
        navigation.navigate('Menu',{"type":type,userid:userid});
    }

    const onAddMenu = () =>{
        alert('สินค้าชื่อ : '+ nameMenu);
    }

    return (
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                        <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon}/>   
                    </TouchableOpacity>
                    <Text style={styles.fontHeader}>Add Menu</Text>
                    <View style={globalStyles.underline}></View>  
                </View>

                <View style={styles.cartContainer}>
                    <TextInput
                        style={styles.addName}
                        placeholder='กรุณากรอกชื่อเมนู'
                        value={nameMenu} 
                        onChangeText={onNameMenu}
                    />
                    <TouchableOpacity style={styles.foodImage}>
                        <Image source={require('../../../assets/images/addImage.png')} style={globalStyles.addImageIcon}/>
                    </TouchableOpacity>
                    <View style={styles.detail}>
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
        marginVertical:10,
        width:screenWidth*.8,
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