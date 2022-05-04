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
  ])
  const onClickInfo = (item:any) =>{
    navigation.navigate('PaymentInfo',{payment:item})
  }

  const getWaitforpayment = () =>{
      fetch('http://10.0.2.2:3000/getwaitingforpayment')
        .then(response => response.json())
        .then(order => {onChangeAwaiting(order)})
  }

  useFocusEffect(
    React.useCallback(() => {
      getWaitforpayment()
    }, [])
  );
  return (

    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.iconContainer} >
              <TouchableOpacity style={styles.backIcon} onPress={onBackButton}>
                <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
              </TouchableOpacity>
              <Text style={styles.headerfont}>Awaiting Payment</Text>
              
            </View>
          <View style={styles.underline}></View>
        </View>

        <View style={styles.cartContainer}>
          <FlatList
            data={awaitingPayment}
            keyExtractor={(item:any) => item._id}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.touch} onPress={() => onClickInfo(item)}>
                <ImageBackground style={styles.awaiting} imageStyle={{borderRadius:30, opacity:0.25}} source={require('../../assets/images/Category/Pizza.jpg')}>
                  <View style={styles.customerDetail}>
                    <Text style={styles.detailFont}>{}{item.user_fname}{item.user_lname}</Text>
                  </View>
                  <View style={styles.checkPayment}>
                    <Text style={styles.detailFont}>{item.price} Baht</Text>
                    
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
  underline:{
    width:screenWidth*.8,
    height:screenHeight*0.0035,
    backgroundColor:'white',
    marginTop:screenHeight * .015,
    marginBottom:-screenHeight *.02,
  },
  headerfont:{
    fontSize: 36,
    color:'white',
    marginRight:screenWidth*.16,
  },
  backIcon: {
    height:screenHeight*.03,
    width:screenWidth*.1,
    marginLeft:-screenWidth*.04,
    marginRight:screenWidth*.03,
  },
});