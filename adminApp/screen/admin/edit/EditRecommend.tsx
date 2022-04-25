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

import Gradient from '../../../styles/Gradient';
import { globalStyles } from '../../../styles/globalStyles';
import { color } from 'react-native-reanimated';

export default function EditRecommend({navigation,route}: {navigation:any,route:any}) {

  const [pizza,setPizza] = React.useState([
    {key:1,name:'mexicangreenwave', img_path:'mexicangreenwave.png'},
    {key:2,name:'pepperonipizza', img_path:'pepperonipizza.png'},
    {key:3,name:'plaincheesepizza', img_path:'plaincheesepizza.png'},
  ]);

  const onSelected = () =>{
    
  }

  const onBackButton = () =>{
    navigation.goBack()
  }

  const onRemove = () =>{
    
  }

  const onAddRecommend = () =>{
    navigation.navigate('AddRecommend');
  }

  return (
    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.iconContainer} >
                <TouchableOpacity style={globalStyles.backIcon} onPress={onBackButton}>
                  <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.addIcon} onPress={onAddRecommend}>
                  <Image source={require('../../../assets/images/add.png')} style={globalStyles.addIcon}/>
                </TouchableOpacity>
            </View>
            <Text style={globalStyles.fontHeader}>Recommend</Text>
            <View style={globalStyles.underline}></View>  
        </View>

        <View style={styles.cartContainer}>
          <FlatList
            data={pizza}
            renderItem={({item}) => (
              <View style={styles.menu} key={item.key}>
                  <View style={styles.boxImage}>
                    <Image source = {{uri:"http://10.0.2.2:3000/getImage/"+item.img_path}} style={styles.foodImage}/>
                  </View>
                  <View style={styles.boxDetails}>
                    <Text style={styles.pizzaFont}>{item.name}</Text>
                    <Text style={styles.pizzaFont}>5000</Text>
                    <TouchableOpacity style={styles.remove} onPress={onRemove}>
                      <Image source={require('../../../assets/images/trash-white.png')}/>
                    </TouchableOpacity>
                  </View>
              </View>
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
    alignItems:'center',
    justifyContent:'space-between',
  },
  cartContainer: {
    padding:20,
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
    marginVertical:10,
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
  remove:{
    flexDirection:'row-reverse',
    width: screenHeight*0.2,
    height: 50,
    padding: 10,
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
});
