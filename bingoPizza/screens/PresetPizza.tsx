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
const get = 'http://10.0.2.2:3000/getImage/'
export default function PresetPizza({navigation,route}: {navigation:any,route:any}) {

  const {userid} = route.params;
  const [name,setName] = React.useState("")
  const [topping, onChangeTopping] = React.useState(route.params.topping);

  const [topping2, onChangeTopping2] = React.useState(route.params.topping2);

  const [dough, onChangeDough] = React.useState(route.params.dough);
  
  const [crust, onChangeCrust] = React.useState(route.params.crust);

  const [sauce, onChangeSauce] = React.useState(route.params.sauce);

  const [pack, onChangePackage] = React.useState(route.params.pack);

  const [size, onChangeSize] = React.useState(route.params.size);

  const [selectedTopping, setTopping] = React.useState('Bacon');
  const [selectedTopping2, setTopping2] = React.useState('Bacon');
  const [selectedSize, setSize] = React.useState('one piece');
  const [selectedDough, setDough] = React.useState('Thick');
  const [selectedCrust, setCrust] = React.useState('None');
  const [selectedSauce, setSauce] = React.useState('Tomato-Based');
  const [selectedPackage, setPackage] = React.useState('Normal');

  const [selectedToppingPrice, setToppingPrice] = React.useState(0)
  const [selectedToppingPrice2, setToppingPrice2] = React.useState(0)
  const [selectedSizePrice, setSizePrice] = React.useState(99);
  const [selectedDoughPrice, setDoughPrice] = React.useState(50);
  const [selectedCrustPrice, setCrustPrice] = React.useState(0);
  const [selectedSaucePrice, setSaucePrice] = React.useState(50);
  const [selectedPackagePrice, setPackagePrice] = React.useState(0);
  const [selectedToppingImage, setToppingImage] = React.useState("PizzaBacon.jpg")
  const [selectedToppingImage2, setToppingImage2] = React.useState("PizzaBacon.jpg")
  
  const onSelectedTopping = (type:any,item:any,index:any) =>{
    setTopping(type);
    setToppingPrice(item.price)
    setToppingImage(item.img_path)
    const newArrData = topping.map((e, index) =>{
    //const newArrData = topping.map(newItem =>{
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

  const onSelectedTopping2 = (type:any,item:any,index:any) =>{
    setTopping2(type);
    setToppingPrice2(item.price)
    setToppingImage2(item.img_path)
    const newArrData = topping2.map((e, index) =>{
    //const newArrData = topping.map(newItem =>{
      if (item._id == e._id){
          return {
          ...e,selected:true
          }
      }
      return {
        ...e,selected:false
      }
    })
    onChangeTopping2(newArrData);
  }

  const onSelectedSize = (type:any,item:any,index:any) =>{
    setSize(type);
    setSizePrice(item.price)
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
    setDoughPrice(item.price)
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
    setCrustPrice(item.price)
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
    setSaucePrice(item.price)
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
    setPackagePrice(item.price)
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
    alert("add to cart")
    fetch("http://10.0.2.2:3000/adduserpizza",{
      method:"POST",
      headers:{'Content-Type': 'application/json'},
    
      body:JSON.stringify({    
        name:name,
        type:"userPizza",
        price:selectedToppingPrice+selectedToppingPrice2+selectedSizePrice+selectedDoughPrice+selectedCrustPrice+selectedPackagePrice+selectedSaucePrice,
        ingr_need:null,
        description:null,
        img_path:selectedToppingImage,
        size: selectedSize,
        dough: selectedDough,
        crust: selectedCrust,
        sauce: selectedSauce,
        package: selectedPackage})
      }

    )
    .then(response=>response.json())
    .then(userpizza=>{
      console.log(userpizza)
      fetch("http://10.0.2.2:3000/addToCart",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({_id:userid,itemid:userpizza._id,quantity:1,additional:"-"})
    })
    .then(response => response.json())
    .then(data => {console.log(data)})
    })
  }
  const getTopping = () =>{
    fetch("http://10.0.2.2:3000/getTopping")
    .then(response=>response.json())
    .then(json=>{ToppingDefault(json)})
  }
  const getSize = () =>{
    fetch("http://10.0.2.2:3000/getSize")
    .then(response=>response.json())
    .then(json=>{
    onChangeSize(json)
  })
  }
  const getDough = () =>{
    fetch("http://10.0.2.2:3000/getDough")
    .then(response=>response.json())
    .then(json=>{
    onChangeDough(json)
  })
  }
  const getCrust = () =>{
    fetch("http://10.0.2.2:3000/getCrust")
    .then(response=>response.json())
    .then(json=>{
    onChangeCrust(json)
  })
  }
  const getSauce = () =>{
    fetch("http://10.0.2.2:3000/getSauce")
    .then(response=>response.json())
    .then(json=>{
    onChangeSauce(json)
  })
  }
  const getPackage = () =>{
    fetch("http://10.0.2.2:3000/getPackage")
    .then(response=>response.json())
    .then(json=>{
    onChangePackage(json)
  })
  }
  const renderall = () =>{
    getTopping()
    getSize()
    getDough()
    getCrust()
    getSauce()
    getPackage()
  }

  const renderName = () =>{
    if (selectedTopping2 == 'None')
    setName(selectedTopping)
    else
    setName(selectedTopping + " + " + selectedTopping2)
  }
  const ToppingDefault = () =>{
    onSelectedTopping(topping[0].name,topping[0],0)
  }
  const Topping2Default = () =>{
    onSelectedTopping2(topping2[0].name,topping2[0],0)
  }
  const SizeDefault = () =>{
    onSelectedSize(size[0].name,size[0],0)
  }
  const DoughDefault = () =>{
    onSelectedDough(dough[0].name,dough[0],0)
  }
  const CrustDefault = () =>{
    onSelectedCrust(crust[0].name,crust[0],0)
  }
  const SauceDefault = () =>{
    onSelectedSauce(sauce[0].name,sauce[0],0)
  }
  const PackageDefault = () =>{
    onSelectedPackage(pack[0].name,pack[0],0)
  }
  const defaultAll = () =>{
    ToppingDefault()
    Topping2Default()
    SizeDefault()
    DoughDefault()
    CrustDefault()
    SauceDefault()
    PackageDefault()
  }
  useFocusEffect(
    React.useCallback(() => {
        defaultAll()
    }, [userid])
  );
  
  useFocusEffect(
    React.useCallback(() => {
        renderName()
    }, [selectedTopping,selectedTopping2])
  );
  return (
    <Gradient>
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground source={require('../assets/images/Category/Pizza.jpg')} style={styles.header} imageStyle={{opacity:0.4}}>
              <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                  <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
              </TouchableOpacity>
              <Text style={globalStyles.fontHeader}>Preset Pizza</Text>
          </ImageBackground>

          <View style={styles.cartContainer}>
            
            <View style={styles.detailBox}>
              <Text style={styles.pizzaName}>{name}</Text>
              <Text style={styles.pizzaDetail}>Details</Text>
            </View>

            <View style={styles.optionsBox}>
              <ImageBackground source={require('../assets/images/topping.jpg')} style={styles.optionHeader} imageStyle={{opacity:0.4}}>
                <Text style={styles.optionFont}>Topping</Text>
              </ImageBackground>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={topping}
                  keyExtractor={(item) => item._id}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedTopping(item.name,item,index)}>
                      <ImageBackground source={{uri:get+item.img_path}} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.6
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}{"\n"}
                            Price : {item.price}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <ImageBackground source={require('../assets/images/topping.jpg')} style={styles.optionHeader} imageStyle={{opacity:0.4}}>
                <Text style={styles.optionFont}>Topping(for 2 toppings pizza)</Text>
              </ImageBackground>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={topping2}
                  keyExtractor={(item) => item._id}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedTopping2(item.name,item,index)}>
                      <ImageBackground source={{uri:get+item.img_path}} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.6
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}{"\n"}
                            Price : {item.price}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <ImageBackground source={require('../assets/images/size.jpg')} style={styles.optionHeader} imageStyle={{opacity:0.4}}>
                <Text style={styles.optionFont}>Size</Text>
              </ImageBackground>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={size}
                  keyExtractor={(item) => item._id}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedSize(item.name,item,index)}>
                      <ImageBackground source={{uri:get+item.img_path}} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.6
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}{"\n"}
                            Price : {item.price}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <ImageBackground source={require('../assets/images/dough.jpg')} style={styles.optionHeader} imageStyle={{opacity:0.4}}>
                <Text style={styles.optionFont}>Dough</Text>
              </ImageBackground>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={dough}
                  keyExtractor={(item) => item._id}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedDough(item.name,item,index)}>
                      <ImageBackground source={{uri:get+item.img_path}} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.6
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}{"\n"}
                            Price : {item.price}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <ImageBackground source={require('../assets/images/crust.jpg')} style={styles.optionHeader} imageStyle={{opacity:0.4}}>
                <Text style={styles.optionFont}>Crust</Text>
              </ImageBackground>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={crust}
                  keyExtractor={(item) => item._id}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedCrust(item.name,item,index)}>
                      <ImageBackground source={{uri:get+item.img_path}} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.6
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}{"\n"}
                            Price : {item.price}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <ImageBackground source={require('../assets/images/sauce.jpg')} style={styles.optionHeader} imageStyle={{opacity:0.4}}>
                <Text style={styles.optionFont}>Sauce</Text>
              </ImageBackground>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={sauce}
                  keyExtractor={(item) => item._id}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedSauce(item.name,item,index)}>
                      <ImageBackground source={{uri:get+item.img_path}} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.6
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}{"\n"}
                            Price : {item.price}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={styles.optionsBox}>
              <ImageBackground source={require('../assets/images/package.jpg')} style={styles.optionHeader} imageStyle={{opacity:0.4}}>
                <Text style={styles.optionFont}>Package</Text>
              </ImageBackground>
              <View style={styles.optionButtons}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={pack}
                  keyExtractor={(item) => item._id}
                  renderItem={({item,index}) => (
                    <TouchableOpacity  
                    style={styles.optionBox} 
                    onPress={() => onSelectedPackage(item.name,item,index)}>
                      <ImageBackground source={{uri:get+item.img_path}} style={styles.optionBox} imageStyle={{borderRadius:10}}>
                        <View style={{
                          borderRadius:10,
                          width:screenWidth*0.5,
                          height:screenHeight*0.15,
                          alignItems:'center',
                          justifyContent:'center',
                          backgroundColor: "#000000c0",
                          opacity: item.selected? 1: 0.6
                        }}>
                          <Text style={{
                            fontSize:20,
                            color:'white',
                            backgroundColor:'transparent'
                            }}>
                            {item.name}{"\n"}
                            Price : {item.price}
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
          <Text style={styles.checkoutFont}>{selectedToppingPrice+selectedToppingPrice2+selectedSizePrice+selectedDoughPrice+selectedCrustPrice+selectedPackagePrice+selectedSaucePrice}</Text>
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
    height:screenHeight*2,
    backgroundColor:'#FFD1D1',
    elevation: 10,
  },
  detailBox: {
    width:screenWidth,
    height:screenHeight*0.3,
    paddingHorizontal:20,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'space-around',
    backgroundColor:'transparent'
  },
  pizzaName: {
    fontSize:28,
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
    fontSize:26,
    fontWeight:'500',
  },
  optionButtons: {
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
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
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
