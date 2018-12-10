import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CheckBox, Avatar } from 'react-native-elements'
import Header from './components/header'; //how to grab the header component from the header file
import { createStackNavigator, createAppContainer } from "react-navigation";
import Todo from './screens/todo';
import Flexbox from './screens/Flexbox';

class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Header textIwant={"hello"}/>
        <View style={{padding:20}}/>
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

        <Button
          title="Go to Todo List"
          onPress={() => this.props.navigation.navigate('TodoScreen')}
        />
        <View style={{padding:20}}/>
        <Button
          title="Go to Flexbox"
          onPress={() => this.props.navigation.navigate('FlexboxScreen')}
        />
      </View>           
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  TodoScreen: Todo,
  FlexboxScreen: Flexbox
});

const AppContainer = createAppContainer(AppNavigator);

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

export default AppContainer;