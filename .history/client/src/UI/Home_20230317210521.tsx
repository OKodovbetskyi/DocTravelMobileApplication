import { Button } from '@react-native-material/core'
import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';

interface HomeProps{
  navigation:  React.ReactNode
}
const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={[styles.header, styles.text]}>Healthy Travel</Text>
      <View style={styles.loginFunctionality}>
      <View style={styles.item}>
          <TouchableOpacity>
          <Text>Sign In</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.item}>
          <TouchableOpacity>
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
      
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    marginTop: Constants.statusBarHeight,
    display:'flex',
  },
  header:{
    textAlign:'center',
    fontSize: 20,
    margin: 15
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
  text:{
    color:'purple'
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
    flexDirection:"row-reverse"
  }
})
export default Home