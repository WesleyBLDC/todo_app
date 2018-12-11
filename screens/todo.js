import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, SectionList } from 'react-native';
import { CheckBox, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

class Todo extends React.Component{
    static navigationOptions = {
        title: 'Todo List',
      };

    renderRow = ({item}) => 
    (<View style={styles2.row}>
    <Text style={styles.name}>{item.text}</Text>
    </View>);

    renderSectionHeader = ({section}) => 
         (<View style={styles2.row}>
            <Text style={styles2.header}>{section.title}</Text>
            </View>);        
    
    render(){
        return(
            <View>
                <Text style={styles.h2text}>
                Things you gotta do
                </Text>
                <SectionList
                    sections={sections}
                    renderItem={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}  
                />
            </View>
        );
    }
}

// const rows = [
//     {key: 'First thing to do'}, 
//     {key: 'Second thing to do'}, 
//     {key: 'Third thing to do'}, 
//     {key: 'Forth thing to do'}
// ]

const sections = [ 
    { id: 0, title: 'Section 1', data: [ {id: 0, text: 'Item 1'}, {id: 1, text: 'Item 2'}] },
    { id: 1, title: 'Section 2', data: [ {id: 3, text: 'Item 4'}, {id: 4, text: 'Item 5'} ] }
    ]; 

const styles2 = StyleSheet.create({
    container: { marginTop: 20, flex: 1 },
    row: { 
          padding: 15, marginBottom: 5,
          backgroundColor: 'skyblue' },
    header: {
      padding: 15, marginBottom: 5,
      backgroundColor: 'steelblue',
      color: 'white', fontWeight: 'bold',
    }
  })
  
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
    },

    //for flatlist
    container: {
        flex: 1,
        //marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      h2text: {
        marginTop: 10,
        //fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
      },
      flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
      },
      name: {
       // fontFamily: 'Verdana',
        fontSize: 18,
        //backgroundColor: 'pink'
      }

      
});

export default Todo