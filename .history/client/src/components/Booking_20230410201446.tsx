import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import Flights from './Flights';
import PersonalInformation from './PersonalInformation';
import PersonalInfoForm from './PersonalInfoForm';
import { useDispatch } from 'react-redux';
import { bookingUserInformationActions } from '../store';

const Booking = ({booking, updateHandler}) => {
const [ticketsVisible, setTicketsVisible] = useState(false);
const [editVisible, setEditVisible] = useState(false);
const handleToggleTickets = () => {setTicketsVisible(ticket=>!ticket)}
const handleToggleEdit = () => {setEditVisible(edit=>!edit)}
  return (
    <Pressable style={styles.container} onPress={handleToggleTickets}>
        <View style={styles.ticketInfo} >
        <Text h4>{booking.personalinfo.fullname}'s</Text>
        <Text h4>Trips</Text>
        </View>
        
        {
            ticketsVisible && <View style={styles.tickets}>
                <Pressable onPress={handleToggleEdit} style={styles.editCont}><Text style={styles.edit}>Edit Personal Details</Text></Pressable>
                {
                    editVisible ? <PersonalInfoForm type='save' load={load} personalInfo={booking.personalinfo} id={booking._id}/> : <PersonalInformation personalInfo={booking.personalinfo} />
                }
               

                 <Text h4>Trips</Text>
                 <FlatList 
                 data={booking.ticket}
                 renderItem={({item})=><Flights ticket={item}/>}/>
            </View>
        }
    </Pressable>
  )
}
const styles = StyleSheet.create({
   container:{
    backgroundColor: 'white',
    padding: 10,
    margin:5,
   } ,
   ticketInfo:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
   },
   tickets:{
    borderTopColor:'purple',
    borderTopWidth: 2,
    marginTop:10,
    paddingTop:10,
   },
   edit:{
    color: 'blue',
    textDecorationLine:'underline',
    marginLeft: 'auto',
   },
   editCont:{
    height: 15
   }
})
export default Booking