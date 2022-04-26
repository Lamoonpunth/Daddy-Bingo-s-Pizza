import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";

const { height, width } = Dimensions.get('screen');
import Gradient from "../styles/Gradient";
import GradientForBTN from "../styles/GradientForBTN";
import { globalStyles } from "../styles/globalStyles";
import { useFocusEffect } from '@react-navigation/native';
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
export default function OrderSummary({ navigation, route }: { navigation: any, route: any }) {

    const {userid} = route.params;
    const [code, onChangeCode] = React.useState('');
    const [cart,setListOfCart] = React.useState([
        {name:'',img_path:'',quantity:0,additional:'',price:0,key:0},
      ]);
    const [rawCart,setRawCart] = React.useState([])
    const [totalPrice,setPrice] = React.useState(0)
    const [choosepayment1, setChoosePayment1] = React.useState(true);
    const [choosepayment2, setChoosePayment2] = React.useState(false);

    const [subtotal, setSubtotal] = React.useState(0);
    const [service, setSetvice] = React.useState(0);
    const [tax, setTax] = React.useState(0);
    const [shipping, setShipping] = React.useState(15);
    const [discount, setDiscount] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [user,setUser] = React.useState();

    const onClickBack = () =>{
        navigation.goBack();
    }

    const onEbankChooseButton = () =>{
        setChoosePayment1(!choosepayment1);
        setChoosePayment2(false);
    }
    const onMasterVisaChooseButton = () =>{

    }

    const onApplyButton = () =>{
        alert(code);
    }

    const onCheckOutButton = () =>{
        // console.log(cart)
        // fetch("http://10.0.2.2:3000/checkout",{
        //     method:"POST",
        //     headers:{'Content-Type': 'application/json'},
        //     body:JSON.stringify({
        //     userid:userid,
        //     cart:rawCart,
        //     user_fname:user.fname,
        //     user_lname:user.lname,
        //     price:total,
        //     province:user.province,
        //     district:user.district,
        //     subdistrict:user.subdistrict,
        //     postcode:user.postcode
        //     })
        // })
        // .then(response => response.json())
        // .then(json =>{
        //     console.log(json)
        //     console.log(total)
        //     navigation.navigate('Transaction',{price:total});
        // })
        // .catch(error => console.log(error))
        navigation.navigate('Transaction',{price:total,cart:cart,rawCart:rawCart,user:user,userid:userid,total:total});
    }
    const getRawCart = async() =>{
        setTotal(0)
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
              setListOfCart(cart => [...cart,newitem] );
            })
          }
        })
    }

    const setSum = () =>{
        let sum = 0, total = 0
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].price;
            total += cart[i].price;
          }
        sum += shipping;
        console.log(sum)
        setSubtotal(total)
        setTotal(sum)
    }
    const getUser = () =>{
        fetch("http://10.0.2.2:3000/getuserdata?_id="+userid)
        .then(response => response.json())
        .then(userdata => setUser(userdata))
    }
    useFocusEffect(
        React.useCallback(() => {
            getUser()
            getRawCart()
            console.log(user)
        }, [])
      );

    useFocusEffect(
        React.useCallback(() => {
            setSum()
            getUser()
        }, [cart])
      );
    return (
        <Gradient>

            <View style={styles.backcontainer}>
                <TouchableOpacity style={styles.backicon} onPress={() => {onClickBack()}}>
                    <Image source={require('../assets/images/back_icon.png')} style={styles.backicon}/>  
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.headerbox}>
                    <Text style={{fontSize: 32,}}>Order Summary</Text>
                </View>
                <View style={styles.orderlistspace}>
                    <FlatList
                        data={cart}
                        renderItem={({item})=>(
                            <View key={item.key} style={styles.orderBox}>
                                <Text style={styles.orderFont}>x{item.quantity} {item.name}</Text>
                                <Text style={styles.orderFont}>{item.price}</Text>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.paymenttextbox}>
                    <Text style={{fontSize: 16,}}>Payment </Text>
                </View>
                <View style={styles.paymenttickbox}>

                <TouchableOpacity 
                    style={{
                        height: height*.07,
                        width: width*.175,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 15,
                        backgroundColor: choosepayment1 ? "#FF6D6D" : "#fff",
                        elevation:10,
                        marginRight:10,
                    }}
                    onPress={onEbankChooseButton}>
                        <Text style={{ color: choosepayment1? "#fff":"#FF6D6D",fontSize: 16, }}>E-Bank</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        height: height*.07,
                        width: width*.175,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 15,
                        backgroundColor: choosepayment2 ? "#FF6D6D" : "gray",
                        elevation:10,
                        marginRight:10,
                    }}
                    onPress={onMasterVisaChooseButton} disabled={true}>
                        <Text style={{ color: choosepayment2? "#fff":"#fff",fontSize: 16, }}>Master/Visa</Text>
                </TouchableOpacity>

                </View>
                <View style={styles.line}/>
                <View style={styles.giftcodetextbox}>
                    <Text style={{fontSize: 16,}}>Gift card/Discount code</Text>
                </View>
                <View style={styles.applybtnbox}>
                    <TextInput 
                        style={styles.giftcodeinput}
                        onChangeText={onChangeCode}
                        value={code}
                    />
                    <TouchableOpacity style={styles.applybutton} onPress={onApplyButton}>
                        <View style={{backgroundColor:'transparent'}}>
                            <Text style={{fontSize:20, color: 'white'}}>Apply</Text>
                        </View> 
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
                <View style={styles.subtotal}>
                    <View style={styles.subtotaltext}>
                        <Text style={{fontSize:14, fontWeight:'100',}}>Subtotal</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>Service</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>Tax</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>Shipping</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>Discount</Text>
                        <Text style={{fontSize:4, fontWeight:'100',}}></Text>
                        <Text style={{fontSize:16, fontWeight:'bold',}}>Total</Text>
                    </View>
                    <View style={styles.subtotalmoney}>
                        <Text style={{fontSize:14, fontWeight:'100',}}>${subtotal}</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>${service}</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>${tax}</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>${shipping}</Text>
                        <Text style={{fontSize:14, fontWeight:'100',color: 'red'}}>${discount}</Text>
                        <Text style={{fontSize:4, fontWeight:'100',}}></Text>
                        <Text style={{fontSize:16, fontWeight:'bold',}}>${total}</Text>
                    </View>
                </View>
                <View style={styles.checkoutbtnbox}>
                    <TouchableOpacity style={styles.checkoutbutton} onPress={onCheckOutButton}>
                            <View style={{backgroundColor:'transparent'}}>
                                <Text style={{fontSize:20, color: 'white'}}>Check out</Text>
                            </View> 
                    </TouchableOpacity>
                </View>
                
            </View>

        </Gradient>
    );




}

