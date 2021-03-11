import { StatusBar } from 'expo-status-bar';
import React , { useState , useRef } from 'react';
import { StyleSheet, Text, View , ScrollView , FlatList , TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import UserProfile from './components/UserProfile';
import TaskInput from './components/TaskInput';
import TaskListItem from './components/TaskListItem';

export default function App() {
  const [taskData,setTaskData] = useState([]);
  const [taskDetails,setTaskDetails] = useState('');
  const [showInputModal,setShowInputModal] = useState(false);
  const [userName,setUserName] = useState('Gaurav Bisht');

  const handleAddTaskClick = () => {
    const newTodoData = [...taskData,{ key : Math.random().toString() , value : taskDetails }];
    setTaskData(newTodoData);
    setTaskDetails('');
    setShowInputModal(false);
  }

  const handleInputTextChange = (enteredText) => {
    setTaskDetails(enteredText);
  }

  const handleOpenModalClick = () => {
    setShowInputModal(!showInputModal);
  }

  const handleInputModalClose = () => {
    setShowInputModal(false);
  }

  const handleDelete = (keyToDelete) => {
    const newListData = taskData.filter(item => item.key !== keyToDelete);
    setTaskData(newListData);
  }

  return (
    <View style={styles.container}>
      <TaskInput 
        showInputModal={showInputModal}
        taskDetails={taskDetails}
        onInputChange={handleInputTextChange}
        onAddTask={handleAddTaskClick}
        onInputModalClose={handleInputModalClose}
      />
      <UserProfile taskCount={taskData.length} userName={userName}/>
      <FlatList
          style={styles.flatList}
          contentContainerStyle={{alignItems : 'center'}}
          data={taskData}
          renderItem={({item}) => <TaskListItem task={item} onDelete={(id) => handleDelete(id)}/>}
        />
      <TouchableOpacity activeOpacity={0.8} onPress={handleOpenModalClick}>
          <View style={styles.customBtn}>
            <Ionicons name="add-outline" size={32} color="white"/>
          </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop : 50,
        paddingBottom : 30,
        paddingHorizontal : 0,
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent : 'space-between'
    },
    taskListContainer : {
        flex : 1
    },
    flatList : {
      paddingHorizontal : 10,
      flex : 1
    },
    customBtn : {
        backgroundColor : '#3370e2',
        padding : 20,
        alignItems : 'center',
        borderRadius : 50,
        width : 75,
        alignSelf : 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: .5,
        shadowRadius: 10,
        elevation: 10
    },
    btnText : {
        color : '#fff',
        textAlign : 'center',
        fontWeight : 'bold'
    }
});
