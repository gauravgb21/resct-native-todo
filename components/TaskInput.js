import React from 'react';
import { Button, StyleSheet, View , TextInput , Modal , TouchableOpacity , Text } from 'react-native';
import { Entypo , Ionicons } from '@expo/vector-icons';

const TaskInput = props => {
    const { showInputModal = false , taskDetails = '' , onInputChange = () => {} , onAddTask = () => {} , onInputModalClose = () => {} } = props;

    return(
        <Modal visible={showInputModal} animationType={'slide'} >
            <View style={styles.inputContainer}>
                <TouchableOpacity onPress={onInputModalClose}>
                    <Entypo name="cross" size={32} color="black" />
                </TouchableOpacity>
                <TextInput 
                    placeholder='What would you like to add ?'
                    multiline={true}
                    style={styles.textInput}
                    value={taskDetails}
                    onChangeText={onInputChange}
                />
                <TouchableOpacity onPress={onAddTask}>
                    <View style={styles.customBtn}>
                        <Ionicons name="add-outline" size={32} color="white"/>
                    </View>
                </TouchableOpacity>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer : {
        flexDirection : 'column',
        padding : 10,
        borderWidth : 1,
        borderColor : '#f2f2f2',
        flex : 1
    },
    textInput : {
        flex : 1,
        textAlignVertical: 'top',
        fontSize : 20,
        paddingHorizontal : 10,
        paddingTop : 20
    },
    customBtn : {
        backgroundColor : '#3370e2',
        padding : 20,
        alignItems : 'center'
    },
    btnText : {
        color : '#fff',
        textAlign : 'center',
        fontWeight : 'bold'
    }
});

export default TaskInput;