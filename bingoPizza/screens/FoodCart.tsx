import React from "react";
import { 
    View ,
    Text,
    Image,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Touchable,
    } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from "../styles/Gradient";
import { globalStyles } from "../styles/globalStyles";

export default function FoodCart({navigation,route}:{navigation:any,route:any}){
    
    const onCheckOut = () => {
      navigation.navigate('OrderSummary',{cart:cart,rawcart:rawCart,userid:userid});
      // console.log(rawCart)
      // fetch("http://10.0.2.2:3000/checkout",{
      //   method:"POST",
      //   headers:{'Content-Type': 'application/json'},
      //   body:JSON.stringify({
      //     userid:userid,
      //     cart:rawCart
      //   })
      // })
      // .then(response => response.json())
      // .then(json =>{
      //   console.log(json)
      //   navigation.navigate('OrderSummary',{cart:cart});
      // })
      // .catch(error => console.log(error))
    }
    /**numTest กับ testสร้างมาลองเฉยๆเอาไปลบได้เลย**/
    const {userid} = route.params;

    const [cart,setListOfCart] = React.useState([
      {name:'',img_path:'',quantity:0,additional:'',price:0,key:0},
    ]);
    const [rawCart,setRawCart] = React.useState([])
    const [totalPrice,setPrice] = React.useState(0)
    const getCartList = async() =>{
      setPrice(0)
      setListOfCart([])
      fetch('http://10.0.2.2:3000/getCart?userid='+userid)
      .then(response => response.json())
      .then(json => {
        setRawCart(json)
        for (let i = 0; i < json.length; i++) {
          fetch("http://10.0.2.2:3000/getID?id="+json[i].id)
          .then(response => response.json())
          .then(item => {
            const newitem = {name:item[0].name,img_path:item[0].img_path,quantity:json[i].quantity,additional:json[i].additional,key:json[i].id,price:item[0].price}
            setPrice(totalPrice+(item[0].price*json[i].quantity))
            setListOfCart(cart => [...cart,newitem] );
          })
        }
      })
    }

    const removeFromCart = (item:any) =>{
      fetch("http://10.0.2.2:3000/addToCart",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({_id:userid,itemid:item._id,quantity:0})
    })
    .then(response => response.json())
    .then(data => {console.log(data)
    getCartList()})
    }

    useFocusEffect(
      React.useCallback(() => {
        getCartList()
      }, [])
    );
    return(
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backIcon} onPress={() => {navigation.goBack()}}>
                        <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
                    </TouchableOpacity>
                    <Text style={globalStyles.fontHeader}>ตะกร้าของคุณ</Text>
                </View>
                <View style={styles.cartContainer}>
                  <View style={styles.flatContainer}>
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      data={cart}
                      keyExtractor={(item) => item.name}
                      renderItem={({item}) => (
                        <View style={styles.menu}>
                            <View style={styles.boxName}>
                              <View style={styles.boxAndButton}>
                                <Text style={styles.nameFont}>{item.name}</Text>  
                                <TouchableOpacity onPress={() => removeFromCart(item)}>
                                <Text style={styles.nameFont}>x</Text> 
                                </TouchableOpacity>
                              </View>
                              <View style={styles.underline}></View>
                            </View>
                            <View style={styles.boxMenu}>
                              <View style={styles.boxImage}>
                              <Image source = {{uri:"http://10.0.2.2:3000/getImage/"+item.img_path}} style={styles.foodImage}/>
                              </View>
                              <View style={styles.boxDetails}>
                                <Text style={styles.detailFont}>{item.additional}</Text>
                                <Text style={styles.detailFont}>จำนวน : {item.quantity}</Text>
                                <Text style={styles.detailFont}>ราคา : {item.quantity*item.price}</Text>
                              </View>
                            </View>
                        </View>
                        )}
                    />
                  </View>
                    
                </View>

                { cart.length == 0?
                <TouchableOpacity style={styles.checkoutBoxDisable} disabled={true} onPress={onCheckOut}>
                  <Text style={styles.checkoutFont}>Check out</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.checkoutBox} onPress={onCheckOut}>
                  <Text style={styles.checkoutFont}>Check out</Text>
                </TouchableOpacity>
                }
                
            </View>
        </Gradient>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: 'transparent',
    },
    header: {
      width: screenWidth*.9,
      height: screenHeight*.1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',

    },
    iconContainer: {
      borderColor:'black',
      width:screenWidth*0.9,
      flexDirection:'row',
      alignItems:'flex-start'
    },
    cartContainer: {
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:screenWidth*.9,
      height:screenHeight*.7,
      backgroundColor:'#fff',
      borderRadius:50,
      elevation: 10,
    },
    flatContainer: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      width:screenWidth*.8,
      height:screenHeight*.65,
      backgroundColor:'#fff',
    },
    menu: {
      marginVertical:5,
      borderRadius:50,
      borderColor:'gray',
      backgroundColor:'#FF6D7D',
      width:screenWidth*0.8,
      height:screenHeight*0.25,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      elevation: 5,
    },
    boxName: {
      width: screenWidth*0.7,
      alignItems:'center',
      justifyContent:'center',
      height:60,
      borderRadius: 10,
      backgroundColor: 'transparent',
    },
    boxAndButton: {
      flexDirection:'row',
      width: screenWidth*0.7,
      height:40,
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor: 'transparent',
    },
    underline: {
      backgroundColor:'white',
      width: screenWidth*0.7,
      height: 2.5,
      marginTop:10,
      borderRadius:50,
      elevation: 50
    },
    boxMenu: {
      width: screenWidth*0.7,
      height:100,
      flexDirection:'row',
      borderRadius: 10,
      backgroundColor: 'transparent',
    },
    boxImage: {
      borderRadius:20,
      backgroundColor:'white',
      width:100,
      height:100,
    },
    foodImage: {
      borderRadius:20,
      width:100,
      height:100,
    },
    boxDetails: {
      backgroundColor:'transparent',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:screenHeight*0.2,
      height:100,
    },
    nameFont:{
      fontSize: 24,
      color:'white',
      backgroundColor: 'transparent',
    },
    detailFont:{
      fontSize: 22,
      color:'white',
      backgroundColor: 'transparent',
    },
    checkoutBox:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width: screenWidth*0.8,
      height: screenHeight * 0.075,
      borderRadius: 10,
      backgroundColor: '#FF6D7D',
      marginVertical:10,
      elevation: 12,
    },
    checkoutBoxDisable:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width: screenWidth*0.8,
      height: screenHeight * 0.075,
      borderRadius: 10,
      backgroundColor: '#B8B8B8',
      marginVertical:10,
      elevation: 12,
    },
    checkoutFont:{
      fontSize: 24,
      color:'white',
    },
    underline2:{
      width:screenWidth*.7,
      height:screenHeight*0.0035,
      backgroundColor:'white',
      marginTop:-screenHeight * .025,
      marginBottom:-screenHeight *.02,
    },
    backIcon: {
      height:screenHeight*.03,
      marginLeft:-screenWidth*.125,
      marginRight:screenWidth*.05,
    },
});