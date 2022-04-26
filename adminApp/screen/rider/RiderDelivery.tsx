import React,{useEffect, useState, useRef}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    } from 'react-native';

import Gradient from '../../styles/Gradient';
import { globalStyles } from '../../styles/globalStyles';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const serverIP = "http://10.0.2.2:3000"
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function Delivery({navigation, route}:{navigation:any,route:any}) {

  const {order} = route.params;

  const onComplete = () =>{
    
  }

  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>Delivering</Text>
        </View>
        <View style={styles.imgContainer}>
            <Image source={require('../../assets/images/map.png')} style={styles.imgMap}/>
        </View>
        <View style={styles.orderBox}>
          <View style={styles.orderDetail}>
            
            <View style={styles.rider}>
              <Image source={require('../../assets/images/user_icon.png')} style={styles.imgRider}/>
              <Text  style={styles.orderFont}>
                Rider Name
              </Text>
            </View>
            <View style={styles.detail}>
              <Text  style={styles.orderFont}>
                Estimated Time
              </Text>
              <Text  style={styles.orderFont}>
                18.00 - 18.20
              </Text>
              <Text  style={styles.orderFont}>
                {order.address} {order.province} {order.district} {order.subdistrict}
              </Text>
              <TouchableOpacity style={styles.complete} onPress={onComplete}>
                <Text style={{fontSize:16}}>Complete</Text>
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
    justifyContent:'center',
    paddingTop:30
  },
  header: {
    flex:1,
    backgroundColor:'#FF6D6D',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.9,
    borderRadius:20,
    elevation:10,
  },
  imgContainer: {
    flex:5,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.9,
    borderRadius:30,
    elevation:10,
  },
  imgMap: {
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.9,
    borderRadius:30,
  },
  orderBox: {
    flex:4,
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth,
  },
  orderDetail: {
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.9,
    height:screenHeight*0.3,
    backgroundColor:'#FF6D6D',
    borderRadius:30,
    elevation:20,
  },
  rider: {
    width:screenWidth*0.8,
    height:screenHeight*0.1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingHorizontal:10
  },
  imgRider: {
    width:screenWidth*0.1,
    height:screenWidth*0.1,
    backgroundColor:'white',
    borderRadius:30
  },
  detail: {
    width:screenWidth*0.8,
    height:screenHeight*0.15,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  complete: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    width:screenWidth*0.3,
    height:screenHeight*0.05,
    borderRadius:20
  },
  /*************************************Font*********************************/
  headerFont: {
    fontSize:32,
    color:'white',
  },
  orderFont: {
    fontSize:20,
    color:'white',
  },
});