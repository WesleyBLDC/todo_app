import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


//THis is stateless functional component
// const Header = (props) => <Text>{props.textIwant}</Text>;

//This is stateful functional component
class Header extends React.Component{   
    constructor(props){                 //set state up
        super(props);                   //run state

        //how we create properties
        this.textIwant = props.textIwant;
        //how we create state
        this.state={
            number:0
        };

        this.addNumberWhenPressed=this.addNumberWhenPressed.bind(this);
    }

    componentDidUpdate(){    //any state changed, run the function inside.
        console.log(this.state.number);
    }

    addNumberWhenPressed(){ //how we manipulate state
        const previousNumber = this.state.number;   //variable that store the current state
        this.setState({
            number:previousNumber+1
        });
    }
    render(){                           
        return( 
            <Text onPress={this.addNumberWhenPressed}>{this.textIwant}</Text>
        );
    }
}
export default Header;