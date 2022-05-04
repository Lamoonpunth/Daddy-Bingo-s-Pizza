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
import { useFocusEffect } from '@react-navigation/native';
export default function EditRecommend({navigation,route}: {navigation:any,route:any}) {

  const [recommend,setRecommend] = React.useState([
    {key:1,name:'mexicangreenwave', img_path:'mexicangreenwave.png', price:0},
    {key:2,name:'pepperonipizza', img_path:'pepperonipizza.png', price:0},
    {key:3,name:'plaincheesepizza', img_path:'plaincheesepizza.png', price:0},
  ]);

  const onSelected = () =>{
    
  }

  const onBackButton = () =>{
    navigation.goBack()
  }

  const onRemove = (recommend:any) =>{
    fetch("http://10.0.2.2:3000/removerecommend",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({_id:recommend._id})            
  })
  .then(response=>response.json())
  .then(json=>console.log(json))
  getRecommendList()
}

  const onAddRecommend = () =>{
    navigation.navigate('AddRecommend');
  }
  
  
  const getRecommendList = () =>{
    fetch("http://10.0.2.2:3000/getrecommend")
    .then(response=>response.json())
    .then(list => setRecommend(list))
  }
  useFocusEffect(
    React.useCallback(() => {
      getRecommendList()
    }, [])
  );
  return (
    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.iconContainer} >
                <TouchableOpacity style={styles.backIcon} onPress={onBackButton}>
                  <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
                </TouchableOpacity>

                <Text style={styles.headerfont}>Recommend</Text>

                <TouchableOpacity style={styles.addIcon} onPress={onAddRecommend}>
                  <Image source={require('../../../assets/images/add.png')} style={globalStyles.addIcon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.underline}></View>  
        </View>

        <View style={styles.cartContainer}>
          <FlatList
            data={recommend}
            keyExtractor={(item:any) => item.name}
            renderItem={({item}) => (
              <View style={styles.menu} key={item.key}>
                  <View style={styles.boxImage}>
                    <Image source = {{uri:"http://10.0.2.2:3000/getImage/"+item.img_path}} style={styles.foodImage}/>
                  </View>
                  <View style={styles.boxDetails}>
                    <Text style={styles.pizzaFont}>{item.name}</Text>
                    <Text style={styles.pizzaFont}>{item.price}</Text>
                    <TouchableOpacity style={styles.remove} onPress={()=>onRemove(item)}>
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
  headerfont:{
    fontSize: 42,
    color:'white',
    marginRight:screenWidth*.015,
},
  header: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  iconContainer: {
    borderRadius:20,
    width:screenWidth*.9,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  backIcon: {
    height:screenHeight*.03,
    marginLeft:-screenWidth*.02,
    marginRight:screenWidth*.03,
  },
  addIcon: {
    width:screenWidth*0.1,
    height:screenHeight*.03,
    marginLeft:screenWidth*.03,
    marginRight:-screenWidth*.02,
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
  underline:{
    width:screenWidth*.7,
    height:screenHeight*0.0035,
    backgroundColor:'white',
    marginTop:screenHeight * .015,
    marginBottom:-screenHeight *.02,
  },
});
