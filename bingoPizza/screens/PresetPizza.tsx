import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  FlatList, 
  Dimensions,  
  ImageBackground,
  TouchableOpacity 
  } from 'react-native'

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
import Gradient from '../styles/Gradient';
import { globalStyles } from '../styles/globalStyles';
import { useFocusEffect } from '@react-navigation/native';

export default function PresetPizza({navigation,route}: {navigation:any,route:any}) {

  const [topping, onChangeTopping] = React.useState([
    { name: '', icon: '', price:0 , _id: '' ,selected:false,key:"0"}
  ]);

  const [dough, onChangeDough] = React.useState([
    { name: '', icon: '', price:0 , _id: '' ,selected:false,key:"0"},
  ]);
  
  const [crust, onChangeCrust] = React.useState([
    { name: '', icon: '', price:0 , _id: '' ,selected:false,key:"0"},
  ]);

  const [sauce, onChangeSauce] = React.useState([
    { name: '', icon: '', price:0 , _id: '' ,selected:false,key:"0"},
  ]);

  const [pack, onChangePackage] = React.useState([
    { name: '', icon: '', price:0 , _id: '' ,selected:false,key:"0"},
  ]);

  const [size, onChangeSize] = React.useState([
    { name: '', icon: '', price:0 , _id: '' ,selected:false,key:"0"},
  ]);

  const [selectedTopping, setTopping] = React.useState('Hawaiian')
  const [selectedSize, setSize] = React.useState('Thick');
  const [selectedDough, setDough] = React.useState('Thick');
  const [selectedCrust, setCrust] = React.useState('None');
  const [selectedSauce, setSauce] = React.useState('Tomato-Based');
  const [selectedPackage, setPackage] = React.useState('Thick');

  const onSelectedTopping = (type:any,item:any,index:any) =>{
    setTopping(type);
    const newArrData = topping.map((e, index) =>{
      if (item._id == e._id){
        return {
          ...e,selected:true
        }
      }
      return {
        ...e,selected:false
      }
    })
    onChangeTopping(newArrData);
  }

  const onSelectedSize = (type:any,item:any,index:any) =>{
    setSize(type);
    const newArrData = size.map((e, index) =>{
      if (item._id == e._id){
        return {
          ...e,selected:true
        }
      }
      return {
        ...e,selected:false
      }
    })
    onChangeSize(newArrData);
  }

  const onSelectedDough = (type:any,item:any,index:any) =>{
    setDough(type);
    const newArrData = dough.map((e, index) =>{
      if (item._id == e._id){
        return {
          ...e,selected:true
        }
      }
      return {
        ...e,selected:false
      }
    })
    onChangeDough(newArrData);
  }

  const onSelectedCrust = (type:any,item:any,index:any) =>{
    setCrust(type) ;
    const newArrData = crust.map((e, index) =>{
      if (item._id == e._id){
        return {
          ...e,selected:true
        }
      }
      return {
        ...e,selected:false
      }
    })
    onChangeCrust(newArrData);
  }

  const onSelectedSauce = (type:any,item:any,index:any) =>{
    setSauce(type);
    const newArrData = sauce.map((e, index) =>{
      if (item._id == e._id){
        return {
          ...e,selected:true
        }
      }
      return {
        ...e,selected:false
      }
    })
    onChangeSauce(newArrData);
  }

  const onSelectedPackage = (type:any,item:any,index:any) =>{
    setPackage(type);
    const newArrData = pack.map((e, index) =>{
      if (item._id == e._id){
        return {
          ...e,selected:true
        }
      }
      return {
        ...e,selected:false
      }
    })
    onChangePackage(newArrData);
  }

  const onBackButton = () =>{
    navigation.goBack()
  }

  const addToCart = () =>{
    
  }
  const getTopping = () =>{
    fetch("http://10.0.2.2:3000/getTopping")
    .then(response=>response.json())
    .then(json=>{console.log(json)
    onChangeTopping(json)})
  }
  const getSize = () =>{
    fetch("http://10.0.2.2:3000/getSize")
    .then(response=>response.json())
    .then(json=>{console.log(json)
    onChangeSize(json)})
  }
  const getDough = () =>{
    fetch("http://10.0.2.2:3000/getDough")
    .then(response=>response.json())
    .then(json=>{console.log(json)
    onChangeDough(json)})
  }
  const getCrust = () =>{
    fetch("http://10.0.2.2:3000/getCrust")
    .then(response=>response.json())
    .then(json=>{console.log(json)
    onChangeCrust(json)})
  }
  const getSauce = () =>{
    fetch("http://10.0.2.2:3000/getSauce")
    .then(response=>response.json())
    .then(json=>{console.log(json)
    onChangeSauce(json)})
  }
  const getPackage = () =>{
    fetch("http://10.0.2.2:3000/getPackage")
    .then(response=>response.json())
    .then(json=>{console.log(json)
    onChangePackage(json)})
  }
  const renderall = () =>{
    getTopping()
    getSize()
    getDough()
    getCrust()
    getSauce()
    getPackage()
  }

  useFocusEffect(
    React.useCallback(() => {
        renderall()
      //checkItemInCart()
    }, [])
  );
  return (
    <Gradient>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
              <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                  <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
              </TouchableOpacity>
              <Text style={globalStyles.fontHeader}>Preset Pizza</Text>
          </View>

          <View style={styles.cartContainer}>
            
            <View style={styles.detailBox}>
              <Text style={styles.pizzaName}>{selectedTopping}</Text>
              <Text style={styles.pizzaDetail}>Details</Text>
            </View>

            <View style={styles.optionsBox}>
              <View style={styles.optionHeader}>
                <Text style={styles.optionFont}>Topping</Text>
              </View>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={topping}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedTopping(item.name,item,index)}
                    key={item._id}>
                      <ImageBackground source={require('../constants/images/profile.jpg')} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.4
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <View style={styles.optionHeader}>
                <Text style={styles.optionFont}>Size</Text>
              </View>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={size}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedSize(item.name,item,index)}
                    key={item._id}>
                      <ImageBackground source={require('../constants/images/profile.jpg')} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.4
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <View style={styles.optionHeader}>
                <Text style={styles.optionFont}>Dough</Text>
              </View>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={dough}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedDough(item.name,item,index)}
                    key={item._id}>
                      <ImageBackground source={require('../constants/images/profile.jpg')} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.4
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <View style={styles.optionHeader}>
                <Text style={styles.optionFont}>Crust</Text>
              </View>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={crust}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedCrust(item.name,item,index)}
                    key={item._id}>
                      <ImageBackground source={require('../constants/images/profile.jpg')} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.4
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <View style={styles.optionHeader}>
                <Text style={styles.optionFont}>Sauce</Text>
              </View>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={sauce}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedSauce(item.name,item,index)}
                    key={item._id}>
                      <ImageBackground source={require('../constants/images/profile.jpg')} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.4
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <View style={styles.optionHeader}>
                <Text style={styles.optionFont}>Package</Text>
              </View>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={pack}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedPackage(item.name,item,index)}
                    key={item._id}>
                      <ImageBackground source={require('../constants/images/profile.jpg')} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.4
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

          </View>
        </ScrollView>
        <TouchableOpacity style={styles.checkoutBox} onPress={addToCart}>
          <Text style={styles.checkoutFont}>Add to cart</Text>
        </TouchableOpacity>   
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'flex-start',
    backgroundColor: 'transparent',
    paddingTop:25
  },
  header: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    width:screenWidth,
    height:screenHeight*0.25,
  },
  iconContainer: {
    width:screenWidth*0.9,
    flexDirection:'row',
    alignItems:'flex-start'
  },
  cartContainer: {
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'space-around',
    width:screenWidth,
    height:screenHeight*1.8,
    backgroundColor:'#FFD1D1',
    elevation: 10,
  },
  detailBox: {
    borderColor: 'black',
    borderWidth:1,
    width:screenWidth,
    height:screenHeight*0.3,
    paddingHorizontal:20,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'space-around',
  },
  pizzaName: {
    fontSize:28
  },
  pizzaDetail: {
    fontSize:20
  },
  optionsBox: {
    flexDirection:'column',
    width:screenWidth,
    height:screenHeight*0.25,
  },
  optionHeader: {
    flex:3,
    paddingHorizontal:20,
    flexDirection:'row',
    alignItems:'center',
  },
  optionFont: {
    fontSize:28,
    fontWeight:'500',
  },
  optionButtons: {
    borderColor: 'black',
    borderWidth:1,
    flex:7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  sizecheckbox:{
    //borderColor: 'black',
    //borderWidth:1,
    width:screenWidth*.85,
    height:screenHeight*.15,
    marginLeft:screenWidth*.075,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  sizecheckbutton:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    //borderColor: 'black',
    //borderWidth:1,
    width:screenWidth*.15,
    height:screenHeight*.2,
  },
  optionBox: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'transparent',
    width:screenWidth*0.5,
    height:screenHeight*0.15,
    marginHorizontal:10,
    borderRadius:20,
    elevation:5
  },
  crustBox: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    width:screenWidth*0.5,
    height:screenHeight*0.15,
    marginHorizontal:10,
    borderRadius:20,
    elevation:5
  },
  sauceBox: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    width:screenWidth*0.5,
    height:screenHeight*0.15,
    marginHorizontal:10,
    borderRadius:20,
    elevation:5
  },
  packageBox: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    width:screenWidth*0.5,
    height:screenHeight*0.15,
    marginHorizontal:10,
    borderRadius:20,
    elevation:5
  },
  checkoutBox:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width: screenWidth,
    height: screenHeight * 0.075,
    //borderRadius: 5,
    backgroundColor: '#FF6D7D',
  },
  checkoutFont:{
    fontSize: 24,
    color:'white',
  },
});