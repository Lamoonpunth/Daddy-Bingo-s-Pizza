import React,{useState}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from '../../../styles/Gradient';
import { globalStyles } from '../../../styles/globalStyles';
import Dialog from "react-native-dialog";

export default function EditProfile({navigation}:{navigation:any}) {

  const [name, onChangeName] = React.useState('Default');
  const [email, onChangeEmail] = React.useState('Default');
  const [contact, onChangeContact] = React.useState('Default');
  const [address, onChangeAddress] = React.useState('Default');

  const onBackButton = () => {
    navigation.goBack();
  }

  const onSaveButton = () =>{
    
  }

  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconContainer} >
            <TouchableOpacity style={globalStyles.backIcon} onPress={onBackButton}>
              <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
            </TouchableOpacity>
          </View>
          <Text style={globalStyles.fontHeader}>Your Profile</Text>
        </View>

        <View style={styles.underline}></View>

        <View style={styles.detail}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <View style={styles.box1}>
              <View style={styles.topicBox}>
                <Text style={styles.topicFont}>Name</Text>
                <View>
                  <Image source={require('../../../assets/images/edit.png')}/>  
                </View>
              </View>
              <TextInput 
                style={styles.detailFont}
                placeholder={name}
                value={name}
                onChangeText={onChangeName}
              />
            </View>
            <View style={styles.box1}>
              <View style={styles.topicBox}>
                <Text style={styles.topicFont}>Email</Text>
                <View >
                  <Image source={require('../../../assets/images/edit.png')}/>  
                </View>
              </View>
              <TextInput 
                style={styles.detailFont}
                placeholder={email}
                value={email}
                onChangeText={onChangeEmail}
              />
            </View>
            <View style={styles.box1}>
              <View style={styles.topicBox}>
                <Text style={styles.topicFont}>Contact</Text>
                <View >
                  <Image source={require('../../../assets/images/edit.png')}/>  
                </View>
              </View>
              <TextInput 
                style={styles.detailFont}
                placeholder={contact}
                value={contact}
                onChangeText={onChangeContact}
              />
            </View>
            <View style={styles.saveBox}>
              <View style={styles.save}>
                <Text style={styles.saveFont}>Save</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.savebutton} onPress={onSaveButton}>
          <View style={{backgroundColor:'transparent'}}>
            <Text style={{fontSize:20, color: 'white'}}>Save</Text>
          </View>  
        </TouchableOpacity>

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: screenWidth * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginLeft:-screenWidth*.2,
  },
  detail: {
    flexDirection:'column',
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical:30,
    width: screenWidth * .9,
    height: screenHeight * .7,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 10,
  },
  scroll: {

  },
  box1: {
    flexDirection:'column',
    alignItems:'center',
    width: screenWidth * .8,
    height: 100,
    marginVertical:10,
    backgroundColor:'#FF6D6D',
    borderRadius:10,
  },
  topicBox: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width: screenWidth * .7,
    height: 50
  },
  topicFont: {
    fontSize:20,
    color:'white'
  },
  detailFont: {
    textAlign:'left',
    fontSize:18,
    color:'white',
    width: screenWidth * .7,
    height: 50,
  },
  editButton: {
    width:50,
    height:50,
  },
  saveBox: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    width: screenWidth * .8,
    marginVertical:10,
    paddingHorizontal:20,
    height: 100,
    backgroundColor:'transparent',
    borderRadius:10,
  },
  save: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: screenWidth * .3,
    marginVertical:10,
    height: 50,
    backgroundColor:'#FF6D6D',
    borderRadius:10,
    elevation:10
  },
  saveFont: {
    fontSize:18,
    color:'white',
  },
  backIcon: {
    height:screenHeight*.03,
    marginLeft:-screenWidth*.225,
    marginRight:screenWidth*.1,
  },
  underline:{
    width:screenWidth*.7,
    height:screenHeight*0.0035,
    backgroundColor:'white',
    marginTop:-screenHeight * .025,
    marginBottom:-screenHeight *.02,
  },
  savebutton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*36/100,
    height:screenHeight*6/100,
    backgroundColor:'#FF6D6D',
    elevation:4,
    borderRadius:20
  },
});
