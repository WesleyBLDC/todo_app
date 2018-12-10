import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CheckBox, Avatar } from 'react-native-elements'

class Todo extends React.Component{
    static navigationOptions = {
        title: 'Todo List',
      };
    render(){
        return(
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}} />
            <View style={{width: 250, height: 250, backgroundColor: 'steelblue'}} />
        </View>
        );
    }
}

export default Todo