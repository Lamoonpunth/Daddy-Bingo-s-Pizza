import React,{useEffect, useState, useRef}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    Animated,
    FlatList,
    Dimensions,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    } from 'react-native';

import Gradient from '../styles/Gradient';
import { globalStyles } from '../styles/globalStyles';
import { useFocusEffect } from '@react-navigation/native';
import { interpolateColor, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const serverIP = "http://10.0.2.2:3000"
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function OrderAwait({navigation, route}:{navigation:any,route:any}) {
    const {cart} = route.params;
    const {user} = route.params;
    const [orderlist, onChangeOrderList] = React.useState([
        {name:'',img_path:'',quantity:0,additional:'',price:0,key:0},
        
    ])

    const queue = useRef(
      new Animated.Value(0)
    ).current;
    const queueIcon = useRef(
      new Animated.Value(60)
    ).current;
    const queueText = useRef(
      new Animated.Value(-60)
    ).current;
    const prepare = useRef(
      new Animated.Value(0)
    ).current;
    const prepareIcon = useRef(
      new Animated.Value(60)
    ).current;
    const prepareText = useRef(
      new Animated.Value(-60)
    ).current;
    const delivery = useRef(
      new Animated.Value(0)
    ).current;
    const deliveryIcon = useRef(
      new Animated.Value(60)
    ).current;
    const deliveryText = useRef(
      new Animated.Value(-60)
    ).current;
    const arrive = useRef(
      new Animated.Value(0)
    ).current;
    const arriveIcon = useRef(
      new Animated.Value(60)
    ).current;
    const arriveText = useRef(
      new Animated.Value(-60)
    ).current;

    useFocusEffect(() => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(queueText,{
            toValue:0, delay:50, useNativeDriver:true
          }),
          Animated.timing(queueIcon,{
            toValue:0, delay:50, useNativeDriver:true
          }),
          Animated.timing(queue,{
            toValue:1, delay:50, useNativeDriver:true
          }),
        ]),
        Animated.parallel([
          Animated.timing(prepareText,{
            toValue:0, delay:50, useNativeDriver:true
          }),
          Animated.timing(prepareIcon,{
            toValue:0, delay:50, useNativeDriver:true
          }),
          Animated.timing(prepare,{
            toValue:1, delay:50, useNativeDriver:true
          }),
        ]),
        Animated.parallel([
          Animated.timing(deliveryText,{
            toValue:0, delay:50, useNativeDriver:true
          }),
          Animated.timing(deliveryIcon,{
            toValue:0, delay:50, useNativeDriver:true
          }),
          Animated.timing(delivery,{
            toValue:1, delay:50, useNativeDriver:true
          }),
        ]),
        Animated.parallel([
          Animated.timing(arriveText,{
            toValue:0, delay:50, useNativeDriver:true
          }),
          Animated.timing(arriveIcon,{
            toValue:0, delay:50, useNativeDriver:true
          }),
          Animated.timing(arrive,{
            toValue:1, delay:50, useNativeDriver:true
          }),
        ]),
        Animated.parallel([
          Animated.timing(queueText,{
            toValue:-60, delay:50, useNativeDriver:true
          }),
          Animated.timing(queueIcon,{
            toValue:60, delay:50, useNativeDriver:true
          }),
          Animated.timing(queue,{
            toValue:0, delay:50, useNativeDriver:true
          }),
        ]),
        Animated.parallel([
          Animated.timing(prepareText,{
            toValue:-60, delay:50, useNativeDriver:true
          }),
          Animated.timing(prepareIcon,{
            toValue:60, delay:50, useNativeDriver:true
          }),
          Animated.timing(prepare,{
            toValue:0, delay:50, useNativeDriver:true
          }),
        ]),
        Animated.parallel([
          Animated.timing(deliveryText,{
            toValue:-60, delay:50, useNativeDriver:true
          }),
          Animated.timing(deliveryIcon,{
            toValue:60, delay:50, useNativeDriver:true
          }),
          Animated.timing(delivery,{
            toValue:0, delay:50, useNativeDriver:true
          }),
        ]),
        Animated.parallel([
          Animated.timing(arriveText,{
            toValue:-60, delay:50, useNativeDriver:true
          }),
          Animated.timing(arriveIcon,{
            toValue:60, delay:50, useNativeDriver:true
          }),
          Animated.timing(arrive,{
            toValue:0, delay:50, useNativeDriver:true
          }),
        ]),
      ]).start();
      setTimeout(()=> {
        navigation.navigate('Queue',{cart:cart,user:user});
       }, 5500);
    },);
    useFocusEffect(
      React.useCallback(() => {
        onChangeOrderList(cart)
      }, [])
    );

  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>Delivery</Text>
        </View>
        <View style={styles.status}>
            <View style={styles.statusBar}>
                <View style={styles.statusIcon}>
                    <Animated.View style={[styles.iconBox,{opacity:queue,transform:[{translateX:queueIcon}]}]}>
                        <Image source={require('../assets/images/OrderAwait/queueing.png')}/>
                    </Animated.View>
                </View>
                <View style={styles.statusIcon}>
                    <Animated.View style={[styles.iconBox,{opacity:prepare,transform:[{translateX:prepareIcon}]}]}>
                        <Image source={require('../assets/images/OrderAwait/preparing.png')}/>
                    </Animated.View>
                </View>
                <View style={styles.statusIcon}>
                    <Animated.View style={[styles.iconBox,{opacity:delivery,transform:[{translateX:deliveryIcon}]}]}>
                        <Image source={require('../assets/images/OrderAwait/delivering.png')}/>
                    </Animated.View>
                </View>
                <View style={styles.statusIcon}>
                    <Animated.View style={[styles.iconBox,{opacity:arrive,transform:[{translateX:arriveIcon}]}]}>
                        <Image style={styles.image} source={require('../assets/images/OrderAwait/arriving.png')}/>
                    </Animated.View>
                </View>
            </View>
            <View style={styles.statusName}>
                <Animated.View style={[styles.nameBox,{opacity:queue,transform:[{translateX:queueText}]}]}>
                    <Text style={styles.nameFont}>Queueing</Text>
                </Animated.View>
                <Animated.View style={[styles.nameBox,{opacity:prepare,transform:[{translateX:prepareText}]}]}>
                    <Text style={styles.nameFont}>Preparing</Text>
                </Animated.View>
                <Animated.View style={[styles.nameBox,{opacity:delivery,transform:[{translateX:deliveryText}]}]}>
                    <Text style={styles.nameFont}>Delivering</Text>
                </Animated.View>
                <Animated.View style={[styles.nameBox,{opacity:arrive,transform:[{translateX:arriveText}]}]}>
                    <Text style={styles.nameFont}>Arriving</Text>
                </Animated.View>
            </View>
        </View>
        <View style={styles.orderSummary}>
            <View style={styles.orderBox}>
                <Text style={styles.orderHeadFont}>Order summary</Text>
                <FlatList
                    data={orderlist}
                    renderItem={({item}) => (
                        <Text style={styles.orderFont}>x{item.quantity}  {item.name}</Text>
                    )}
                />
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
  sqaure: {
    width:20,
    height:20,
    backgroundColor:'blue',
  },
  header: {
    flex:2,
    backgroundColor:'#FF6D6D',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.9,
    borderRadius:20,
    elevation:10,
  },
  status: {
    flex:13,
    flexDirection:'row',
    backgroundColor:'transparent',
    width:screenWidth,
  },
  statusBar: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  statusIcon: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth/3,
  },
  iconBox: {
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.25,
    height:screenWidth*0.25,
    backgroundColor:'white',
    borderRadius:50,
  },
  image: {
    width:screenWidth*0.20,
    height:screenWidth*0.20,
  },
  statusName: {
    flex:1,
  },
  nameBox: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth/3,
  },
  statusBlank: {
    flex:1,
  },
  orderSummary: {
    flex:5,
    backgroundColor:'#FF6D6D',
    width:screenWidth*0.9,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    elevation:10,
  },
  orderBox: {
    width:screenWidth*0.9,
    height:screenHeight*4/20,
  },

  /*************************************Font*********************************/
  headerFont: {
    fontSize:32,
    color:'white',
  },
  nameFont: {
    textAlign:'center',
    textAlignVertical:'center',
    flex:1/3,
    width:screenWidth*0.4,
    fontSize:20,
    color:'#FF6D6D',
    backgroundColor:'white',
    borderRadius:15,
  },
  orderFont: {
    color:'white',
    paddingLeft:10,
    fontSize:20,
  },
  orderHeadFont: {
    color:'white',
    textAlign:'center',
    fontSize:22,
  },
});