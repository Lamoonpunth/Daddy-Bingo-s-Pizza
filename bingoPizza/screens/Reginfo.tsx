import React,{useEffect}  from 'react';
import { StyleSheet, TextInput, Dimensions, Image,TouchableOpacity } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { PanResponder } from "react-native";
import { Text, View } from '../components/Themed';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const {height, width} = Dimensions.get('screen');


export default function TabOneScreen({navigation}: {navigation:any}) {
  
  const [firstname, onChangeName] = React.useState('');
  const [lastname, onChangeLast] = React.useState('');

  const [getUsername, onUsername] = React.useState('');
  const [getPassword, onPassword] = React.useState('');

  const [phone, onChangeNumber] = React.useState('');
  const [address, onChangeAddr] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedMonth, setSelectedMonth] = React.useState('');
  const [selectedProvince, setSelectedProvince] = React.useState('');
  const [selectedDistrict, setSelectedDistrict] = React.useState('');
  const [selectedSubDistrict, setSelectedSubDistrict] = React.useState('');

  const [listOfProvince,setListOfProvince] =React.useState([]);
  const [listOfDistrict,setListOfDistrict] =React.useState([]);
  const [listOfSubDistrict,setListOfSubDistrict] =React.useState([]);

  const onSaveButton = () => {
    alert('Hello How are you? I am under the water pls help me.');
  }

  const getProvinceList = async() =>{
  fetch('https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces',{ method: "GET",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  }
  )
  .then(response => response.json())
  .then(json => {
      setListOfProvince(json.data);
    }
  )
  }

  const getDistrictList = async(itemValue : String) =>{

    fetch('https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/'+itemValue+'/district',{ method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    }
    )
    .then(response => response.json())
    .then(json => {
        setListOfDistrict(json.data);
      }
    )
    }

    const getSubDistrictList = async(itemValue : String) =>{
      console.log(selectedProvince)
      fetch('https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/'+selectedProvince+'/district/'+itemValue,{ method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      }
      )
      .then(response => response.json())
      .then(json => {
          setListOfSubDistrict(json.data);
        }
      )
      }
  
  useEffect(()=>{
  getProvinceList()
  },[])

  const renderProvinceList = () => {
    return listOfProvince.map((province) => {
      return <Picker.Item label={province.province}
      value={province.province}
      key = {province.province}/>;
    });
  };

  const renderDistrictList = () => {
    return listOfDistrict.map((district) => {
      return <Picker.Item label={district}
      value={district}
      key = {district}/>;
    });
  }

  const renderSubDistrictList = () => {
    return listOfSubDistrict.map((subdistrict) => {
      return <Picker.Item label={subdistrict}
      value={subdistrict}
      key = {subdistrict}/>;
    });
  }
