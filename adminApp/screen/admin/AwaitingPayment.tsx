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

export default function AwaitingPayment({ navigation, route }: { navigation: any, route: any }) {
  
  const onBackButton = () =>{
    navigation.goBack();
  }

  const [awaitingPayment, onChangeAwaiting] = React.useState([
    {customer_id:1, customer_fname:'โทนี่', customer_lname:'ฟรีไฟร์', payment: 1500, transaction:'complete', },
    {customer_id:2, customer_fname:'ไม้โมก', customer_lname:'โยกไฟ', payment: 1500, transaction:'incomplete', },
    {customer_id:3, customer_fname:'บิงโก', customer_lname:'โอรีโอ้', payment: 1500, transaction:'incomplete', },
    {customer_id:4, customer_fname:'โอ๊ต', customer_lname:'กระโดดยาง', payment: 1500, transaction:'incomplete', },
    {customer_id:5, customer_fname:'โอ', customer_lname:'เยอรมัน', payment: 1500, transaction:'complete', },
  ])

  return (

    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.iconContainer} >
              <TouchableOpacity style={globalStyles.backIcon} onPress={onBackButton}>
                <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
              </TouchableOpacity>
              
            </View>
          <Text style={globalStyles.fontHeader}>Awaiting Payment</Text>
          <View style={globalStyles.underline}></View>
        </View>

        <View style={styles.cartContainer}>
          <FlatList
            data={awaitingPayment}
            renderItem={({item}) => (
              <TouchableOpacity key={item.customer_id} style={styles.touch}>
                <ImageBackground style={styles.awaiting} imageStyle={{borderRadius:30, opacity:0.25}} source={require('../../assets/images/Category/Pizza.jpg')}>
                  <View style={styles.customerDetail}>
                    <Text style={styles.detailFont}>{item.customer_id}.{item.customer_fname} {item.customer_lname}</Text>
                  </View>
                  <View style={styles.checkPayment}>
                    <Text style={styles.detailFont}>{item.payment} Baht</Text>
                    
                    {item.transaction == 'complete'?
                      <View style={styles.status}>
                        <Text style={styles.statusFont}>Complete</Text>
                        <Image source={require('../../assets/images/check.png')} style={styles.statusImage}/>
                      </View>
                    :
                      <View style={styles.status}>
                        <Text style={styles.statusFont}>Incomplete</Text>
                        <Image source={require('../../assets/images/awaiting.png')} style={styles.statusImage}/>
                      </View>
                    }
                    
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
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
  touch: {
    marginVertical:10,
    width: screenWidth * .7,
    height: 150,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  awaiting: {
    width: screenWidth * .7,
    height: 150,
    borderRadius: 30,
    backgroundColor: '#000000c0',
  },
  customerDetail: {
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width: screenWidth * .7,
    height: 75,
  },
  detailFont: {
    fontSize:20,
    fontWeight:'900',
    color:'white'
  },
  checkPayment: {
    padding:10,
    width: screenWidth * .7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height: 75,
  }, 
  status: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height: 75,
    width: screenWidth * .3,
  },
  statusImage: {
    width:25,
    height:25,
  },
  statusFont: {
    fontSize:16,
    color:'white',
  },
});