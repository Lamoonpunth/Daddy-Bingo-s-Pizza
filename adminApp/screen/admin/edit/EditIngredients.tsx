import React,{useState}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    Dimensions,
    TouchableOpacity,
    } from 'react-native';

import { globalStyles } from '../../../styles/globalStyles';
import Gradient from '../../../styles/Gradient';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function EditIngredients({navigation}:{navigation:any}) {
  const [ingredients, onChangeingredients] = React.useState([
    {name:'mushroom' , left: '10' , key: 1},
    {name:'tomato' , left: '10' , key: 2},
    {name:'black pepper' , left: '10' , key: 3},
    {name:'onion' , left: '10' , key: 4},
    {name:'paprika' , left: '10' , key: 5},
    {name:'olive' , left: '10' , key: 6},
    {name:'pesto' , left: '10' , key: 7},
    {name:'basil' , left: '10' , key: 8},
    {name:'chili pepper' , left: '10' , key: 9},
    {name:'cheese' , left: '10' , key: 10},
    {name:'mozzarella cheese' , left: '10' , key: 11},
    {name:'parmesan cheese' , left: '10' , key: 12},
    {name:'tomato paste' , left: '10' , key: 13},
    {name:'olive oil' , left: '10' , key: 14},
    {name:'shrimp' , left: '10' , key: 15},
    {name:'ham' , left: '10' , key: 16},
    {name:'salami' , left: '10' , key: 17},
    {name:'corn' , left: '10' , key: 18},
    {name:'anchovy' , left: '10' , key: 19},
  ]);

  return (
    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.backIcon} onPress={() => {navigation.goBack()}}>
            <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
          </TouchableOpacity>
          <Text style={globalStyles.fontHeader}>Ingredients</Text>
        </View>

        <View style={styles.underline}></View>  

        <View style={styles.ingredientContainer}>
          <View style={styles.flatContainer}>
            <FlatList
              data={ingredients}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.ingredients} key={item.key}>
                  <View style={styles.boxImage}>

                  </View>
                  <View style={styles.boxDetails}>
                    <TextInput
                    style={styles.ingredientsFont}
                    value={item.name}
                    placeholder={item.name}
                    />
                    <TextInput
                    style={styles.ingredientsFont}
                    value={item.left}
                    placeholder={item.left}
                    />
                    <TouchableOpacity style={styles.moreBox}>
                      <Text style={styles.moreFont}>Remove</Text>  
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
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
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  iconContainer: {
    width:screenWidth*0.9,
    flexDirection:'row',
    alignItems:'flex-start'
  },
  ingredientContainer: {
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.9,
    height:screenHeight*.7,
    backgroundColor:'#fff',
    borderRadius:50,
    elevation: 10,
  },
  flatContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.8,
    height:screenHeight*.65,
    backgroundColor:'#fff',
  },
  ingredients: {
    marginVertical:5,
    borderRadius:50,
    borderWidth:1,
    backgroundColor:'white',
    width:screenWidth*0.8,
    height:screenHeight*0.22,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    elevation:8,
    borderColor: 'rgba(0,0,0,.1)'
  },
  boxImage: {
    borderRadius:20,
    backgroundColor:'white',
    width:screenHeight*0.125,
    height:screenHeight*0.125,
    borderWidth:1,
    elevation:8,
    borderColor: 'rgba(0,0,0,.1)'
  },
  boxDetails: {
    backgroundColor:'transparent',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:screenHeight*0.2,
    height:screenHeight*0.2,
  },
  ingredientsFont:{
    fontSize: 18,
    width: screenHeight*0.2,
    height: screenHeight * 0.05,
    margin: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 12,
  },
  moreBox:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width: screenHeight*0.1,
    height: screenHeight * 0.05,
    borderRadius: 10,
    backgroundColor: '#FF6D7D',
    elevation: 12,
  },
  moreFont:{
    fontSize: 18,
    color:'white',
  },
  backIcon: {
    height:screenHeight*.03,
    marginLeft:-screenWidth*.225,
    marginRight:screenWidth*.1,
  },
  underline:{
    width:screenWidth*.7,
    height:screenHeight*0.0035,
    backgroundColor:'white',
    marginTop:-screenHeight * .025,
    marginBottom:-screenHeight *.02,
  },
});