/**********************************************Display*************************************************/
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      <View style={styles.space1}/>

      <View style={styles.roundedrec}>

          <View style={styles.inputcontainer}>
            <View style={styles.box1}>
              <Image 
                style={styles.nameicon}
                source={require('../assets/images/user_icon.png')}
                />
              <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={firstname}
                placeholder="First Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeLast}
                value={lastname}
                placeholder="Last name"
              />
            </View>

            <View style={styles.box1}>
              <Image 
                style={styles.phonenumicon}
                source={require('../assets/images/phone_icon.png')}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={phone}
                placeholder="Phone number"
              />
              <View style={styles.pickerbox}>
                <Image 
                  style={styles.birthicon}
                  source={require('../assets/images/birthdate_icon.png')}
                />

                <View style={styles.pickerboxinside}>
                  <Picker style={styles.pickermonth}
                    selectedValue={selectedMonth}
                    dropdownIconColor='#FF6D6D'
                    mode='dropdown'
                    onValueChange={(itemValue) =>
                      setSelectedMonth(itemValue)
                    }>
                    <Picker.Item label="MM" value="0" color='#A0A0A0' enabled={false} />
                    <Picker.Item label="January" value="1" />
                    <Picker.Item label="Febuary" value="2" />
                    <Picker.Item label="March" value="3" />
                    <Picker.Item label="April" value="4" />
                    <Picker.Item label="May" value="5" />
                    <Picker.Item label="June" value="6" />
                    <Picker.Item label="July" value="7" />
                    <Picker.Item label="August" value="8" />
                    <Picker.Item label="September" value="9" />
                    <Picker.Item label="October" value="10" />
                    <Picker.Item label="November" value="11" />
                    <Picker.Item label="December" value="12" />
                  </Picker>
                </View>

                <Text style={{fontSize: 30}}>/</Text>
                
                <View style={styles.pickerboxinside2}>
                  <Picker style={styles.pickeryear}
                    selectedValue={selectedDate}
                    dropdownIconColor='#FF6D6D'
                    mode='dropdown'
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedDate(itemValue)
                    }>
                    <Picker.Item label="YY" value="0" color='#A0A0A0' enabled={false} />
                    <Picker.Item label="2022" value="0" />
                    <Picker.Item label="2021" value="1" />
                    <Picker.Item label="2020" value="2" />
                    <Picker.Item label="2019" value="3" />  
                    <Picker.Item label="2018" value="4" />
                    <Picker.Item label="2017" value="5" />
                    <Picker.Item label="2016" value="6" />
                    <Picker.Item label="2015" value="7" />
                    <Picker.Item label="2014" value="8" />
                    <Picker.Item label="2013" value="9" />
                    <Picker.Item label="2012" value="10" />
                    <Picker.Item label="2011" value="11" />
                    <Picker.Item label="2010" value="12" />
                    <Picker.Item label="2009" value="13" />
                    <Picker.Item label="2008" value="14" />
                    <Picker.Item label="2007" value="15" />
                    <Picker.Item label="2006" value="16" />
                    <Picker.Item label="2005" value="17" />
                    <Picker.Item label="2004" value="18" />
                    <Picker.Item label="2003" value="19" />
                    <Picker.Item label="2002" value="20" />
                    <Picker.Item label="2001" value="21" />
                    <Picker.Item label="2000" value="22" />
                    <Picker.Item label="1999" value="23" />
                    <Picker.Item label="1998" value="24" />
                    <Picker.Item label="1997" value="25" />
                    <Picker.Item label="1996" value="26" />
                    <Picker.Item label="1995" value="27" />
                    <Picker.Item label="1994" value="28" />
                    <Picker.Item label="1993" value="29" />
                    <Picker.Item label="1992" value="30" />
                    <Picker.Item label="1991" value="31" />
                    <Picker.Item label="1990" value="32" />
                    <Picker.Item label="1989" value="33" />
                    <Picker.Item label="1988" value="34" />
                    <Picker.Item label="1987" value="35" />
                    <Picker.Item label="1986" value="36" />
                    <Picker.Item label="1985" value="37" />
                    <Picker.Item label="1984" value="38" />
                    <Picker.Item label="1983" value="39" />
                    <Picker.Item label="1982" value="40" />
                    <Picker.Item label="1981" value="41" />
                    <Picker.Item label="1980" value="42" />
                    <Picker.Item label="1979" value="43" />
                    <Picker.Item label="1978" value="44" />
                    <Picker.Item label="1977" value="45" />
                    <Picker.Item label="1976" value="46" />
                    <Picker.Item label="1975" value="47" />
                    <Picker.Item label="1974" value="48" />
                    <Picker.Item label="1973" value="49" />
                    <Picker.Item label="1972" value="50" />
                    <Picker.Item label="1971" value="51" />
                    <Picker.Item label="1970" value="52" />
                    <Picker.Item label="1969" value="53" />
                    <Picker.Item label="1968" value="54" />
                    <Picker.Item label="1967" value="55" />
                    <Picker.Item label="1966" value="56" />
                    <Picker.Item label="1965" value="57" />
                    <Picker.Item label="1964" value="58" />
                    <Picker.Item label="1963" value="59" />
                    <Picker.Item label="1962" value="60" />
                    <Picker.Item label="1961" value="61" />
                    <Picker.Item label="1960" value="62" />
                    <Picker.Item label="1959" value="63" />
                    <Picker.Item label="1958" value="64" />
                    <Picker.Item label="1957" value="65" />
                    <Picker.Item label="1956" value="66" />
                    <Picker.Item label="1955" value="67" />
                    <Picker.Item label="1954" value="68" />  
                    <Picker.Item label="1953" value="69" />
                    <Picker.Item label="1952" value="70" />
                    <Picker.Item label="1951" value="71" />
                    <Picker.Item label="1950" value="72" />
                    <Picker.Item label="1949" value="73" />
                    <Picker.Item label="1948" value="74" />
                    <Picker.Item label="1947" value="75" />
                    <Picker.Item label="1946" value="76" />
                    <Picker.Item label="1945" value="77" />
                    <Picker.Item label="1944" value="78" />
                    <Picker.Item label="1943" value="79" />
                    <Picker.Item label="1942" value="80" />
                  </Picker>
                </View>
              </View>
            </View>

          <View style={styles.box1}>
            <Image 
              style={styles.gendericon}
              source={require('../assets/images/gender2_icon.png')}
              />
            <Text>  </Text>
            <BouncyCheckbox
              size={20}
              fillColor="red"
              unfillColor="#FFFFFF"
              text="Boy    "
              iconStyle={{ borderColor: "red" }}
              textStyle={{
                textDecorationLine: "none",
              }}
              onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={20}
              fillColor="red"
              unfillColor="#FFFFFF"
              text="Girl"
              textStyle={{
                textDecorationLine: "none",
              }}
              iconStyle={{ borderColor: "red" }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>

          <View style={styles.box1}>
            <Image 
              style={styles.phonenumicon}
              source={require('../assets/images/address_icon.png')}
            />
            <TextInput
              style={styles.input2}
              onChangeText={onChangeAddr}
              value={address}
              placeholder="Address"
            />
          </View>

          <View style={styles.box1}>
            <Text>         </Text>
            <View style={styles.pickerboxinside3}>
              <Picker style={styles.pickerProvince}
                selectedValue={selectedProvince}
                dropdownIconColor='#FF6D6D'
                mode='dropdown'
                onValueChange={(itemValue) =>
                  {
                    setSelectedProvince(itemValue)
                    getDistrictList(itemValue)
                  }
                }>
                <Picker.Item label="Province" value="0" color='#A0A0A0' enabled={false} />
                {renderProvinceList()}
              </Picker>
            </View>
            
            <Text>       </Text>
            <View style={styles.pickerboxinside3}>
              <Picker style={styles.pickerDistrict}
                selectedValue={selectedDistrict}
                dropdownIconColor='#FF6D6D'
                mode='dropdown'
                onValueChange={(itemValue) =>{
                  setSelectedDistrict(itemValue)
                  getSubDistrictList(itemValue)
                  }
                }>
                <Picker.Item label="District" value="0" color='#A0A0A0' enabled={false} />
                {renderDistrictList()}
              </Picker>
            </View>
          </View>

          <View style={styles.box1}>
            <Text>         </Text>
            <View style={styles.pickerboxinside3}>
              <Picker style={styles.pickerSubDistrict}
                selectedValue={selectedSubDistrict}
                dropdownIconColor='#FF6D6D'
                mode='dropdown'
                onValueChange={(itemValue) =>
                  setSelectedSubDistrict(itemValue)
                }>
                <Picker.Item label="SubDistrict" value="0" color='#A0A0A0' enabled={false} />
                {renderSubDistrictList()}
              </Picker>
            </View>
          </View>
          <View style={styles.space2}>
            <TouchableOpacity style={styles.savebutton} onPress={onSaveButton}>
              <View style={{backgroundColor:'transparent'}}>
                <Text style={{fontSize:20, color: 'white'}}>Save</Text>
              </View>  
            </TouchableOpacity>
            <View style={{flex:1}}>
            </View>
          </View>
        </View> 
      </View>
    </View>
  );
}

