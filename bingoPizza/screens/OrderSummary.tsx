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

export default function OrderSummary({ navigation, route }: { navigation: any, route: any }) {

    const {cart} = route.params;

    const [code, onChangeCode] = React.useState('');

    const [choosepayment1, setChoosePayment1] = React.useState(false);
    const [choosepayment2, setChoosePayment2] = React.useState(false);

    const [subtotal, setSubtotal] = React.useState('Nan');
    const [service, setSetvice] = React.useState('Nan');
    const [tax, setTax] = React.useState('Nan');
    const [shipping, setShipping] = React.useState('Nan');
    const [discount, setDiscount] = React.useState('Nan');
    const [total, setTotal] = React.useState('Nan');


    const onClickBack = () =>{
        navigation.goBack();
    }

    const onEbankChooseButton = () =>{
        setChoosePayment1(!choosepayment1);
        setChoosePayment2(false);
    }
    const onMasterVisaChooseButton = () =>{
        setChoosePayment2(!choosepayment2);
        setChoosePayment1(false);
    }

    const onApplyButton = () =>{
        alert(code);
    }

    const onCheckOutButton = () =>{
        alert("nice");
    }

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
                        backgroundColor: choosepayment1 ? "#fff" : "#FF6D6D",
                        elevation:10,
                        marginRight:10,
                    }}
                    onPress={onEbankChooseButton}>
                        <Text style={{ color: choosepayment1? "#FF6D6D":"#fff",fontSize: 16, }}>E-Bank</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        height: height*.07,
                        width: width*.175,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 15,
                        backgroundColor: choosepayment2 ? "#fff" : "#FF6D6D",
                        elevation:10,
                        marginRight:10,
                    }}
                    onPress={onMasterVisaChooseButton}>
                        <Text style={{ color: choosepayment2? "#FF6D6D":"#fff",fontSize: 16, }}>Master/Visa</Text>
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
        marginVertical:5,
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
        width: width*.6,
        opacity:.5,
    },
    giftcodeinput:{
        fontSize: 16,
        width: width *.5,
        height: height * 0.05,
        padding: 10,
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