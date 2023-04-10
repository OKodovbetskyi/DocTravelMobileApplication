import React from 'react'
import { View, Text} from 'react-native'

const PersonalInformation = ({personalInfo}) => {
  return (
    <View>
        <Text>Full Name: {personalInfo.fullname}</Text>
        <Text>Date of Birth: {personalInfo.dob}</Text>
        <Text>Passport Issue Country: {personalInfo.countryissued}</Text>
        <Text>Passport No: PU2254366</Text>
        <Text>Phone Number: 09765323456</Text>
    </View>
  )
}

export default PersonalInformation