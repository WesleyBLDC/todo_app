import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CheckBox, Avatar } from 'react-native-elements'
import { blue } from 'ansi-colors';
import Header2 from './components/header'; //how to grab the header component from the header file

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header2 textIwant={"hello"}/>
        <Header2 textIwant={"hello2"}/>
        <Button 
        title={"Hello"} 
        onPress={() => { console.log('hello'); }}>
        </Button>
        <Avatar
        xlarge
        rounded
        source={{uri: "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{marginTop: 10, marginBottom: 10}}
        />
        <Text style={styles.bigblue}>Testing</Text>
        <CheckBox
        center
        title='Do Task A'
        />
      </View>           
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
  }
});
