import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
     </View>
  )}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#000000',
    color: '#000000',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000000',
    backgroundColor: '#000000',
    flexWrap: 'wrap'
  },

 
  itemText: {
    maxWidth: '80%',
    
    color: '#ffffff',
  },
});
export default Task;