/**********************************************Display*************************************************/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6D6D'
  },
  space1: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.015,
    backgroundColor:'transparent',
  },
  title: {
    fontSize: 26,
    fontWeight: 'normal',
    color: 'white',
  },
  roundedrec: {
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.97,
    height:screenHeight*.6,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
  },
  inputcontainer: {
    backgroundColor:'transparent',
    borderWidth: 1,
  },
  input: {
    fontSize: 14,
    width: width *.27,
    height: height * 0.045,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,
  },
  input2: {
    fontSize: 12,
    width: width *.80,
    height: height * 0.045,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,
  },
  savebutton: {
    flex:1,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:width*36/100,
    height:height*6/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  },
  box1: {
    flexDirection: "row",

  },
  nameicon: {
    width: 30,
    height:45,
  },
  phonenumicon: {
    width: 30,
    height:45,
  },
  birthicon:{
    width: 32,
    height:40,
    margin:3,
  },
  gendericon:{
    width: 32,
    height:40,
    margin: 4,
  },
  addricon:{
    width: 50,
    height:50,
  },
  pickermonth:{
    fontSize: 12,
    width: width *.24,
    minHeight: height * 0.06,
    backgroundColor: 'transparent',
  },
  pickeryear:{
    fontSize: 12,
    width: width *.22,
    minHeight: height * 0.06,
    backgroundColor: 'transparent',

  },
  pickerProvince:{
    fontSize: 12,
    width: width *.35,
    minHeight: height * 0.06,
    backgroundColor: 'transparent',

  },
  pickerDistrict:{
    fontSize: 12,
    width: width *.35,
    minHeight: height * 0.06,
    backgroundColor: 'transparent',

  },
  pickerSubDistrict:{
    fontSize: 12,
    width: width *.35,
    minHeight: height * 0.06,
    backgroundColor: 'transparent',

  },
  pickerbox:{
    height: height * .05,
    flexDirection: "row"
  },
  pickerboxinside:{
    alignItems:'center',
    justifyContent:'center',
    width:width*.215,
    height:height*0.055,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
  },
  pickerboxinside2:{
    alignItems:'center',
    justifyContent:'center',
    width:width*.2,
    height:height*0.055,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
  },
  pickerboxinside3:{
    alignItems:'center',
    justifyContent:'center',
    width:width*.35,
    height:height*0.055,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
    margin: 6
  },
  space2: {
    flexDirection:'row-reverse',
    flexWrap:'wrap-reverse',
    alignItems:'center',
    justifyContent:'center',
    height:height*.15,
    backgroundColor:'transparent',
    borderWidth: 1,
  },
});
