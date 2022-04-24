import React,{useState}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    } from 'react-native';

import { globalStyles } from '../../../styles/globalStyles';
import Gradient from '../../../styles/Gradient';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function EditPresetPizza({navigation}:{navigation:any}) {
  return (
    <Gradient>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => {navigation.goBack()}}>
          <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollMainContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.container}>

          <View style={styles.pizzaBox}>
          </View>
          
          <View style={styles.ingredientBox}>
          </View>

          <View style={styles.sizeBox}>
          </View>

          <View style={styles.sizeBox}>
          </View>

          <View style={styles.sizeBox}>
          </View>

          <View style={styles.sizeBox}>
          </View>

          <View style={styles.sizeBox}>
          </View>

        </View>  

      </ScrollView>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  scrollMainContainer: {
    flex:1,
    marginTop:10,
    backgroundColor:'transparent'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
  },
  iconContainer: {
    width:screenWidth*0.9,
    flexDirection:'row',
    alignItems:'flex-start'
  },
  pizzaBox: {
    borderWidth:1,
    width:screenWidth,
    height:screenHeight*0.4,
  },
  ingredientBox: {
    borderWidth:1,
    width:screenWidth,
    height:screenHeight*0.3,
  },
  sizeBox: {
    borderWidth:1,
    width:screenWidth,
    height:screenHeight*0.25,
  },
  customBox: {
    borderWidth:1,
    width:screenWidth,
    height:screenHeight*0.3,
  },
});
