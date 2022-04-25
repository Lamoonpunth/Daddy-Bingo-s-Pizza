import React,{useState}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from '../../../styles/Gradient';
import { globalStyles } from '../../../styles/globalStyles';

export default function EditProfile({navigation}:{navigation:any}) {

  const [name, onChangeName] = React.useState('Default');
  const [email, onChangeEmail] = React.useState('Default');
  const [contact, onChangeContact] = React.useState('Default');
  const [address, onChangeAddress] = React.useState('Default');

  const onBackButton = () => {
    navigation.goBack();
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
          <View style={globalStyles.underline}></View>
        </View>
        <View style={styles.detail}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <View style={styles.box1}>
              <View style={styles.topicBox}>
                <Text style={styles.topicFont}>Name</Text>
                <TouchableOpacity >
                  <Image source={require('../../../assets/images/edit.png')}/>  
                </TouchableOpacity>
              </View>
              <Text></Text>
            </View>
            <View style={styles.box1}>
              <View style={styles.topicBox}>
                <Text style={styles.topicFont}>Email</Text>
                <TouchableOpacity >
                  <Image source={require('../../../assets/images/edit.png')}/>  
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.box1}>
              <View style={styles.topicBox}>
                <Text style={styles.topicFont}>Contact</Text>
                <TouchableOpacity >
                  <Image source={require('../../../assets/images/edit.png')}/>  
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.box2}>
              <View style={styles.topicBox}>
                <Text style={styles.topicFont}>Address</Text>
                <TouchableOpacity >
                  <Image source={require('../../../assets/images/edit.png')}/>  
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
  }
});
