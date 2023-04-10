import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Message = ({ message, isSent }) => {
  const containerStyle = isSent ? styles.sentContainer : styles.receivedContainer;
  const textStyle = isSent ? styles.sentText : styles.receivedText;

  return (
    <View style={[styles.container, containerStyle]}>
    <Ionicons name="person" size={18} color="white" />
    <View >
      <Text style={textStyle}> {message}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    width:'100%',
    display:'flex'
  },
  sentContainer: {
    width:'50%',
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  receivedContainer: {
    width:"50%",
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  sentText: {
    color: '#000000',
  },
  receivedText: {
    color: '#000000',
  },
});
