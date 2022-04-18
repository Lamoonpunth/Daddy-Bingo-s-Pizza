import React,{useState}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    } from 'react-native';

import Gradient from '../../styles/Gradient';
import { globalStyles } from '../../styles/globalStyles';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function HomeAdmin({navigation, route}:{navigation:any,route:any}) {

  const [promotion, onChangePromo] = React.useState([
    {}
  ]);
  const [recommend, onChangeRec] = React.useState([
    {menu:'Pizza1' ,key:'1'},
    {menu:'Pizza2' ,key:'2'},
    {menu:'Pizza3' ,key:'3'},
  ]);
  const [category, onChangCate] = React.useState([
    {type:'Appetizer',key:'1'},
    {type:'Pizza',key:'2'},
    {type:'VitaminA',key:'3'},
    {type:'VitaminB',key:'4'},
    {type:'VitaminC',key:'5'},
    {type:'VitaminD',key:'6'},
    {type:'VitaminE',key:'7'},
    {type:'VitaminF',key:'8'},
    {type:'VitaminG',key:'9'},
    {type:'VitaminH',key:'10'},
  ]);

  const onClickAdminIcon = () =>{
    navigation.openDrawer();
  }

  const onClickAdminAddress = () =>{

  }

  const onClickPromotion = () =>{

  }

  const onClickRecommend = () =>{

  }

  const onClickCategory = () =>{

  }

  return (
    <Gradient>
      <ScrollView style={styles.scrollMainContainer} >
        
        <View style={styles.promocontainer}>
          <View style={styles.adminBox}>
            <TouchableOpacity onPress={onClickAdminIcon}>
              <Image source={require('../../assets/images/user_icon.png')} style={styles.adminIcon}/>  
            </TouchableOpacity>
            <View style={styles.adminAddress}>
              <Text style={globalStyles.fontNormal}>123/2 bingo house</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.promoBox}>
          </TouchableOpacity>
        </View>

        <View style={styles.recommendcontainer}>
          <View style={styles.textBox}>
            <Text style={globalStyles.fontNormal}>
              Recommend
            </Text>
            <TouchableOpacity>
              <Text style={{fontSize:18, color:'#343434'}}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.scrollHorizontalBox}>
            <ScrollView style={styles.scrollHorizontal} horizontal={true}>
              {recommend.map((item) => {
                return(
                  <TouchableOpacity style={styles.menuIcon} key={item.key}>
                    <Text>{item.menu}</Text>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
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
              <TouchableOpacity style={styles.categoryIcon} key={item.key}>
                <Text>{item.type}</Text>
              </TouchableOpacity>
            )}
          />  
        </ScrollView>
        
      </ScrollView>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  scrollMainContainer: {
    flex:1,
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
  adminBox: {
    flexWrap:'wrap',
    flexDirection:'row',
    //borderWidth:1,
    width:screenWidth*0.85,
    height:screenWidth*0.125
  },
  adminIcon: {
    borderRadius:50,
    backgroundColor:'white',
    width:screenWidth*0.125,
    height:screenWidth*0.125,
  },
  adminAddress: {
    flexWrap:'wrap',
    flexDirection:'column',
    justifyContent:'space-evenly',
    paddingHorizontal:15,
    backgroundColor: 'transparent',
    //borderWidth:1,
    width:screenWidth*0.715,
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
    //borderWidth:1,
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
    marginHorizontal:9,
    borderRadius:50,
    backgroundColor:'white',
    width:screenHeight*0.22,
    height:screenHeight*0.22,
    elevation:10
  },
  /*----------------------------------------------Categories-------------------------------------------*/
  textBox2: {
    paddingTop:10,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-between',
    //borderWidth:1,
    marginHorizontal:25,
    width:screenWidth*0.85,
    height:screenWidth*0.1
  },
  categoryIcon: {
    margin:9,
    borderRadius:50,
    backgroundColor:'white',
    width:screenHeight*0.22,
    height:screenHeight*0.22,
    elevation:10
  },
});
