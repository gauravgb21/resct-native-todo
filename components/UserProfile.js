import React from 'react';
import { StyleSheet, View , Text , Image } from 'react-native';
import { Entypo , Ionicons } from '@expo/vector-icons';

const UserProfile = props => {
    const { taskCount = 0 , userName = '' } = props;

    return(
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.usernameText}>Hello {userName}</Text>
                <Text style={styles.taskCountText}>You have {taskCount} tasks</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image 
                style={styles.profileImage}   
                source={require('../images/wapp.jpg')}
                />
            </View>
        </View>    
    );
}

const styles = StyleSheet.create({
    profileContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 10,
        paddingHorizontal : 15
    },
    usernameText : {
        fontSize : 25,
        fontWeight : '600',
        color : '#333'
    },
    taskCountText : {
        paddingVertical : 10,
        color : '#666',
        fontWeight : 'bold'
    },
    profileImage : {
        width : 60,
        height : 60,
        borderRadius : 50
    },
    imageContainer : {
        paddingTop : 10
    }
});


export default UserProfile;