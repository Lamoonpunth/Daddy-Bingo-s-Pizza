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

export default function PaymentInfo({ navigation, route }: { navigation: any, route: any }) {
  
  const {payment} = route.params;

  const [orderList, onChangeOrderList] = React.useState([
    {name:'',img_path:'',quantity:0,additional:'',price:0,key:0},
  ])

  const onBackButton = () =>{
    navigation.navigate('Awaiting');
  }

  const onSave = () =>{
    
  }

  return (

    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.iconContainer} >
              <TouchableOpacity style={globalStyles.backIcon} onPress={onBackButton}>
                <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={onSave}>
                <Text style={styles.saveFont}>Save</Text>
              </TouchableOpacity>
            </View>
          <Text style={globalStyles.fontHeader}>{payment.customer_fname} {payment.customer_lname}</Text>
          <View style={globalStyles.underline}></View>
        </View>

        <View style={styles.cartContainer}>
          <View style={styles.orderTime}>
            <Text style={styles.orderTimeFont}>รหัสคำสั่งซื้อ : {payment.customer_id}</Text>
            <Text style={styles.orderTimeFont}>เวลา : {payment.order_time}</Text>
          </View>
          <View style={styles.orderSummary}>
            <FlatList
              data={orderList}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.orderDetail}>
                    <Text style={styles.orderDetailFont}> x{item.quantity} {item.name}</Text>
                    <Text style={styles.orderDetailFont}>{item.price} baht</Text>
                </View>
              )}
            />
          </View>
          <View style={styles.moreDetail}>
            <View style={styles.topic}>
              <Text style={styles.topicFont}>รายละเอียด</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailFont}>บลาๆๆ</Text>
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
    width:60,
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
    paddingVertical:30,
    width: screenWidth * .9,
    height: screenHeight * .7,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 10,
  },
  orderTime: {
    flexDirection:'row',
    width: screenWidth * .85,
    height: 50,
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  orderTimeFont: {
    fontSize:20,
  },
  orderSummary: {
    borderWidth:1,
    flexDirection:'row',
    width: screenWidth * .85,
    height: 200,
    alignItems:'center',
    justifyContent:'center',
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
    height: 250,
    alignItems:'center',
    justifyContent:'center',
  },
  topic: {
    flexDirection:'row',
    width: screenWidth * .85,
    height: 50,
    alignItems:'center',
    justifyContent:'flex-start',
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
});