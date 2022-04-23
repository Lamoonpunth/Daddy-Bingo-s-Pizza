import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  FlatList, 
  Dimensions,  
  TouchableOpacity } from 'react-native'

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import BouncyCheckbox from "react-native-bouncy-checkbox";
import Gradient from '../styles/Gradient';
import { globalStyles } from '../styles/globalStyles';

export default function PresetPizza({navigation,route}: {navigation:any,route:any}) {

  const [dough, onChangeDough] = React.useState([
    { type: 'Thick', icon: '1', price:50 , key: '1' },
    { type: 'Thin', icon: '2', price:40 , key: '2' },
  ]);

  const [crust, onChangeCrust] = React.useState([
    { type: 'None', icon: '3', price:0 , key: '1' },
    { type: 'Sausage', icon: '4', price:30 , key: '2' },
    { type: 'Cheese', icon: '5', price:60 , key: '3' },
  ]);

  const [sauce, onChangeSauce] = React.useState([
    { type: 'Tomato-Based', icon: '6', price:50 , key: '1' },
    { type: 'Pesto', icon: '7', price:60 , key: '2' },
    { type: 'BBQ', icon: '8', price:50 , key: '3' },
  ]);

  const [pack, onChangePackage] = React.useState([
    { type: 'Thick', icon: '1', price:50 , key: '1' },
    { type: 'Thin', icon: '2', price:40 , key: '2' },
  ]);

  const [xs, onXS] = React.useState(false);
  const [s, onS] = React.useState(false);
  const [m, onM] = React.useState(false);
  const [l, onL] = React.useState(false);
  const [xl, onXL] = React.useState(false);

  const [selectedDough, setDough] = React.useState('Thick');
  const [selectedCrust, setCrust] = React.useState('None');
  const [selectedSauce, setSauce] = React.useState('Tomato-Based');
  const [selectedPackage, setPackage] = React.useState('Thick');

  const onSelectedDough = (type:any) =>{
    setDough(type);
  }

  const onSelectedCrust = (type:any) =>{
    setCrust(type) ;
  }

  const onSelectedSauce = (type:any) =>{
    setSauce(type);
  }

  const onSelectedPackage = (type:any) =>{
    setPackage(type);
  }

  const onBackButton = () =>{
    navigation.goBack()
  }

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
              <Text style={styles.pizzaName}>
                Pizza Name
              </Text>
              <Text style={styles.pizzaDetail}>
                Details
              </Text>
            </View>

            <View style={styles.optionsBox}>
              <View style={styles.optionHeader}>
                <Text style={styles.optionFont}>Size</Text>
              </View>
              <View style={styles.optionButtons}>
                <BouncyCheckbox
                  size={40}
                  fillColor="red"
                  unfillColor="#FFFFFF"
                  disableBuiltInState
                  isChecked={xs}
                  onPress={onXS}
                />
                <BouncyCheckbox
                  size={40}
                  fillColor="red"
                  unfillColor="#FFFFFF"
                  disableBuiltInState
                  isChecked={xs}
                  onPress={onXS}
                />
                <BouncyCheckbox
                  size={40}
                  fillColor="red"
                  unfillColor="#FFFFFF"
                  disableBuiltInState
                  isChecked={xs}
                  onPress={onXS}
                />
                <BouncyCheckbox
                  size={40}
                  fillColor="red"
                  unfillColor="#FFFFFF"
                  disableBuiltInState
                  isChecked={xs}
                  onPress={onXS}
                />
                <BouncyCheckbox
                  size={40}
                  fillColor="red"
                  unfillColor="#FFFFFF"
                  disableBuiltInState
                  isChecked={xs}
                  onPress={onXS}
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
                  renderItem={({item}) => (
                    <TouchableOpacity style={styles.optionBox} onPress={onSelectedDough}>
                      <Text>{item.type}</Text>
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
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={crust}
                  renderItem={({item}) => (
                    <TouchableOpacity style={styles.optionBox} onPress={onSelectedCrust}>
                      <Text>{item.type}</Text>
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
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={sauce}
                  renderItem={({item}) => (
                    <TouchableOpacity style={styles.optionBox} onPress={onSelectedSauce}>
                      <Text>{item.type}</Text>
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
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={pack}
                  renderItem={({item}) => (
                    <TouchableOpacity style={styles.optionBox} onPress={onSelectedPackage}>
                      <Text>{item.type}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

          </View>
        </ScrollView>
        <TouchableOpacity style={styles.checkoutBox}>
          <Text style={styles.checkoutFont}>Check out</Text>
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
    height:screenHeight*1.6,
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
    flex:7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  optionBox: {
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
