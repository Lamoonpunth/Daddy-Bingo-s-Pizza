import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const { height, width } = Dimensions.get('screen');
import Gradient from "../styles/Gradient";
import { globalStyles } from "../styles/globalStyles";
import { FlatList } from "react-native-gesture-handler";
import { useFocusEffect } from '@react-navigation/native';
import { color } from "react-native-reanimated";

export default function CustomerAddress({ navigation, route }: { navigation: any, route: any }) {

  const [address, setAddress] = React.useState([
    {savename:'บ้านของฉัน', province:'ปทุมธานี', district:'ลำลูกกา', subdistrict:'บึงคำพร้อย', postcode:'12150'}
  ])

  const onBackButton = () => {
    navigation.goBack()
  }
  
  const onAddButton = () => {
    
  }

  return (

    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => { onBackButton() }}>
            <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon} />
          </TouchableOpacity>
          <Text style={globalStyles.fontHeader}>Your address</Text>
          <View style={styles.iconContainer}></View>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.cartContainer}>
            
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
    width:screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  iconContainer: {
    width:40,
    height:30
  },
  cartContainer: {
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * .9,
    height: screenHeight * .7,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 10,
  },
  flatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * .8,
    height: screenHeight * .65,
    backgroundColor: '#fff',
  },
  menu: {
    marginVertical: 5,
    borderRadius: 50,
    borderWidth:1,
    borderColor: 'rgba(0,0,0,.1)',
    backgroundColor: '#FF6D6D',
    width: screenWidth * 0.8,
    height: screenHeight * 0.22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 6
  },
  boxImage: {
    borderRadius: 20,
    backgroundColor: 'white',
    width: screenHeight * 0.125,
    height: screenHeight * 0.125,
    //borderWidth:1
  },
  boxDetails: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenHeight * 0.2,
    height: screenHeight * 0.2,
  },
  menuInfo: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.25,
    marginTop: 8,
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  menuFont: {
    fontSize: 20,
    color:'white'
  },
  moreBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenHeight * 0.1,
    height: screenHeight * 0.05,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 8,
  },
  moreFont: {
    fontSize: 18,
    color: '#FF6D7D',
  },
  ////////////////////

  item: {
    backgroundColor: '#f9c2ff',
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.002,
    marginHorizontal: width * 0.1,
  },
  title: {
    fontSize: 16,
  },
  scrollHorizontalBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    //borderWidth:1,
    width: screenWidth,
    height: screenHeight * 0.2
  },
  foodImage: {
    borderRadius: 50,
    backgroundColor: 'white',
    width: screenWidth * 0.30,
    height: screenWidth * 0.30,
  },
  morebutton: {
    //borderWidth:1,
    borderColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 12 / 100,
    height: height * 6 / 100,
    backgroundColor: '#FF6D6D',
    borderRadius: 50,
    elevation:4,
  },
  makeBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: screenWidth*0.4,
    height: screenHeight * 0.05,
    borderRadius: 10,
    backgroundColor:'#FF6D7D',
    marginBottom:10,
    elevation: 12,
  },
  makeFont: {
    fontSize:18,
    color:'white',
  },
  underline:{
    width:screenWidth*.55,
    height:screenHeight*0.0035,
    backgroundColor:'white',
    marginTop:-screenHeight * .045,
    marginBottom:-screenHeight *.03,
  },
});