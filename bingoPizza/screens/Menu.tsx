import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const { height, width } = Dimensions.get('screen');
import Gradient from "../styles/Gradient";
import { globalStyles } from "../styles/globalStyles";
import { FlatList } from "react-native-gesture-handler";
import { useFocusEffect } from '@react-navigation/native';

export default function Menu({ navigation, route }: { navigation: any, route: any }) {
  const [topping, onChangeTopping] = React.useState([
    { name: '', icon: '', price:0 , _id: '' ,selected:false,key:"0"}
  ]);

  const [topping2, onChangeTopping2] = React.useState([
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
  const [listOfMenu, setListOfMenu] = React.useState([]);
  const onMoreButton = (menu: any) => {
    console.log(menu)
    navigation.navigate('More', { item: menu, type: type, userid: userid });
  }
  const { userid } = route.params;
  const { type } = route.params
  const Item = ({ title }: { title: any }) => (
    <View style={styles.menuInfo}>
      <Text style={styles.menuFont} >{title}</Text>
    </View>
  )
  // const renderItem = ({item}:{item:any}) => (    
  //   <Item title={item}/>
  // );

  const renderItem = ({ item }: { item: any }) => (
    <Item title={item.title} />
  );

  const getMenuList = async () => {
    fetch('http://10.0.2.2:3000/get' + type, {
      method: "GET",
    }
    )
      .then(response => response.json())
      .then(json => {
        setListOfMenu(json);
      }
      )
  }
  const onBackButton = () => {
    setListOfMenu([])
    navigation.goBack()
  }
  const renderMenuBox = () => {
    const get = 'http://10.0.2.2:3000/getImage/'
    return listOfMenu.map((menu: any) => {
      return <View style={styles.menu} key={menu._id}>
        <View>
          <Image source={{ uri: get + menu.img_path }}
            style={styles.foodImage}
          />
        </View>
        <View style={styles.boxDetails}>
          <FlatList
            horizontal={true}
            scrollEnabled={false}
            keyExtractor={() => menu._id}
            data={[{ "id": menu._id, "title": menu.name }]}
            renderItem={renderItem}
          />
          <TouchableOpacity style={styles.moreBox} onPress={() => onMoreButton(menu)}>
            <Text style={{ fontSize: 18, color: '#FF6D7D' }}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    });
  }
  const getTopping = () =>{
    fetch("http://10.0.2.2:3000/getTopping")
    .then(response=>response.json())
    .then(json=>{    
      onChangeTopping(json)
      const None = [{name:"None", price:0,img_path:"",type:"Topping",_id:999,key:999}]
      const New = None.concat(json)
      onChangeTopping2(New)
    })
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
  const prepareForPreset = () =>{
    getTopping()
    getSize()
    getDough()
    getCrust()
    getSauce()
    getPackage()
  }
  useFocusEffect(
    React.useCallback(() => {
      prepareForPreset()
      getMenuList()
    }, [type,userid])
  );

  const onMake = () =>{
    navigation.navigate('PresetPizza',{userid:userid,topping:topping,topping2:topping2,dough:dough,crust:crust,sauce:sauce,pack:pack,size:size})
  }

  return (

    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => { onBackButton() }}>
            <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon} />
          </TouchableOpacity>
          <Text style={globalStyles.fontHeader}>{type}</Text>
          <View style={styles.iconContainer}></View>
        </View>
        <View style={styles.underline}></View>


        <View style={styles.cartContainer}>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical:15}} >
            {renderMenuBox()}
          </ScrollView>
          {type=='Pizza'?
            <TouchableOpacity style={styles.makeBox} onPress={onMake}>
              <Text style={styles.makeFont}>Make your own</Text>
            </TouchableOpacity>
          :null}
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
    justifyContent: 'space-around'
  },
  iconContainer: {
    width: screenWidth * 0.2,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cartContainer: {
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * .9,
    height: screenHeight * .7,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 10,
  },
  flatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * .8,
    height: screenHeight * .65,
    backgroundColor: '#fff',
  },
  menu: {
    marginVertical: 5,
    borderRadius: 50,
    borderWidth:1,
    borderColor: 'rgba(0,0,0,.1)',
    backgroundColor: '#FF6D6D',
    width: screenWidth * 0.8,
    height: screenHeight * 0.22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 6
  },
  boxImage: {
    borderRadius: 20,
    backgroundColor: 'white',
    width: screenHeight * 0.125,
    height: screenHeight * 0.125,
    //borderWidth:1
  },
  boxDetails: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenHeight * 0.2,
    height: screenHeight * 0.2,
  },
  menuInfo: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.25,
    marginTop: 8,
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  menuFont: {
    fontSize: 20,
    color:'white'
  },
  moreBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenHeight * 0.1,
    height: screenHeight * 0.05,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 8,
  },
  moreFont: {
    fontSize: 18,
    color: '#FF6D7D',
  },
  ////////////////////

  item: {
    backgroundColor: '#f9c2ff',
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.002,
    marginHorizontal: width * 0.1,
  },
  title: {
    fontSize: 16,
  },
  scrollHorizontalBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    //borderWidth:1,
    width: screenWidth,
    height: screenHeight * 0.2
  },
  foodImage: {
    borderRadius: 50,
    backgroundColor: 'white',
    width: screenWidth * 0.30,
    height: screenWidth * 0.30,
  },
  morebutton: {
    //borderWidth:1,
    borderColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 12 / 100,
    height: height * 6 / 100,
    backgroundColor: '#FF6D6D',
    borderRadius: 50,
    elevation:4,
  },
  makeBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: screenWidth*0.4,
    height: screenHeight * 0.05,
    borderRadius: 10,
    backgroundColor:'#FF6D7D',
    marginBottom:10,
    elevation: 12,
  },
  makeFont: {
    fontSize:18,
    color:'white',
  },
  underline:{
    width:screenWidth*.55,
    height:screenHeight*0.0035,
    backgroundColor:'white',
    marginTop:-screenHeight * .045,
    marginBottom:-screenHeight *.03,
  },
});