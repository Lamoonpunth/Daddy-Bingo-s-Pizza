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

export default function TaskDeny({ navigation,route }: { navigation: any , route:any}) {
  const [denyText , onChangedeny] = React.useState('');
  const {order} = route.params;
  const UselessTextInputMultiline = () => {
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  }
  const onSend = () => {
    fetch("http://10.0.2.2:3000/kitchendeny",{
      method:"POST",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
          _id: order._id,
      })
    })
    .then(response=>response.json())
    .then(data => {console.log(data)
    navigation.navigate('TaskOrder')})
    onChangedeny('')
  }
  const onClickAdminIcon = () => {
    navigation.openDrawer();
  }

  return (
    <Gradient>
      <View style={styles.container}>
       
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => {navigation.goBack()}}>
              <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon }/> 
          </TouchableOpacity>
          <Text style={globalStyles.fontHeader}>Task Denied</Text> 
          <View style={styles.iconContainer}>
          </View>
        </View>
        <View style={styles.TaskTrack}>
          <View style={styles.flatContainer}>
          <TextInput
            style={styles.input}
            textAlignVertical ="top"
            multiline={true}
            numberOfLines={13}
            maxLength ={400}
            onChangeText={onChangedeny}
            value={denyText}
            placeholder="type reason"
          />

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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  header: {
    marginTop:screenHeight*.04,
    marginBottom:screenHeight*.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: screenWidth * 0.15,
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
    width: screenWidth * .8,
    height: screenHeight * .2,
    elevation:10,
    backgroundColor: '#fff',
  },

  boxImage: {
    borderRadius: 20,
    backgroundColor: 'white',
    width: screenHeight * 0.125,
    height: screenHeight * 0.125,
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
    flexWrap:'wrap',
      flexDirection:'row',
      width:screenWidth*0.85,
      height:screenWidth*0.125
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
    borderColor: 'gray',
    backgroundColor: 'white',
    width: screenWidth * 0.85,
    height: screenHeight * 0.15,
    alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  input: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.2,
    margin: 1,
    borderWidth: 1,
    padding: 10,
    fontSize:20
  },
  normalFont: {
    fontSize: 11,
    color: '#330000',
  },

});
