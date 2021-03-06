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
import { TextInput } from "react-native-gesture-handler";

export default function MoreTab({navigation,route}:{navigation:any,route:any}) {

    const {IsRec} = route.params;
    const {item} = route.params;
    const {type} = route.params;
    const {userid} = route.params;
    const [orderNumber, onOrderNumber] = React.useState(0);
    const [isInCart, setIsInCart] = React.useState(false);
    const [userNote, setUserNote] = React.useState('');

    const onBackButton = () =>{
        if(type == null){
            navigation.goBack();
        }
        else{
            navigation.navigate('Menu',{"type":type,userid:userid});   
        }  
    }

    const onAddToCart = () =>{
        fetch("http://10.0.2.2:3000/addToCart",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({_id:userid,itemid:item._id,quantity:orderNumber,additional:userNote})
        })
        .then(response => response.json())
        .then(data => {console.log(data)
        console.log(type)
        if(type  !== undefined)
        {navigation.navigate('Menu',{"type":type,userid:userid});}
        else
        {navigation.navigate('Order',{userid:userid});}
        setUserNote('')})
    }

    const onAdd = () =>{
        onOrderNumber(orderNumber+1);
    }

    const onRemove = () =>{
        if (orderNumber > 0){
            onOrderNumber(orderNumber-1);
        }
    }

    const checkItemInCart = () =>{
        console.log(item._id)
        fetch("http://10.0.2.2:3000/isItemInCart?userid="+userid+"&itemid="+item._id,{
            method:"GET",
        })
        .then(response => response.json())
        .then(data => {
        onOrderNumber(data)
        setIsInCart(true)})
    }

    useFocusEffect(
        React.useCallback(() => {
            console.log(item.name)
          checkItemInCart()
        }, [item,userid])
      );

    return (
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                        <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>   
                    </TouchableOpacity>
                    <Text style={styles.fontHeader}>{item.name}</Text>
                    <View style={styles.iconContainer}></View>
                </View>
                <View style={styles.underline}></View>  
                
                <View style={styles.cartContainer}>
                    <View style={styles.foodImage}>
                        <Image source={{uri:"http://10.0.2.2:3000/getImage/"+item.img_path}} style={styles.foodImage}/>
                    </View>
                    <View style={styles.detail}>
                        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={true}>
                            <Text style={{fontSize:20,marginBottom:4,}}>Description</Text>
                            <Text style={styles.descriptionFont}>{item.description}</Text>
                            <Text style={styles.priceFont}>???????????? {item.price} ?????????</Text>
                        </ScrollView>
                        <View style={styles.noteBox}>
                            <Text style={{fontSize:20}}>Note</Text>
                            <TextInput
                                multiline
                                onChangeText={setUserNote}
                                value={userNote}
                                style={styles.noteInput}
                                placeholder="???????????????????????????????????????"
                            />
                        </View>
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
                        <TouchableOpacity style={{
                            alignItems:'center',
                            justifyContent:'center',
                            width:screenWidth*.8,
                            height:screenHeight*.05,
                            borderColor:'rgba(0,0,0,0)',
                            backgroundColor:'gray',
                            borderRadius:10,
                            elevation:8,
                        }} onPress={onAddToCart} disabled={true}>
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
        width:screenWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal:15
      },
    fontHeader:{
        fontSize: 30,
        color:'white',
      },
      iconContainer: {
        width: screenWidth * 0.2,
        flexDirection: 'row',
        alignItems: 'flex-start',
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
        paddingHorizontal:10,
        width:screenWidth*.8,
        height:screenHeight*.175,
    },
    noteBox: {
        paddingHorizontal:25,
        width:screenWidth*.8,
        height:screenHeight*.12,
        alignItems:'center',
    },
    noteInput: {
        fontSize: 18,
        width: screenWidth *.8,
        height: screenHeight * 0.05,
        margin: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 10,
    },
    descriptionFont: {
        fontSize:18
    },
    priceFont: {
        textAlign:'center',
        fontSize:20
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
    underline:{
        width:screenWidth*.7,
        height:screenHeight*0.0035,
        backgroundColor:'white',
        marginTop:-screenHeight * .025,
        marginBottom:-screenHeight *.02,
      },
})