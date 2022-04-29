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
    {name:'วันเกิด' , price: '19' , detail:'HBD' , key: 1},
    {name:'สวัสดี' , price: '24' , detail:'none' , key: 2},
    {name:'ครับ' , price: '33' , detail:'none' , key: 3},
    {name:'ท่าน' , price: '42' , detail:'none' , key: 4},
    {name:'สมาชิก' , price: '51' , detail:'none' , key: 5},
  ]);

  const onAddService = () =>{

  }

  const onRemove = () =>{

  }

  return (
    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => {navigation.goBack()}}>
            <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
          </TouchableOpacity>
          <Text style={globalStyles.fontHeader}>Service</Text>
          <TouchableOpacity style={styles.addIcon} onPress={onAddService}>
            <Image source={require('../../../assets/images/add.png')} style={globalStyles.addIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.underline}></View>  

        <View style={styles.serviceContainer}>
          <View style={styles.flatContainer}>
            <FlatList
              data={service}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.service} key={item.key}>
                  <View style={styles.boxDetails}>
                    <Text style={styles.serviceFont}>{item.name}</Text>
                    <Text style={styles.serviceFont}>{item.detail}</Text>
                    <View style={styles.priceAndRemove}>
                      <Text style={styles.priceFont}>{item.price}</Text>
                      <TouchableOpacity style={styles.remove} onPress={()=>onRemove()}>
                        <Image source={require('../../../assets/images/trash-white.png')}/>
                      </TouchableOpacity>
                    </View>
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
    width:screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconContainer: {
    width:40,
    height:30
  },
  addIcon: {
    width:screenWidth*0.1,
    height:screenHeight*.03,
    marginLeft:screenWidth*.03,
    marginRight:-screenWidth*.02,
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
    backgroundColor:'#FF6D6D',
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
  remove:{
    flexDirection:'row-reverse',
    width: screenWidth*0.2,
    height: 50,
    padding: 10,
  },
  underline:{
    width:screenWidth*.7,
    height:screenHeight*0.0035,
    backgroundColor:'white',
  },
});
