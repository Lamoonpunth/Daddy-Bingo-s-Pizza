import React,{useState}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from '../../styles/Gradient';
import { globalStyles } from '../../styles/globalStyles';
import { useFocusEffect } from '@react-navigation/native';

export default function ChefProfile({navigation,route}:{navigation:any,route:any}) {  
  
  const userid = route.params.params.params.userid
  console.log(userid)
  const [fname, onChangeFname] = React.useState('Default');
  const [lname, onChangeLname] = React.useState('Default');
  const [phone, onChangePhone] = React.useState('Default');
  
  const onBackButton = () => {
    navigation.goBack();
  }
  //update chef profile
  const onSaveButton = () => {
    fetch("http://10.0.2.2:3000/updatechefprofile", {
          method:"POST",
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({_id:userid,
                                fname:fname,
                                lname:lname,
                                phonenumber:phone})
        })
        .then(response => response.json())
        .then(data => {console.log(data) }) 
    console.log(Response)                    
}

  useFocusEffect(
    React.useCallback(() => {
      fetch('http://10.0.2.2:3000/getchefdata?_id='+userid)
      .then(response => response.json())     
      .then(json => {
        onChangeFname(json.fname)
        onChangeLname(json.lname)
        onChangePhone(json.phonenumber)
      })      
    }, [])
  );

  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconContainer} >
            <TouchableOpacity style={globalStyles.backIcon} onPress={onBackButton}>
              <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
            </TouchableOpacity>
          </View>
          <Text style={globalStyles.fontHeader}>Your Profile</Text>
        </View>
        <View style={globalStyles.underline}></View>
        <View style={styles.detail}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <View style={styles.box1}>
              <View style={styles.topicBox}>
                <Text style={styles.topicFont}>First name</Text>
                <View >
                  <Image source={require('../../assets/images/edit.png')}/>  
                </View>
              </View>
              <TextInput 
                style={styles.detailFont}
                placeholder={fname}
                value={fname}
                onChangeText={onChangeFname}
              />
            </View>
            <View style={styles.box1}>
              <View style={styles.topicBox}>
                <Text style={styles.topicFont}>Last name</Text>
                <View >
                  <Image source={require('../../assets/images/edit.png')}/>  
                </View>
              </View>
              <TextInput 
                style={styles.detailFont}
                placeholder={lname}
                value={lname}
                onChangeText={onChangeLname}
              />
            </View>
            <View style={styles.box1}>
              <View style={styles.topicBox}>
                <Text style={styles.topicFont}>Phone number</Text>
                <View >
                  <Image source={require('../../assets/images/edit.png')}/>  
                </View>
              </View>
              <TextInput 
                style={styles.detailFont}
                placeholder={phone}
                value={phone}
                onChangeText={onChangePhone}
                keyboardType='number-pad'
              />
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
    marginBottom:-screenHeight*.05,
    marginLeft:-screenWidth*.2,

  },
  iconContainer: {
    width: screenWidth * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  detail: {
    flexDirection:'column',
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
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
  editButton: {
    width:50,
    height:50,
  },
  box2: {
    flexDirection:'column',
    alignItems:'center',
    width: screenWidth * .8,
    marginVertical:10,
    height: 200,
    backgroundColor:'#FF6D6D',
    borderRadius:10,
  },
  detailFont: {
    textAlign:'left',
    fontSize:18,
    color:'#FF6D6D',
    width: screenWidth * .7,
    height: 40,
    backgroundColor:'white',
    borderRadius:10,
    paddingLeft:10
  },
  detailFontAddress: {
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    fontSize:18,
    color:'#FF6D6D',
    width: screenWidth * .7,
    height: 130,
    backgroundColor:'white',
    borderRadius:10,
    paddingLeft:10
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
