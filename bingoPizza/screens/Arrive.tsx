import React,{useEffect, useState, useRef}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    } from 'react-native';

import Gradient from '../styles/Gradient';
import { globalStyles } from '../styles/globalStyles';
import { useFocusEffect } from '@react-navigation/native';
import { interpolateColor, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const serverIP = "http://10.0.2.2:3000"
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function Arrive({navigation, route}:{navigation:any,route:any}) {

  const [star1, onStar1] = useState(false);
  const [star2, onStar2] = useState(false);
  const [star3, onStar3] = useState(false);
  const [star4, onStar4] = useState(false);
  const [star5, onStar5] = useState(false);

  const click1 = () =>{
    onStar1(!star1);
    if (star2==true){
      onStar2(false);
      onStar3(false);
      onStar4(false);
      onStar5(false);
    }
  }

  const click2 = () =>{
    onStar2(!star2);
    if(star1==false){
      onStar1(true);
    }
    else if(star3==true){
      onStar3(false);
      onStar4(false);
      onStar5(false);
    }
  }

  const click3 = () =>{
    onStar3(!star3);
    if(star2==false){
      onStar1(true);
      onStar2(true);
    }
    else if(star4==true){
      onStar3(false);
      onStar4(false);
      onStar5(false);
    }
  }

  const click4 = () =>{
    onStar4(!star4);
    if(star3==false){
      onStar1(true);
      onStar2(true);
      onStar3(true);
    }
    else if(star5==true){
      onStar4(false);
      onStar5(false);
    }
  }

  const click5 = () =>{
    onStar5(!star5);
    if(star4==false){
      onStar1(true);
      onStar2(true);
      onStar3(true);
      onStar4(true);
    }
  }

  const backToOrder = () =>{
    onStar1(false);
    onStar2(false);
    onStar3(false);
    onStar4(false);
    onStar5(false);
    navigation.goBack();
  }

  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>Arrived</Text>
        </View>
        <View style={styles.imgContainer}>
            <Image source={require('../assets/images/arrive.png')} style={styles.imgMap}/>
        </View>
        <View style={styles.orderBox}>
          <View style={styles.orderDetail}>
            
            <View style={styles.rider}>
              <Text  style={styles.orderFont}>
                Rate us
              </Text>
            </View>
            <View style={styles.detail}>
              <TouchableOpacity onPress={click1}>
                {star1?
                <Image source={require('../assets/images/star_pressed.png')} style={styles.star}/>
                :<Image source={require('../assets/images/star.png')} style={styles.star}/>}
              </TouchableOpacity>
              <TouchableOpacity onPress={click2}>
                {star2?
                <Image source={require('../assets/images/star_pressed.png')} style={styles.star}/>
                :<Image source={require('../assets/images/star.png')} style={styles.star}/>} 
              </TouchableOpacity>
              <TouchableOpacity onPress={click3}>
                {star3?
                <Image source={require('../assets/images/star_pressed.png')} style={styles.star}/>
                :<Image source={require('../assets/images/star.png')} style={styles.star}/>} 
              </TouchableOpacity>
              <TouchableOpacity onPress={click4}>
                {star4?
                <Image source={require('../assets/images/star_pressed.png')} style={styles.star}/>
                :<Image source={require('../assets/images/star.png')} style={styles.star}/>}  
              </TouchableOpacity>
              <TouchableOpacity onPress={click5}>
                {star5?
                <Image source={require('../assets/images/star_pressed.png')} style={styles.star}/>
                :<Image source={require('../assets/images/star.png')} style={styles.star}/>} 
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => backToOrder()}>
              <Text style={styles.orderFont}>Back to order</Text>
            </TouchableOpacity>
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
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.9,
  },
  imgMap: {
    backgroundColor:'transparent',
    width:screenWidth*0.5,
    height:screenWidth*0.5,
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
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
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
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  star:{
    width:50,
    height:50,
  },
  /*************************************Font*********************************/
  headerFont: {
    fontSize:32,
    color:'white',
  },
  orderFont: {
    fontSize:30,
    color:'white',
  },
});