const styles = StyleSheet.create({
    backcontainer:{
        backgroundColor: 'transparent',
        height: height*.075,
        width: width*.1,
        marginRight:width*.8,
    },
    mainContainer:{
        borderRadius:45,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white',
        height: height*.8,
        width: width*.9,
        elevation:5,
    },
    headerbox:{
        justifyContent: 'center',
        width: width*.6,
    },
    backicon:{
        backgroundColor: 'transparent',
        height: height*.05,
        width: width*.13,
    },
    line:{
        backgroundColor: 'black',
        height: height*.001,
        width: width*.8,
        marginTop:height*.013,
        opacity:.2,
    },
    orderlistspace:{
        borderColor: 'black',
        height: height*.225,
        width: width*.75,
        
    },
    orderBox: {
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between',
        height: height*0.05,
        width: width*.75,
    },
    orderFont: {
        fontSize:20
    },
    paymenttextbox:{
        marginVertical:height*.001,
        marginRight:width*0.15,
        justifyContent: 'center',
        width: width*.6,
        opacity:.5,
    },
    paymenttickbox:{
        flexDirection:'row',
        height: height*.07,
        width: width*.75,
    },
    giftcodetextbox:{
        alignItems:'center',
        justifyContent: 'center',
        marginRight:width*0.3,
        width: width*.6,
        opacity:.5,
    },
    giftcodeinput:{
        fontSize: 16,
        width: width *.45,
        height: height * 0.05,
        padding: 10,
        marginLeft:width*.05,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 8,
        
    },
    applybtnbox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height: height * 0.05,
        width: width*.75,
    },
    applybutton: {
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
        width:width*.225,
        height:height*.0545,
        backgroundColor:'#FF6D6D',
        borderRadius:10,
        elevation:5,
      },
    subtotal:{
        marginTop:25,
        flexDirection:'row',
        height: height*.15,
        width: width*.75,
    },
    subtotaltext:{
        flexDirection:'column',
        height: height*.15,
        width: width*.5,
    },
    subtotalmoney:{
        flexDirection:'column',
        height: height*.15,
        width: width*.145,
    },
    checkoutbtnbox:{
        flexDirection:'row-reverse',
        marginTop:25,
        height: height*.06,
        width: width*.75,
    },
    checkoutbutton:{
        alignItems:'center',
        justifyContent:'center',
        width:width*.24,
        height:height*.0545,
        backgroundColor:'#FF6D6D',
        borderRadius:10,
        elevation:5,
    },

})