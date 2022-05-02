import React,{useEffect, useState, useRef}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    Easing,
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

export default function Prepare({navigation, route}:{navigation:any,route:any}) {

  const [orderList, setOrderList] = useState([
    {name:'',img_path:'',quantity:0,additional:'',price:0,key:0},
  ])
  const {cart} =route.params;
  const {user} =route.params;
  const {orderid} = route.params;
  const prepare = useRef(
    new Animated.Value(0)
  ).current;

  useFocusEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(prepare,{
          toValue:1,duration:3000,easing: Easing.linear,useNativeDriver:true,
        }),
        Animated.timing(prepare,{
          toValue:0,duration:3000,easing: Easing.linear,useNativeDriver:true,
        })
      ]),
    ).start();
  });
  useFocusEffect(
    React.useCallback(() => {
      setOrderList(cart)
      var nextPageInterval = setInterval(checknextpage, 1000);
      function checknextpage(){
        fetch("http://10.0.2.2:3000/getorder?_id="+orderid)
        .then(response => response.json())
        .then(data =>  {
          console.log(data[0].status)
          if (data[0].status !== "preparing order")
          {
            navigation.navigate('Delivery',{cart:cart,user:user,orderid:orderid});
            clearInterval(nextPageInterval);
          }
        })
      }
    }, [orderid])
  );

  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>Preparing</Text>
        </View>
        <View style={styles.imgContainer}>
            <Animated.Image source={require('../assets/images/prepare.png')} style={{opacity:prepare}}/>
        </View>
        <View style={styles.orderBox}>
          <View style={styles.orderDetail}>
            <Text  style={styles.orderFont}>
              Order summary
            </Text>
            <FlatList
              data={orderList}
              renderItem={({item})=>(
                <View style={styles.menu} key={item.key}>
                  <Text  style={styles.orderFont}>
                    x{item.quantity}  {item.name}
                  </Text>
                  <Text  style={styles.orderFont}>
                    {item.price}
                  </Text>
                </View>
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
    borderRadius:10,
    elevation:20,
  },
  menu: {
    width:screenWidth*0.8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
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