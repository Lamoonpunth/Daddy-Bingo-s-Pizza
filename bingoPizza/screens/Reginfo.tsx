import React,{useEffect}  from 'react';
import { StyleSheet, TextInput, Dimensions, Image,TouchableOpacity } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { PanResponder } from "react-native";
import { Text, View } from '../components/Themed';
import Gradient from '../styles/Gradient';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const {height, width} = Dimensions.get('screen');


export default function TabOneScreen({navigation,route}: {navigation:any,route:any}) {
 
  function isNumeric(val:string) {
    return /^-?\d+$/.test(val);
  }
  function hasWhiteSpace(s:string) {
    return /\s/g.test(s);
  }
  function isContainsSpecialChars(str:string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
  function isContainsSpecialChars2(str:string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\?~]/;
    return specialChars.test(str);
  }
  function  isEnglishAndThai(str:string) {
    const english = /^[A-Za-z0-9]*$/;
    const thai = /^[ก-๙]*$/;
    return !(english.test(str) || thai.test(str));
  }
  const [firstname, onChangeName] = React.useState('');
  const [lastname, onChangeLast] = React.useState('');


  const [phone, onChangeNumber] = React.useState('');
  const [address, onChangeAddr] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedMonth, setSelectedMonth] = React.useState('');
  const [selectedProvince, setSelectedProvince] = React.useState('');
  const [selectedDistrict, setSelectedDistrict] = React.useState('');
  const [selectedSubDistrict, setSelectedSubDistrict] = React.useState('');
  const [selectedZipCode, setSelectedZipCode] = React.useState('');

  const [checkboxBoy, setcheckboxBoy] = React.useState(false);
  const [checkboxGirl, setcheckboxGirl] = React.useState(false);

  const onstateCheckboxBoy = () => {
    setcheckboxBoy(!checkboxBoy);
    setcheckboxGirl(false);
  }

  const onstateCheckboxGirkl = () => {
    setcheckboxGirl(!checkboxGirl);
    setcheckboxBoy(false);

  }

  const [listOfProvince,setListOfProvince] =React.useState([]);
  const [listOfDistrict,setListOfDistrict] =React.useState([]);
  const [listOfSubDistrict,setListOfSubDistrict] =React.useState([]);
  

  const { Username } = route.params;
  const { Password } = route.params;
  console.log(Username)
  console.log(Password)
  //const Username=navigation.getParam("username")
  //const Password=navigation.getParam("password")
  const onSaveButton = () => {
    //alert('Hello How are you? I am under the water pls help me.');

    var selectedSex
    if (checkboxBoy)selectedSex = 1
    else if (checkboxGirl)selectedSex = 2
    else selectedSex = 0

    if( firstname == ''){
      alert("Please Enter Firstname")
    }
    else if (isNumeric(firstname) || firstname.length < 2 || firstname.length > 25 || hasWhiteSpace(firstname) || isContainsSpecialChars(firstname) || isEnglishAndThai(firstname)) {
      alert("Firstname must be only thai or english character with between 2 to 25 character")
    }
    else if( lastname == ''){
      alert("Please Enter Lastname")
    }
    else if (isNumeric(lastname) || lastname.length < 2 || lastname.length > 25 || hasWhiteSpace(lastname) || isContainsSpecialChars(lastname) || isEnglishAndThai(lastname)) {
      alert("Lastname must be only thai or english character with between 2 to 25 character")
    }      
    else if(isEnglishAndThai(firstname+lastname)){
      alert("Firstname and Lastname must be only thai or english character with between 2 to 25 character")
    }
    else if ( selectedDate=='' || selectedMonth== ''){
      alert("Please select birthmonth and birthyear")
    }   
    //บัค
    // else if (parseInt(selectedDate)<=2007) {
    //   alert("User age must be greater than or equal to 15")
    // }    
    else if( phone == ''){
      alert("Please Enter Phone Number")
    }
      
    else if (phone.length != 10 || !isNumeric(phone) ) {
      alert("Phone must be 10 digit")
    }     
    else if (selectedSex===0) { 
      alert("Please select gender")
    }
    else if (address=='') {
      alert("Please enter address")
    }   
    else if (address.length > 250 || isContainsSpecialChars2(address)) {
      alert("Please select province")
    }
    else if (selectedProvince=='') {
      alert("Please select province")
    }
    else if (selectedDistrict=='') {
      alert("Please select district")
    }
    else if (selectedSubDistrict=='') {
      alert("Please select sub district")
    }         
    else if(selectedZipCode==''){
      alert("Please Enter Zipcode")
    }       
    else if(selectedZipCode.length != 5 || !isNumeric(selectedZipCode) || hasWhiteSpace(selectedZipCode) || isContainsSpecialChars(selectedZipCode)){
      alert("Zipcode must be 5 digit")
    }
    
    else {      
          const controller = new AbortController()
          // 1 second timeout:
          const timeoutId = setTimeout(() => controller.abort(), 1000)
          const target =  "http://10.0.2.2:3000/register"
          fetch(target,{
          method:'post',
          headers:{
              'Content-Type': 'application/json'
          },
          signal:controller.signal,
          body : JSON.stringify({
            "username" : Username,
            "password" : Password,
            "fname" : firstname,
            "lname" : lastname,
            "phonenumber" : phone,
            "birthdatem" : selectedMonth,
            "birthdatey" : selectedDate,
            "sex" : selectedSex,
            "address" : address,
            "province" : selectedProvince,
            "district" : selectedDistrict,
            "subdistrict" : selectedSubDistrict,
            "postcode" : selectedZipCode,
            "cart" :[]
          })
        })
        .then(res=>res.json())
        .then(data=>{console.log(data); alert("register success"),navigation.pop()})
        .catch(error=>{alert("Cannot connect to server")
        })
    }

  }

  const getProvinceList = async() =>{
  console.log("getProvinceList");
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

    //console.log("getDistrictList");
    setListOfDistrict([]);
    setListOfSubDistrict([]);
    setSelectedDistrict('');
    setSelectedSubDistrict('');
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
    return listOfProvince.map((province:any) => {
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
    <Gradient>

      <Text style={styles.title}>User Information</Text>

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
                  <Picker.Item label="2022" value="2022" />
                  <Picker.Item label="2021" value="2021" />
                  <Picker.Item label="2020" value="2020" />
                  <Picker.Item label="2019" value="2019" />  
                  <Picker.Item label="2018" value="2018" />
                  <Picker.Item label="2017" value="2017" />
                  <Picker.Item label="2016" value="2016" />
                  <Picker.Item label="2015" value="2015" />
                  <Picker.Item label="2014" value="2014" />
                  <Picker.Item label="2013" value="2013" />
                  <Picker.Item label="2012" value="2012" />
                  <Picker.Item label="2011" value="2011" />
                  <Picker.Item label="2010" value="2010" />
                  <Picker.Item label="2009" value="2009" />
                  <Picker.Item label="2008" value="2008" />
                  <Picker.Item label="2007" value="2007" />
                  <Picker.Item label="2006" value="2006" />
                  <Picker.Item label="2005" value="2005" />
                  <Picker.Item label="2004" value="2004" />
                  <Picker.Item label="2003" value="2003" />
                  <Picker.Item label="2002" value="2002" />
                  <Picker.Item label="2001" value="2001" />
                  <Picker.Item label="2000" value="2000" />
                  <Picker.Item label="1999" value="1999" />
                  <Picker.Item label="1998" value="1998" />
                  <Picker.Item label="1997" value="1997" />
                  <Picker.Item label="1996" value="1996" />
                  <Picker.Item label="1995" value="1995" />
                  <Picker.Item label="1994" value="1994" />
                  <Picker.Item label="1993" value="1993" />
                  <Picker.Item label="1992" value="1992" />
                  <Picker.Item label="1991" value="1991" />
                  <Picker.Item label="1990" value="1990" />
                  <Picker.Item label="1989" value="1989" />
                  <Picker.Item label="1988" value="1988" />
                  <Picker.Item label="1987" value="1987" />
                  <Picker.Item label="1986" value="1986" />
                  <Picker.Item label="1985" value="1985" />
                  <Picker.Item label="1984" value="1984" />
                  <Picker.Item label="1983" value="1983" />
                  <Picker.Item label="1982" value="1982" />
                  <Picker.Item label="1981" value="1981" />
                  <Picker.Item label="1980" value="1980" />
                  <Picker.Item label="1979" value="1979" />
                  <Picker.Item label="1978" value="1978" />
                  <Picker.Item label="1977" value="1977" />
                  <Picker.Item label="1976" value="1976" />
                  <Picker.Item label="1975" value="1975" />
                  <Picker.Item label="1974" value="1974" />
                  <Picker.Item label="1973" value="1973" />
                  <Picker.Item label="1972" value="1972" />
                  <Picker.Item label="1971" value="1971" />
                  <Picker.Item label="1970" value="1970" />
                  <Picker.Item label="1969" value="1969" />
                  <Picker.Item label="1968" value="1968" />
                  <Picker.Item label="1967" value="1967" />
                  <Picker.Item label="1966" value="1966" />
                  <Picker.Item label="1965" value="1965" />
                  <Picker.Item label="1964" value="1964" />
                  <Picker.Item label="1963" value="1963" />
                  <Picker.Item label="1962" value="1962" />
                  <Picker.Item label="1961" value="1961" />
                  <Picker.Item label="1960" value="1960" />
                  <Picker.Item label="1959" value="1959" />
                  <Picker.Item label="1958" value="1958" />
                  <Picker.Item label="1957" value="1957" />
                  <Picker.Item label="1956" value="1956" />
                  <Picker.Item label="1955" value="1955" />
                  <Picker.Item label="1954" value="1954" />  
                  <Picker.Item label="1953" value="1953" />
                  <Picker.Item label="1952" value="1952" />
                  <Picker.Item label="1951" value="1951" />
                  <Picker.Item label="1950" value="1950" />
                  <Picker.Item label="1949" value="1949" />
                  <Picker.Item label="1948" value="1948" />
                  <Picker.Item label="1947" value="1947" />
                  <Picker.Item label="1946" value="1946" />
                  <Picker.Item label="1945" value="1945" />
                  <Picker.Item label="1944" value="1944" />
                  <Picker.Item label="1943" value="1943" />
                  <Picker.Item label="1942" value="1942" />
                </Picker>
              </View>
            </View>
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
              text="Male    "
              iconStyle={{ borderColor: "red" }}
              textStyle={{textDecorationLine: "none",}}
              disableBuiltInState
              isChecked={checkboxBoy}
              onPress={onstateCheckboxBoy}
            />
            <BouncyCheckbox
              size={20}
              fillColor="red"
              unfillColor="#FFFFFF"
              text="Female"
              textStyle={{textDecorationLine: "none",}}
              iconStyle={{ borderColor: "red" }}
              disableBuiltInState
              isChecked={checkboxGirl}
              onPress={onstateCheckboxGirkl}
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
              multiline={true}
            />
          </View>

          <View style={styles.box1}>
            <Text>         </Text>
            <View style={styles.pickerboxProvince}>
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
          </View>

          <View style={styles.box1}>
            <Text>         </Text>
            <View style={styles.pickerboxDistrict}>
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
            <View style={styles.pickerboxSubDistrict}>
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
            <Text> </Text>
            <View style={styles.zipcode}>
              <TextInput
                style={{fontSize:14}}
                onChangeText={setSelectedZipCode}
                value={selectedZipCode}
                placeholder="Zip Code"
              />
            </View>
          </View>

        </View> 

        <View style={styles.space2}>
          <TouchableOpacity style={styles.savebutton} onPress={onSaveButton}>
            <View style={{backgroundColor:'transparent'}}>
              <Text style={{fontSize:20, color: 'white'}}>Save</Text>
            </View>  
          </TouchableOpacity>
        </View>

      </View>
      
    </Gradient>
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
    fontSize: 30,
    fontWeight: 'normal',
    color: 'white',
    padding:20
  },
  roundedrec: {
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.97,
    height:screenHeight*.8,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
  },
  inputcontainer: {
    flex:9,
    flexDirection:'column',
    flexWrap:'wrap',
    justifyContent:'space-around',
    backgroundColor:'transparent',
    //borderWidth: 1,
  },
  input: {
    fontSize: 16,
    width: width *.35,
    height: height * 0.05,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,
  },
  input2: {
    fontSize: 16,
    width: width *.80,
    height: height * 0.055,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,
  },
  savebutton: {
    flex:0.75,
    //borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:width*36/100,
    height:height*6/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
    marginRight:70
  },
  box1: {
    flexDirection: "row",
    backgroundColor:'transparent',
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
    width: width *.35,
    minHeight: height * 0.06,
    backgroundColor: 'transparent',
  },
  pickeryear:{
    fontSize: 12,
    width: width *.35,
    minHeight: height * 0.06,
    backgroundColor: 'transparent',

  },
  pickerProvince:{
    fontSize: 16,
    width: width *.6,
    minHeight: height * 0.06,
    backgroundColor: 'transparent',

  },
  pickerDistrict:{
    fontSize: 16,
    width: width *.6,
    minHeight: height * 0.06,
    backgroundColor: 'transparent',

  },
  pickerSubDistrict:{
    fontSize: 16,
    width: width *.5,
    minHeight: height * 0.06,
    backgroundColor: 'transparent',
  },
  pickerZipCode:{
    fontSize: 14,
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
    width:width*.35,
    height:height*0.055,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
  },
  pickerboxinside2:{
    alignItems:'center',
    justifyContent:'center',
    width:width*.35,
    height:height*0.055,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
  },
  pickerboxProvince:{
    alignItems:'center',
    justifyContent:'center',
    width:width*.6,
    height:height*0.055,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
    margin: 6
  },
  pickerboxDistrict:{
    alignItems:'center',
    justifyContent:'center',
    width:width*.6,
    height:height*0.055,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
    margin: 6
  },
  pickerboxSubDistrict:{
    alignItems:'center',
    justifyContent:'center',
    width:width*.5,
    height:height*0.055,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
    margin: 6
  },
  zipcode:{
    alignItems:'center',
    justifyContent:'center',
    width:width*.2,
    height:height*0.055,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
    margin: 6
  },
  space2: {
    flex:1,
    flexDirection:'column',
    flexWrap:'wrap-reverse',
    alignItems:'center',
    justifyContent:'center',
    height:height*.15,
    backgroundColor:'transparent',
    width:screenWidth*.97,
    //borderWidth: 1,
  },
});
