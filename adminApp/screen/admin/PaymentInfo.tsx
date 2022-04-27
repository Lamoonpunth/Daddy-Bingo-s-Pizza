import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const { height, width } = Dimensions.get('screen');
import Gradient from "../../styles/Gradient";
import { globalStyles } from "../../styles/globalStyles";
import { useFocusEffect } from '@react-navigation/native';
import { DrawerItem } from "@react-navigation/drawer";

export default function PaymentInfo({ navigation, route }: { navigation: any, route: any }) {
  
  const {payment} = route.params;

  const [orderList, onChangeOrderList] = React.useState([
    {name:'',img_path:'',quantity:0,additional:'',price:0,key:0},
  ])
  const onBackButton = () =>{
    navigation.navigate('Awaiting');
  }

  const onTransInfo = () =>{
    navigation.navigate('TransactionInfo',{payment:payment});
  }

  const onComplete = () =>{
    fetch("http://10.0.2.2:3000/paymentcheck",{
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({_id:payment._id})
      }
    )
    .then(response=>response.json())
    .then(json=>console.log(json))
    navigation.navigate('Awaiting');
  }

  const getOrderCart = () =>{
    onChangeOrderList([])
    console.log(payment._id)
    fetch("http://10.0.2.2:3000/getordercart?_id="+payment._id)
    .then(response => response.json())
    .then(cart => {
      console.log(cart)
      for (let i = 0; i < cart.length; i++) {
        fetch("http://10.0.2.2:3000/getID?id="+cart[i].id)
        .then(response => response.json())
        .then(item => {
          const newitem = {name:item[0].name,img_path:item[0].img_path,quantity:cart[i].quantity,additional:cart[i].additional,key:cart[i].id,price:item[0].price}
          onChangeOrderList(cart => [...cart,newitem] );
        })
      }
    })
    .catch(error => console.log(error))
  }
  useFocusEffect(
    React.useCallback(() => {
      getOrderCart()
    }, [payment])
  );
  return (

    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.iconContainer} >
              <TouchableOpacity style={globalStyles.backIcon} onPress={onBackButton}>
                <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
              </TouchableOpacity>
              {payment.transaction == 'complete' ?
              <TouchableOpacity style={styles.saveButton} onPress={onComplete} disabled={true}>
                <Text style={styles.saveFont}>Complete</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity style={styles.saveButton} onPress={onComplete} disabled={false}>
                <Text style={styles.saveFont}>Complete</Text>
              </TouchableOpacity>
              }
            </View>
          <Text style={globalStyles.fontHeader}>{payment.user_fname} {payment.user_lname}</Text>
          <View style={globalStyles.underline}></View>
        </View>

        <View style={styles.cartContainer}>
          <View style={styles.orderTime}>
            <Text style={{fontSize:16}}>รหัสคำสั่งซื้อ : {payment.user_id}</Text>
            <Text style={styles.orderTimeFont}>เวลา : {payment.datetime}</Text>
          </View>
          <View style={styles.orderSummary}>
            <FlatList
              data={orderList}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.orderDetail}>
                    <Text style={styles.orderDetailFont}> x{item.quantity} {item.name}</Text>
                    <Text style={styles.orderDetailFont}>{item.price} baht  </Text>
                </View>
              )}
            />
          </View>
          <View style={styles.moreDetail}>
            <View style={styles.topic}>
              <TouchableOpacity onPress={onTransInfo}>
                <Text style={styles.transaction}>ดูใบเสร็จ</Text>
              </TouchableOpacity>
              <Text style={styles.topicFont}>รวม {payment.price} บาท</Text>
            </View>
          </View>
        </View>
        
        </View>
    </Gradient>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    width:100,
    height:30,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20
  },
  saveFont: {
    fontSize:18,
    color:'#FF6D6D',
  },
  iconContainer: {
    width: screenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  cartContainer: {
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    width: screenWidth * .9,
    height: screenHeight * .7,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 10,
  },
  orderTime: {
    flexDirection:'column',
    width: screenWidth * .85,
    height: 100,
    alignItems:'center',
    justifyContent:'space-evenly',
    paddingHorizontal:10,
  },
  orderTimeFont: {
    fontSize:20,
  },
  orderSummary: {
    borderWidth:2,
    flexDirection:'column',
    width: screenWidth * .85,
    height: 350,
    alignItems:'center',
    justifyContent:'flex-start',
    borderRadius:10,
    borderColor:'#FF6D6D',
  },
  orderDetail: {
    flexDirection:'row',
    width: screenWidth * .85,
    height: 50,
    alignItems:'center',
    justifyContent:'space-between',
  },
  orderDetailFont: {
    fontSize:18,
    fontWeight:'900',
  },
  moreDetail: {
    flexDirection:'column',
    width: screenWidth * .85,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
  },
  topic: {
    flexDirection:'row',
    width: screenWidth * .85,
    height: 50,
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  topicFont: {
    fontSize:20
  },
  detail: {
    flexDirection:'row',
    width: screenWidth * .85,
    height: 200,
    alignItems:'center',
    justifyContent:'flex-start',
    padding:10,
  },
  detailFont: {
    fontSize:18
  },
  transaction: {
    color:'blue',
    fontSize:20
  },
});