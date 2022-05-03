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

export default function Queue({navigation, route}:{navigation:any,route:any}) {

  const [orderList, setOrderList] = useState([
    {name:'',img_path:'',quantity:0,additional:'',price:0,key:0},
  ])
  const {cart} = route.params;
  const {user} = route.params;
  const {orderid} = route.params;
  const [address,setAddress] = useState([
    {
      username : 'Username',
      password : 'Password',
      fname : 'firstname',
      lname : 'lastname',
      phonenumber : 'phone',
      birthdatem : 'Month',
      birthdatey : 'Date',
      sex : 'Sex',
      address : 'address',
      province : 'Province',
      district : 'District',
      subdistrict : 'SubDistrict',
      postcode : 'ZipCode',
      key:0
    }
  ])

  const queue = useRef(
    new Animated.Value(0)
  ).current;

  useFocusEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(queue,{
          toValue:1,duration:3000,easing: Easing.linear,useNativeDriver:true,
        }),
        Animated.timing(queue,{
          toValue:0,duration:3000,easing: Easing.linear,useNativeDriver:true,
        })
      ]),
    ).start();
  });
  useFocusEffect(
    React.useCallback(() => {
      setOrderList(cart)
      setAddress(user)
      var nextPageInterval = setInterval(checknextpage, 1000);
      function checknextpage(){
        fetch("http://10.0.2.2:3000/getorder?_id="+orderid)
        .then(response => response.json())
        .then(data =>  {
          console.log(data[0].status)
          if (data[0].status === "cancled by kitchen")
          {
            alert("cancled by kitchen\nreason: " + data[0].reason)
            navigation.goBack();
            clearInterval(nextPageInterval);
          }
          else if (data[0].status !== "waiting for kitchen")
          {
            navigation.navigate('Prepare',{cart:cart,user:user,orderid:orderid});
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
            <Text style={styles.headerFont}>Queue</Text>
        </View>
        <View style={styles.imgContainer}>
            <Animated.Image source={require('../assets/images/wait.png')} style={{opacity:queue}}/>
        </View>
        <View style={styles.detail}>
            <View style={styles.detailBox}>
              <View style={styles.timeBox}>
                <Text style={styles.timeFont}>Estimated time : 17.00 - 17.45</Text>
              </View>
              <View style={styles.orderBox}>
                <FlatList
                  data={orderList}
                  renderItem={({item}) => (
                    <View key={item.key} style={styles.menu}>
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
              <View style={styles.addressBox}>
                <Text style={styles.addressFont}>{user.address} {user.province} {user.district} {user.subdistrict}</Text>
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
    flex:4,
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.9,
  },
  detail:{
    flex:5,
    flexDirection:'column',
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth,
  },
  detailBox: {
    width:screenWidth*0.9,
    height:screenHeight*0.4,
    backgroundColor:'#FF6D6D',
    borderRadius:20,
    elevation:10,
  },
  timeBox: {
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.9,
    height:screenHeight*0.075,
  },
  orderBox: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.9,
    height:screenHeight*0.2,
    borderColor:'white',
  },
  menu: {
    width:screenWidth*0.8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  addressBox: {
    paddingHorizontal:20,
    width:screenWidth*0.9,
    height:screenHeight*0.125,
  },
  /*************************************Font*********************************/
  headerFont: {
    fontSize:32,
    color:'white',
  },
  timeFont: {
    fontSize:20,
    color:'white',
  },
  orderFont: {
    fontSize:20,
    color:'white',
  },
  addressFont: {
    fontSize:20,
    color:'white',
  },
});