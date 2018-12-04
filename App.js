import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CheckBox, Avatar, Header } from 'react-native-elements'
import { blue } from 'ansi-colors';
// import { createSwitchNavigator } from 'react-navigation'; 

// const AppNavigator = createSwitchNavigator({ 
//      "goToScreenA": ScreenAComponent, 
//      "goToScreenB": ScreenBComponent,
//      "goToScreenC": ScreenCComponent, 
// });

// export default class App extends React.Component { 
//      render() { 
//           return <AppNavigator /> 
//      } 
// }

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
