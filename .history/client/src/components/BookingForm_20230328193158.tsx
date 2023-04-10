import { TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Button, Text } from 'react-native-elements'
import { PaymentRequest } from 'react-native-payments';

const METHOD_DATA = [{  supportedMethods: ['apple-pay'],
  data: {
    merchantIdentifier: 'YOUR_MERCHANT_IDENTIFIER',
    supportedNetworks: ['visa', 'mastercard', 'amex'],
    countryCode: 'US',
    currencyCode: 'USD'
  }
}];

const DETAILS = {
  id: 'YOUR_TRANSACTION_ID',
  displayItems: [
    {
      label: 'Item 1',
      amount: { currency: 'USD', value: '1.00' }
    }
  ],
  total: {
    label: 'Total',
    amount: { currency: 'USD', value: '1.00' }
  }
};

const BookingForm = () => {
  const [value, setValue] = useState([]);
  const handlePayment = () =>{
    const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS);
  }
  return (
    <ScrollView style={{height:'100%'}}> 
    <Text>Booking</Text>
    <TextInput
      label="Full Name"
       />
     <TextInput
      label="Date of Birth" />
      <View>
        <Text>Gender</Text>
        <View style={styles.radioSelect}>
          <View style={styles.radioItem}>
          <Text style={styles.item}>Male</Text>
          <Ionicons name="radio-button-off-sharp" size={24} color="black" />
          </View>
          <View style={styles.radioItem}>
          <Text style={styles.item}>Female</Text>
          <Ionicons name="radio-button-off-sharp" size={24} color="black" />
          </View>
      </View>
      </View>
      <TextInput style={styles.input}
      label="Email address" />
        <TextInput  style={styles.input}
      label="Phone Number" />
        <TextInput  style={styles.input}
      label="Passport Number" />
        <TextInput  style={styles.input}
      label="Passport expiry date" />
        <Button
        onPress={handlePayment}
         style={styles.input}
              title="Pay"
              icon={{
                name: 'apple1',
                type: 'antdesign',
                size: 24,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'black',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
                width:150
              }}
              containerStyle={{
                width: '100%',
                alignItems:'center'
              }}
            />

    </ScrollView>
   
  )
}
const styles = StyleSheet.create({
  input:{
    marginVertical: 5,
  },
  radioSelect:{
    marginVertical: 5,
    justifyContent:'space-around',
    display:"flex",
    flexDirection:'row'
  },
  radioItem:{
    alignItems:'center',
    width:100,
    flexDirection:"row"
  },
  item:{
    marginHorizontal:8
  }
})
export default BookingForm