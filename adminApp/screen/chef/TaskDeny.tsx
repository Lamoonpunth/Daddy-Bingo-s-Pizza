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
  TextInput
} from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import { globalStyles } from '../../styles/globalStyles';
import Gradient from '../../styles/Gradient';
//import { FlatList } from "react-native-gesture-handler";
import Constants from 'expo-constants';

export default function TaskDeny({ navigation }: { navigation: any }) {
  
  
  const UselessTextInputMultiline = () => {
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  }
  const onSend = () => {
    navigation.navigate('TaskOrder')
  }
  const onClickAdminIcon = () => {
    navigation.openDrawer();
  }

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
          <Text style={globalStyles.fontHeader}>Deny Order</Text>
        </View>
        <View style={styles.TaskTrack}>
          <View style={styles.flatContainer}>
          <TextInput
            style={styles.input}
            textAlignVertical ="top"
            multiline={true}
            numberOfLines={13}
            maxLength ={400}
            placeholder="useless placeholder"
            keyboardType="numeric"/>
          

          </View>
        </View>

        <TouchableOpacity style={styles.Sendbox} onPress={onSend}>
          <Text style={styles.checkoutFont}>Send</Text>
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
    justifyContent: 'flex-start',
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
    justifyContent: 'flex-start',
    width: screenWidth * .9,
    height: screenHeight * .4,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 50,
    elevation: 10,
  },
  flatContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: screenWidth * .89,
   // borderWidth: 1,
    height: screenHeight * .3,

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
  Sendbox: {
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
   // borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'white',
    width: screenWidth * 0.85,
    height: screenHeight * 0.15,
    alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: 'row',


  },
  input: {
    width: screenWidth * 0.85,
    height: screenHeight * 0.28,
    margin: 1,
   // borderWidth: 1,
    padding: 10,
  },
  normalFont: {
    fontSize: 11,
    color: '#330000',
  },

});
