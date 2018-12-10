import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CheckBox, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

class Todo extends React.Component{
    static navigationOptions = {
        title: 'Todo List',
      };
    render(){
        return(
            <ScrollView>
                <View style={styles.container1}/>
                <View style={styles.container2}/>
                <View style={styles.container3}/>
                <View style={styles.container1}/>
                <View style={styles.container2}/>
                <View style={styles.container3}/>
            </ScrollView>


        // <View style={{flex: 1, flexDirection: 'row',flexWrap:'wrap'}}>  //about flex
        //     <View style={{flex:1, backgroundColor: 'powderblue'}} />
        //     <View style={{flex:1, backgroundColor: 'skyblue'}} />
        //     <View style={{flex:1, backgroundColor: 'steelblue'}} />
        // </View>
        );
    }
}

const styles=StyleSheet.create({
    container1:{
        padding:100,
        backgroundColor:'red'
    },
    container2:{
        padding:100,
        backgroundColor:'green'
    },
    container3:{
        padding:100,
        backgroundColor:'blue'
    }
});

export default Todo