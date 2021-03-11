import React , { useRef , useState } from 'react';
import { StyleSheet, View , Text , PanResponder , Animated , TouchableWithoutFeedback , Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TaskListItem = props => {
    const { task = {} , onDelete = () => {} } = props;
    const [showDel,setShowDel] = useState(false);
    const windowWidth = Dimensions.get('window').width;
    const widthAnim = useRef(new Animated.Value(windowWidth - 20)).current;

    // const pan = useRef(new Animated.ValueXY()).current;
    // const panResponder = useRef(
    //     PanResponder.create({
    //         onMoveShouldSetPanResponder: () => true,
    //         onPanResponderGrant: () => {
    //             pan.setOffset({
    //             x: pan.x._value,
    //             y: pan.y._value
    //             });
    //         },
    //         onPanResponderMove: Animated.event(
    //             [
    //             null,
    //             { dx: pan.x, dy: pan.y }
    //             ]
    //         ),
    //         onPanResponderRelease: (e,gesture) => {
    //            // pan.flattenOffset();
    //             Animated.spring(pan, {
    //                 toValue: { x: 0, y: 0 },
    //                 friction: 5
    //             }).start();
    //         }
    //     })
    // ).current;

    const handleItemLongPress = () => {
        console.log('Window is :: ',windowWidth);
        if(!showDel){
            Animated.spring(widthAnim,{
                toValue : windowWidth - 40,
                friction : 7,
                useNativeDriver: false
            }).start();
        }
        else{
            Animated.spring(widthAnim,{
                toValue : windowWidth - 20,
                friction : 7,
                useNativeDriver: false
            }).start();
        }
        setShowDel(!showDel);
    }

    const composedTodoStyles = !showDel ? ({...styles.todoList}) : ({...styles.todoList});

    return(
            <TouchableWithoutFeedback onPress={handleItemLongPress}>
                <Animated.View style={[composedTodoStyles,{width : widthAnim}]}>
                    <View style={styles.taskDetailsCont}>
                        <View style={styles.taskName}>
                            <Text style={styles.itemText}>{task.value}</Text>
                        </View>
                        <View>
                            <Text style={styles.dateText}>Due on 25/12/19</Text>
                        </View>
                    </View>
                    {
                        showDel && (
                            <TouchableWithoutFeedback onPress={() => onDelete(task.key)}>
                                <View style={{paddingTop : 17,backgroundColor : 'red',paddingHorizontal : 10,borderTopRightRadius : 5 , borderBottomRightRadius : 5}}>
                                    <AntDesign name="delete" size={28} color="white" />
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                </Animated.View>
            </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    todoList : {
        flexDirection : 'row',
        marginTop : 20,
        backgroundColor : '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: .5,
        shadowRadius: 50,
        elevation: 2,
        borderRadius : 5,
        borderLeftWidth : 1,
        borderRightWidth : 1,
        borderBottomWidth : 1,
        borderColor : '#e5e5e5'
    },
    itemText : {
        fontWeight : 'bold',
        fontSize : 15,
        color : '#333'
    },
    dateText : {
        color : '#666',
        fontSize : 13,
        paddingVertical : 5 
    },
    taskDetailsCont : {
        flexDirection : 'column',
        flex : 1,
        paddingHorizontal : 15,
        paddingVertical : 10
    },
    taskName : {
        flex : 1
    }
});

export default TaskListItem;