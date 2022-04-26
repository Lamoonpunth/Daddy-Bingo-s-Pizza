import React from "react";
import {
  View,
  Text,
  Image,
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
 
  const onCheckOut = () => {
    alert('จะกินมั้ย กินก็จ่าย');
  }
  const onClickAdminIcon = () => {
    navigation.openDrawer();
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
          <View style={styles.adminBox}>
            <TouchableOpacity onPress={onClickAdminIcon}>
              <Image source={require('../../assets/images/user_icon.png')} style={styles.adminIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>

            <TouchableOpacity style={styles.iconContainer} onPress={() => { navigation.goBack() }}>
              <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
            </TouchableOpacity>
            <Text style={globalStyles.fontHeader}>Preparing</Text>
          </View>
          <View style={styles.TaskTrack}>
            <View style={styles.flatContainer}>
              <FlatList

                numColumns={1}
                data={Ingredient}
                renderItem={({ item }) => (
                /*  <Item
                  id={item.key}
                  title={item.num}
                  selected={!!selected.get(item.key)}
                  onSelect={onSelect}
                />*/
                  <TouchableOpacity style={styles.Ingredient} key={item.key} onPress={() => onClickIngredient(item.key)}>
                    <View style={styles.forrowview}>
                      <Image source={{uri:get+item.img_path}} style={{
                        width: 120,
                        height: 120
                      }} />
                    </View>
                    <Text>{item.name} x{item.quantity}</Text>
                    <Text>{item.description}</Text>
                  </TouchableOpacity>

                )}

              />
            </View>

          </View>

          <TouchableOpacity style={styles.LogoutBox} onPress={onCheckOut}>
            <Text style={styles.checkoutFont}>Log out</Text>
          </TouchableOpacity>

        </View>
      </Gradient>
    );

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //borderWidth: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: 'transparent',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      width: screenWidth * 0.1,
      flexDirection: 'row',
      borderWidth: 1,
      alignItems: 'flex-start'
    },
    TaskTrack: {
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: screenWidth * .9,
      height: screenHeight * .75,
      backgroundColor: '#fff',
      borderRadius: 50,
      elevation: 10,
    },
    flatContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: screenWidth * .89,
      //borderWidth: 1,
      height: screenHeight * .65,

      backgroundColor: '#fff',
    },

    boxImage: {
      borderRadius: 20,
      backgroundColor: 'white',
      width: screenHeight * 0.125,
      height: screenHeight * 0.125,
      borderWidth: 1
    },
    boxDetails: {
      backgroundColor: 'transparent',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: screenHeight * 0.2,
      height: screenHeight * 0.2,
    },
    serviceFont: {
      fontSize: 18,
      width: screenHeight * 0.2,
      height: screenHeight * 0.05,
      margin: 8,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 12,
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
      borderWidth: 1,
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
      marginVertical: 4,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'gray',
      backgroundColor: 'white',
      width: screenWidth * 0.85,
      height: screenHeight * 0.15,
      alignItems: "center",
      justifyContent: 'flex-start',
      flexDirection: 'row',


    },
    forrowview: {
      width: screenWidth * 0.3,
      height: screenWidth * 0.25,
      flexDirection: 'row',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginVertical: 1,
      marginHorizontal: 1,
    },
    bottontoleftside: {
      width: screenWidth * 0.85,
      height: screenHeight * 0.05,
      // borderWidth:1,
      alignItems: 'flex-end',
      justifyContent: 'center',

    },
    ac_rjbox: {
      flexDirection: 'row',
      borderWidth: 1,
      width: screenWidth * 0.15,
      height: screenWidth * .05,
      justifyContent: 'center',
      borderRadius: 50,
    },
    acbox: {
      flexDirection: 'row',
      borderWidth: 1,
      width: screenWidth * 0.15,
      height: screenWidth * .05,
      justifyContent: 'center',
      backgroundColor: '#FF6D7D',
      borderRadius: 50,

    },
    normalFont: {
      fontSize: 11,
      color: '#330000',
    },

  });
