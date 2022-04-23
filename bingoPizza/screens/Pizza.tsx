import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  FlatList, 
  Dimensions, 
  Alert, 
  TouchableOpacity } from 'react-native'

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from '../styles/Gradient';
import { globalStyles } from '../styles/globalStyles';

export default function Pizza({navigation,route}: {navigation:any,route:any}) {

  const [pizza,setPizza] = React.useState([
    {key:1,name:'mexicangreenwave',size:'M',dough:'Thick',crust:'None',sauce:'Tomato-Based',package:'Normal',img_path:'mexicangreenwave.png'},
    {key:2,name:'pepperonipizza',size:'L',dough:'Thin',crust:'Sausage',sauce:'BBQ',package:'Normal',img_path:'pepperonipizza.png'},
    {key:3,name:'plaincheesepizza',size:'S',dough:'Thick',crust:'None',sauce:'Tomato-Based',package:'Normal',img_path:'plaincheesepizza.png'},
  ]);

  const onSelected = () =>{
    navigation.navigate('PresetPizza')
  }

  const onBackButton = () =>{
    navigation.goBack()
  }

  return (
    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
            </TouchableOpacity>
            <Text style={globalStyles.fontHeader}>Pizza</Text>
            <View style={globalStyles.underline}></View>  
        </View>

        <View style={styles.cartContainer}>
          <FlatList
            data={pizza}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.menu} key={item.key} onPress={onSelected}>
                  <View style={styles.boxImage}>
                    <Image source = {{uri:"http://10.0.2.2:3000/getImage/"+item.img_path}} style={styles.foodImage}/>
                  </View>
                  <View style={styles.boxDetails}>
                    <Text style={styles.pizzaFont}>{item.name}</Text>
                    <Text style={styles.pizzaFont}>{item.price}</Text>
                  </View>
              </TouchableOpacity>
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
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  iconContainer: {
    width:screenWidth*0.9,
    flexDirection:'row',
    alignItems:'flex-start'
  },
  cartContainer: {
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.9,
    height:screenHeight*.7,
    backgroundColor:'#fff',
    borderRadius:50,
    elevation: 10,
  },
  menu: {
    marginVertical:20,
    borderRadius:50,
    borderColor:'gray',
    backgroundColor:'#FF6D7D',
    width:screenWidth*0.8,
    height:screenHeight*0.25,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    elevation: 5,
  },
  boxImage: {
    borderRadius:20,
    backgroundColor:'white',
    width:screenHeight*0.125,
    height:screenHeight*0.125,
  },
  foodImage: {
    borderRadius:20,
    width:screenHeight*0.125,
    height:screenHeight*0.125,
  },
  boxDetails: {
    backgroundColor:'transparent',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:screenHeight*0.2,
    height:screenHeight*0.2,
  },
  pizzaFont:{
    fontSize: 20,
    width: screenHeight*0.2,
    height: 50,
    margin: 8,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 4,
  },
  buttonBox:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width: screenHeight*0.2,
    height: screenHeight * 0.05,
  },
  addBox:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width: screenHeight*0.1,
    height: screenHeight * 0.05,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 12,
  },
  editBox:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width: screenHeight*0.1,
    height: screenHeight * 0.05,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 12,
  },
});
