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

import Gradient from '../../styles/Gradient';
import { globalStyles } from '../../styles/globalStyles';
const serverIP = "http://10.0.2.2:3000"
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function HomeAdmin({navigation, route}:{navigation:any,route:any}) {
  
  const {userid} = route.params;
  const [userType, onChangeUserType] = React.useState('Delivery');
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
    {type:'Appetizer',key:'0',img_path:require('../../assets/images/Category/Appetizer.jpg')},
    {type:'Pizza',key:'1',img_path:require('../../assets/images/Category/Pizza.jpg')},
    {type:'Drink',key:'2',img_path:require('../../assets/images/Category/Drink.jpg')},
    {type:'Pasta',key:'3',img_path:require('../../assets/images/Category/Pasta.jpg')},
    {type:'Dessert',key:'4',img_path:require('../../assets/images/Category/Dessert.jpg')},
    {type:'À la carte',key:'5',img_path:require('../../assets/images/Category/carte.jpg')},
  ]);

  const onClickAdminIcon = () =>{
    navigation.openDrawer();
  }

  const onClickPromotion = () =>{
    
  }

  const onClickRecommend = () =>{
    
  }
  
  const onEditRecommend = () =>{
    navigation.navigate('Recommend');
  }

  const onClickCategory= (type:any)=>{
    navigation.navigate('Menu',{type:type,userid:userid});
  }

  const onEditPromo = () =>{

  }

  // useEffect(()=>{
  // getMenuList
  // },[])

  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.userBox}>
          <TouchableOpacity style={styles.userIcon} onPress={onClickAdminIcon}>
            <Image source={require('../../assets/images/user_icon.png')} style={styles.userIcon}/>  
          </TouchableOpacity>
          <View style={styles.userAddress}>
            <Text style={globalStyles.fontNormal}>123/2 bingo house</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollMainContainer}>
          <View style={styles.promocontainer}>
            <TouchableOpacity style={styles.promoBox} onPress={onEditPromo}>
              <Image source = {{uri:"http://10.0.2.2:3000/getImage/Promotion_1.jpg"}}/>
            </TouchableOpacity>
          </View>
          <View style={styles.recommendcontainer}>
            <View style={styles.textBox}>
              <Text style={globalStyles.fontNormal}>
                Recommend
              </Text>
              <TouchableOpacity onPress={onEditRecommend}>
                <Text style={{fontSize:18, color:'#343434'}}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollHorizontalBox}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{width:screenWidth}}
                data={recommend}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.menuIcon} onPress={onClickRecommend}>
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
              renderItem={({item}) => (
                <TouchableOpacity style={styles.categoryBox} key={item.key} onPress={()=>onClickCategory(item.type)}>
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
    height:screenWidth*0.125,
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