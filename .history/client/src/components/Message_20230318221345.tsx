import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Message = ({ message, isSent }) => {
  const containerStyle = isSent ? styles.sentContainer : styles.receivedContainer;
  const textStyle = isSent ? styles.sentText : styles.receivedText;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={textStyle}>{message}</Text>
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
