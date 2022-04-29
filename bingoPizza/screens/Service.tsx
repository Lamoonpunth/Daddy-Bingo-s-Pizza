import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const { height, width } = Dimensions.get('screen');
import Gradient from "../styles/Gradient";
import { globalStyles } from "../styles/globalStyles";
import { useFocusEffect } from '@react-navigation/native';
import { color } from "react-native-reanimated";

export default function Service({ navigation, route }: { navigation: any, route: any }) {

  const [service, onChangeService] = React.useState([
    {name:'วันเกิด' , price: '19' , detail:'HBD' , key: 1},
    {name:'สวัสดี' , price: '24' , detail:'none' , key: 2},
    {name:'ครับ' , price: '33' , detail:'none' , key: 3},
    {name:'ท่าน' , price: '42' , detail:'none' , key: 4},
    {name:'สมาชิก' , price: '51' , detail:'none' , key: 5},
  ]);

  const onBackButton = () => {
    navigation.goBack()
  }
  
  const onMoreButton = () =>{

  }

  return (

    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => { onBackButton() }}>
            <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon} />
          </TouchableOpacity>
          <Text style={globalStyles.fontHeader}>Service</Text>
          <View style={styles.iconContainer}></View>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.listContainer}>
          <FlatList
            data={service}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.serviceBox} key={item.key}>
                <View style={styles.boxDetails}>
                  <Text style={styles.serviceFont}>{item.name}</Text>
                  <Text style={styles.serviceFont}>{item.detail}</Text>
                  <View style={styles.priceAndRemove}>
                    <Text style={styles.priceFont}>{item.price}</Text>
                    <View style={styles.more}>
                      <TouchableOpacity style={styles.moreBox} onPress={() => onMoreButton()}>
                        <Text style={{ fontSize: 18, color: 'white' }}>More</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
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
    width:screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  iconContainer: {
    width:40,
    height:30
  },
  listContainer: {
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.9,
    height:screenHeight*.7,
    backgroundColor:'transparent',
    borderRadius:50
  },
  underline:{
    width:screenWidth*.55,
    height:screenHeight*0.0035,
    backgroundColor:'white',
    marginTop:-screenHeight * .045,
    marginBottom:-screenHeight *.03,
  },
  serviceBox: {
    marginVertical:15,
    borderRadius:50,
    backgroundColor:'white',
    width:screenWidth*0.8,
    height:screenHeight*0.22,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    elevation:5
  },
  boxDetails: {
    backgroundColor:'transparent',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.7,
    height:screenHeight*0.2,
  },
  serviceFont: {
    alignItems:'center',
    fontSize: 18,
    width: screenWidth*0.6,
    height: screenHeight * 0.05,
    margin: 4,
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 12,
  },
  priceAndRemove: {
    flexDirection:'row',
    width: screenWidth*0.6,
    height: screenHeight * 0.05,

  },
  priceFont: {
    alignItems:'center',
    fontSize: 18,
    width: screenWidth*0.4,
    height: screenHeight * 0.05,
    margin: 4,
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 12,
  },
  more:{
    flexDirection:'row-reverse',
    width: screenWidth*0.2,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
  },
  moreBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth*0.15,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FF6D6D',
    elevation: 8,
  },
});