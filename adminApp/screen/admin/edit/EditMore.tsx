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

export default function EditMore({navigation,route}:{navigation:any,route:any}) {

    const {item} = route.params;
    const {type} = route.params;
    const {userid} = route.params;
    const [orderNumber, onOrderNumber] = React.useState(0);
    const [isInCart, setIsInCart] = React.useState(false);

    const [edit, onEdit] = React.useState('');
    const [editPrice, onEditPrice] = React.useState('');

    const onBackButton = () =>{
        navigation.navigate('Menu',{"type":type,userid:userid});
        
    }

    const onUpdate = () =>{
        console.log(item)
        fetch("http://10.0.2.2:3000/updatemenu",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                _id: item._id,
                description:edit,
                price:editPrice
            })
        })
        .then(response => response.json())
        .then(json=> {console.log(json)
        onEdit('')
        onEditPrice('')
        navigation.navigate('Menu',{"type":type,userid:userid})})
    }

    const onRemove = () =>{
        console.log(item)
        fetch("http://10.0.2.2:3000/removeMenu",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                _id: item._id
            })
        })
        .then(response => response.json())
        .then(json=> {console.log(json)})
    }

    useFocusEffect(
        React.useCallback(() => {
          //checkItemInCart()
        }, [item,userid])
      );

    return (
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                        <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon}/>   
                    </TouchableOpacity>
                    <Text style={styles.fontHeader}>{item.name}</Text>
                    <View style={globalStyles.underline}></View>  
                </View>

                <View style={styles.cartContainer}>
                    <Image source={{uri:"http://10.0.2.2:3000/getImage/"+item.img_path}} style={styles.foodImage}/>
                    <View style={styles.detail}>
                        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                            <TextInput 
                                multiline
                                style={styles.descriptionFont} 
                                placeholder={item.description}
                                value={edit} 
                                onChangeText={onEdit}/>
                        </ScrollView>
                        <TextInput 
                            style={styles.descriptionFont} 
                            placeholder={'ราคา '+String(item.price)}
                            value={editPrice} 
                            onChangeText={onEditPrice}/>
                    </View>
                    <View style={styles.selected}>
                        {edit == ''?
                        <TouchableOpacity style={styles.remove} onPress={onRemove}>
                            <Text style={styles.removeFont}>Remove this menu</Text> 
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.addtocart} onPress={onUpdate}>
                           <Text style={styles.addFont}>Update menu</Text> 
                        </TouchableOpacity>
                        }
                        
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
    foodImage: {
        width:screenWidth*0.8,
        height:screenHeight*0.25,
        borderRadius:50,
    },
    detail: {
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*.8,
        height:screenHeight*.3,
        //borderWidth:1,
    },
    scrollContainer: {
        padding:25
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
    orderNumber: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:screenWidth*.8,
        height:screenHeight*.05,
        paddingHorizontal:25,
        //borderWidth:1,
    },
    adjustButton: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:screenHeight*0.04,
        height:screenHeight*0.04,
        borderColor:'rgba(0,0,0,0)',
        backgroundColor:'#FF6D6D',
        borderRadius:5
    },
    adjustFont: {
        fontWeight:'bold',
        fontSize:24,
        color:'white',
    },
    numberfont: {
        fontSize:24,
        color:'#FF6D6D',
    },
    addtocart: {
        alignItems:'center',
        justifyContent:'center',
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
    remove: {
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*.8,
        height:screenHeight*.05,
        borderColor:'rgba(0,0,0,0)',
        backgroundColor:'red',
        borderRadius:10,
    },
    removeFont:{
        fontSize: 18,
        color:'white',
        fontWeight:'900'
    },
})