import React,{useEffect, useState}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    } from 'react-native';

import SwitchSelector from "react-native-switch-selector";
import Gradient from '../styles/Gradient';
import { globalStyles } from '../styles/globalStyles';
import { useFocusEffect } from '@react-navigation/native';
const serverIP = "http://10.0.2.2:3000"
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function OrderTab({navigation, route}:{navigation:any,route:any}) {
  
  const {userid} = route.params;
  const [userType, onChangeUserType] = React.useState('Delivery');
  const [recommendTemp, setRecommendTemp] = React.useState();
  /*ตัวเลือกของswitch selector*/ 

  const [promotion, onClickPromo] = React.useState([
    {}
  ]);
  const [recommend, onClickRec] = React.useState([
    {key:1,name:'mexicangreenwave', img_path:'mexicangreenwave.png'},
    {key:2,name:'pepperonipizza', img_path:'pepperonipizza.png'},
    {key:3,name:'plaincheesepizza', img_path:'plaincheesepizza.png'},
  ]);
  const [category, onClickCate] = React.useState([
    {type:'Appetizer',key:'0',img_path:require('../assets/images/Category/Appetizer.jpg')},
    {type:'Pizza',key:'1',img_path:require('../assets/images/Category/Pizza.jpg')},
    {type:'Drink',key:'2',img_path:require('../assets/images/Category/Drink.jpg')},
    {type:'Pasta',key:'3',img_path:require('../assets/images/Category/Pasta.jpg')},
    {type:'Dessert',key:'4',img_path:require('../assets/images/Category/Dessert.jpg')},
    {type:'À la carte',key:'5',img_path:require('../assets/images/Category/carte.jpg')},
  ]);

  const onClickAdminIcon = () =>{
    //console.log('admin here')
    //console.log(route)    
    navigation.openDrawer();
  }

  const onClickAdminAddress = () =>{

  }

  const onClickPromotion = () =>{

  }

  const onClickRecommend = (item:any) =>{
    console.log(serverIP+'/getID?id='+item.menuid)
    fetch(serverIP+'/getID?id='+item.menuid)
    .then(response=>response.json())
    .then(data => {
      setRecommendTemp(data)
      console.log(recommendTemp)
      navigation.navigate('More', { item: recommendTemp[0], userid: userid })
    }
    )
  }

  const onSeeAllRecommend = (type:any) =>{
    navigation.navigate('SeeAll',{userid:userid});
  }

  const onClickCategory= (type:any)=>{
    console.log(type)
    navigation.navigate('Menu',{type:type,userid:userid});
  }
  const getRecommendList = () =>{
    fetch("http://10.0.2.2:3000/getrecommend")
    .then(response=>response.json())
    .then(list => onClickRec(list))
  }
  useFocusEffect(
    React.useCallback(() => {
      getRecommendList()
    }, [])
  );
  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.userBox}>
          <TouchableOpacity onPress={onClickAdminIcon}>
            <Image source={require('../assets/images/user_icon.png')} style={styles.userIcon}/>  
          </TouchableOpacity>
          <View style={styles.userAddress}>
            <Text style={globalStyles.fontNormal}>123/2 bingo house</Text>
          </View>
          <TouchableOpacity style ={{justifyContent: 'center',alignItems: 'center', flexDirection:'row'}} onPress={()=>(navigation.navigate('Cart',{userid:userid}))}>
            <Image source={require('../assets/images/basket_icon.png')} style={styles.basketIcon} />  
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollMainContainer}>
          <View style={styles.promocontainer}>
            <TouchableOpacity style={styles.promoBox}>
              <Image style={styles.promoImage} source={{uri:"http://10.0.2.2:3000/getImage/promotion.jpg"}}/>
            </TouchableOpacity>
          </View>
          <View style={styles.recommendcontainer}>
            <View style={styles.textBox}>
              <Text style={globalStyles.fontNormal}>
                Recommend
              </Text>
              <TouchableOpacity onPress={onSeeAllRecommend}>
                <Text style={{fontSize:18, color:'#343434'}}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollHorizontalBox}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{width:screenWidth}}
                data={recommend}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.menuIcon} onPress={() => onClickRecommend(item)}>
                    <Image source = {{uri:"http://10.0.2.2:3000/getImage/"+item.img_path}} style={styles.foodImage} />
                  </TouchableOpacity>
                )}
              /> 
            </View>
          </View>
          <View style={styles.textBox2}>
            <Text style={globalStyles.fontNormal}>
              Categories
            </Text>
          </View> 
          <ScrollView horizontal={true}>
            <FlatList
              style={{width:screenWidth}}
              numColumns={2}
              data={category}
              keyExtractor={(item) => item.type}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.categoryBox} onPress={()=>onClickCategory(item.type)}>
                  <ImageBackground source={item.img_path} style={styles.categoryIcon} imageStyle={{borderRadius:50}}>
                    <View style={styles.categoryIconBox}>
                      <Text style={styles.categoryFont}>{item.type}</Text>  
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            />  
          </ScrollView> 
        </ScrollView>
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:30
  },
  scrollMainContainer: {
    marginTop:25,
    backgroundColor:'transparent'
  },
  /*----------------------------------------------Promotion-------------------------------------------*/
  promocontainer: {
    flexWrap:'wrap',
    flexDirection:'column',
    justifyContent:'space-around',
    backgroundColor: 'transparent',
    //borderWidth:1,
    marginHorizontal:30,
    width:screenWidth,
    height:screenHeight*0.4,
  },
  userBox: {
    flexWrap:'wrap',
    flexDirection:'row',
    //borderWidth:1,
    width:screenWidth*0.85,
    height:screenWidth*0.075,
    backgroundColor:'transparent',
  },
  userIcon: {
    borderRadius:50,
    backgroundColor:'white',
    width:screenWidth*0.125,
    height:screenWidth*0.125,
  },
  basketIcon: {
    
    backgroundColor:'transparent',
   // width:screenWidth*0.1,
    //height:screenWidth*0.1,
    width:30,
    height:30
  },

  userAddress: {
    flexWrap:'wrap',
    flexDirection:'column',
    justifyContent:'space-evenly',
    paddingHorizontal:15,
    backgroundColor: 'transparent',
   // borderWidth:1,
    width:screenWidth*0.63,
    height:screenWidth*0.125,
  },
  promoBox:{
    backgroundColor:'white',
    width:screenWidth*0.85,
    height:screenHeight*0.3,
    borderRadius:50,
    elevation: 10,
  },
  promoImage:{
    backgroundColor:'white',
    width:screenWidth*0.85,
    height:screenHeight*0.3,
    borderRadius:50,
  },
  /*----------------------------------------------Recommend-------------------------------------------*/
  recommendcontainer: {
    paddingTop:10,
    flexWrap:'wrap',
    flexDirection:'column',
    backgroundColor: 'transparent',
    marginBottom:10,
    width:screenWidth,
    height:screenHeight*0.3,
  },
  textBox: {
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-between',
    //borderWidth:1,
    marginHorizontal:25,
    width:screenWidth*0.85,
    height:screenWidth*0.1
  },
  scrollHorizontalBox: {
    flexWrap:'wrap',
    flexDirection:'row',
    backgroundColor:'transparent',
    //borderWidth:1,
    width:screenWidth,
    height:screenHeight*0.2
  },
  scrollHorizontal: {
    height:screenHeight*0.25,
    backgroundColor:'transparent'
  },
  menuIcon: {
    backgroundColor:'transparent',
    marginHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.45,
    height:screenWidth*0.45,
  },
  /*----------------------------------------------Categories-------------------------------------------*/
  textBox2: {
    marginTop:10,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:25,
    width:screenWidth*0.85,
    height:screenWidth*0.1
  },
  categoryBox: {
    margin:10,
    borderRadius:50,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.45,
    height:screenWidth*0.45,
    elevation:10
  },
  categoryIcon: {
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.45,
    height:screenWidth*0.45,
  },
  foodImage: {
    borderRadius:50,
    backgroundColor:'white',
    width:screenWidth*0.45,
    height:screenWidth*0.45,
  },
  categoryIconBox: {
    borderRadius:50,
    width:screenWidth*0.45,
    height:screenWidth*0.45,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#000000c0",
    opacity:0.7
  },
  categoryFont:{
    color:'white',
    fontSize: 24,
  },
});