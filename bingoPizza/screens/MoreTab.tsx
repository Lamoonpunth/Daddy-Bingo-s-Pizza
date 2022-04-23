import React,{useState} from "react";
import { 
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
     } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
import { useFocusEffect } from '@react-navigation/native';
import { globalStyles } from "../styles/globalStyles";
import Gradient from "../styles/Gradient";

export default function MoreTab({navigation,route}:{navigation:any,route:any}) {

    const {item} = route.params;
    const {type} = route.params;
    const {userid} = route.params;
    const [orderNumber, onOrderNumber] = React.useState(0);

    const onBackButton = () =>{
        navigation.navigate('Menu',{"type":type});
    }

    const onAddToCart = () =>{
        alert('จะกินก็นั่ง');
    }

    const onAdd = () =>{
        onOrderNumber(orderNumber+1);
    }

    const onRemove = () =>{
        if (orderNumber > 0){
            onOrderNumber(orderNumber-1);
        }
    }
    console.log(item)
    return (
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                        <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>   
                    </TouchableOpacity>
                    <Text style={globalStyles.fontHeader}>{item.name}</Text>
                    <View style={globalStyles.underline}></View>  
                </View>

                <View style={styles.cartContainer}>
                    <Image source={{uri:"http://10.0.2.2:3000/getImage/"+item.img_path}} style={styles.foodImage}/>
                    <View style={styles.detail}>
                        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                            <Text>{item.description}</Text>
                        </ScrollView>
                    </View>
                    <View style={styles.selected}>
                        <View style={styles.orderNumber}>
                            <TouchableOpacity style={styles.adjustButton} onPress={onRemove}>
                                <Text style={styles.adjustFont}>-</Text>    
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.numberfont}>{orderNumber}</Text>    
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.adjustButton} onPress={onAdd}>
                                <Text style={styles.adjustFont}>+</Text>    
                            </TouchableOpacity>
                        </View>
                        {orderNumber==0?
                        <TouchableOpacity style={styles.addtocart} onPress={onAddToCart} disabled={true}>
                            <Text style={styles.addFont}>add to cart</Text> 
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.addtocart} onPress={onAddToCart}>
                           <Text style={styles.addFont}>add to cart</Text> 
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
        width:screenWidth*.8,
        height:screenHeight*.3,
        //borderWidth:1,
    },
    scrollContainer: {
        
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
})