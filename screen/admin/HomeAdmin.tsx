import React  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    } from 'react-native';

import Gradient from '../../styles/Gradient';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function HomeAdmin({navigation}:{navigation:any}) {
  return (
    <Gradient>
      <View style={styles.uppercontainer}>
        <View style={styles.box1}>
        </View>
        <View style={styles.promotionBox}>
          <View style={styles.userBox}>
            <View style={styles.profileIcon}>
              <Image source={require('../../assets/images/user_icon.png')} style={styles.profileImage}/>
            </View>
            <View style={styles.adminAddress}>
              <Text>123/2 bingo house</Text>
            </View>
          </View>
          <View style={styles.promotion}>
            <View style={styles.roundedrec}>
              <Text>Promotion</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.lowercontainer}>

      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  uppercontainer: {
    flex: 2,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
    borderWidth:1,
    width:screenWidth,
    marginTop: 0.1,
  },
  lowercontainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth:1,
    width:screenWidth
  },
  roundedrec: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    width:screenWidth*0.9,
    borderRadius:50,
    elevation: 10,
  },
  box1: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width:screenWidth*0.9
  },
  promotionBox: {
    flex:8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width:screenWidth*0.9
  },
  promotion: {
    flex:8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width:screenWidth*0.9
  },
  userBox: {
    flex:2,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    width:screenWidth*0.9,
  },
  profileIcon: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 10,
  },
  profileImage: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
  },
  adminAddress: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'transparent',
  },
});
