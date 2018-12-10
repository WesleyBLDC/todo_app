import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CheckBox, Avatar } from 'react-native-elements'

class Flexbox extends React.Component{
    static navigationOptions = {
        title: 'Flexbox List',
      };
    render(){
        return(
            <View>
                <Avatar
                xlarge
                rounded
                source={{uri: "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{marginTop: 10, marginBottom: 10}}
                />
            </View>
        );
    }
}

export default Flexbox