import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './Components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
  
    setTaskItems([...taskItems, task])
    setTask(null);
  } 
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tasks</Text>
        <View style={styles.items}>
                   {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      <KeyboardAvoidingView 
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'New List'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  tasksWrapper: {
    paddingTop: 90,
    color: '#ffffff',
    backgroundColor: '#000000',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 32,
    color: '#ffffff',
    backgroundColor: '#000000',
    fontWeight: 'bold'
  },
  items: {
    
    color: '#ffffff',
    marginTop: 30,

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    color: '#ffffff',
    flexDirection: 'row',
    backgroundColor: '#000000',
    justifyContent: 'space-around',
    alignItems: 'center'
    
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
                               
    backgroundColor: '#000000',            
    borderRadius: 10,
    color: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 1,
    width: 300,
  },
  addWrapper: {
    width: 60,
    height: 60,
    
   
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    color: '#ffffff',
  },
});