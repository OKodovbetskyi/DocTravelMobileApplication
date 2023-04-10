import { Button } from '@react-native-material/core'
import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

interface HomeProps{
  navigation:  React.ReactNode
}
const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={[styles.header, styles.text]}>Healthy Travel</Text>
      <View style={styles.loginFunctionality}>
      <View style={styles.funcitem}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
          <Text>Sign In</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.funcitem}>
          <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
          <Text>Sign Up</Text>
          </TouchableOpacity>
      </View>
      </View>
      <View style={styles.searchcontainer}>
      <View style={styles.item}>
          <TouchableOpacity>
          <MaterialIcons  style={styles.icon} name="flight" size={24} color="black" onPress={()=>navigation.navigate('FlightSearch')}/>
          <Text style={styles.text}>Flight Search</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.item}>
      <TouchableOpacity>
      <FontAwesome style={styles.icon} name="heart" size={24} color="black" onPress={()=>navigation.navigate('HealthPackages')}/>
      <Text style={styles.text}>Health Package</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.item}>
      <TouchableOpacity>
      <MaterialIcons style={styles.icon} name="apartment" size={24} color="black" onPress={()=>navigation.navigate('Accomodation')}/>
      <Text style={styles.text}>Accomodation</Text>
      </TouchableOpacity>
      
      </View>
      </View>
     
    <View style={styles.features}>
    <TouchableOpacity onPress={()=>navigation.navigate('AssistantAI')}>
      <View style={styles.assistantIcon}>
      <Ionicons name="person" size={24} color="purple" />
      </View>   
    </TouchableOpacity>
    </View>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  main:{
    marginTop: Constants.statusBarHeight,
    flex:1,
    height:400,
  },
  header:{
    textAlign:'center',
    fontSize: 20,
    margin: 15
  },
  text:{
    color:'purple'
  },
  searchcontainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center'
  },
  item:{
    margin: 15
  },
  icon:{
    textAlign:'center',
    margin: 8,
    color: 'purple'
  },
  features:{
    backgroundColor:'purple',
    height:'100%',
    borderRadius:25,
    position:'relative'
  },
 
  accountFunctions:{
    marginTop:'50%',
   flexDirection:'row'
    
  },
  button:{
    margin:5,
  },
  loginFunctionality:{
    display:"flex",
    flexDirection:"row-reverse",
    padding: 10
  },
  funcitem:{
    margin:5,

  },
  assistantIcon:{
    position: 'absolute',
    bottom: -200,
    right:5,
    width: 50,
    height: 50, 
    backgroundColor: 'white', 
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,

  }
})
export default Home