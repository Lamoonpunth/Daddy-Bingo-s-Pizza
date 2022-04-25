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
import { Picker } from "@react-native-picker/picker";

const { height, width } = Dimensions.get('screen');
import Gradient from "../styles/Gradient";
import GradientForBTN from "../styles/GradientForBTN";
import { globalStyles } from "../styles/globalStyles";

export default function SubscriptionSummary({ navigation, route }: { navigation: any, route: any }) {

    const [choosepayment1, setChoosePayment1] = React.useState(false);
    const [choosepayment2, setChoosePayment2] = React.useState(false);

    const [subtotal, setSubtotal] = React.useState('Nan');
    const [tax, setTax] = React.useState('Nan');
    const [shipping, setShipping] = React.useState('Nan');
    const [total, setTotal] = React.useState('Nan');

    const [selectedday, setSelectedDay] = React.useState('')
    const [selectedhrs, setSelectedHrs] = React.useState('')
    const [selectedmins, setSelectedMins] = React.useState('')

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

    const onConfirmPlan = () =>{
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
                    <Text style={{fontSize: 30,}}>Subscription Summary</Text>
                </View>
                <View style={styles.orderlistspace}>
                    
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
                        backgroundColor: choosepayment2 ? "#FF6D6D" : "#fff",
                        elevation:10,
                        marginRight:10,
                    }}
                    onPress={onMasterVisaChooseButton}>
                        <Text style={{ color: choosepayment2? "#fff":"#FF6D6D",fontSize: 16, }}>Master/Visa</Text>
                </TouchableOpacity>

                </View>
                <View style={styles.line}/>
                <View style={styles.giftcodetextbox}>
                    <Text style={{fontSize: 16,}}>Date/Time</Text>
                </View>
                <View style={styles.pickerzone}>
                    <View style={styles.pickerboxinside1}>
                        <Picker style={styles.pickerday}
                            selectedValue={selectedday}
                            dropdownIconColor='#FF6D6D'
                            mode='dropdown'
                            onValueChange={(itemValue1) =>
                            setSelectedDay(itemValue1)
                        }>
                            <Picker.Item label="Day" value="0" color='#A0A0A0' enabled={false} />
                            <Picker.Item label="Monday" value="1" />
                            <Picker.Item label="Tuesday" value="2" />
                            <Picker.Item label="Wednesday" value="3" />
                            <Picker.Item label="Thursday" value="4" />
                            <Picker.Item label="Friday" value="5" />
                            <Picker.Item label="Saturday" value="6" />
                            <Picker.Item label="Sunday" value="7" />
                            </Picker>
                    </View>

                    <View style={styles.pickerboxinside2}>
                        <Picker style={styles.pickerhrs}
                            selectedValue={selectedhrs}
                            dropdownIconColor='#FF6D6D'
                            mode='dropdown'
                            onValueChange={(itemValue2) =>
                            setSelectedHrs(itemValue2)
                        }>
                            <Picker.Item label="0" value="0" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                            <Picker.Item label="17" value="17" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="20" value="20" />
                            <Picker.Item label="21" value="21" />
                            <Picker.Item label="22" value="22" />
                            <Picker.Item label="23" value="23" />
                            
                            </Picker>
                    </View>

                    <View>
                        <Text style={styles.colon}>:</Text>
                    </View>
                    
                    <View style={styles.pickerboxinside3}>
                        <Picker style={styles.pickermins}
                            selectedValue={selectedmins}
                            dropdownIconColor='#FF6D6D'
                            mode='dropdown'
                            onValueChange={(itemValue3) =>
                            setSelectedMins(itemValue3)
                        }>
                            <Picker.Item label="00" value="0" />
                            <Picker.Item label="01" value="1" />
                            <Picker.Item label="02" value="2" />
                            <Picker.Item label="03" value="3" />
                            <Picker.Item label="04" value="4" />
                            <Picker.Item label="05" value="5" />
                            <Picker.Item label="06" value="6" />
                            <Picker.Item label="07" value="7" />
                            <Picker.Item label="08" value="8" />
                            <Picker.Item label="09" value="9" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                            <Picker.Item label="17" value="17" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="20" value="20" />
                            <Picker.Item label="21" value="21" />
                            <Picker.Item label="22" value="22" />
                            <Picker.Item label="23" value="23" />
                            <Picker.Item label="24" value="23" />
                            <Picker.Item label="25" value="23" />
                            <Picker.Item label="26" value="23" />
                            <Picker.Item label="27" value="23" />
                            <Picker.Item label="28" value="23" />
                            <Picker.Item label="29" value="23" />
                            <Picker.Item label="30" value="23" />
                            <Picker.Item label="31" value="23" />
                            <Picker.Item label="32" value="23" />
                            <Picker.Item label="33" value="23" />
                            <Picker.Item label="34" value="23" />
                            <Picker.Item label="35" value="23" />
                            <Picker.Item label="36" value="23" />
                            <Picker.Item label="37" value="23" />
                            <Picker.Item label="38" value="23" />
                            <Picker.Item label="39" value="23" />
                            <Picker.Item label="40" value="23" />
                            <Picker.Item label="41" value="23" />
                            <Picker.Item label="42" value="23" />
                            <Picker.Item label="43" value="23" />
                            <Picker.Item label="44" value="23" />
                            <Picker.Item label="45" value="23" />
                            <Picker.Item label="46" value="23" />
                            <Picker.Item label="47" value="23" />
                            <Picker.Item label="48" value="23" />
                            <Picker.Item label="49" value="23" />
                            <Picker.Item label="50" value="23" />
                            <Picker.Item label="51" value="23" />
                            <Picker.Item label="52" value="23" />
                            <Picker.Item label="53" value="23" />
                            <Picker.Item label="54" value="23" />
                            <Picker.Item label="55" value="23" />
                            <Picker.Item label="56" value="23" />
                            <Picker.Item label="57" value="23" />
                            <Picker.Item label="58" value="23" />
                            <Picker.Item label="59" value="23" />
                            </Picker>
                    </View>


                </View>
                
                <View style={styles.line}/>
                <View style={styles.subtotal}>
                    <View style={styles.subtotaltext}>
                        <Text style={{fontSize:14, fontWeight:'100',}}>Subtotal</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>Tax</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>Shipping</Text>
                        <Text style={{fontSize:4, fontWeight:'100',}}></Text>
                        <Text style={{fontSize:16, fontWeight:'bold',}}>Total</Text>
                    </View>
                    <View style={styles.subtotalmoney}>
                        <Text style={{fontSize:14, fontWeight:'100',}}>${subtotal}</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>${tax}</Text>
                        <Text style={{fontSize:14, fontWeight:'100',}}>${shipping}</Text>
                        <Text style={{fontSize:7, fontWeight:'100',}}></Text>
                        <Text style={{fontSize:16, fontWeight:'bold',}}>${total}</Text>
                    </View>
                </View>
                <View style={styles.checkoutbtnbox}>
                    <TouchableOpacity style={styles.checkoutbutton} onPress={onConfirmPlan}>
                            <View style={{backgroundColor:'transparent'}}>
                                <Text style={{fontSize:18, color: 'white'}}>Confirm Plan</Text>
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
        width: width*.8
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
        borderWidth:1,
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
        marginRight:width*0.55,
        width: width*.2,
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
    pickerzone:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        width:width*.8,
        height:height*0.055,
    },
    pickerboxinside1:{
        marginRight:width*.05,
        alignItems:'center',
        justifyContent:'center',
        width:width*.35,
        height:height*0.055,
        backgroundColor:'white',
        borderRadius:10,
        elevation: 12,
    },
    pickerboxinside2:{
        
        alignItems:'center',
        justifyContent:'center',
        width:width*.175,
        height:height*0.055,
        backgroundColor:'white',
        borderRadius:10,
        elevation: 12,
    },
    pickerboxinside3:{
        
        alignItems:'center',
        justifyContent:'center',
        width:width*.2,
        height:height*0.055,
        backgroundColor:'white',
        borderRadius:10,
        elevation: 12,
    },
    pickerhrs:{
        fontSize: 12,
        width: width *.19,
        minHeight: height * 0.07,
        backgroundColor: 'transparent',
    },
    pickermins:{
        fontSize: 12,
        width: width *.21,
        minHeight: height * 0.07,
        backgroundColor: 'transparent',
    },
    colon:{
        fontSize: 32,
        marginHorizontal:width*.01,

    },
    pickerday:{
        fontSize: 12,
        width: width *.35,
        minHeight: height * 0.06,
        backgroundColor: 'transparent',
    },
    subtotal:{
        marginTop:height*.02,
        marginLeft:width*.075,
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
        width:width*.3,
        height:height*.0545,
        backgroundColor:'#FF6D6D',
        borderRadius:10,
        elevation:5,
    },

})