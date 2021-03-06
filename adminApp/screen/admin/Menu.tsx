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
import Gradient from "../../styles/Gradient";
import { globalStyles } from "../../styles/globalStyles";
import { FlatList } from "react-native-gesture-handler";
import { useFocusEffect } from '@react-navigation/native';

export default function Menu({ navigation, route }: { navigation: any, route: any }) {
  const [listOfMenu, setListOfMenu] = React.useState([]);
  const onMoreButton = (menu: any) => {
    console.log(menu)
    navigation.navigate('EditMore', { item: menu, type: type, userid: userid });
  }
  const { userid } = route.params;
  const { type } = route.params;
  const Item = ({ title }: { title: any }) => (
    <View >
      <Text style={styles.menuFont} >{title}</Text>
    </View>
  )
  
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
  const onAddMenu = () => {
    if (type !== 'Pizza'){
    navigation.navigate('AddMenu',{type: type, userid: userid })
    }
    else{
      navigation.navigate('AddPizza')
    }
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
  useFocusEffect(
    React.useCallback(() => {
      getMenuList()
    }, [type,userid])
  );

  // useEffect(()=>{
  //   const unsubscribe = navigation.addListener('focus', () => {
  //   getMenuList()
  //   });
  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  //   },[navigation])


  return (

    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.iconContainer} >
              <TouchableOpacity style={styles.backIcon} onPress={onBackButton}>
                <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
              </TouchableOpacity>

              <Text style={styles.headerfont}>{type}</Text>

              <TouchableOpacity style={styles.addIcon} onPress={onAddMenu}>
                <Image source={require('../../assets/images/add.png')} style={globalStyles.addIcon}/>
              </TouchableOpacity>
              
            </View>
          <View style={styles.underline}></View>
        </View>

        <View style={styles.cartContainer}>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical:15}} >
            {renderMenuBox()}
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
  headerfont:{
    fontSize: 42,
    color:'white',
    marginRight:screenWidth*.015,
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
  buttonBox: {
    flexWrap:'wrap',
    flexDirection:'row',
    //borderWidth:1,
    width:screenWidth*0.85,
    height:screenWidth*0.125,
    backgroundColor:'transparent',
  },
  iconContainer: {
    width: screenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
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
    //borderWidth:1,
    borderColor: 'gray',
    backgroundColor: '#FF6D6D',
    width: screenWidth * 0.8,
    height: screenHeight * 0.22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 5
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
  menuFont: {
    fontSize: 18,
    width: screenWidth * 0.3,
    height: screenWidth * 0.25,
    margin: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    //elevation: 12,
  },
  moreBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenHeight * 0.1,
    height: screenHeight * 0.05,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 12,
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
  },
  underline:{
    width:screenWidth*.7,
    height:screenHeight*0.0035,
    backgroundColor:'white',
    marginTop:screenHeight * .015,
    marginBottom:-screenHeight *.02,
  },
});