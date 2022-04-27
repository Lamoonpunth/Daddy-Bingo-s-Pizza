import React from "react";
import {
  View,
  Text,
  Image,
  Alert,
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const get = "http://10.0.2.2:3000/getImage/"
import { globalStyles } from '../../styles/globalStyles';
import Gradient from '../../styles/Gradient';
//import { FlatList } from "react-native-gesture-handler";
import Constants from 'expo-constants';
import { useFocusEffect } from '@react-navigation/native';
export default function TaskPrepare({ navigation,route }: { navigation: any ,route:any}) {
  
  const {order} = route.params;
  const [Ingredient, onClickIng] = React.useState([
    { num: 'Order1', key: '1', img_path: require('../../assets/images/mexicangreenwave.png') },
    { num: 'Order2', key: '2', img_path: require('../../assets/images/mexicangreenwave.png') },
    { num: 'Order3', key: '3', img_path: require('../../assets/images/mexicangreenwave.png') },
    { num: 'Order3', key: '4', img_path: require('../../assets/images/mexicangreenwave.png') },
    { num: 'Order3', key: '5', img_path: require('../../assets/images/mexicangreenwave.png') },
    { num: 'Order3', key: '6', img_path: require('../../assets/images/classicburger.png') },
    { num: 'Order3', key: '7', img_path: require('../../assets/images/mexicangreenwave.png') },
    { num: 'Order4', key: '8', img_path: require('../../assets/images/mexicangreenwave.png') },

  ]);
 
  const onSendOut = () => {
    fetch("http://10.0.2.2:3000/kitchendone",{
      method:"POST",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
          _id: order._id,
      })
    })
    .then(response=>response.json())
    .then(data => {console.log(data)
    navigation.navigate('TaskOrder')})
    alert('จะกินมั้ย กินก็จ่าย');
  }

  const onClickAdminIcon = () => {
    navigation.openDrawer();
  }

  const onSelectedPrepare = (item:any,index:any) =>{
    const newArrData = Ingredient.map((e, index) =>{
      if (item.key == e.key){
        return {
          ...e,selected:true
        }
      }
      return {
        ...e,selected:false
      }
    })
    onClickIng(newArrData);
  }

  const getOrderCart = () =>{
    onClickIng([])
    console.log(order._id)
    fetch("http://10.0.2.2:3000/getordercart?_id="+order._id)
    .then(response => response.json())
    .then(cart => {
      console.log(cart)
      for (let i = 0; i < cart.length; i++) {
        fetch("http://10.0.2.2:3000/getID?id="+cart[i].id)
        .then(response => response.json())
        .then(item => {
          const newitem = {name:item[0].name,img_path:item[0].img_path,quantity:cart[i].quantity,additional:cart[i].additional,key:cart[i].id,price:item[0].price,type:item[0].type,description:item[0].description}
          onClickIng(cart => [...cart,newitem] );
        })
      }
    })
    .catch(error => console.log(error))
  }
  useFocusEffect(
    React.useCallback(() => {
      getOrderCart()
    }, [order])
  );
    return (
      <Gradient>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => { navigation.goBack() }}>
              <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
            </TouchableOpacity>
            <Text style={globalStyles.fontHeader}>Preparing</Text>
          </View>
          <View style={styles.TaskTrack}>
            <View style={styles.flatContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={Ingredient}
                renderItem={({ item , index}) => (
                  <TouchableOpacity 
                  style={[styles.Ingredient,{backgroundColor:item.selected? '#FF6D6D':'white'}]} 
                  key={item.key} 
                  onPress={() => onSelectedPrepare(item,index)}>
                    <View style={styles.forrowview}>
                      <Image source={{uri:get+item.img_path}} style={styles.forrowview} />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.prepareFont}>{item.name} x{item.quantity}</Text>
                      <Text style={styles.prepareFont}>{item.description}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.LogoutBox} onPress={onSendOut}>
            <Text style={styles.checkoutFont}>Send out delivery</Text>
          </TouchableOpacity>

        </View>
      </Gradient>
    );

  }

  const styles = StyleSheet.create({
    container: {
      paddingVertical:50,
      width:screenWidth,
      height:screenHeight,
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor: 'transparent',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      marginLeft:-screenWidth*.2,
      marginRight:screenWidth*.1,
      width: screenWidth * 0.1,
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    TaskTrack: {
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: screenWidth * .9,
      height: screenHeight * 0.6,
      backgroundColor: '#fff',
      borderRadius: 50,
      elevation: 10,
    },
    flatContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: screenWidth * .8,
      height: screenHeight * .5,
      backgroundColor: '#fff',
    },
    LogoutBox: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: screenWidth * 0.8,
      height: screenHeight * 0.075,
      borderRadius: 10,
      backgroundColor: '#FF6D7D',
      marginVertical: 10,
      elevation: 12,
    },
    checkoutFont: {
      fontSize: 24,
      color: 'white',
    },
    //--------------------แถบบน--------------------//
    adminBox: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: screenWidth * 0.85,
      height: screenWidth * 0.125
    },
    adminIcon: {
      borderRadius: 50,
      backgroundColor: 'white',
      width: screenWidth * 0.125,
      height: screenWidth * 0.125,
    },
    //-----------------Flatlist Task------------//
    Ingredient: {
      marginVertical: screenHeight*.012,
      marginHorizontal:screenWidth * .01,
      borderRadius: 20,
      borderColor: 'gray',
      width: screenWidth * 0.8,
      height: screenHeight * 0.15,
      alignItems: "center",
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
    textContainer: {
      paddingVertical:5,
      paddingLeft:10,
      width: screenWidth * 0.45,
      height: screenHeight * 0.15,
    },
    forrowview: {
      width: screenWidth * 0.3,
      height: screenHeight * 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:20,
    },
    prepareFont: {
      fontSize: 15,
      color: '#330000',
    },

  });
