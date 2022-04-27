import React,{useState}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    Dimensions,
    TouchableOpacity,
    } from 'react-native';

import { globalStyles } from '../../../styles/globalStyles';
import Gradient from '../../../styles/Gradient';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function EditService({navigation}:{navigation:any}) {

  const [service, onChangeService] = React.useState([
    {name:'HBD' , price: '19' , photo:'none' , key: 1},
    {name:'สวัสดี' , price: '24' , photo:'none' , key: 2},
    {name:'ครับ' , price: '33' , photo:'none' , key: 3},
    {name:'ท่าน' , price: '42' , photo:'none' , key: 4},
    {name:'สมาชิก' , price: '51' , photo:'none' , key: 5},
  ]);

  return (
    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => {navigation.goBack()}}>
            <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
          </TouchableOpacity>
          <Text style={globalStyles.fontHeader}>Service</Text>
        </View>
        <View style={styles.underline}></View>  

        <View style={styles.serviceContainer}>
          <View style={styles.flatContainer}>
            <FlatList
              data={service}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.service} key={item.key}>
                  <View style={styles.boxImage}>

                  </View>
                  <View style={styles.boxDetails}>
                    <TextInput
                    style={styles.serviceFont}
                    value={item.name}
                    placeholder={item.name}
                    />
                    <TextInput
                    style={styles.serviceFont}
                    value={item.price}
                    placeholder={item.price}
                    />
                    <TouchableOpacity style={styles.moreBox}>
                      <Text style={styles.moreFont}>More</Text>  
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
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
    marginTop:screenHeight*.0,
    marginBottom:-screenHeight*.05,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  iconContainer: {
    marginLeft:-screenWidth*.3,
    width:screenWidth*0.275,
    flexDirection:'row',
    alignItems:'flex-start'
  },
  serviceContainer: {
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.9,
    height:screenHeight*.7,
    backgroundColor:'#fff',
    borderRadius:50,
    elevation: 10,
  },
  flatContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.8,
    height:screenHeight*.65,
    backgroundColor:'#fff',
    
  },
  service: {
    marginVertical:5,
    borderRadius:50,
    borderWidth:1,
    backgroundColor:'white',
    width:screenWidth*0.8,
    height:screenHeight*0.22,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    borderColor:'rgba(0,0,0,.01)',
    elevation:5,
  },
  boxImage: {
    borderRadius:20,
    backgroundColor:'white',
    width:screenHeight*0.125,
    height:screenHeight*0.125,
    borderWidth:1,
    borderColor:'rgba(0,0,0,.1)',
    elevation:5,
  },
  boxDetails: {
    backgroundColor:'transparent',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:screenHeight*0.2,
    height:screenHeight*0.2,
    
  },
  serviceFont:{
    fontSize: 18,
    width: screenHeight*0.2,
    height: screenHeight * 0.05,
    margin: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 12,
  },
  moreBox:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width: screenHeight*0.1,
    height: screenHeight * 0.05,
    borderRadius: 10,
    backgroundColor: '#FF6D7D',
    elevation: 12,
  },
  moreFont:{
    fontSize: 18,
    color:'white',
  },
  underline:{
    width:screenWidth*.55,
    height:screenHeight*0.0035,
    backgroundColor:'white',
    marginTop:screenHeight * .015,
    marginBottom:-screenHeight *.02,
  },
});
